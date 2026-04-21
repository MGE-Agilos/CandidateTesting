import type { BusinessCase } from '../../types'
import { bmuNl } from './nl'
import { bmuFr } from './fr'
import { bmuEn } from './en'

export const bmu: BusinessCase = {
  id: 'bmu',
  name: 'BMU – Brabantse Melk Unie',
  description: {
    fr: 'Industrie laitière – Prise de poste comme chef d\'équipe UHT (préparation entretien)',
    nl: 'Zuivelindustrie – Indiensttreding als ploegleider UHT (voorbereiding gesprek)',
    en: 'Dairy industry – Starting as UHT Team Leader (meeting preparation)',
  },
  durationMinutes: 90,
  mode: 'meeting-prep',
  candidateContext: {
    fr: 'Vous venez d\'être nommé(e) chef d\'équipe de l\'Équipe A, département UHT, usine BMU Aalter. Dans 90 minutes, vous aurez votre premier entretien avec le Plant Manager (Sasha Davids). Préparez votre position sur chaque sujet de votre boîte mail.',
    nl: 'U bent zojuist aangesteld als ploegleider van Ploeg A, afdeling UHT, vestiging BMU Aalter. Binnen 90 minuten heeft u uw eerste gesprek met de bedrijfsleider (Sasha Davids). Bereid uw standpunt voor op elk onderwerp in uw mailbox.',
    en: 'You have just been appointed Team Leader of Team A, UHT department, BMU Aalter plant. In 90 minutes you will have your first meeting with the Plant Manager (Sasha Davids). Prepare your position on each topic in your inbox.',
  },
  content: {
    fr: bmuFr,
    nl: bmuNl,
    en: bmuEn,
  },
}
