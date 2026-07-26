'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { Reveal } from './reveal'

const ROLES = ['Provider', 'Clinic', 'Insurer', 'Family']

export function ContactFooter() {
  const [role, setRole] = useState('Provider')
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <section id="contact" className="border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Pitch */}
          <div className="flex flex-col justify-center border-border px-6 py-16 sm:px-10 sm:py-24 lg:border-r lg:px-14">
            <Reveal>
              <p className="eyebrow text-accent">Request a demo</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                See VisionWheel in action.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Tell us who you are and we’ll arrange a live walkthrough with a
                clinical specialist, tailored to your setting.
              </p>
            </Reveal>
          </div>

          {/* Form */}
          <div className="flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
            {submitted ? (
              <Reveal className="flex items-center gap-3 rounded-sm border border-border bg-card p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-accent text-accent-foreground">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">Request received.</p>
                  <p className="text-sm text-muted-foreground">
                    A specialist will reach out within one business day.
                  </p>
                </div>
              </Reveal>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="flex flex-col gap-5"
              >
                <div>
                  <span className="eyebrow text-muted-foreground">I am a</span>
                  <div className="mt-2 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-4">
                    {ROLES.map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRole(r)}
                        className={`px-3 py-2.5 text-sm font-medium transition-colors ${
                          role === r
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-card text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <Field label="Full name" id="name" type="text" placeholder="Jordan Avery" />
                <Field
                  label="Work email"
                  id="email"
                  type="email"
                  placeholder="jordan@clinic.org"
                />
                <Field
                  label="Organization"
                  id="org"
                  type="text"
                  placeholder="Northside Rehabilitation"
                  required={false}
                />

                <button
                  type="submit"
                  className="mt-1 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Request a demo
                </button>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  By submitting you agree to be contacted about VisionWheel. We
                  never sell your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 sm:px-10 lg:px-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-sm border border-foreground">
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-sm font-semibold tracking-tight text-foreground">
              VisionWheel
            </span>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {['Overview', 'Calibration', 'Architecture', 'Compliance', 'Contact'].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l}
              </a>
            ))}
          </nav>
          <p className="eyebrow text-muted-foreground/70">© 2026 VisionTech, Inc.</p>
        </div>
      </footer>
    </>
  )
}

function Field({
  label,
  id,
  type,
  placeholder,
  required = true,
}: {
  label: string
  id: string
  type: string
  placeholder: string
  required?: boolean
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="eyebrow text-muted-foreground">{label}</span>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-sm border border-border bg-card px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </label>
  )
}
