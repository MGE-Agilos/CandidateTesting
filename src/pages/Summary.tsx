import { useState } from 'react'
import { Printer, Check, Clock } from 'lucide-react'
import { useLang } from '../i18n/context'
import type { Email, CaseMode } from '../data/types'
import type { SessionData } from '../store/session'

interface SummaryProps {
  emails: Email[]
  session: SessionData
  businessCaseName: string
  mode: CaseMode
}

const PRIORITY_BADGE: Record<string, string> = {
  urgent: 'bg-red-100 text-red-700',
  normal: 'bg-amber-100 text-amber-700',
  later: 'bg-gray-100 text-gray-600',
}

function formatTime(ts: number): string {
  const d = new Date(ts)
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative w-9 h-5 rounded-full transition-colors ${checked ? 'bg-brand-600' : 'bg-gray-300'}`}
      >
        <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${checked ? 'translate-x-4' : 'translate-x-0.5'}`} />
      </button>
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  )
}

export function Summary({ emails, session, businessCaseName, mode }: SummaryProps) {
  const { t } = useLang()
  const [showEmailBody, setShowEmailBody] = useState(true)
  const [showReplies, setShowReplies] = useState(true)
  const [showNotes, setShowNotes] = useState(true)

  const elapsed = Math.min(
    Math.floor((Date.now() - session.startedAt) / 60_000),
    session.durationMinutes
  )
  const received = emails.filter(
    (e) => e.deliverAtMinute <= (Date.now() - session.startedAt) / 60_000
  )
  const withReplies = received.filter((e) => (session.replies[e.id]?.length ?? 0) > 0)
  const withNotes = received.filter((e) => !!session.notes[e.id])
  const isMeeting = mode === 'meeting-prep'

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="no-print flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{t.sessionSummary}</h1>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          <Printer size={16} />
          {t.printSummary}
        </button>
      </div>

      {/* Meta */}
      <div className={`bg-white border border-gray-200 rounded-xl p-5 mb-4 grid gap-4 ${isMeeting ? 'grid-cols-2 sm:grid-cols-5' : 'grid-cols-2 sm:grid-cols-4'}`}>
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{t.candidate}</p>
          <p className="font-bold text-gray-800 mt-0.5">{session.candidateName}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{t.businessCase}</p>
          <p className="font-bold text-gray-800 mt-0.5">{businessCaseName}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{t.duration}</p>
          <p className="font-bold text-gray-800 mt-0.5">{elapsed} {t.minutes}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{t.emailsReplied}</p>
          <p className="font-bold text-gray-800 mt-0.5">{withReplies.length} / {received.length}</p>
        </div>
        {isMeeting && (
          <div>
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{t.emailsNoted}</p>
            <p className="font-bold text-gray-800 mt-0.5">{withNotes.length} / {received.length}</p>
          </div>
        )}
      </div>

      {/* Toggles */}
      <div className="no-print bg-white border border-gray-200 rounded-xl px-5 py-3 mb-4 flex gap-6 flex-wrap items-center">
        <Toggle label={t.showEmailContent} checked={showEmailBody} onChange={setShowEmailBody} />
        <Toggle label={t.showReplies} checked={showReplies} onChange={setShowReplies} />
        <Toggle label={t.showNotes} checked={showNotes} onChange={setShowNotes} />
      </div>

      {/* Global note */}
      {isMeeting && session.globalNote && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
          <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-2">{t.globalNote}</p>
          <pre className="email-body text-sm text-gray-700 leading-relaxed">{session.globalNote}</pre>
        </div>
      )}

      {/* Per-email cards */}
      <h2 className="font-bold text-gray-700 mb-3">
        {isMeeting ? t.yourPreparation : t.yourAnswers}
      </h2>
      <div className="space-y-4">
        {received.map((email) => {
          const cp = session.candidatePriorities[email.id]
          const replies = session.replies[email.id] ?? []
          const replyTimes = session.repliedAt[email.id] ?? []
          const note = session.notes[email.id]
          const arrivalTime = formatTime(session.startedAt + email.deliverAtMinute * 60_000)

          return (
            <div key={email.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden print-break">
              {/* Card header */}
              <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-gray-800">{email.subject}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-0.5">
                    <span>{email.from} ‹{email.fromEmail}›</span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock size={10} /> {arrivalTime}
                    </span>
                  </div>
                </div>
                {cp && (
                  <span className={`flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded ${PRIORITY_BADGE[cp]}`}>
                    {t.candidatePriority[cp]}
                  </span>
                )}
              </div>

              <div className="divide-y divide-gray-100">
                {/* Email body */}
                {showEmailBody && (
                  <div className="px-4 py-3 bg-gray-50/40">
                    <pre className="email-body text-sm text-gray-600 leading-relaxed">{email.body}</pre>
                  </div>
                )}

                {/* Replies */}
                {showReplies && (
                  <div className="px-4 py-3">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">{t.yourReply}</p>
                    {replies.length > 0 ? (
                      <div className="space-y-2">
                        {replies.map((reply, idx) => (
                          <div key={idx}>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-green-700 font-semibold flex items-center gap-1">
                                <Check size={11} /> {t.replyLabel} {idx + 1}
                              </span>
                              {replyTimes[idx] && (
                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                  <Clock size={10} /> {formatTime(replyTimes[idx])}
                                </span>
                              )}
                            </div>
                            <pre className="email-body text-sm text-gray-700 leading-relaxed">{reply}</pre>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-400 italic">{t.noReplyGiven}</p>
                    )}
                  </div>
                )}

                {/* Notes */}
                {showNotes && (
                  <div className="px-4 py-3">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">{t.yourNote}</p>
                    {note ? (
                      <pre className="email-body text-sm text-gray-700 leading-relaxed">{note}</pre>
                    ) : (
                      <p className="text-sm text-gray-400 italic">{t.noNotesGiven}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
