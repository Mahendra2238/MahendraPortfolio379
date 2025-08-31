"use client"

import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const isDark = typeof document !== "undefined" && document.documentElement.classList.contains("dark")

  useEffect(() => {
    setMounted(true)
  }, [])

  function toggle() {
    const root = document.documentElement
    const next = root.classList.contains("dark") ? "light" : "dark"
    root.classList.toggle("dark", next === "dark")
    try {
      localStorage.setItem("theme", next)
    } catch {}
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-card hover:shadow-lg transition-shadow"
      title="Toggle theme"
    >
      {/* Sun/Moon icons (no external deps) */}
      <svg
        className={`h-5 w-5 ${mounted && isDark ? "hidden" : ""}`}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zm10.45 14.32l1.79 1.8 1.41-1.42-1.8-1.79-1.4 1.41zM12 4a1 1 0 001-1V1h-2v2a1 1 0 001 1zm0 16a1 1 0 00-1 1v2h2v-2a1 1 0 00-1-1zM4 13H2v-2h2v2zm18 0h-2v-2h2v2zM6.76 19.16l-1.42 1.42-1.79-1.8 1.41-1.41 1.8 1.79zM19.66 3.75l-1.41 1.41 1.79 1.8 1.41-1.42-1.79-1.79zM12 6.5A5.5 5.5 0 1017.5 12 5.51 5.51 0 0012 6.5z" />
      </svg>
      <svg
        className={`h-5 w-5 ${mounted && isDark ? "" : "hidden"}`}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </button>
  )
}
