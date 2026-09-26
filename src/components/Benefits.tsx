import type { Copy } from '../content'

type Props = { copy: Copy }
const benefitKeys = ['techOne', 'techTwo', 'techThree', 'techFour', 'techFive', 'techSix'] as const

export function Benefits({ copy }: Props) {
  return (
    <section className="tech" aria-labelledby="tech-title">
      <div className="page-container tech-inner">
        <h2 className="tech-title" id="tech-title">{copy.techTitle}</h2>
        <div className="tech-list" aria-label="Beneficios">
          {benefitKeys.map(key => <span key={key}>{copy[key]}</span>)}
        </div>
      </div>
    </section>
  )
}
