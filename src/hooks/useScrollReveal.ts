import { useEffect } from 'react'

const REVEAL_SELECTOR = [
  '.intro-inner .eyebrow, .intro-inner h2, .intro-inner p',
  '.section-head .eyebrow, .section-head h2, .section-head > p',
  '.services-grid .service-visual, .services-grid .service-content',
  '.capabilities .eyebrow',
  '.cap-list .cap-item',
  '.process-grid .step',
  '.work-grid .work-card',
  '.ai-copy > *',
  '.terminal',
  '.about-grid > div:first-child > *, .about-principles',
  '.tech-title, .tech-list',
  '.contact-inner > div:first-child > *, .contact-options',
].join(', ')

const STAGGER_SELECTOR = '.cap-item, .step, .work-card'

export function useScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const candidates = [...document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)]
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -64px 0px' })

    for (const element of candidates) {
      const bounds = element.getBoundingClientRect()
      if (motionPreference.matches || (bounds.top < window.innerHeight - 64 && bounds.bottom > 0)) continue

      let delay = 0
      if (element.matches('h2')) delay = 80
      if (element.matches('p')) delay = 160
      if (element.matches('.service-content')) delay = 120
      if (element.matches('.ai-uses, .tech-list, .contact-options')) delay = 220
      if (element.matches(STAGGER_SELECTOR) && element.parentElement) {
        const index = [...element.parentElement.children].indexOf(element)
        delay = Math.min(index, 2) * 100
      }
      element.style.setProperty('--reveal-delay', `${delay}ms`)

      element.classList.add('scroll-reveal')
      observer.observe(element)
    }

    const scenes = [...document.querySelectorAll<HTMLElement>('.motion-scene')]
    const visibleScenes = new Set<HTMLElement>()
    const hero = document.querySelector<HTMLElement>('.hero')
    let scrollFrame: number | null = null

    const clearParallax = () => {
      hero?.style.removeProperty('--halo-scroll')
      hero?.style.removeProperty('--stars-scroll')
    }
    const updateParallax = () => {
      scrollFrame = null
      if (!hero || motionPreference.matches || document.hidden || !visibleScenes.has(hero)) {
        clearParallax()
        return
      }
      const distance = Math.max(0, -hero.getBoundingClientRect().top)
      hero.style.setProperty('--halo-scroll', `${Math.min(distance * 0.16, 84).toFixed(1)}px`)
      hero.style.setProperty('--stars-scroll', `${Math.min(distance * 0.07, 38).toFixed(1)}px`)
    }
    const queueParallax = () => {
      if (!hero || motionPreference.matches || document.hidden || !visibleScenes.has(hero)) return
      if (scrollFrame === null) scrollFrame = window.requestAnimationFrame(updateParallax)
    }
    const updateMotion = () => {
      const paused = motionPreference.matches || document.hidden
      document.documentElement.dataset.motionPaused = String(paused)
      for (const scene of scenes) {
        scene.dataset.motionActive = String(visibleScenes.has(scene) && !paused)
      }
      if (paused || (hero && !visibleScenes.has(hero))) {
        if (scrollFrame !== null) window.cancelAnimationFrame(scrollFrame)
        scrollFrame = null
        clearParallax()
      } else queueParallax()
      if (motionPreference.matches) {
        for (const element of candidates) element.classList.remove('scroll-reveal', 'is-revealed')
        observer.disconnect()
      }
    }
    const sceneObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        const scene = entry.target as HTMLElement
        if (entry.isIntersecting) visibleScenes.add(scene)
        else visibleScenes.delete(scene)
      }
      updateMotion()
    })
    scenes.forEach(scene => sceneObserver.observe(scene))
    updateMotion()
    motionPreference.addEventListener('change', updateMotion)
    document.addEventListener('visibilitychange', updateMotion)
    if (hero) {
      window.addEventListener('scroll', queueParallax, { passive: true })
      window.addEventListener('resize', queueParallax, { passive: true })
    }

    return () => {
      observer.disconnect()
      sceneObserver.disconnect()
      motionPreference.removeEventListener('change', updateMotion)
      document.removeEventListener('visibilitychange', updateMotion)
      window.removeEventListener('scroll', queueParallax)
      window.removeEventListener('resize', queueParallax)
      if (scrollFrame !== null) window.cancelAnimationFrame(scrollFrame)
      clearParallax()
      delete document.documentElement.dataset.motionPaused
      scenes.forEach(scene => delete scene.dataset.motionActive)
      for (const element of candidates) {
        element.classList.remove('scroll-reveal', 'is-revealed')
        element.style.removeProperty('--reveal-delay')
      }
    }
  }, [])
}
