import { Navigate } from 'react-router-dom'
import { CheckCircle2, Siren, Snowflake } from 'lucide-react'
import { generalFaqs } from '../data/faqs'
import { servicePages } from '../data/servicePages'
import { useSeo } from '../hooks/useSeo'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'
import { FAQ } from '../components/ui/FAQ'
import { CTABand } from '../components/ui/CTABand'
import { ImageSlot } from '../components/ui/ImageSlot'
import { Button } from '../components/ui/Button'
import { MediaRow } from '../components/ui/MediaRow'
import { site } from '../config/site'

export default function ServicePage({ slug }: { slug: string }) {
  const p = servicePages.find((s) => s.slug === slug)
  useSeo(p?.title ?? '', p?.seoDescription ?? '')
  if (!p) return <Navigate to="/" replace />
  const Icon = p.icon
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.heroTitle} intro={p.intro} />
      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="What we do" title={p.featuresTitle} />
          <div className={`mt-12 grid gap-10 ${p.image ? 'lg:grid-cols-[1.4fr_1fr]' : ''}`}>
            <div className="grid gap-4 sm:grid-cols-2">
              {p.features.map((f, i) => (
                <Reveal key={f.title} delay={i * 70}>
                  <div className="card h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ice/60">
                    <Icon className="h-6 w-6 text-ice" aria-hidden />
                    <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed">{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            {p.image && <Reveal><div className="card h-full min-h-[20rem] overflow-hidden"><ImageSlot src={p.image.src} label={p.image.label} alt={p.image.alt} /></div></Reveal>}
          </div>
          {p.showcase && (
            <Reveal className="mt-4">
              <div className="card p-6 transition-colors duration-300 hover:border-ice/60">
                <Icon className="h-6 w-6 text-ice" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold">{p.showcase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{p.showcase.text}</p>
                {/* Column widths follow each photo's aspect ratio (4:3, 3:4, 4:3), so the row lines up without cropping. */}
                <div className="mt-6 grid gap-3 md:grid-cols-[16fr_9fr_16fr]">
                  {p.showcase.photos.map((img) => <img key={img.src} {...img} loading="lazy" decoding="async" className="h-auto w-full rounded-xl" />)}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {p.why && (
        <section className="border-t border-ink-600 py-16 sm:py-24">
          <div className="container-x">
            <SectionHeading eyebrow="Planned maintenance" title={p.why.title} intro={p.why.intro} />
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {p.why.points.map((point, i) => (
                <li key={point.title}>
                  <Reveal delay={i * 70} className="h-full">
                    <div className="card h-full p-6"><CheckCircle2 className="h-6 w-6 text-ice" aria-hidden /><h3 className="mt-4 text-lg font-semibold">{point.title}</h3><p className="mt-2 text-sm leading-relaxed">{point.text}</p></div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {p.causes && (
        <section className="border-t border-ink-600 py-16 sm:py-24">
          <div className="container-x">
            <SectionHeading eyebrow="Ice build-up" title={p.causes.title} intro={p.causes.intro} />
            <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1.6fr_1fr]">
              <Reveal>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {p.causes.items.map((item) => <li key={item} className="card flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-white"><Snowflake className="h-5 w-5 shrink-0 text-ice" aria-hidden />{item}</li>)}
                </ul>
                <p className="mt-4 text-sm">{p.causes.more}</p>
              </Reveal>
              <Reveal delay={120}>
                <div className="rounded-3xl border border-ice/50 bg-ink-800/90 p-6 sm:p-8">
                  <h3 className="text-2xl font-bold leading-tight">{p.causes.closingTitle}</h3>
                  <p className="mt-4 text-sm leading-relaxed">{p.causes.closingText}</p>
                  <div className="mt-6"><Button variant="emergency" href={site.phoneHref}>Call {site.phoneDisplay}</Button></div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {p.gallery && (
        <section className="pb-16 sm:pb-24">
          <div className="container-x">
            <SectionHeading eyebrow="On site" title={p.gallery.title} intro={p.gallery.intro} />
            <MediaRow items={p.gallery.items} className={`mt-12 ${p.gallery.items.length < 3 ? 'mx-auto max-w-4xl' : ''}`} />
          </div>
        </section>
      )}

      {p.emergency && (
        <section className="pb-16 sm:pb-24">
          <div className="container-x">
            <Reveal>
              <div className="flex flex-col gap-6 rounded-3xl border border-flame/40 bg-gradient-to-r from-flame/15 to-transparent p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
                <div className="flex gap-4">
                  <Siren className="mt-1 h-8 w-8 shrink-0 text-flame" aria-hidden />
                  <div><h2 className="text-2xl font-semibold">{p.emergency.title}</h2><p className="mt-2 max-w-xl text-sm leading-relaxed">{p.emergency.text}</p></div>
                </div>
                <Button variant="emergency" href={site.phoneHref}>Call {site.phoneDisplay}</Button>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {p.steps && (
        <section className="border-y border-ink-600 bg-ink-900 py-16 sm:py-24">
          <div className="container-x">
            <SectionHeading eyebrow="How it works" title="A simple process" />
            <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {p.steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 90}>
                  <li className="card h-full p-6"><span className="font-mono text-sm text-ice">0{i + 1}</span><h3 className="mt-3 text-lg font-semibold">{s.title}</h3><p className="mt-2 text-sm leading-relaxed">{s.text}</p></li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <Reveal><FAQ items={[...p.faqs, ...generalFaqs.slice(0, 3)]} /></Reveal>
        </div>
      </section>
      <CTABand />
    </>
  )
}
