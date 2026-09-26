import type { Copy } from '../content'

type Props = { copy: Copy }

const capabilities = [
  { title: 'capWebTitle', description: 'capWeb' },
  { title: 'capSaasTitle', description: 'capSaas' },
  { title: 'capAiTitle', description: 'capAi' },
  { title: 'capAutomationTitle', description: 'capAutomation' },
  { title: 'capDashboardsTitle', description: 'capDashboards' },
  { title: 'capProductTitle', description: 'capProduct' },
] as const

export function Capabilities({ copy }: Props) {
  return (
    <section className="capabilities" aria-labelledby="cap-title">
      <div className="page-container">
        <h2 className="eyebrow" id="cap-title">{copy.capLabel}</h2>
        <div className="cap-list">
          {capabilities.map(({ title, description }, index) => (
            <div className="cap-item" key={title}>
              <small>{String(index + 1).padStart(2, '0')} /</small>
              <strong>{copy[title]}</strong>
              <p>{copy[description]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
