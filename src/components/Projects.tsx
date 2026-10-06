import { useEffect, useRef, useState, type ReactNode } from 'react'
import type { Copy, Language } from '../content'
import { SectionHeader } from './SectionHeader'
import { InventoryArt, ProfilesArt, AnalyticsArt } from './ExampleVisuals'

type Props = { copy: Copy; language: Language }
type ProjectCardProps = { title: string; meta: string; description: string; concept: string; children: ReactNode }

function ProjectCard({ title, meta, description, concept, children }: ProjectCardProps) {
  return (
    <article className="work-card motion-scene" tabIndex={0}>
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

export function Projects({ copy, language }: Props) {
  const rail = useRef<HTMLDivElement>(null)
  const [canScroll, setCanScroll] = useState({ previous: false, next: true })

  const updateControls = () => {
    const element = rail.current
    if (!element) return
    const previous = element.scrollLeft > 2
    const next = element.scrollLeft + element.clientWidth < element.scrollWidth - 2
    setCanScroll(current => {
      if (current.previous === previous && current.next === next) return current
      return { previous, next }
    })
  }

  useEffect(() => {
    const element = rail.current
    if (!element) return
    const observer = new ResizeObserver(updateControls)
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const scroll = (direction: number) => {
    const element = rail.current
    const card = element?.firstElementChild
    if (!element || !card) return
    element.scrollBy({
      left: direction * (card.getBoundingClientRect().width + 24),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    })
  }

  return (
    <section className="section work" id="projects" aria-labelledby="work-title">
      <div className="page-container">
        <SectionHeader eyebrow={copy.workLabel} title={copy.workTitle} description={copy.workIntro} titleId="work-title" />
        <div className="work-grid" ref={rail} onScroll={updateControls} role="region" aria-label={copy.workLabel} onKeyDown={event => {
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault()
            scroll(event.key === 'ArrowRight' ? 1 : -1)
          }
        }}>
          <ProjectCard title={copy.workOneTitle} meta={copy.serviceMetaOne} description={copy.workOne} concept={copy.concept}><InventoryArt copy={copy} /></ProjectCard>
          <ProjectCard title={copy.workTwoTitle} meta={copy.serviceMetaTwo} description={copy.workTwo} concept={copy.concept}><ProfilesArt copy={copy} /></ProjectCard>
          <ProjectCard title={copy.workThreeTitle} meta={copy.serviceMetaThree} description={copy.workThree} concept={copy.concept}><AnalyticsArt copy={copy} /></ProjectCard>
        </div>
        <div className="carousel-controls">
          <button type="button" className="carousel-arrow" disabled={!canScroll.previous} onClick={() => scroll(-1)} aria-label={language === 'es' ? 'Ejemplo anterior' : 'Previous example'}><svg aria-hidden="true"><use href="#arrow" /></svg></button>
          <span className="carousel-line" aria-hidden="true" />
          <button type="button" className="carousel-arrow" disabled={!canScroll.next} onClick={() => scroll(1)} aria-label={language === 'es' ? 'Ejemplo siguiente' : 'Next example'}><svg aria-hidden="true"><use href="#arrow" /></svg></button>
        </div>
      </div>
    </section>
  )
}
