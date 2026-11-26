import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'

export function ServiceCard({ to, icon: Icon, title, text, tags, index }: { to: string; icon: LucideIcon; title: string; text: string; tags: string[]; index: number }) {
  return (
    <Reveal delay={index * 90} className="h-full">
      <Link to={to} className="card group relative flex h-full flex-col overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-ice/60 hover:shadow-[0_0_50px_rgba(63,169,224,.18)]">
        <span className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-ice/0 blur-3xl transition-all duration-500 group-hover:bg-ice/25" aria-hidden />
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ice/10 text-ice transition-colors group-hover:bg-ice group-hover:text-ink"><Icon className="h-6 w-6" /></span>
        <h3 className="mt-6 text-xl font-semibold">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed">{text}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {tags.map((t) => <li key={t} className="rounded-full border border-ink-600 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-steel-dim">{t}</li>)}
        </ul>
        <span className="mt-6 inline-flex items-center gap-1 font-display text-sm font-semibold text-fg">Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
      </Link>
    </Reveal>
  )
}
