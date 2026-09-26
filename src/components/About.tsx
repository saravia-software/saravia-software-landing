import type { Copy } from '../content'

type Props = { copy: Copy }
const principleKeys = ['principleOne', 'principleTwo', 'principleThree', 'principleFour'] as const

export function About({ copy }: Props) {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="page-container about-grid">
        <div>
          <div className="eyebrow">{copy.aboutLabel}</div>
          <h2 className="section-title" id="about-title"><span>{copy.aboutOne}</span><br /><span>{copy.aboutTwo}</span></h2>
          <p className="about-lead">{copy.aboutBody}</p>
        </div>
        <div className="about-principles">
          {principleKeys.map((key, index) => (
            <div className="principle" key={key}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span>{copy[key]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
