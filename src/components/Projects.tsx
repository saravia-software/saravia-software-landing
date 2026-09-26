import type { ReactNode } from 'react'
import type { Copy } from '../content'
import { SectionHeader } from './SectionHeader'

type Props = { copy: Copy }
type ProjectCardProps = { title: string; meta: string; description: string; concept: string; children: ReactNode }

const stockRows = [
  { name: 'workMockTomato', amount: '86 kg' },
  { name: 'workMockOrange', amount: '124 kg' },
  { name: 'workMockApple', amount: '62 kg' },
] as const
const barHeights = ['39%', '62%', '48%', '74%', '56%', '85%', '100%'] as const

function ProjectCard({ title, meta, description, concept, children }: ProjectCardProps) {
  return (
    <article className="work-card">
      {children}
      <div className="work-info">
        <span className="concept-tag">{concept}</span>
        <h3>{title}</h3>
        <p className="work-meta">{meta}</p>
        <p>{description}</p>
      </div>
    </article>
  )
}

function MockBrowserTop({ label }: { label: string }) {
  return <div className="mini-top"><i /><i /><i /><b>{label}</b></div>
}

function InventoryArt({ copy }: Props) {
  return (
    <div className="work-art inventory" aria-hidden="true">
      <div className="mini-panel">
        <MockBrowserTop label="STOCK / EJEMPLO" />
        <div className="mini-body">
          <div className="mini-label">{copy.workMockStock}</div>
          <div className="mini-sub">{copy.workMockLocations}</div>
          <div className="stock-rows">
            {stockRows.map(row => (
              <div className="stock-row" key={row.name}>
                <span /><span className="stock-name">{copy[row.name]}</span><small>{row.amount}</small><em />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="query-chip"><span>✳ AI</span>{'  '}<span>{copy.workMockAsk}</span></div>
    </div>
  )
}

function ProfilesArt({ copy }: Props) {
  return (
    <div className="work-art profiles" aria-hidden="true">
      <div className="mini-panel">
        <div className="profile-topline"><svg className="brand-mark"><use href="#mark" /></svg><div /></div>
        <div className="mini-body">
          <div className="profile-header"><div className="avatar" /><div className="profile-heading"><i /><i /></div></div>
          <div className="profile-blurb"><span /><span /><span /></div>
          <div className="profile-action">{copy.workMockContact}</div>
        </div>
      </div>
    </div>
  )
}

function AnalyticsArt({ copy }: Props) {
  return (
    <div className="work-art analytics" aria-hidden="true">
      <div className="mini-panel">
        <MockBrowserTop label="ANALYTICS" />
        <div className="mini-body">
          <div className="mini-label">{copy.workMockOverview}</div>
          <div className="mini-sub">{copy.workMockInsights}</div>
          <div className="analytics-metrics">
            <span><i />$248.6k</span><span><i />+18.2%</span><span><i />1,284</span>
          </div>
          <div className="bars">{barHeights.map((height, index) => <b key={index} style={{ height }} />)}</div>
        </div>
      </div>
    </div>
  )
}

export function Projects({ copy }: Props) {
  return (
    <section className="section work" id="projects" aria-labelledby="work-title">
      <div className="page-container">
        <SectionHeader eyebrow={copy.workLabel} title={copy.workTitle} description={copy.workIntro} titleId="work-title" />
        <div className="work-grid grid grid-cols-1 gap-[19px] md:grid-cols-3">
          <ProjectCard title={copy.workOneTitle} meta={copy.serviceMetaOne} description={copy.workOne} concept={copy.concept}><InventoryArt copy={copy} /></ProjectCard>
          <ProjectCard title={copy.workTwoTitle} meta={copy.serviceMetaTwo} description={copy.workTwo} concept={copy.concept}><ProfilesArt copy={copy} /></ProjectCard>
          <ProjectCard title={copy.workThreeTitle} meta={copy.serviceMetaThree} description={copy.workThree} concept={copy.concept}><AnalyticsArt copy={copy} /></ProjectCard>
        </div>
      </div>
    </section>
  )
}
