import { Link, useLocation } from 'react-router-dom'
import { Building2, Inbox, FileText } from 'lucide-react'
import { useLang } from '../i18n/context'
import { Timer } from './Timer'
import type { SessionData } from '../store/session'

interface NavbarProps {
  session: SessionData
  unreadCount: number
  onExpired: () => void
}

export function Navbar({ session, unreadCount, onExpired }: NavbarProps) {
  const { t } = useLang()
  const loc = useLocation()

  const navItems = [
    { path: '/company', label: t.companyInfo, icon: Building2 },
    { path: '/inbox', label: t.inbox, icon: Inbox },
    { path: '/summary', label: 'Résumé / Summary', icon: FileText },
  ]

  return (
    <header className="no-print sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-4 h-14">
        <div className="flex items-center gap-2 mr-4">
          <div className="w-7 h-7 bg-brand-700 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className="font-semibold text-gray-800 text-sm hidden sm:block">
            {session.candidateName}
          </span>
        </div>

        <nav className="flex gap-1 flex-1">
          {navItems.map(({ path, label, icon: Icon }) => {
            const active = loc.pathname.startsWith(path)
            return (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors relative ${
                  active
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{label}</span>
                {path === '/inbox' && unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                    {unreadCount}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        <Timer
          startedAt={session.startedAt}
          durationMinutes={session.durationMinutes}
          onExpired={onExpired}
        />
      </div>
    </header>
  )
}
