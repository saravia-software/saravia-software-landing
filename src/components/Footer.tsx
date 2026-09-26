import type { Copy } from '../content'
import { Brand } from './Brand'
import { INSTAGRAM_URL } from '../config'

type Props = { copy: Copy }

export function Footer({ copy }: Props) {
  return (
    <footer className="footer">
      <div className="page-container">
        <div className="footer-main">
          <Brand />
          <div className="footer-links">
            <div>
              <h3>{copy.footerExplore}</h3>
              <a href="#services">{copy.navServices}</a>
              <a href="#about">{copy.navAbout}</a>
              <a href="#projects">{copy.navWork}</a>
              <a href="#contact">{copy.navContact}</a>
            </div>
            <div>
              <h3>{copy.footerSocial}</h3>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Saravia Software</span>
          <span>{copy.footerLine}</span>
        </div>
      </div>
    </footer>
  )
}
