import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Play, Globe } from 'lucide-react'
import type { Lang } from '../data/types'
import { businessCases } from '../data/businessCases'
import { translations } from '../i18n/translations'
import type { SessionData } from '../store/session'
import { saveSession } from '../store/session'

const LANGUAGES: { code: Lang; label: string; flag: string }[] = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'nl', label: 'Nederlands', flag: '🇧🇪' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
]

interface StartProps {
  onStart: (session: SessionData) => void
}

export function Start({ onStart }: StartProps) {
  const navigate = useNavigate()
  const [lang, setLang] = useState<Lang>('fr')
  const [caseId, setCaseId] = useState(businessCases[0]?.id ?? '')
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const t = translations[lang]
  const selectedCase = businessCases.find((bc) => bc.id === caseId)

  const instructionText =
    selectedCase?.mode === 'meeting-prep'
      ? t.instructionTextMeeting
      : t.instructionText

  function handleStart() {
    if (!name.trim()) {
      setError(t.nameRequired)
      return
    }
    if (!selectedCase) return

    const session: SessionData = {
      candidateName: name.trim(),
      businessCaseId: caseId,
      lang,
      startedAt: Date.now(),
      durationMinutes: selectedCase.durationMinutes,
      readEmails: [],
      replies: {},
      candidatePriorities: {},
    }
    saveSession(session)
    onStart(session)
    navigate('/company')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
        {/* Header */}
        <div className="bg-brand-700 px-8 py-6 text-white">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="font-bold text-xl">A</span>
            </div>
            <h1 className="text-2xl font-bold">{t.appTitle}</h1>
          </div>
          <p className="text-brand-200 text-sm">powered by Beople</p>
        </div>

        <div className="px-8 py-6 space-y-5">
          {/* Language selector */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Globe size={14} className="inline mr-1" />
              {t.selectLanguage}
            </label>
            <div className="flex gap-2">
              {LANGUAGES.map(({ code, label, flag }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                    lang === code
                      ? 'border-brand-600 bg-brand-50 text-brand-700'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <span>{flag}</span>
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Business case selector */}
          {businessCases.length > 1 && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t.selectCase}
              </label>
              <div className="space-y-2">
                {businessCases.map((bc) => (
                  <button
                    key={bc.id}
                    onClick={() => setCaseId(bc.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                      caseId === bc.id
                        ? 'border-brand-600 bg-brand-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold text-gray-800">{bc.name}</div>
                    <div className="text-sm text-gray-500">{bc.description[lang]}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t.yourName}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => { setName(e.target.value); setError('') }}
              onKeyDown={(e) => e.key === 'Enter' && handleStart()}
              placeholder={t.namePlaceholder}
              className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-brand-500 text-gray-900"
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
          </div>

          {/* Role context */}
          {selectedCase?.candidateContext && (
            <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3">
              <p className="text-sm font-semibold text-blue-800 mb-1">{t.yourRole}</p>
              <p className="text-sm text-blue-700">{selectedCase.candidateContext[lang]}</p>
            </div>
          )}

          {/* Instructions */}
          {selectedCase && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
              <p className="text-sm font-semibold text-amber-800 mb-1">{t.instructions}</p>
              <p className="text-sm text-amber-700">
                {instructionText.replace('{duration}', String(selectedCase.durationMinutes))}
              </p>
            </div>
          )}

          {/* Start button */}
          <button
            onClick={handleStart}
            className="w-full flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            <Play size={18} />
            {t.startSession}
          </button>
        </div>
      </div>
    </div>
  )
}
