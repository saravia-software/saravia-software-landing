import type { Copy } from '../content'

type Props = { copy: Copy }

const metrics = [
  { label: 'heroMetricOne', value: '120' },
  { label: 'heroMetricTwo', value: '2' },
  { label: 'heroMetricThree', value: '3' },
] as const

const chartPath = 'M0 86 C25 78 35 82 53 73 S85 78 107 61 S137 74 160 51 S197 64 219 48 S245 55 265 31 S291 40 309 22 S335 30 360 6'

export function BusinessDashboard({ copy }: Props) {
  return (
    <div className="hero-stage motion-scene" aria-hidden="true">
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
                  <path d={`${chartPath} L360 100 L0 100Z`} className="chart-area" />
                  <path d={chartPath} fill="none" className="chart-line" strokeWidth="2.5" strokeLinecap="round" />
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

