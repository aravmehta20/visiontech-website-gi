import Image from 'next/image'
import { Reveal } from './reveal'

const CHIPS = [
  { k: 'Latency', v: '< 40 ms' },
  { k: 'Calibration', v: '60 s' },
  { k: 'Data path', v: 'On-device' },
  { k: 'Accuracy', v: '0.5°' },
]

export function Hero() {
  return (
    <section id="overview" className="relative border-b border-border">
      {/* corner ticks */}
      <Corner className="left-0 top-0" />
      <Corner className="right-0 top-0 rotate-90" />

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: claim */}
        <div className="flex flex-col justify-center border-border px-6 py-16 sm:px-10 lg:border-r lg:py-24 lg:pl-14">
          <Reveal>
            <p className="eyebrow text-accent">VisionWheel · Flagship product</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Independence, in the blink of an eye.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              VisionWheel translates deliberate eye movements into reliable
              wheelchair commands, giving people who cannot use a joystick a
              hands-free way to move independently. No cameras. No cloud. No
              compromise.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Request a demo
              </a>
              <a
                href="#calibration"
                className="rounded-sm border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                See how it works
              </a>
            </div>
          </Reveal>

          {/* spec chips */}
          <Reveal delay={320}>
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-4">
              {CHIPS.map((c) => (
                <div key={c.k} className="bg-card px-4 py-4">
                  <dt className="eyebrow text-muted-foreground">{c.k}</dt>
                  <dd className="mt-1.5 font-mono text-lg text-foreground">{c.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Right: product with annotations */}
        <div className="relative flex items-center justify-center bg-secondary/40 px-6 py-14 sm:px-10">
          <Reveal delay={200} className="relative w-full max-w-lg">
            <div className="relative aspect-[4/3]">
              <Image
                src="/visionwheel-chair.png"
                alt="Side profile of a powered wheelchair with navy upholstery and aluminum frame"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
            </div>

            {/* annotation lines */}
            <Annotation
              className="left-0 top-[14%]"
              label="POWERED DRIVE BASE"
              side="left"
              lineClassName="w-14"
            />
            <Annotation
              className="left-0 top-[54%]"
              label="ALUMINUM FRAME"
              side="left"
              lineClassName="w-14"
            />
          </Reveal>

          <span className="eyebrow absolute bottom-5 right-6 text-muted-foreground">
            Fig. 01 — Powered wheelchair
          </span>
        </div>
      </div>
    </section>
  )
}

function Annotation({
  className = '',
  label,
  side,
  lineClassName = 'w-8',
}: {
  className?: string
  label: string
  side: 'left' | 'right'
  lineClassName?: string
}) {
  return (
    <div className={`absolute hidden items-center gap-2 md:flex ${className}`}>
      {side === 'right' && <span className={`h-px bg-foreground/40 ${lineClassName}`} />}
      <span className="rounded-sm border border-border bg-card px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {side === 'left' && <span className={`h-px bg-foreground/40 ${lineClassName}`} />}
    </div>
  )
}

function Corner({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-4 w-4 border-l border-t border-foreground/25 ${className}`}
    />
  )
}
