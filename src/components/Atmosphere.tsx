import type { CSSProperties } from 'react'

// Fixed positions keep the server render and browser hydration identical.
const particles = Array.from({ length: 76 }, (_, index) => ({
  left: `${(index * 37.7 + 3) % 100}%`,
  top: `${(index * 23.3 + 7) % 100}%`,
  '--particle-size': `${index % 7 === 0 ? 3.5 : index % 4 === 0 ? 1.5 : 2.5}px`,
  '--particle-opacity': index % 4 === 0 ? 0.5 : 0.85,
  '--particle-x': `${(index % 2 === 0 ? 1 : -1) * (24 + index % 5 * 8)}px`,
  '--particle-y': `${(index % 3 === 0 ? 1 : -1) * (56 + index % 4 * 10)}px`,
  '--particle-duration': `${10 + index % 8}s`,
  '--twinkle-duration': `${3.5 + index % 5 * 0.7}s`,
  '--particle-delay': `${-index * 1.7}s`,
}))

export function Atmosphere({ particles: showParticles = true }: { particles?: boolean }) {
  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="halo">
        <div className="halo-light" />
        <div className="halo-orbit" />
        <div className="halo-orbit halo-orbit-secondary" />
        <div className="halo-orbit halo-orbit-core" />
      </div>
      {showParticles && <div className="particles">
        {particles.map((style, index) => <span className={`particle${index % 13 === 0 ? ' particle-glint' : ''}`} key={index} style={style as CSSProperties} />)}
      </div>}
    </div>
  )
}
