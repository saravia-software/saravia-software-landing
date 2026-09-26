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

function App() {
  const [language, setLanguage] = useState<Language>('es')
  const copy = translations[language]

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        if (localStorage.getItem('saravia-language') === 'en') setLanguage('en')
      } catch {
        // Storage can be disabled in private browsing.
      }
    }, 0)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

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
      <Navbar copy={copy} language={language} onLanguageChange={changeLanguage} />
      <main>
        <Hero copy={copy} />
        <Intro copy={copy} />
        <Services copy={copy} />
        <Capabilities copy={copy} />
        <Process copy={copy} />
        <Projects copy={copy} />
        <AISection copy={copy} />
        <About copy={copy} />
        <Benefits copy={copy} />
        <Contact copy={copy} />
      </main>
      <Footer copy={copy} />
    </>
  )
}

export default App
