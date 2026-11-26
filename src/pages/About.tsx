import { useSeo } from '../hooks/useSeo'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Credentials } from '../components/ui/Credentials'
import { CTABand } from '../components/ui/CTABand'
import { ImageSlot } from '../components/ui/ImageSlot'
import { Reveal } from '../components/ui/Reveal'
import { site } from '../config/site'

export default function About() {
  useSeo('About Us', 'About Cold Enough, a commercial refrigeration company. F-Gas certified and City & Guilds qualified, with emergency response within 4 hours.')
  return (
    <>
      <PageHero eyebrow="About us" title="Refrigeration is what we do." intro={site.slogan} />
      <section className="py-16 sm:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who we are" title="A refrigeration specialist" />
            <Reveal delay={100}>
              <div className="mt-6 space-y-4 leading-relaxed">
                <p>Cold Enough installs, repairs and maintains commercial refrigeration for businesses that depend on keeping product cold.</p>
                <p>We focus on refrigeration alone. That focus, together with F-Gas certification and City & Guilds qualification, is what we bring to every job.</p>
              </div>
            </Reveal>
          </div>
          <Reveal><div className="card aspect-video overflow-hidden"><ImageSlot src="/images/van-pic.jpeg" label="Cold Enough van" alt="Cold Enough Refrigeration van with the company logo, services and contact details" /></div></Reveal>
        </div>
      </section>
      <section className="border-y border-ink-600 bg-ink-900 py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Our approach" title="Why businesses choose Cold Enough" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[['Customer service', 'Straightforward communication by phone, email or WhatsApp.'], ['Expertise', 'Qualified engineers who understand commercial refrigeration.'], ['Reliability', 'Emergency response within 4 hours when equipment fails.']].map(([t, d], i) => (
              <Reveal key={t} delay={i * 90}><div className="card h-full p-7"><h3 className="text-xl font-semibold">{t}</h3><p className="mt-3 text-sm leading-relaxed">{d}</p></div></Reveal>
            ))}
          </div>
          <div className="mt-12"><Credentials /></div>
        </div>
      </section>
      <CTABand />
    </>
  )
}
