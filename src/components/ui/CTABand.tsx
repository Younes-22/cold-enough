import { MessageCircle, Phone } from 'lucide-react'
import { Button } from './Button'
import { Reveal } from './Reveal'
import { site, whatsappUrl } from '../../config/site'

export function CTABand({ title = 'Refrigeration problem? Talk to Cold Enough.' }: { title?: string }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-ink-600 bg-gradient-to-br from-ink-700 to-ink-800 p-8 sm:p-14">
            <div className="grid-bg absolute inset-0 opacity-60" aria-hidden />
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ice/20 blur-[100px]" aria-hidden />
            <div className="relative max-w-2xl">
              <p className="eyebrow text-flame-light">{site.emergencyLine}</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
              <p className="mt-4">{site.slogan}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="emergency" href={site.phoneHref}><Phone className="h-4 w-4" /> Call {site.phoneDisplay}</Button>
                <Button variant="ghost" href={whatsappUrl} external><MessageCircle className="h-4 w-4" /> WhatsApp</Button>
                <Button variant="ghost" to="/contact">Get a Quote</Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
