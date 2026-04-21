import { useEffect, useState } from 'react'
import { Clock } from 'lucide-react'
import { useLang } from '../i18n/context'

interface TimerProps {
  startedAt: number
  durationMinutes: number
  onExpired?: () => void
}

export function Timer({ startedAt, durationMinutes, onExpired }: TimerProps) {
  const { t } = useLang()
  const [remaining, setRemaining] = useState(0)
  const [expired, setExpired] = useState(false)

  useEffect(() => {
    const tick = () => {
      const elapsed = (Date.now() - startedAt) / 1000
      const total = durationMinutes * 60
      const rem = Math.max(0, total - elapsed)
      setRemaining(rem)
      if (rem === 0 && !expired) {
        setExpired(true)
        onExpired?.()
      }
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [startedAt, durationMinutes, expired, onExpired])

  const mins = Math.floor(remaining / 60)
  const secs = Math.floor(remaining % 60)
  const pct = Math.max(0, (remaining / (durationMinutes * 60)) * 100)

  const colorClass =
    pct > 50 ? 'text-green-700' : pct > 20 ? 'text-amber-600' : 'text-red-600'
  const bgClass =
    pct > 50 ? 'bg-green-500' : pct > 20 ? 'bg-amber-500' : 'bg-red-500'

  if (expired) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 bg-red-100 border border-red-300 rounded-lg">
        <Clock size={16} className="text-red-600" />
        <span className="text-sm font-semibold text-red-700">{t.sessionEnded}</span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg shadow-sm">
      <Clock size={16} className={colorClass} />
      <div>
        <div className={`text-sm font-mono font-bold ${colorClass}`}>
          {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
        </div>
        <div className="w-20 h-1 bg-gray-200 rounded-full mt-0.5">
          <div
            className={`h-1 rounded-full transition-all ${bgClass}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  )
}
