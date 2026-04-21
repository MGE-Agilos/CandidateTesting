import { createContext, useContext, type ReactNode } from 'react'
import type { Lang } from '../data/types'
import { translations, type Translations } from './translations'

interface LangContextValue {
  lang: Lang
  t: Translations
}

const LangContext = createContext<LangContextValue>({
  lang: 'fr',
  t: translations.fr,
})

export function LangProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <LangContext.Provider value={{ lang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
