import type { Copy } from '../content'
import { SectionHeader } from './SectionHeader'

type Props = { copy: Copy }

const steps = [
  { title: 'stepOneTitle', description: 'stepOneBody' },
  { title: 'stepTwoTitle', description: 'stepTwoBody' },
  { title: 'stepThreeTitle', description: 'stepThreeBody' },
  { title: 'stepFourTitle', description: 'stepFourBody' },
] as const

export function Process({ copy }: Props) {
  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <div className="page-container">
        <SectionHeader eyebrow={copy.processLabel} title={copy.processTitle} description={copy.processIntro} titleId="process-title" />
        <div className="process-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, description }, index) => (
            <article className="step" key={title}>
              <span className="step-number">{String(index + 1).padStart(2, '0')} / 04</span>
              <h3>{copy[title]}</h3>
              <p>{copy[description]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
