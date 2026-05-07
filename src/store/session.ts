import type { Lang, CandidatePriority } from '../data/types'

export interface SessionData {
  candidateName: string
  businessCaseId: string
  lang: Lang
  startedAt: number
  durationMinutes: number
  readEmails: string[]
  replies: Record<string, string[]>
  repliedAt: Record<string, number[]>
  notes: Record<string, string>
  globalNote: string
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
    const s = JSON.parse(raw) as Record<string, unknown>
    // migrate: replies was Record<string, string>, now Record<string, string[]>
    const rawReplies = (s.replies as Record<string, unknown>) ?? {}
    const replies: Record<string, string[]> = {}
    for (const [k, v] of Object.entries(rawReplies)) {
      replies[k] = Array.isArray(v) ? (v as string[]) : typeof v === 'string' ? [v] : []
    }
    return {
      candidateName: (s.candidateName as string) ?? '',
      businessCaseId: (s.businessCaseId as string) ?? '',
      lang: (s.lang as Lang) ?? 'fr',
      startedAt: (s.startedAt as number) ?? Date.now(),
      durationMinutes: (s.durationMinutes as number) ?? 90,
      readEmails: (s.readEmails as string[]) ?? [],
      replies,
      repliedAt: (s.repliedAt as Record<string, number[]>) ?? {},
      notes: (s.notes as Record<string, string>) ?? {},
      globalNote: (s.globalNote as string) ?? '',
      candidatePriorities: (s.candidatePriorities as Record<string, CandidatePriority>) ?? {},
    }
  } catch {
    return null
  }
}

export function clearSession(): void {
  localStorage.removeItem(SESSION_KEY)
}
