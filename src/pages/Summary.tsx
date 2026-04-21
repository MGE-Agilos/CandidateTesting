import { Printer } from 'lucide-react'
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

export function Summary({ emails, session, businessCaseName, mode }: SummaryProps) {
  const { t } = useLang()

  const elapsed = Math.min(
    Math.floor((Date.now() - session.startedAt) / 60_000),
    session.durationMinutes
  )
  const received = emails.filter(
    (e) => e.deliverAtMinute <= (Date.now() - session.startedAt) / 60_000
  )
  const withNotes = received.filter((e) => !!session.replies[e.id])
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
      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
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
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
            {isMeeting ? t.emailsNoted : t.emailsReplied}
          </p>
          <p className="font-bold text-gray-800 mt-0.5">{withNotes.length} / {received.length}</p>
        </div>
      </div>

      {/* Content per email */}
      <h2 className="font-bold text-gray-700 mb-3">
        {isMeeting ? t.yourPreparation : t.yourAnswers}
      </h2>
      <div className="space-y-4">
        {received.map((email) => {
          const cp = session.candidatePriorities[email.id]
          return (
            <div key={email.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden print-break">
              <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-gray-800">{email.subject}</p>
                  <p className="text-sm text-gray-500">{email.from} ‹{email.fromEmail}›</p>
                </div>
                {cp && (
                  <span className={`flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded ${PRIORITY_BADGE[cp]}`}>
                    {t.candidatePriority[cp]}
                  </span>
                )}
              </div>
              <div className="px-4 py-3">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  {isMeeting ? t.yourNotes : t.yourReply}
                </p>
                {session.replies[email.id] ? (
                  <pre className="email-body text-sm text-gray-700 leading-relaxed">
                    {session.replies[email.id]}
                  </pre>
                ) : (
                  <p className="text-sm text-gray-400 italic">
                    {isMeeting ? t.noNotesGiven : t.noReplyGiven}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
