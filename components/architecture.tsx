import Image from 'next/image'
import { Reveal } from './reveal'

const FLOW = [
  { k: 'Sense', v: 'EOG electrodes' },
  { k: 'Filter', v: 'Signal cleanup' },
  { k: 'Classify', v: 'Eye-movement intent' },
  { k: 'Drive', v: 'Motor command' },
]

export function Architecture() {
  return (
    <section id="architecture" className="border-b border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Module image */}
        <div className="relative flex items-center justify-center border-border bg-secondary/40 px-6 py-14 sm:px-10 lg:border-r">
          <Reveal className="relative aspect-[4/3] w-full max-w-md">
            <Image
              src="/visionwheel-glasses.png"
              alt="VisionLens eye-tracking prototype glasses with EOG electrodes"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
          </Reveal>
          <span className="eyebrow absolute bottom-5 right-6 text-muted-foreground">
            Fig. 02 — Eye-tracking prototype
          </span>
        </div>

        {/* Copy + flow */}
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-14">
          <Reveal>
            <p className="eyebrow text-accent">ARCHITECTURE · PRIVATE BY DESIGN</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Control stays on the chair.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-lg text-pretty leading-relaxed text-muted-foreground">
              An embedded AI engine processes every signal locally. Raw EOG data
              never touches the cloud, a disk, or an external server. What the
              electrodes detect stays on the device.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-stretch">
              {FLOW.map((step, i) => (
                <div key={step.k} className="flex flex-1 items-center gap-3 sm:flex-col sm:items-start">
                  <div className="flex-1 rounded-sm border border-border bg-card p-4 sm:w-full">
                    <span className="eyebrow text-muted-foreground">{`0${i + 1}`}</span>
                    <p className="mt-2 text-sm font-medium text-foreground">{step.k}</p>
                    <p className="mt-0.5 font-mono text-xs text-muted-foreground">{step.v}</p>
                  </div>
                  {i < FLOW.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="font-mono text-muted-foreground sm:hidden"
                    >
                      ↓
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
