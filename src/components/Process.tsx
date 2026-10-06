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
        <div className="process-grid">
          {steps.map(({ title, description }, index) => (
            <article className="step motion-scene" key={title}>
              <span className="step-number">{String(index + 1).padStart(2, '0')} / 04</span>
              <h3>{copy[title]}</h3>
              <p>{copy[description]}</p>
              <div className={`step-art step-art-${index}`} aria-hidden="true">
                {index === 0 && <><div className="scan-row"><i /><span /><b>✓</b></div><div className="scan-row"><i /><span /><b>✓</b></div><div className="scan-row"><i /><span /><b>✓</b></div><div className="scan-line" /></>}
                {index === 1 && <><div className="idea-window"><i /><i /><span /><span /><div /><div /></div><svg className="idea-pointer" viewBox="0 0 32 40"><path d="M3 2v29l8-7 7 13 6-3-7-13 11-2Z" /></svg></>}
                {index === 2 && <><div className="connect-node"><svg><use href="#mark" /></svg></div><div className="connect-path"><i /><i /><i /></div><div className="connect-node"><span>⊞</span></div></>}
                {index === 3 && <><div className="launch-orbit" /><div className="launch-check">✓</div><div className="launch-line"><i /></div></>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
