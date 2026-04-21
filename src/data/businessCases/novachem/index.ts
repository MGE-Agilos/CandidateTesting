import type { BusinessCase } from '../../types'
import { novachemFr } from './fr'
import { novachemNl } from './nl'
import { novachemEn } from './en'

export const novachem: BusinessCase = {
  id: 'novachem',
  name: 'NovaChem Solutions',
  description: {
    fr: 'Distribution de produits chimiques industriels – Gestion commerciale et logistique',
    nl: 'Distributie van industriële chemische producten – Commercieel en logistiek beheer',
    en: 'Industrial chemical distribution – Commercial and logistics management',
  },
  durationMinutes: 90,
  mode: 'email-reply',
  candidateContext: {
    fr: 'Vous êtes Account Manager chez NovaChem Solutions. Votre responsable est en réunion toute la matinée. Gérez les emails entrants en autonomie.',
    nl: 'U bent Account Manager bij NovaChem Solutions. Uw leidinggevende is de hele ochtend in vergadering. Behandel de inkomende e-mails zelfstandig.',
    en: 'You are an Account Manager at NovaChem Solutions. Your manager is in meetings all morning. Handle incoming emails independently.',
  },
  content: {
    fr: novachemFr,
    nl: novachemNl,
    en: novachemEn,
  },
}
