import { Award, CheckCircle2, Clock, ShieldCheck } from 'lucide-react'
import { Reveal } from './Reveal'

const items = [
  { icon: ShieldCheck, title: 'F-Gas certified', text: 'Qualified to handle refrigerants in refrigeration systems.' },
  { icon: Award, title: 'City & Guilds qualified', text: 'Trained engineering knowledge behind every job.' },
  { icon: Clock, title: 'Emergency response within 4 hours', text: 'For breakdowns, we aim to be with you inside four hours of your call. Repair time depends on the fault.', hot: true },
  { icon: CheckCircle2, title: 'Over 1,000 jobs completed', text: 'A growing track record of refrigeration installations, repairs and maintenance.' },
]

export function Credentials() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ icon: Icon, title, text, hot }, i) => (
        <Reveal key={title} delay={i * 100}>
          <div className={`card group h-full p-6 transition-all duration-300 hover:-translate-y-1 ${hot ? 'hover:border-flame/60 hover:shadow-[0_0_40px_rgba(249,115,22,.15)]' : 'hover:border-ice/60 hover:shadow-[0_0_40px_rgba(63,169,224,.15)]'}`}>
            <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${hot ? 'bg-flame/15 text-flame' : 'bg-ice/15 text-ice'}`}><Icon className="h-6 w-6" /></span>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed">{text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
