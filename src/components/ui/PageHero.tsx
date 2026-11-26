import type { ReactNode } from 'react'
import { Button } from './Button'
import { Phone, Siren } from 'lucide-react'
import { site } from '../../config/site'

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-ink-600 pt-36 pb-16 sm:pt-44 sm:pb-24">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-ice/15 blur-[120px]" aria-hidden />
      <div className="container-x relative">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">{intro}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button variant="emergency" href={site.phoneHref}><Phone className="h-4 w-4" /> Call Now</Button>
          <Button variant="ghost" to="/contact">Get a Quote</Button>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-flame-light"><Siren className="h-4 w-4" />{site.emergencyLine}</span>
        </div>
        {children}
      </div>
    </section>
  )
}
