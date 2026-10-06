import { Fragment, type CSSProperties } from 'react'
import type { Copy } from '../content'
import { WHATSAPP_URL } from '../config'
import { Atmosphere } from './Atmosphere'

type Props = { copy: Copy }

function TitleLine({ text, totalWords, offset = 0, className }: { text: string; totalWords: number; offset?: number; className?: string }) {
  const words = text.split(' ')
  return <span className={className}>{words.map((word, index) => (
    <Fragment key={index}>
      <span className="hero-title-word" style={{ '--entrance-delay': `${1200 + (offset + index) / Math.max(totalWords - 1, 1) * 120}ms` } as CSSProperties}>{word}</span>
      {index < words.length - 1 ? ' ' : null}
    </Fragment>
  ))}</span>
}

export function Hero({ copy }: Props) {
  const totalWords = copy.heroOne.split(' ').length + copy.heroTwo.split(' ').length
  return (
    <section className="hero motion-scene" aria-labelledby="hero-title">
      <Atmosphere />
      <div className="page-container">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" />SOFTWARE · AI · DIGITAL PRODUCTS</div>
            <h1 id="hero-title"><TitleLine text={copy.heroOne} totalWords={totalWords} />{' '}<TitleLine text={copy.heroTwo} totalWords={totalWords} offset={copy.heroOne.split(' ').length} className="accent" /></h1>
            <p>{copy.heroBody}</p>
            <div className="hero-actions">
              <a className="button button-dark" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><span>{copy.heroCta}</span><svg aria-hidden="true"><use href="#arrow" /></svg></a>
              <a className="button button-outline" href="#services">{copy.heroSecondary}</a>
            </div>
            <div className="hero-note"><span className="dot" /><span>{copy.heroNote}</span></div>
          </div>
        </div>
        <div className="hero-bottom"><span>{copy.heroBottom}</span><span /></div>
      </div>
    </section>
  )
}
