import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'

const AUDIENCES = [
  {
    index: '01',
    title: 'Providers',
    body: 'Prescribe with confidence. Clinical evidence, fitting guides, and reimbursement codes in one place.',
    cta: 'Clinical resources',
  },
  {
    index: '02',
    title: 'Clinics',
    body: 'Fleet management, remote calibration, and patient outcome tracking across every VisionWheel you deploy.',
    cta: 'Deployment tools',
  },
  {
    index: '03',
    title: 'Insurers',
    body: 'Auditable usage data and documented outcomes that make coverage decisions straightforward.',
    cta: 'Coverage & codes',
  },
  {
    index: '04',
    title: 'Families',
    body: 'Setup in minutes, support that answers, and a device that grows with your loved one’s needs.',
    cta: 'Getting started',
  },
]

export function Audiences() {
  return (
    <section id="audiences" className="border-b border-border px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-xl">
          <Reveal>
            <p className="eyebrow text-accent">Who it serves</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              One device. Four paths to independence.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Choose your route for the resources, documentation, and support
            built for your role.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {AUDIENCES.map((a, i) => (
          <Reveal key={a.title} delay={i * 90}>
            <a
              href="#contact"
              className="group flex h-full flex-col justify-between bg-card p-7 transition-colors hover:bg-secondary/60"
            >
              <div>
                <span className="eyebrow text-muted-foreground">{a.index}</span>
                <h3 className="mt-5 text-xl font-medium tracking-tight text-foreground">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </div>
              <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                {a.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
