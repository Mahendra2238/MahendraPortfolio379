"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export function SkillBar({
  label,
  levelLabel,
  value, // 0-100
  className,
}: {
  label: string
  levelLabel: string
  value: number
  className?: string
}) {
  const innerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = innerRef.current
    if (!el) return
    // Animate width when visible
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.width = value + "%"
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value])

  return (
    <li className={cn("space-y-1", className)}>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-muted-foreground">{levelLabel}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          ref={innerRef}
          className="h-full w-0 rounded-full bg-blue-600 transition-all duration-1000 ease-out dark:bg-blue-500"
          aria-hidden="true"
        />
      </div>
    </li>
  )
}
