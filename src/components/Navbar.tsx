import { useEffect, useState } from 'react'
import type { Copy, Language } from '../content'
import { Brand } from './Brand'

type Props = {
  copy: Copy
  language: Language
  onLanguageChange?: (language: Language) => void
  homeHref?: string
}

const links = [
  { href: '#services', label: 'navServices' },
  { href: '#about', label: 'navAbout' },
  { href: '#process', label: 'navProcess' },
  { href: '#projects', label: 'navWork' },
  { href: '#contact', label: 'navContact' },
] as const

export function Navbar({ copy, language, onLanguageChange, homeHref = '' }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onEscape)
    return () => document.removeEventListener('keydown', onEscape)
  }, [menuOpen])

  const changeLanguage = (next: Language) => {
    onLanguageChange?.(next)
    setMenuOpen(false)
  }

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="top">
      <div className="page-container nav-inner">
        <Brand href={`${homeHref}#top`} onClick={() => setMenuOpen(false)} />
        <nav className={`nav-links${menuOpen ? ' open' : ''}`} id="site-nav" aria-label={language === 'en' ? 'Main navigation' : 'Navegación principal'}>
          {links.map(({ href, label }) => (
            <a key={href} href={`${homeHref}${href}`} onClick={() => setMenuOpen(false)}>{copy[label]}</a>
          ))}
        </nav>
        <div className="nav-actions">
          {onLanguageChange && <div className="lang" role="group" aria-label="Language / Idioma">
            <button type="button" className={language === 'es' ? 'active' : ''} aria-pressed={language === 'es'} onClick={() => changeLanguage('es')}>ES</button>
            <span aria-hidden="true">/</span>
            <button type="button" className={language === 'en' ? 'active' : ''} aria-pressed={language === 'en'} onClick={() => changeLanguage('en')}>EN</button>
          </div>}
          <a className="button button-dark nav-cta" href={`${homeHref}#contact`}>{copy.navCta}</a>
          <button className="menu-toggle" type="button" aria-controls="site-nav" aria-expanded={menuOpen} aria-label={menuOpen ? (language === 'en' ? 'Close menu' : 'Cerrar menú') : (language === 'en' ? 'Open menu' : 'Abrir menú')} onClick={() => setMenuOpen(open => !open)}><span /></button>
        </div>
      </div>
    </header>
  )
}
