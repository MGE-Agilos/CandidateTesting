import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LangProvider } from './i18n/context'
import { loadSession, type SessionData } from './store/session'
import { getBusinessCase } from './data/businessCases'
import { Start } from './pages/Start'
import { Company } from './pages/Company'
import { Inbox } from './pages/Inbox'
import { Summary } from './pages/Summary'
import { SessionExpired } from './pages/SessionExpired'
import { Navbar } from './components/Navbar'

export default function App() {
  const [session, setSession] = useState<SessionData | null>(() => loadSession())
  const [expired, setExpired] = useState(false)

  useEffect(() => {
    if (session) {
      const elapsed = (Date.now() - session.startedAt) / 60_000
      if (elapsed >= session.durationMinutes) setExpired(true)
    }
  }, [session])

  if (!session) {
    return (
      <HashRouter>
        <Routes>
          <Route path="*" element={<Start onStart={setSession} />} />
        </Routes>
      </HashRouter>
    )
  }

  const bc = getBusinessCase(session.businessCaseId)
  if (!bc) {
    return <Start onStart={setSession} />
  }

  const content = bc.content[session.lang]
  const emails = content.emails

  const visibleEmails = emails.filter(
    (e) => e.deliverAtMinute <= (Date.now() - session.startedAt) / 60_000
  )
  const unreadCount = visibleEmails.filter(
    (e) => !session.readEmails.includes(e.id)
  ).length

  if (expired) {
    return (
      <LangProvider lang={session.lang}>
        <HashRouter>
          <div>
            <Summary
              emails={emails}
              session={session}
              businessCaseName={bc.name}
              mode={bc.mode}
            />
            <div className="no-print fixed bottom-4 right-4">
              <SessionExpired onRestart={() => { setSession(null); setExpired(false) }} />
            </div>
          </div>
        </HashRouter>
      </LangProvider>
    )
  }

  return (
    <LangProvider lang={session.lang}>
      <HashRouter>
        <Navbar
          session={session}
          unreadCount={unreadCount}
          onExpired={() => setExpired(true)}
        />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/company" replace />} />
            <Route path="/company/*" element={<Company company={content.company} />} />
            <Route
              path="/inbox"
              element={
                <Inbox
                  emails={emails}
                  session={session}
                  onSessionChange={setSession}
                  mode={bc.mode}
                />
              }
            />
            <Route
              path="/summary"
              element={
                <Summary
                  emails={emails}
                  session={session}
                  businessCaseName={bc.name}
                  mode={bc.mode}
                />
              }
            />
            <Route path="*" element={<Navigate to="/company" replace />} />
          </Routes>
        </main>
      </HashRouter>
    </LangProvider>
  )
}
