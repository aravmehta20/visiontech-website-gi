import { Reveal } from './reveal'

const ITEMS = [
  { k: 'Regulatory', v: 'FDA Class II', note: 'Cleared assistive device' },
  { k: 'Privacy', v: 'HIPAA-ready', note: 'No PHI leaves the device' },
  { k: 'Security', v: 'SOC 2 Type II', note: 'Independently audited' },
  { k: 'Quality', v: 'ISO 13485', note: 'Medical device QMS' },
]

export function Trust() {
  return (
    <section id="trust" className="border-b border-border px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
      <div className="max-w-2xl">
        <Reveal>
          <p className="eyebrow text-accent">Compliance & trust</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Held to a clinical standard.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            VisionWheel is engineered, documented, and audited to the same
            rigor as the care teams who rely on it. Certifications are current
            and available on request.
          </p>
        </Reveal>
      </div>

      <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((it, i) => (
          <Reveal key={it.k} delay={i * 90} className="bg-card p-7">
            <dt className="eyebrow text-muted-foreground">{it.k}</dt>
            <dd className="mt-3 text-lg font-medium tracking-tight text-foreground">{it.v}</dd>
            <p className="mt-1 text-sm text-muted-foreground">{it.note}</p>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}
