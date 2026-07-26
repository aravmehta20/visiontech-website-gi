import { CountUp } from './count-up'
import { Reveal } from './reveal'

const STATS = [
  { value: 60, suffix: 's', label: 'Median calibration time', decimals: 0 },
  { value: 0.5, suffix: '°', label: 'Gaze accuracy', decimals: 1 },
  { value: 40, suffix: 'ms', label: 'End-to-end latency', decimals: 0 },
  { value: 100, suffix: '%', label: 'Processing on-device', decimals: 0 },
]

export function SpecStrip() {
  return (
    <section id="specs" className="border-b border-border">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 90}
            className="border-border p-6 [&:nth-child(odd)]:border-r lg:[&:not(:last-child)]:border-r lg:[&:nth-child(odd)]:border-r [&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0 sm:p-8"
          >
            <p className="font-mono text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              <CountUp to={s.value} suffix={s.suffix} decimals={s.decimals} />
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
