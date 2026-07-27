'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const SECTIONS = [
  { id: 'overview', label: 'Overview', index: '01' },
  { id: 'specs', label: 'VisionWheel', index: '02' },
  { id: 'calibration', label: 'Calibration', index: '03' },
  { id: 'architecture', label: 'Architecture', index: '04' },
  { id: 'audiences', label: 'Who it serves', index: '05' },
  { id: 'trust', label: 'Compliance', index: '06' },
  { id: 'contact', label: 'Contact', index: '07' },
]

export function SidebarNav() {
  const [active, setActive] = useState('overview')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-border bg-background/85 px-5 py-3 backdrop-blur-md lg:hidden">
        <Wordmark />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-foreground"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 grid min-h-[100dvh] grid-rows-[auto_1fr_auto] bg-background px-5 transition-opacity duration-300 lg:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <div className="h-[3.75rem]" aria-hidden="true" />

        <nav className="flex flex-col gap-1 pt-8" aria-label="Mobile navigation">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => handleNav(s.id)}
              className={cn(
                'flex h-14 items-center gap-3 border-l-2 border-b border-b-border pl-3 text-left transition-colors',
                active === s.id
                  ? 'border-l-accent text-foreground'
                  : 'border-l-transparent text-muted-foreground',
              )}
            >
              <span className="eyebrow w-8 shrink-0">{s.index}</span>
              <span className="text-xl font-medium tracking-tight">{s.label}</span>
            </button>
          ))}
        </nav>

        <div className="space-y-3 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6">
          <button
            type="button"
            onClick={() => handleNav('contact')}
            className="flex w-full items-center justify-center rounded-sm bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request a demo
          </button>
          <p className="eyebrow text-center text-muted-foreground/70">
            FDA Class II · Est. 2026
          </p>
        </div>
      </div>

      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col justify-between border-r border-border bg-card px-7 py-8 lg:flex">
        <div className="h-[3.8125rem]">
          <div className="translate-y-5">
            <Wordmark />
          </div>
        </div>

        <nav className="flex flex-col gap-px">
          {SECTIONS.map((s) => {
            const isActive = active === s.id
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => handleNav(s.id)}
                className={cn(
                  'group flex items-center gap-3 border-l-2 py-2 pl-3 text-left transition-colors',
                  isActive
                    ? 'border-accent text-foreground'
                    : 'border-transparent text-muted-foreground hover:text-foreground',
                )}
              >
                <span className="eyebrow w-5 shrink-0">{s.index}</span>
                <span className="text-sm font-medium tracking-tight">{s.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="space-y-3">
          <button
            type="button"
            onClick={() => handleNav('contact')}
            className="flex w-full items-center justify-center rounded-sm bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request a demo
          </button>
          <p className="eyebrow text-muted-foreground/70">FDA Class II · Est. 2026</p>
        </div>
      </aside>
    </>
  )
}

function Wordmark() {
  return (
    <div className="flex items-center gap-1.5 lg:gap-2">
      <Image
        src="/visiontech-logo.png"
        alt=""
        width={896}
        height={512}
        className="h-7 w-auto shrink-0"
        priority
      />
      <span className="-translate-y-px text-base font-semibold tracking-tight text-foreground lg:translate-y-0">
        VisionTech
      </span>
    </div>
  )
}
