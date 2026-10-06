import { useLayoutEffect } from 'react'

export function useHeroEntrance() {
  useLayoutEffect(() => {
    const root = document.documentElement
    const hero = document.querySelector<HTMLElement>('.hero')
    if (!hero || (root.dataset.entrance !== 'pending' && root.dataset.entrance !== 'playing')) return

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const complete = () => {
      if (root.dataset.entrance !== 'complete') root.dataset.entrance = 'complete'
    }
    const onAnimationEnd = (event: AnimationEvent) => {
      if (event.animationName === 'hero-arrive' && event.target instanceof HTMLElement && event.target.matches('.hero-note')) complete()
    }
    const onMotionChange = () => { if (motionPreference.matches) complete() }
    const onScroll = () => {
      if (root.dataset.entrance === 'playing' && hero.getBoundingClientRect().bottom <= 80) complete()
    }

    if (!('IntersectionObserver' in window) || motionPreference.matches || window.scrollY > window.innerHeight / 2) complete()
    else root.dataset.entrance = 'playing'

    root.addEventListener('animationend', onAnimationEnd)
    root.addEventListener('focusin', complete)
    motionPreference.addEventListener('change', onMotionChange)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      root.removeEventListener('animationend', onAnimationEnd)
      root.removeEventListener('focusin', complete)
      motionPreference.removeEventListener('change', onMotionChange)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
}
