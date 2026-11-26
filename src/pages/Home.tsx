import { ArrowDown, ArrowUpRight, MessageCircle, Phone, SearchCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSeo } from '../hooks/useSeo'
import { Button } from '../components/ui/Button'
import { CTABand } from '../components/ui/CTABand'
import { LeakBanner } from '../components/ui/LeakBanner'
import { MediaRow } from '../components/ui/MediaRow'
import { bubbleLeakVideo, leakDetectorVideo } from '../data/media'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ServiceCard } from '../components/ui/ServiceCard'
import { generalFaqs } from '../data/faqs'
import { FAQ } from '../components/ui/FAQ'
import { servicePages } from '../data/servicePages'
import { site, whatsappUrl } from '../config/site'

const projectPreview = [
  '/videos/project-page-3-poster.jpg',
  '/videos/project-page-1-poster.jpg',
  '/videos/project-page-2-poster.jpg',
  '/images/project-page-4.jpeg',
]

export default function Home() {
  useSeo('Home', 'Cold Enough – commercial refrigeration installation, repair and maintenance. Serving London and surrounding areas. Emergency response within 4 hours. F-Gas certified, City & Guilds qualified.')
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex items-center overflow-hidden pb-14 pt-28 sm:pb-20 sm:pt-36 lg:min-h-[100svh]">
        <div className="grid-bg absolute inset-0 -z-10" aria-hidden />
        <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-ice/15 blur-[140px]" aria-hidden />
        <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[24rem] w-[24rem] rounded-full bg-flame/10 blur-[140px]" aria-hidden />
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h1 className="text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Call Cold Enough,<br /><span className="bg-gradient-to-r from-ice-light via-ice to-ice-light bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">Cooling is what we do best!</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg">Commercial refrigeration installation, repair and maintenance for retail and hospitality businesses across London and surrounding areas.</p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <Button variant="emergency" href={site.phoneHref} className="col-span-2 !px-8 !py-4 !text-base"><Phone className="h-5 w-5" /> Call Now</Button>
              <Button variant="primary" to="/contact" className="!px-4 !py-4 !text-base sm:!px-8">Get a Quote</Button>
              <Button variant="ghost" href={whatsappUrl} external className="!px-4 !py-4 !text-base sm:!px-8"><MessageCircle className="h-5 w-5" /> WhatsApp</Button>
            </div>
            {/* Phones and tablets: the full card sits further down, so surface its headline on first view. */}
            <a href="#leak-repair" className="mt-5 flex items-center gap-3 rounded-2xl border border-ice/50 bg-ice/10 px-4 py-3 font-display text-sm font-semibold text-white sm:w-fit lg:hidden">
              <SearchCheck className="h-5 w-5 shrink-0 text-ice" aria-hidden />Losing gas? Tired of temporary fixes?<ArrowDown className="ml-auto h-4 w-4 shrink-0 text-ice" aria-hidden />
            </a>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-wider text-steel">
              {['F-Gas certified', 'City & Guilds qualified', 'Over 1,000 jobs completed'].map((t) => <li key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-ice" />{t}</li>)}
            </ul>
          </div>
          <LeakBanner />
        </div>
        <a href="#leak-video" aria-label="Scroll to leak detection videos" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-steel-dim transition-colors hover:text-white lg:block"><ArrowDown className="h-6 w-6 animate-bounce" /></a>
      </section>

      {/* Leak detection video */}
      <section id="leak-video" className="scroll-mt-24 border-t border-ink-600 py-20 sm:py-28">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Leak detection" title="Real leaks, found on site" intro="We use leak detection equipment to pinpoint where your system is losing gas." />
            <Reveal delay={120}><div className="mt-8"><Button variant="emergency" href={site.phoneHref}><Phone className="h-5 w-5" /> Call Now</Button></div></Reveal>
          </div>
          <MediaRow items={[leakDetectorVideo, bubbleLeakVideo]} />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="What we do" title="Refrigeration services" intro="Installation, repair and maintenance of commercial refrigeration." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {servicePages.map((s, i) => <ServiceCard key={s.slug} to={`/${s.slug}`} icon={s.icon} title={s.title} text={s.cardText} tags={s.tags} index={i} />)}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Projects" title="Featured work" intro="Over 1,000 jobs completed. Here’s a look at one in progress." />
          <Reveal className="mt-14">
            <Link to="/projects" className="card group block p-4 transition-all duration-300 hover:border-ice/60 hover:shadow-[0_0_50px_rgba(63,169,224,.18)] sm:p-6">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {projectPreview.map((src) => <img key={src} src={src} alt="" loading="lazy" decoding="async" className="aspect-[3/4] w-full rounded-xl object-cover" />)}
              </div>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-ice">In progress</p>
                  <h3 className="mt-2 text-xl font-semibold">Refrigeration pipework installation</h3>
                  <p className="mt-2 text-sm leading-relaxed">Installing and fixing copper pipework, including runs around a cold room.</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 font-display text-sm font-semibold text-white">See our projects <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden /></span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-ink-600 py-20 sm:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="FAQ" title="Common questions" intro="Serving London and surrounding areas. Monday – Saturday, 8am – 6pm, with emergency call-outs available." />
          <Reveal><FAQ items={generalFaqs} /></Reveal>
        </div>
      </section>

      <CTABand />
    </>
  )
}
