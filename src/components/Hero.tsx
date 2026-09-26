import type { Copy } from '../content'
import { WHATSAPP_URL } from '../config'

type Props = { copy: Copy }

const metrics = [
  { label: 'heroMetricOne', value: '120' },
  { label: 'heroMetricTwo', value: '2' },
  { label: 'heroMetricThree', value: '3' },
] as const

const chartPath = 'M0 86 C25 78 35 82 53 73 S85 78 107 61 S137 74 160 51 S197 64 219 48 S245 55 265 31 S291 40 309 22 S335 30 360 6'

function HeroDashboard({ copy }: Props) {
  return (
    <div className="hero-stage" aria-hidden="true">
      <div className="stage-grid" />
      <div className="app-window">
        <div className="app-top"><i className="app-dot" /><i className="app-dot" /><i className="app-dot" /><span className="app-address" /></div>
        <div className="app-body">
          <aside className="app-side">
            <svg className="brand-mark"><use href="#mark" /></svg>
            <span className="side-line active" /><span className="side-line" /><span className="side-line short" /><span className="side-line" />
          </aside>
          <div className="app-main">
            <div className="app-kicker">{copy.heroDemoLabel}</div>
            <div className="app-heading"><span>{copy.heroDemoTitle}</span><span className="app-pill">{copy.heroDemoPill}</span></div>
            <div className="app-metrics">
              {metrics.map(({ label, value }) => (
                <div className="app-metric" key={label}>
                  <span>{copy[label]}</span><strong>{value}</strong><small>{copy.heroExample}</small>
                </div>
              ))}
            </div>
            <div className="app-chart">
              <span className="chart-title">{copy.heroChartTitle}</span>
              <span className="chart-sub">{copy.heroChartSubtitle}</span>
              <div className="chart-graphic">
                <svg viewBox="0 0 360 100" preserveAspectRatio="none">
                  <path d={`${chartPath} L360 100 L0 100Z`} fill="#e5f6ff" />
                  <path d={chartPath} fill="none" stroke="#159fe5" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="floating-chip"><span className="chip-icon">✳</span><span>{copy.heroFloat}</span></div>
      <div className="floating-code"><b>&gt;_</b>{' '}<i>{copy.heroCodeOne}</i><br /><b>✓</b>{' '}<span>{copy.heroCodeTwo}</span></div>
    </div>
  )
}

export function Hero({ copy }: Props) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="page-container">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" />SOFTWARE · AI · DIGITAL PRODUCTS</div>
            <h1 id="hero-title"><span>{copy.heroOne}</span>{' '}<span className="accent">{copy.heroTwo}</span></h1>
            <p>{copy.heroBody}</p>
            <div className="hero-actions">
              <a className="button button-dark" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><span>{copy.heroCta}</span><svg aria-hidden="true"><use href="#arrow" /></svg></a>
              <a className="button button-outline" href="#services">{copy.heroSecondary}</a>
            </div>
            <div className="hero-note"><span className="dot" /><span>{copy.heroNote}</span></div>
          </div>
          <HeroDashboard copy={copy} />
        </div>
        <div className="hero-bottom"><span>{copy.heroBottom}</span><span /></div>
      </div>
    </section>
  )
}
