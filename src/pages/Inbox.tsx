import { useState, useEffect } from 'react'
import {
  Mail, MailOpen, AlertCircle, AlertTriangle, ChevronRight,
  MessageSquare, Check, Flag, Send, StickyNote, Clock, Pencil,
} from 'lucide-react'
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

function formatTime(ts: number): string {
  const d = new Date(ts)
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

export function Inbox({ emails, session, onSessionChange, mode }: InboxProps) {
  const { t } = useLang()
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [draftReplies, setDraftReplies] = useState<Record<string, string>>({})
  const [noteText, setNoteText] = useState<Record<string, string>>({})
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null)
  const [globalNoteDraft, setGlobalNoteDraft] = useState(session.globalNote ?? '')
  const [editingGlobalNote, setEditingGlobalNote] = useState(false)
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

  const isMeeting = mode === 'meeting-prep'

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
    if (session.notes[email.id] !== undefined && noteText[email.id] === undefined) {
      setNoteText((prev) => ({ ...prev, [email.id]: session.notes[email.id] }))
    }
  }

  function handleSendReply(emailId: string) {
    const text = draftReplies[emailId]?.trim()
    if (!text) return
    const existing = session.replies[emailId] ?? []
    const existingTimes = session.repliedAt[emailId] ?? []
    const updated = {
      ...session,
      replies: { ...session.replies, [emailId]: [...existing, text] },
      repliedAt: { ...session.repliedAt, [emailId]: [...existingTimes, Date.now()] },
    }
    onSessionChange(updated)
    saveSession(updated)
    setDraftReplies((prev) => ({ ...prev, [emailId]: '' }))
  }

  function handleSaveNote(emailId: string) {
    const text = noteText[emailId] ?? ''
    const updated = { ...session, notes: { ...session.notes, [emailId]: text } }
    onSessionChange(updated)
    saveSession(updated)
    setEditingNoteId(null)
  }

  function handleSaveGlobalNote() {
    const updated = { ...session, globalNote: globalNoteDraft }
    onSessionChange(updated)
    saveSession(updated)
    setEditingGlobalNote(false)
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
  const hasContent = (id: string) => (session.replies[id]?.length ?? 0) > 0 || !!session.notes[id]
  const isUnread = (id: string) => !session.readEmails.includes(id)

  if (visibleEmails.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <Mail size={48} className="mx-auto text-gray-300 mb-4" />
        <p className="text-gray-500">{isMeeting ? t.noEmailsMeeting : t.noEmails}</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex h-[calc(100vh-120px)] gap-4">

        {/* Left column: email list + global note */}
        <div className="w-80 flex-shrink-0 flex flex-col gap-2">

          {/* Email list */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col flex-1 min-h-0">
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

          {/* Global note */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden flex-shrink-0">
            <div className="px-3 py-2 border-b border-gray-100 bg-amber-50 flex items-center gap-1.5">
              <StickyNote size={12} className="text-amber-600" />
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">{t.globalNote}</span>
            </div>
            <div className="p-3">
              {session.globalNote && !editingGlobalNote ? (
                <>
                  <pre className="email-body text-xs text-gray-700 leading-relaxed mb-2 max-h-28 overflow-y-auto">
                    {session.globalNote}
                  </pre>
                  <button
                    onClick={() => { setGlobalNoteDraft(session.globalNote); setEditingGlobalNote(true) }}
                    className="flex items-center gap-1 text-xs text-amber-700 hover:underline"
                  >
                    <Pencil size={11} /> {t.editNote}
                  </button>
                </>
              ) : editingGlobalNote ? (
                <>
                  <textarea
                    rows={4}
                    value={globalNoteDraft}
                    onChange={(e) => setGlobalNoteDraft(e.target.value)}
                    placeholder={t.globalNotePlaceholder}
                    className="w-full px-2 py-2 text-xs border border-gray-200 rounded focus:outline-none focus:border-amber-400 resize-none"
                  />
                  <div className="flex gap-2 mt-1.5">
                    <button
                      onClick={handleSaveGlobalNote}
                      className="flex items-center gap-1 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold px-2.5 py-1.5 rounded transition-colors"
                    >
                      <Check size={11} /> {t.saveGlobalNote}
                    </button>
                    <button
                      onClick={() => setEditingGlobalNote(false)}
                      className="text-xs text-gray-500 hover:text-gray-700"
                    >
                      {t.cancel}
                    </button>
                  </div>
                </>
              ) : (
                <button
                  onClick={() => setEditingGlobalNote(true)}
                  className="w-full flex items-center gap-1.5 text-xs text-amber-600 border border-amber-200 bg-amber-50 hover:bg-amber-100 px-2 py-1.5 rounded transition-colors"
                >
                  <Pencil size={11} /> {t.globalNotePlaceholder}
                </button>
              )}
            </div>
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
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MailOpen size={14} />
                      <span className="font-medium text-gray-700">{selected.from}</span>
                      <span className="text-gray-400">‹{selected.fromEmail}›</span>
                    </div>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock size={11} />
                      {formatTime(session.startedAt + selected.deliverAtMinute * 60_000)}
                    </span>
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

              {/* Body + reply + note */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
                <pre className="email-body text-sm text-gray-800 leading-relaxed">{selected.body}</pre>

                {/* Reply section */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                    <MessageSquare size={16} className="text-brand-600" />
                    {t.replyTo} {selected.from}
                  </div>

                  {/* Existing replies (immutable) */}
                  {(session.replies[selected.id] ?? []).map((reply, idx) => {
                    const sentAt = session.repliedAt[selected.id]?.[idx]
                    return (
                      <div key={idx} className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 mb-3">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="flex items-center gap-1.5 text-green-700 text-xs font-semibold">
                            <Check size={12} /> {t.replyLabel} {idx + 1}
                          </span>
                          {sentAt && (
                            <span className="text-xs text-gray-400 flex items-center gap-1">
                              <Clock size={10} /> {formatTime(sentAt)}
                            </span>
                          )}
                        </div>
                        <pre className="email-body text-sm text-gray-700 leading-relaxed">{reply}</pre>
                      </div>
                    )
                  })}

                  {/* New reply textarea */}
                  <textarea
                    rows={5}
                    value={draftReplies[selected.id] ?? ''}
                    onChange={(e) => setDraftReplies((prev) => ({ ...prev, [selected.id]: e.target.value }))}
                    placeholder={t.replyPlaceholder}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-400 text-sm resize-y"
                  />
                  <button
                    onClick={() => handleSendReply(selected.id)}
                    disabled={!(draftReplies[selected.id]?.trim())}
                    className="mt-2 flex items-center gap-2 bg-brand-700 hover:bg-brand-800 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    <Send size={14} />
                    {t.addReply}
                  </button>
                </div>

                {/* Note section */}
                <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                        <StickyNote size={16} className="text-amber-500" />
                        {t.yourNote}
                      </div>
                      {session.notes[selected.id] && editingNoteId !== selected.id && (
                        <button
                          onClick={() => {
                            setNoteText((prev) => ({ ...prev, [selected.id]: session.notes[selected.id] }))
                            setEditingNoteId(selected.id)
                          }}
                          className="flex items-center gap-1 text-xs text-amber-700 hover:underline"
                        >
                          <Pencil size={11} /> {t.editNote}
                        </button>
                      )}
                    </div>

                    {session.notes[selected.id] && editingNoteId !== selected.id ? (
                      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
                        <div className="flex items-center gap-1.5 text-amber-700 text-xs font-semibold mb-2">
                          <Check size={12} /> {t.noteSaved}
                        </div>
                        <pre className="email-body text-sm text-gray-700 leading-relaxed">
                          {session.notes[selected.id]}
                        </pre>
                      </div>
                    ) : (
                      <>
                        <textarea
                          rows={4}
                          value={noteText[selected.id] ?? ''}
                          onChange={(e) => setNoteText((prev) => ({ ...prev, [selected.id]: e.target.value }))}
                          placeholder={t.notesPlaceholder}
                          className="w-full px-4 py-3 border-2 border-amber-100 bg-amber-50/30 rounded-lg focus:outline-none focus:border-amber-400 text-sm resize-y"
                        />
                        <button
                          onClick={() => handleSaveNote(selected.id)}
                          className="mt-2 flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                        >
                          <Check size={15} />
                          {t.saveNote}
                        </button>
                      </>
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
