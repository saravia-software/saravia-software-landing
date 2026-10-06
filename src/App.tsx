import { useEffect, useState } from 'react'
import { translations, type Language } from './content'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Services } from './components/Services'
import { Capabilities } from './components/Capabilities'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { AISection } from './components/AISection'
import { About } from './components/About'
import { Benefits } from './components/Benefits'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useHeroEntrance } from './hooks/useHeroEntrance'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { legalPages } from './legal'
import { LegalPage } from './components/LegalPage'

function App({ pathname = '/' }: { pathname?: string }) {
  useHeroEntrance()
  useScrollReveal()
  useSmoothScroll()
  const [language, setLanguage] = useState<Language>('es')
  const legalPage = Object.hasOwn(legalPages, pathname) ? legalPages[pathname] : undefined
  const pageLanguage = legalPage ? 'es' : language
  const copy = translations[pageLanguage]
  const homeHref = legalPage ? '/' : ''

  useEffect(() => {
    if (legalPage) return
    const timer = window.setTimeout(() => {
      try {
        if (localStorage.getItem('saravia-language') === 'en') setLanguage('en')
      } catch {
        // Storage can be disabled in private browsing.
      }
    }, 0)
    return () => window.clearTimeout(timer)
  }, [legalPage])

  useEffect(() => {
    document.documentElement.lang = pageLanguage
  }, [pageLanguage])

  const changeLanguage = (next: Language) => {
    setLanguage(next)
    try {
      localStorage.setItem('saravia-language', next)
    } catch {
      // Storage can be disabled in private browsing.
    }
  }

  return (
    <>
      <svg className="absolute h-0 w-0 overflow-hidden" aria-hidden="true" focusable="false">
        <defs>
          <symbol id="mark" viewBox="0 0 64 64">
            <path d="M51 13H25c-8.5 0-13 5-13 13v4M13 51h26c8.5 0 13-5 13-13v-4" fill="none" stroke="currentColor" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
          </symbol>
          <symbol id="arrow" viewBox="0 0 20 20">
            <path d="M3 10h13m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </symbol>
        </defs>
      </svg>
      <Navbar copy={copy} language={pageLanguage} onLanguageChange={legalPage ? undefined : changeLanguage} homeHref={homeHref} />
      {legalPage ? <LegalPage page={legalPage} /> : <main>
        <Hero copy={copy} />
        <Intro copy={copy} />
        <Services copy={copy} />
        <Process copy={copy} />
        <Projects copy={copy} language={pageLanguage} />
        <AISection copy={copy} />
        <Capabilities copy={copy} />
        <About copy={copy} />
        <Benefits copy={copy} />
        <Contact copy={copy} />
      </main>}
      <Footer copy={copy} homeHref={homeHref} />
    </>
  )
}

export default App
