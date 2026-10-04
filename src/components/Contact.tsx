import type { Copy } from '../content'
import { INSTAGRAM_URL, WHATSAPP_URL } from '../config'

type Props = { copy: Copy }

export function Contact({ copy }: Props) {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="page-container contact-inner">
        <div>
          <div className="eyebrow">{copy.contactLabel}</div>
          <h2 id="contact-title"><span>{copy.contactOne}</span><br /><span>{copy.contactTwo}</span></h2>
          <p>{copy.contactBody}</p>
        </div>
        <div className="contact-options">
          <a className="button button-blue" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <span>{copy.contactCta}</span>
            <svg aria-hidden="true"><use href="#arrow" /></svg>
          </a>
          <a className="button button-dark" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            <span>Instagram @saraviasoftware</span>
            <svg aria-hidden="true"><use href="#arrow" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
