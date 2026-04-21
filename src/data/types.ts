export type Lang = 'fr' | 'nl' | 'en'

export interface LocalizedString {
  fr: string
  nl: string
  en: string
}

export interface Contact {
  name: string
  title: string
  email: string
  phone: string
  department: string
}

export interface OrgNode {
  name: string
  title: string
  members?: { name: string; title: string }[]
}

export interface Process {
  title: string
  steps: string[]
  responsible: string
  delay: string
}

export interface Supplier {
  name: string
  country: string
  products: string
  contact: string
  leadTime: string
}

export interface TopClient {
  name: string
  sector: string
  since: number
  kam: string
  annualVolume: string
  notes: string
}

export interface CompanyData {
  name: string
  tagline: string
  founded: number
  employees: number
  revenue: string
  headquarters: string
  description: string
  mission: string
  values: { title: string; description: string }[]
  segments: { name: string; share: string; description: string }[]
  keyFigures: { label: string; value: string }[]
  processes: Process[]
  contacts: Contact[]
  orgChart: {
    ceo: { name: string; title: string }
    departments: {
      name: string
      head: string
      headTitle: string
      members: { name: string; title: string }[]
    }[]
  }
  suppliers: Supplier[]
  topClients: TopClient[]
}

export interface Email {
  id: string
  from: string
  fromEmail: string
  subject: string
  body: string
  /** Minutes after session start before email appears. Use 0 for pre-loaded inbox. */
  deliverAtMinute: number
  priority: 'normal' | 'high' | 'urgent'
  category: 'client' | 'supplier' | 'internal' | 'info'
}

export interface BusinessCaseContent {
  company: CompanyData
  emails: Email[]
}

/** 'email-reply': candidate writes replies to emails (NovaChem style)
 *  'meeting-prep': candidate writes preparation notes for a face-to-face meeting */
export type CaseMode = 'email-reply' | 'meeting-prep'

export type CandidatePriority = 'urgent' | 'normal' | 'later'

export interface BusinessCase {
  id: string
  name: string
  description: LocalizedString
  durationMinutes: number
  mode: CaseMode
  candidateContext?: LocalizedString
  content: {
    fr: BusinessCaseContent
    nl: BusinessCaseContent
    en: BusinessCaseContent
  }
}
