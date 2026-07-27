import { Gamepad2, Glasses, ScanEye } from 'lucide-react'
import { Reveal } from './reveal'

const STEPS = [
  {
    n: '01',
    title: 'Wear',
    icon: Glasses,
    body: 'VisionLens fits like standard eyewear, positioning its electrodes beside the eyes to capture signals reliably without cameras or external mounts.',
  },
  {
    n: '02',
    title: 'Learn',
    icon: ScanEye,
    body: 'Nine calibration targets teach the on-device model your unique gaze in under a minute. No technician required.',
  },
  {
    n: '03',
    title: 'Control',
    icon: Gamepad2,
    body: 'Use deliberate eye movements to steer. Look left and right to turn, or triple-blink to brake, while onboard obstacle detection provides an additional safety layer.',
  },
]

export function Calibration() {
  return (
    <section id="calibration" className="border-b border-border px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
      <div className="max-w-2xl">
        <Reveal>
          <p className="eyebrow text-accent">SETUP · 60 SECONDS</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            It learns you, not the other way around.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Every eye is different. VisionWheel builds a personal gaze model on
            the device itself and adapts to your natural gaze patterns—all
            locally, without cameras or cloud processing.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
        {STEPS.map((s, i) => {
          const Icon = s.icon

          return (
            <Reveal key={s.n} delay={i * 100} className="relative bg-card p-7">
              <div>
                <span className="font-mono text-2xl text-foreground">{s.n}</span>
              </div>
              <div className="absolute right-7 top-7 flex h-12 w-12 items-center justify-center rounded-sm border border-foreground/25 bg-background text-foreground">
                <Icon className="h-8 w-8" strokeWidth={1.25} aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-medium tracking-tight text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
