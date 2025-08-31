"use client"

import { useEffect, useRef } from "react"

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add("opacity-0", "translate-y-4")
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.remove("opacity-0", "translate-y-4")
            el.classList.add("animate-in", "fade-in-50", "slide-in-from-bottom-2")
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}
