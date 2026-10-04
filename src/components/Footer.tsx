import type { Copy } from '../content'
import { Brand } from './Brand'
import { INSTAGRAM_URL } from '../config'

type Props = { copy: Copy; homeHref?: string }

export function Footer({ copy, homeHref = '' }: Props) {
  return (
    <footer className="footer">
      <div className="page-container">
        <div className="footer-main">
          <Brand href={`${homeHref}#top`} />
          <div className="footer-links">
            <div>
              <h3>{copy.footerExplore}</h3>
              <a href={`${homeHref}#services`}>{copy.navServices}</a>
              <a href={`${homeHref}#about`}>{copy.navAbout}</a>
              <a href={`${homeHref}#projects`}>{copy.navWork}</a>
              <a href={`${homeHref}#contact`}>{copy.navContact}</a>
            </div>
            <div>
              <h3>{copy.footerSocial}</h3>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">@saraviasoftware</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Saravia Software</span>
          <nav className="footer-legal" aria-label={copy.footerLegal}>
            <a href="/privacy">{copy.footerPrivacy}</a>
            <a href="/terms">{copy.footerTerms}</a>
            <a href="/data-deletion">{copy.footerDataDeletion}</a>
          </nav>
          <span>{copy.footerLine}</span>
        </div>
      </div>
    </footer>
  )
}
