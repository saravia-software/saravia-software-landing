import type { Copy } from '../content'
import { BusinessDashboard } from './BusinessDashboard'
import { AnalyticsArt, ProfilesArt } from './ExampleVisuals'

export type ServiceVisualKind = 'web' | 'custom' | 'ai' | 'growth' | 'data' | 'design'

export function ServiceVisual({ kind, copy }: { kind: ServiceVisualKind; copy: Copy }) {
  return (
    <div className={`service-visual visual-${kind} motion-scene`} aria-hidden="true">
      <div className="visual-grid" />
      {kind === 'web' && <ProfilesArt copy={copy} />}
      {kind === 'custom' && <BusinessDashboard copy={copy} />}
      {kind === 'data' && <AnalyticsArt copy={copy} />}
      {kind === 'ai' && <div className="assistant-preview">
        <div className="assistant-orb"><svg><use href="#mark" /></svg></div>
        <span className="preview-label">{copy.heroFloat}</span>
        <div className="preview-question">{copy.terminalQuestion}<span className="preview-send">↗</span></div>
        <div className="preview-response"><span>✳</span>{copy.terminalResult}</div>
        <div className="preview-dots"><i /><i /><i /></div>
      </div>}
      {kind === 'growth' && <div className="growth-preview">
        <div className="growth-center"><svg><use href="#mark" /></svg></div>
        {[copy.techOne, copy.techTwo, copy.techFour, copy.techFive].map((label, index) => <div className={`growth-tile growth-tile-${index}`} key={label}>
          <span>{['◇', '⊞', '✳', '↗'][index]}</span>{label}
        </div>)}
        <svg className="growth-connections" viewBox="0 0 400 300"><path d="M200 150 70 65M200 150 330 65M200 150 70 235M200 150 330 235" /></svg>
      </div>}
      {kind === 'design' && <div className="design-preview">
        <div className="design-toolbar"><i /><i /><i /><span /><b>◇</b></div>
        <div className="design-canvas"><div className="design-sidebar"><i /><i /><i /></div><div className="design-layout"><span className="design-selection"><i /><i /><i /><i /><svg><use href="#mark" /></svg></span><div className="design-lines"><i /><i /></div><div className="design-blocks"><i /><i /><i /></div></div></div>
        <svg className="design-pointer" viewBox="0 0 32 40"><path d="M3 2v29l8-7 7 13 6-3-7-13 11-2Z" /></svg>
      </div>}
    </div>
  )
}
