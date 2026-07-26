import { Reveal } from './reveal'

const STEPS = [
  {
    n: '01',
    title: 'Position',
    body: 'The VW-3 bar mounts below any display and finds the user’s eyes automatically, at any seating angle.',
  },
  {
    n: '02',
    title: 'Learn',
    body: 'Nine calibration targets teach the on-device model your unique gaze in under a minute. No technician required.',
  },
  {
    n: '03',
    title: 'Control',
    body: 'Look to move, dwell to select. Type, browse, call for help, or drive a wheelchair, entirely hands-free.',
  },
]

export function Calibration() {
  return (
    <section id="calibration" className="border-b border-border px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
      <div className="max-w-2xl">
        <Reveal>
          <p className="eyebrow text-accent">Setup · 60 seconds</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            It learns you, not the other way around.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Every eye is different. VisionWheel builds a personal gaze model on
            the device itself, adapting to glasses, lighting, and head movement
            without ever sending an image to the cloud.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 100} className="bg-card p-7">
            <div className="flex items-center justify-between">
              <span className="font-mono text-2xl text-foreground">{s.n}</span>
              <span className="h-px w-10 bg-border" />
            </div>
            <h3 className="mt-6 text-lg font-medium tracking-tight text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
