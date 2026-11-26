import { ArrowDown, Boxes, ClipboardCheck, MessageCircle, Phone, PhoneCall, SearchCheck, Siren, Snowflake, Thermometer, Wrench } from 'lucide-react'
import { useSeo } from '../hooks/useSeo'
import { Button } from '../components/ui/Button'
import { Credentials } from '../components/ui/Credentials'
import { CTABand } from '../components/ui/CTABand'
import { ImageSlot } from '../components/ui/ImageSlot'
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

const why = [
  { icon: Siren, title: 'Fast emergency response', text: 'Emergency response within 4 hours when refrigeration fails.' },
  { icon: ClipboardCheck, title: 'Qualified engineers', text: 'F-Gas certified and City & Guilds qualified.' },
  { icon: Snowflake, title: 'Refrigeration only', text: 'Refrigeration is all we do, so it is what we do best.' },
  { icon: PhoneCall, title: 'Easy to reach', text: 'Call, email, WhatsApp or send an enquiry online.' },
]

const projects = [
  { icon: Boxes, title: 'Retail refrigeration install', text: 'Placeholder case study – project details to be added.' },
  { icon: Snowflake, title: 'Cold room installation', text: 'Placeholder case study – project details to be added.' },
  { icon: Wrench, title: 'Emergency repair call-out', text: 'Placeholder case study – project details to be added.' },
]

export default function Home() {
  useSeo('Home', 'Cold Enough – commercial refrigeration installation, repair and maintenance. Serving London and surrounding areas. Emergency response within 4 hours. F-Gas certified, City & Guilds qualified.')
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-20 pt-36 sm:pb-24 sm:pt-40">
        <div className="grid-bg absolute inset-0 -z-10" aria-hidden />
        <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-ice/15 blur-[140px]" aria-hidden />
        <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[24rem] w-[24rem] rounded-full bg-flame/10 blur-[140px]" aria-hidden />
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-flame/40 bg-flame/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-flame-light">
              <span className="h-2 w-2 rounded-full bg-flame animate-pulse" />{site.emergencyLine}
            </p>
            {/* Phones and tablets: the full card sits further down, so surface its headline on first view. */}
            <a href="#leak-repair" className="mt-4 flex items-center gap-3 rounded-2xl border border-ice/50 bg-ice/10 px-4 py-3 font-display text-sm font-semibold text-white sm:w-fit lg:hidden">
              <SearchCheck className="h-5 w-5 shrink-0 text-ice" aria-hidden />Losing gas? Tired of temporary fixes?<ArrowDown className="ml-auto h-4 w-4 shrink-0 text-ice" aria-hidden />
            </a>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Call Cold Enough,<br /><span className="bg-gradient-to-r from-ice-light via-ice to-ice-light bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">Cooling is what we do best!</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg">Commercial refrigeration installation, repair and maintenance for retail and hospitality businesses across London and surrounding areas.</p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <Button variant="emergency" href={site.phoneHref} className="col-span-2 !px-8 !py-4 !text-base"><Phone className="h-5 w-5" /> Call Now</Button>
              <Button variant="primary" to="/contact" className="!px-4 !py-4 !text-base sm:!px-8">Get a Quote</Button>
              <Button variant="ghost" href={whatsappUrl} external className="!px-4 !py-4 !text-base sm:!px-8"><MessageCircle className="h-5 w-5" /> WhatsApp</Button>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-wider text-steel">
              {['F-Gas certified', 'City & Guilds qualified', 'Over 1,000 jobs completed'].map((t) => <li key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-ice" />{t}</li>)}
            </ul>
          </div>
          <LeakBanner />
        </div>
        <a href="#services" aria-label="Scroll to services" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-steel-dim transition-colors hover:text-white sm:block"><ArrowDown className="h-6 w-6 animate-bounce" /></a>
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

      {/* Credentials */}
      <section className="border-y border-ink-600 bg-ink-900 py-12 sm:py-16" aria-label="Credentials">
        <div className="container-x"><Credentials /></div>
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

      {/* Image band */}
      <section className="pb-20 sm:pb-28" aria-label="Photography">
        <div className="container-x">
          <Reveal><div className="card h-64 overflow-hidden sm:h-96"><ImageSlot src="/images/cold-room-fresh.jpg" className="object-[50%_48%]" label="Cold room" alt="Walk-in cold room with shelving of fresh salad and prepared food" /></div></Reveal>
        </div>
      </section>

      {/* Why */}
      <section className="border-y border-ink-600 bg-ink-900 py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Why Cold Enough" title="Built around keeping you cold" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="h-full border-l border-ink-600 pl-6 transition-colors hover:border-ice">
                  <Icon className="h-7 w-7 text-ice" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Projects" title="Featured work" intro="Over 1,000 jobs completed. Case studies will appear here once project details and photography are available." />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {projects.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 90}>
                <article className="card group relative h-full overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ice/60">
                  <span className="absolute right-5 top-5 rounded-full border border-ink-600 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-steel-dim">Placeholder</span>
                  <Icon className="h-8 w-8 text-ice" aria-hidden />
                  <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section className="border-t border-ink-600 bg-ink-900 py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal><div className="card aspect-video overflow-hidden"><ImageSlot src="/images/van-pic.jpeg" label="Cold Enough van" alt="Cold Enough Refrigeration van with the company logo, services and contact details" /></div></Reveal>
          <div>
            <SectionHeading eyebrow="Engineering" title="Qualified hands on every job" intro="Refrigeration work calls for proper training. Our engineering is F-Gas certified and City & Guilds qualified." />
            <Reveal delay={120}><div className="mt-8 flex items-center gap-3 text-sm"><Thermometer className="h-5 w-5 text-ice" aria-hidden />Installation, repair and planned maintenance, all refrigeration.</div></Reveal>
            <Reveal delay={180}><div className="mt-8"><Button variant="ghost" to="/about">About Cold Enough</Button></div></Reveal>
          </div>
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
