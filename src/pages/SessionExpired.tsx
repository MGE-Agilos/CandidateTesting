import { AlertCircle, Printer, RotateCcw } from 'lucide-react'
import { useLang } from '../i18n/context'
import { clearSession } from '../store/session'

interface SessionExpiredProps {
  onRestart: () => void
}

export function SessionExpired({ onRestart }: SessionExpiredProps) {
  const { t } = useLang()

  function handleRestart() {
    clearSession()
    onRestart()
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden">
        <div className="bg-red-600 px-6 py-5 text-white flex items-center gap-3">
          <AlertCircle size={28} />
          <h1 className="text-xl font-bold">{t.sessionOver}</h1>
        </div>
        <div className="px-6 py-5">
          <p className="text-gray-700 mb-6">{t.sessionOverMsg}</p>
          <div className="flex gap-3">
            <button
              onClick={() => window.print()}
              className="flex-1 flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2.5 rounded-xl transition-colors"
            >
              <Printer size={16} />
              {t.printSummary}
            </button>
            <button
              onClick={handleRestart}
              className="flex-1 flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-semibold py-2.5 rounded-xl transition-colors"
            >
              <RotateCcw size={16} />
              Nouvelle session
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
