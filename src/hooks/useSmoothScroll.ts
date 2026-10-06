import { useEffect } from 'react'
import Lenis from 'lenis'

export function useSmoothScroll() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let lenis: Lenis | null = null

    const destroy = () => {
      // Stop native velocity tracking before disposal so its pending timer
      // cannot restore Lenis classes after a motion-preference change.
      lenis?.stop()
      lenis?.destroy()
      lenis = null
    }

    const update = () => {
      destroy()
      if (preference.matches || document.hidden) return
      lenis = new Lenis({
        autoRaf: true,
        lerp: 0.1,
        smoothWheel: true,
        syncTouch: false,
        allowNestedScroll: true,
        stopInertiaOnNavigate: true,
        respectReducedMotion: true,
      })
    }

    const reset = () => {
      lenis?.stop()
      lenis?.start()
    }

    const onClick = (event: MouseEvent) => {
      if (!lenis || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null
      if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return
      const url = new URL(link.href)
      if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search || !url.hash) return
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)))
      if (!target) return

      event.preventDefault()
      reset()
      // Keep native section URLs and Back/Forward entries without a hash jump.
      if (url.hash !== location.hash) history.pushState(null, '', url)
      lenis.scrollTo(url.hash === '#top' ? 0 : target, {
        duration: 1.15,
        lerp: 0,
        onComplete: () => {
          if (location.hash !== url.hash) return
          // Match native anchor keyboard navigation without another scroll.
          const needsTabIndex = !target.hasAttribute('tabindex')
          if (needsTabIndex) {
            target.setAttribute('tabindex', '-1')
            target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true })
          }
          target.focus({ preventScroll: true })
        },
      })
    }

    // Cancel inertia before the browser restores its own history position or
    // handles keyboard scrolling. These gestures keep their native behavior.
    const onKeyDown = (event: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) reset()
    }

    update()
    preference.addEventListener('change', update)
    document.addEventListener('visibilitychange', update)
    window.addEventListener('click', onClick)
    window.addEventListener('popstate', reset)
    window.addEventListener('hashchange', reset)
    window.addEventListener('keydown', onKeyDown)

    return () => {
      destroy()
      preference.removeEventListener('change', update)
      document.removeEventListener('visibilitychange', update)
      window.removeEventListener('click', onClick)
      window.removeEventListener('popstate', reset)
      window.removeEventListener('hashchange', reset)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])
}
