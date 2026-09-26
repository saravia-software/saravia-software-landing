import { useEffect } from 'react'

const REVEAL_SELECTOR = [
  '.intro-inner',
  '.section-head',
  '.services-grid .service',
  '.capabilities .eyebrow',
  '.cap-list .cap-item',
  '.process-grid .step',
  '.work-grid .work-card',
  '.ai-copy',
  '.terminal',
  '.about-grid > div',
  '.tech-inner',
  '.contact-inner > div',
].join(', ')

const STAGGER_SELECTOR = '.service, .cap-item, .step, .work-card'

export function useScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const candidates = [...document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)]
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })

    for (const element of candidates) {
      const bounds = element.getBoundingClientRect()
      if (bounds.top < window.innerHeight - 40 && bounds.bottom > 0) continue

      if (element.matches(STAGGER_SELECTOR) && element.parentElement) {
        const index = [...element.parentElement.children].indexOf(element)
        element.style.setProperty('--reveal-delay', `${Math.min(index, 3) * 70}ms`)
      }

      element.classList.add('scroll-reveal')
      observer.observe(element)
    }

    return () => {
      observer.disconnect()
      for (const element of candidates) {
        element.classList.remove('scroll-reveal', 'is-revealed')
        element.style.removeProperty('--reveal-delay')
      }
    }
  }, [])
}
