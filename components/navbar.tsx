"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("#home")
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    window.addEventListener("click", handler)
    return () => window.removeEventListener("click", handler)
  }, [])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"))
    const onScroll = () => {
      const y = window.scrollY + 120
      let current = "#home"
      for (const s of sections) {
        if (y >= s.offsetTop) current = `#${s.id}`
      }
      setActive(current)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2 font-bold text-foreground">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-blue-600 text-white">MG</span>
          <span className="tracking-tight">Mahendra Gaddam</span>
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-md px-3 py-2 text-sm transition hover:bg-blue-600/10 ${
                  active === l.href ? "bg-blue-600/15" : ""
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-card md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={(e) => {
              e.stopPropagation()
              setOpen((v) => !v)
            }}
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-foreground"></span>
              <span className="block h-0.5 w-5 bg-foreground"></span>
              <span className="block h-0.5 w-5 bg-foreground"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div ref={menuRef} className={`md:hidden ${open ? "block" : "hidden"} border-t bg-background`}>
        <nav className="mx-auto grid max-w-6xl gap-1 px-4 py-2" aria-label="Primary mobile">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`rounded-md px-3 py-2 text-sm transition hover:bg-blue-600/10 ${
                active === l.href ? "bg-blue-600/15" : ""
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
