type Props = { onClick?: () => void; href?: string }

export function Brand({ onClick, href = '#top' }: Props) {
  return (
    <a className="brand" href={href} aria-label="Saravia Software — inicio" onClick={onClick}>
      <svg className="brand-mark" aria-hidden="true"><use href="#mark" /></svg>
      <span className="brand-type">
        <span className="brand-name">Saravia <span>Software</span></span>
        <span className="brand-tag">Software · AI · Digital Products</span>
      </span>
    </a>
  )
}
