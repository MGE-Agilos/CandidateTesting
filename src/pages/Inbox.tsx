import { useState, useEffect } from 'react'
import { Mail, MailOpen, AlertCircle, AlertTriangle, ChevronRight, MessageSquare, Check, Flag } from 'lucide-react'
import { useLang } from '../i18n/context'
import type { Email, CaseMode, CandidatePriority } from '../data/types'
import type { SessionData } from '../store/session'
import { saveSession } from '../store/session'

interface InboxProps {
  emails: Email[]
  session: SessionData
  onSessionChange: (s: SessionData) => void
  mode: CaseMode
}

const PRIORITY_ICON = {
  urgent: AlertCircle,
  high: AlertTriangle,
  normal: Mail,
}

const PRIORITY_CLASS = {
  urgent: 'text-red-600',
  high: 'text-amber-500',
  normal: 'text-gray-400',
}

const CATEGORY_COLORS = {
  client: 'bg-blue-100 text-blue-700 border-blue-200',
  supplier: 'bg-orange-100 text-orange-700 border-orange-200',
  internal: 'bg-purple-100 text-purple-700 border-purple-200',
  info: 'bg-gray-100 text-gray-600 border-gray-200',
}

const CANDIDATE_PRIORITY_COLORS: Record<CandidatePriority, string> = {
  urgent: 'bg-red-100 text-red-700 border-red-200',
  normal: 'bg-amber-100 text-amber-700 border-amber-200',
  later: 'bg-gray-100 text-gray-500 border-gray-200',
}

export function Inbox({ emails, session, onSessionChange, mode }: InboxProps) {
  const { t } = useLang()
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [draftText, setDraftText] = useState<Record<string, string>>({})
  const [editingId, setEditingId] = useState<string | null>(null)
  const [visibleEmails, setVisibleEmails] = useState<Email[]>([])

  useEffect(() => {
    const update = () => {
      const elapsed = (Date.now() - session.startedAt) / 60_000
      setVisibleEmails(emails.filter((e) => e.deliverAtMinute <= elapsed))
    }
    update()
    const id = setInterval(update, 10_000)
    return () => clearInterval(id)
  }, [emails, session.startedAt])

  const sorted = [...visibleEmails].sort((a, b) => {
    const po = { urgent: 0, high: 1, normal: 2 }
    return po[a.priority] - po[b.priority]
  })

  function markRead(emailId: string) {
    if (session.readEmails.includes(emailId)) return
    const updated = { ...session, readEmails: [...session.readEmails, emailId] }
    onSessionChange(updated)
    saveSession(updated)
  }

  function handleSelect(email: Email) {
    setSelectedId(email.id)
    markRead(email.id)
    if (session.replies[email.id] && !draftText[email.id]) {
      setDraftText((prev) => ({ ...prev, [email.id]: session.replies[email.id] }))
    }
  }

  function handleSave(emailId: string) {
    const text = draftText[emailId] ?? ''
    const updated = { ...session, replies: { ...session.replies, [emailId]: text } }
    onSessionChange(updated)
    saveSession(updated)
    setEditingId(null)
  }

  function handlePriority(emailId: string, p: CandidatePriority) {
    const updated = {
      ...session,
      candidatePriorities: { ...session.candidatePriorities, [emailId]: p },
    }
    onSessionChange(updated)
    saveSession(updated)
  }

  const selected = visibleEmails.find((e) => e.id === selectedId)
  const hasContent = (id: string) => !!session.replies[id]
  const isUnread = (id: string) => !session.readEmails.includes(id)

  const isMeeting = mode === 'meeting-prep'
  const savedLabel = isMeeting ? t.notesSaved : t.replySaved
  const saveBtn = isMeeting ? t.saveNotes : t.sendReply
  const notesLabel = isMeeting ? t.yourNotes : t.yourReply
  const placeholder = isMeeting ? t.notesPlaceholder : t.replyPlaceholder
  const noEmailsMsg = isMeeting ? t.noEmailsMeeting : t.noEmails

  if (visibleEmails.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <Mail size={48} className="mx-auto text-gray-300 mb-4" />
        <p className="text-gray-500">{noEmailsMsg}</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex h-[calc(100vh-120px)] gap-4">
        {/* Email list */}
        <div className="w-80 flex-shrink-0 bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col">
          <div className="px-3 py-2 border-b border-gray-100 bg-gray-50">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              {t.inbox} ({sorted.length})
            </span>
          </div>
          <div className="overflow-y-auto flex-1">
            {sorted.map((email) => {
              const PrioIcon = PRIORITY_ICON[email.priority]
              const unread = isUnread(email.id)
              const done = hasContent(email.id)
              const cp = session.candidatePriorities[email.id]
              return (
                <button
                  key={email.id}
                  onClick={() => handleSelect(email)}
                  className={`w-full text-left px-3 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    selectedId === email.id ? 'bg-brand-50 border-l-2 border-l-brand-500' : ''
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <PrioIcon size={14} className={`mt-0.5 flex-shrink-0 ${PRIORITY_CLASS[email.priority]}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className={`text-xs truncate ${unread ? 'font-bold text-gray-900' : 'text-gray-600'}`}>
                          {email.from}
                        </span>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          {done && <Check size={11} className="text-green-500" />}
                          {unread && <span className="w-2 h-2 bg-brand-500 rounded-full" />}
                        </div>
                      </div>
                      <p className={`text-xs truncate ${unread ? 'font-semibold text-gray-800' : 'text-gray-500'}`}>
                        {email.subject}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className={`px-1.5 py-0.5 rounded border text-[10px] font-medium ${CATEGORY_COLORS[email.category]}`}>
                          {t.category[email.category]}
                        </span>
                        {cp && (
                          <span className={`px-1.5 py-0.5 rounded border text-[10px] font-medium ${CANDIDATE_PRIORITY_COLORS[cp]}`}>
                            {t.candidatePriority[cp]}
                          </span>
                        )}
                      </div>
                    </div>
                    <ChevronRight size={12} className="text-gray-300 mt-1 flex-shrink-0" />
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Email detail */}
        <div className="flex-1 bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col">
          {selected ? (
            <>
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-100">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="font-bold text-gray-900 text-lg leading-tight">{selected.subject}</h2>
                  <div className="flex gap-2 flex-shrink-0">
                    <span className={`px-2 py-0.5 rounded border text-xs font-medium ${CATEGORY_COLORS[selected.category]}`}>
                      {t.category[selected.category]}
                    </span>
                    {selected.priority !== 'normal' && (
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                        selected.priority === 'urgent' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {t.priority[selected.priority]}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <MailOpen size={14} />
                    <span className="font-medium text-gray-700">{selected.from}</span>
                    <span className="text-gray-400">‹{selected.fromEmail}›</span>
                  </div>
                  {/* Candidate priority selector */}
                  <div className="flex items-center gap-1.5">
                    <Flag size={13} className="text-gray-400" />
                    <span className="text-xs text-gray-500">{t.myPriority} :</span>
                    {(['urgent', 'normal', 'later'] as CandidatePriority[]).map((p) => (
                      <button
                        key={p}
                        onClick={() => handlePriority(selected.id, p)}
                        className={`text-xs px-2 py-0.5 rounded border font-medium transition-all ${
                          session.candidatePriorities[selected.id] === p
                            ? CANDIDATE_PRIORITY_COLORS[p]
                            : 'border-gray-200 text-gray-400 hover:border-gray-300'
                        }`}
                      >
                        {t.candidatePriority[p]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <pre className="email-body text-sm text-gray-800 leading-relaxed">{selected.body}</pre>

                {/* Notes/Reply section */}
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <MessageSquare size={16} className="text-brand-600" />
                      {isMeeting ? notesLabel : `${t.replyTo} ${selected.from}`}
                    </div>
                    {session.replies[selected.id] && editingId !== selected.id && (
                      <button
                        onClick={() => setEditingId(selected.id)}
                        className="text-xs text-brand-600 hover:underline"
                      >
                        {t.editReply}
                      </button>
                    )}
                  </div>

                  {session.replies[selected.id] && editingId !== selected.id ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3">
                      <div className="flex items-center gap-1.5 text-green-700 text-xs font-semibold mb-2">
                        <Check size={13} /> {savedLabel}
                      </div>
                      <pre className="email-body text-sm text-gray-700 leading-relaxed">
                        {session.replies[selected.id]}
                      </pre>
                    </div>
                  ) : (
                    <div>
                      <textarea
                        rows={7}
                        value={draftText[selected.id] ?? ''}
                        onChange={(e) =>
                          setDraftText((prev) => ({ ...prev, [selected.id]: e.target.value }))
                        }
                        placeholder={placeholder}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-400 text-sm resize-y"
                      />
                      <button
                        onClick={() => handleSave(selected.id)}
                        className="mt-2 flex items-center gap-2 bg-brand-700 hover:bg-brand-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                      >
                        <Check size={15} />
                        {saveBtn}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <MailOpen size={48} className="mx-auto mb-3 text-gray-200" />
                <p className="text-sm">
                  {isMeeting
                    ? 'Selecteer een bericht / Select a message'
                    : 'Sélectionnez un message / Selecteer een bericht'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
