import type { Copy } from '../content'

type Props = { copy: Copy }

export function Intro({ copy }: Props) {
  return (
    <section className="intro" aria-labelledby="intro-title">
      <div className="page-container intro-inner">
        <div className="eyebrow">{copy.introLabel}</div>
        <div>
          <h2 id="intro-title"><span>{copy.introOne}</span><br /><span>{copy.introTwo}</span></h2>
          <p>{copy.introBody}</p>
        </div>
      </div>
    </section>
  )
}
