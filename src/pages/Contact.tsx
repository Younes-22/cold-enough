import { Clock, Mail, MapPin, MessageCircle, Phone, Siren, Smartphone } from 'lucide-react'
import { useSeo } from '../hooks/useSeo'
import { PageHero } from '../components/ui/PageHero'
import { EnquiryForm } from '../components/EnquiryForm'
import { Reveal } from '../components/ui/Reveal'
import { mailtoUrl, site, whatsappUrl } from '../config/site'

const methods = [
  { icon: Phone, label: 'Phone', value: site.phoneDisplay, href: site.phoneHref },
  { icon: Smartphone, label: 'Mobile', value: site.mobileDisplay, href: site.mobileHref },
  { icon: Mail, label: 'Email', value: site.email, href: mailtoUrl },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: whatsappUrl, external: true },
]

export default function Contact() {
  useSeo('Contact / Get a Quote', 'Contact Cold Enough for a refrigeration quote or emergency call-out. Phone 01322 842594, mobile 07468 605566, email or WhatsApp. Serving London and surrounding areas, Monday to Saturday 8am to 6pm.')
  return (
    <>
      <PageHero eyebrow="Contact" title="Get a quote or report a breakdown." intro="Call for the fastest response, or send an enquiry and we will get back to you." />
      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            <Reveal><div className="rounded-xl2 border border-flame/40 bg-flame/10 p-6"><Siren className="h-6 w-6 text-flame" aria-hidden /><h2 className="mt-3 text-xl font-semibold">{site.emergencyLine}</h2><p className="mt-2 text-sm leading-relaxed">For breakdowns, call us. This is our response commitment, not a promise that every repair is completed within four hours.</p></div></Reveal>
            {methods.map(({ icon: Icon, label, value, href, external }, i) => (
              <Reveal key={label} delay={(i + 1) * 80}>
                <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="card group flex items-center gap-3 p-4 sm:gap-4 sm:p-5 transition-all duration-300 hover:border-ice/60 hover:shadow-[0_0_40px_rgba(63,169,224,.15)]">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ice/10 text-ice transition-colors group-hover:bg-ice group-hover:text-ink"><Icon className="h-5 w-5" /></span>
                  <span><span className="block font-mono text-[11px] uppercase tracking-wider text-steel-dim">{label}</span><span className="font-display text-sm font-semibold text-white [overflow-wrap:anywhere] min-[400px]:text-[15px] sm:text-base">{value}</span></span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={400}>
              <div className="card space-y-4 p-5 text-sm">
                <p className="flex items-start gap-3"><Clock className="mt-0.5 h-5 w-5 shrink-0 text-ice" aria-hidden /><span><span className="block font-display font-semibold text-white">{site.hours}</span>{site.hoursNote}</span></p>
                <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-ice" aria-hidden /><span><span className="block font-display font-semibold text-white">We operate in {site.serviceArea}</span>Not sure if we cover your address? Get in touch to check.</span></p>
              </div>
            </Reveal>
          </div>
          <div className="space-y-4">
            <Reveal><EnquiryForm /></Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
