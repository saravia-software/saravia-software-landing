type Props = {
  eyebrow: string
  title: string
  description: string
  titleId: string
}

export function SectionHeader({ eyebrow, title, description, titleId }: Props) {
  return (
    <div className="section-head">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2 id={titleId}>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  )
}
