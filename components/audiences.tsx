'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'

type CardRow = { label: string; value: string }

type Audience = {
  key: string
  tab: string
  eyebrow: string
  headline: string
  body: string
  benefits: string[]
  cta: string
  secondary: string
  image: string
  card: { title: string; rows: CardRow[] }
}

const AUDIENCES: Audience[] = [
  {
    key: 'providers',
    tab: 'Providers',
    eyebrow: 'For providers',
    headline: 'Prescribe with confidence.',
    body: 'Everything clinicians need to evaluate, recommend, and integrate VisionWheel into patient care.',
    benefits: [
      'Clinical evidence and supporting research',
      'Fitting guidance and patient assessment tools',
      'Documentation and reimbursement resources',
    ],
    cta: 'Clinical resources',
    secondary: 'View prescribing workflow',
    image: '/audience-providers.png',
    card: {
      title: 'Patient Assessment',
      rows: [
        { label: 'Compatibility Score', value: '94%' },
        { label: 'Recommended Configuration', value: 'VW-2' },
      ],
    },
  },
  {
    key: 'clinics',
    tab: 'Clinics',
    eyebrow: 'For clinics',
    headline: 'Deploy at scale.',
    body: 'Equip rehabilitation teams with a standardized workflow for onboarding, calibration, and long-term patient support.',
    benefits: [
      'One-minute personalized calibration',
      'Staff onboarding resources',
      'Fleet management and patient tracking',
    ],
    cta: 'Deployment guide',
    secondary: 'Explore implementation',
    image: '/audience-clinics.png',
    card: {
      title: 'Deployment Dashboard',
      rows: [
        { label: 'Active Devices', value: '12' },
        { label: 'Calibration Success', value: '98%' },
      ],
    },
  },
  {
    key: 'insurers',
    tab: 'Insurers',
    eyebrow: 'For insurers',
    headline: 'Support better outcomes.',
    body: 'Clear documentation and measurable outcomes help simplify coverage decisions and demonstrate long-term value.',
    benefits: ['Outcome reporting', 'Clinical documentation', 'Cost-of-care insights'],
    cta: 'Coverage resources',
    secondary: 'View clinical evidence',
    image: '/audience-insurers.png',
    card: {
      title: 'Outcome Report',
      rows: [
        { label: 'Mobility Improvement', value: '+38%' },
        { label: 'Est. Long-Term Savings', value: '$14,200' },
      ],
    },
  },
  {
    key: 'families',
    tab: 'Families',
    eyebrow: 'For families',
    headline: 'More independence at home.',
    body: 'VisionWheel gives loved ones greater freedom while making everyday mobility easier for caregivers.',
    benefits: [
      'Personalized eye control',
      'Simple setup and calibration',
      'Ongoing support and guidance',
    ],
    cta: 'Getting started',
    secondary: 'Talk with our team',
    image: '/audience-families.png',
    card: {
      title: "Today's Activity",
      rows: [
        { label: 'Independent Trips', value: '7' },
        { label: 'Calibration Status', value: 'Optimal' },
      ],
    },
  },
]

export function Audiences() {
  const [activeKey, setActiveKey] = useState(AUDIENCES[0].key)
  const reduce = useReducedMotion()
  const active = AUDIENCES.find((a) => a.key === activeKey) ?? AUDIENCES[0]

  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section id="audiences" className="border-b border-border px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
      <div className="max-w-2xl">
        <Reveal>
          <p className="eyebrow text-accent">Who it serves</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            One device. Four different paths to independence.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Choose your role to see how VisionWheel fits into your workflow.
          </p>
        </Reveal>
      </div>

      {/* Selector pills */}
      <Reveal delay={180}>
        <div
          role="tablist"
          aria-label="Select an audience"
          className="mt-10 flex flex-wrap gap-2"
        >
          {AUDIENCES.map((a) => {
            const isActive = a.key === activeKey
            return (
              <button
                key={a.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveKey(a.key)}
                className={`relative rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-transparent text-accent-foreground'
                    : 'border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="audience-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{a.tab}</span>
              </button>
            )
          })}
        </div>
      </Reveal>

      {/* Morphing panel */}
      <Reveal delay={220}>
        <motion.div
          layout
          transition={{ layout: { duration: 0.5, ease } }}
          className="mt-8 overflow-hidden rounded-sm border border-border bg-card"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%]">
            {/* LEFT */}
            <div className="flex flex-col justify-between gap-10 p-8 sm:p-10 lg:border-r lg:border-border">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.key}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease }}
                >
                  <p className="eyebrow text-accent">{active.eyebrow}</p>
                  <h3 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {active.headline}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {active.body}
                  </p>

                  <ul className="mt-8 flex flex-col gap-px overflow-hidden rounded-sm border border-border bg-border">
                    {active.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-baseline gap-3 bg-card px-4 py-3 text-sm text-foreground"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.key + '-cta'}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease, delay: 0.05 }}
                  className="flex flex-wrap items-center gap-x-6 gap-y-3"
                >
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-1.5 rounded-sm bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                  >
                    {active.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="#contact"
                    className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {active.secondary}
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT */}
            <div className="relative min-h-[320px] overflow-hidden bg-secondary/40 sm:min-h-[420px]">
              <AnimatePresence>
                <motion.img
                  key={active.image}
                  src={active.image || '/placeholder.svg'}
                  alt={`${active.tab} using VisionWheel`}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease }}
                />
              </AnimatePresence>

              {/* Floating UI card — animates independently with a slight delay */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.key + '-card'}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.45, ease, delay: 0.18 }}
                  className="absolute bottom-5 left-5 right-5 rounded-sm border border-border bg-card/90 p-4 backdrop-blur-sm sm:left-6 sm:right-auto sm:w-64"
                >
                  <p className="eyebrow text-muted-foreground">{active.card.title}</p>
                  <dl className="mt-3 flex flex-col gap-2">
                    {active.card.rows.map((row) => (
                      <div key={row.label} className="flex items-center justify-between gap-4">
                        <dt className="text-xs text-muted-foreground">{row.label}</dt>
                        <dd className="font-mono text-sm font-medium text-foreground">{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </Reveal>
    </section>
  )
}
