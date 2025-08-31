"use client"

import type React from "react"

import { useState } from "react"

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwdVVg-hMP-eQBNOLGC4sjmdtsJF2g1-TFoTLWF-aL0oTdJ_l6CPVpEKwrHKkGNfkiY/exec" // REQUIRED: e.g. "https://script.google.com/macros/s/AKfycbx.../exec"
// https://docs.google.com/spreadsheets/d/1ddNna0iqW-iNS5UV4x9cjU_mnZ0LGfhSo2KpzE1fI2I/edit?gid=0#gid=0  (google spread sheet)
export function ContactForm() {
  const [status, setStatus] = useState<{ type: "idle" | "sending" | "ok" | "err"; msg: string }>({
    type: "idle",
    msg: "",
  })

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries())

    if (!payload.name || !payload.email || !payload.subject || !payload.message) {
      setStatus({ type: "err", msg: "Please fill in all required fields." })
      return
    }
    if (!GOOGLE_SCRIPT_URL) {
      setStatus({ type: "err", msg: "Setup required: paste your Apps Script URL in components/contact-form.tsx" })
      return
    }

    setStatus({ type: "sending", msg: "Sending..." })
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      ;(e.target as HTMLFormElement).reset()
      setStatus({ type: "ok", msg: "Message sent successfully!" })
    } catch (err) {
      setStatus({ type: "err", msg: "Something went wrong. Please try again or email me directly." })
      console.error("[contact] error", err)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          placeholder="Your name"
          className="rounded-lg border bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="rounded-lg border bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          required
          placeholder="Subject"
          className="rounded-lg border bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Write your message..."
          className="rounded-lg border bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="inline-flex h-10 items-center justify-center rounded-lg border bg-blue-600 px-4 text-white transition hover:shadow-lg dark:bg-blue-500"
        disabled={status.type === "sending"}
      >
        {status.type === "sending" ? "Sending..." : "Send Message"}
      </button>
      <p
        role="status"
        aria-live="polite"
        className={`min-h-5 text-sm ${
          status.type === "ok" ? "text-green-500" : status.type === "err" ? "text-red-500" : "text-muted-foreground"
        }`}
      >
        {status.msg}
      </p>
    </form>
  )
}
