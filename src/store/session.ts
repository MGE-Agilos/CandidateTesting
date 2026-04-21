import type { Lang, CandidatePriority } from '../data/types'

export interface SessionData {
  candidateName: string
  businessCaseId: string
  lang: Lang
  startedAt: number
  durationMinutes: number
  readEmails: string[]
  replies: Record<string, string>
  candidatePriorities: Record<string, CandidatePriority>
}

const SESSION_KEY = 'nc_assessment_session'

export function saveSession(data: SessionData): void {
  localStorage.setItem(SESSION_KEY, JSON.stringify(data))
}

export function loadSession(): SessionData | null {
  const raw = localStorage.getItem(SESSION_KEY)
  if (!raw) return null
  try {
    const s = JSON.parse(raw) as Partial<SessionData>
    return {
      candidateName: s.candidateName ?? '',
      businessCaseId: s.businessCaseId ?? '',
      lang: s.lang ?? 'fr',
      startedAt: s.startedAt ?? Date.now(),
      durationMinutes: s.durationMinutes ?? 90,
      readEmails: s.readEmails ?? [],
      replies: s.replies ?? {},
      candidatePriorities: s.candidatePriorities ?? {},
    }
  } catch {
    return null
  }
}

export function clearSession(): void {
  localStorage.removeItem(SESSION_KEY)
}
