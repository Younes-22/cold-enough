import { Link } from 'react-router-dom'
import { Mail, MessageCircle, Phone, Smartphone } from 'lucide-react'
import { mailtoUrl, nav, services, site, whatsappUrl } from '../../config/site'
import { Logo } from './Header'

export function Footer() {
  return (
    <footer className="border-t border-ink-600 bg-ink-900">
      <div className="overflow-hidden border-b border-ink-600 py-3" aria-hidden>
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-steel-dim">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex gap-12"><span>Commercial refrigeration</span><span className="text-ice">/</span><span>Emergency response within 4 hours</span><span className="text-ice">/</span><span>F-Gas certified</span><span className="text-ice">/</span><span>City &amp; Guilds qualified</span><span className="text-ice">/</span></span>
          ))}
        </div>
      </div>
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">{site.slogan}</p>
        </div>
        <div>
          <h3 className="eyebrow !text-white">Services</h3>
          <ul className="mt-3 space-y-0.5 text-sm">{services.map((s) => <li key={s.path}><Link className="inline-block py-1.5 transition-colors hover:text-white" to={s.path}>{s.label}</Link></li>)}</ul>
        </div>
        <div>
          <h3 className="eyebrow !text-white">Company</h3>
          <ul className="mt-3 space-y-0.5 text-sm">
            <li><Link className="inline-block py-1.5 transition-colors hover:text-white" to="/">Home</Link></li>
            {nav.map((n) => <li key={n.path}><Link className="inline-block py-1.5 transition-colors hover:text-white" to={n.path}>{n.label}</Link></li>)}
          </ul>
          <h3 className="eyebrow mt-8 !text-white">Credentials</h3>
          <ul className="mt-3 space-y-0.5 text-sm"><li>F-Gas certified</li><li>City &amp; Guilds qualified</li></ul>
        </div>
        <div>
          <h3 className="eyebrow !text-white">Get in touch</h3>
          <ul className="mt-3 space-y-0.5 text-sm">
            <li><a className="inline-flex items-center gap-2 py-1.5 transition-colors hover:text-white" href={site.phoneHref}><Phone className="h-4 w-4 text-ice" />{site.phoneDisplay}</a></li>
            <li><a className="inline-flex items-center gap-2 py-1.5 transition-colors hover:text-white" href={site.mobileHref}><Smartphone className="h-4 w-4 text-ice" />{site.mobileDisplay}</a></li>
            <li><a className="inline-flex items-center gap-2 py-1.5 [overflow-wrap:anywhere] transition-colors hover:text-white" href={mailtoUrl}><Mail className="h-4 w-4 shrink-0 text-ice" />{site.email}</a></li>
            <li><a className="inline-flex items-center gap-2 py-1.5 transition-colors hover:text-white" href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4 text-ice" />WhatsApp</a></li>
          </ul>
          <p className="mt-4 text-sm">{site.hours}<br />{site.hoursNote}</p>
          <p className="mt-2 text-sm">Operating in {site.serviceArea}.</p>
          <p className="mt-4 font-mono text-xs uppercase tracking-wider text-flame-light">{site.emergencyLine}</p>
        </div>
      </div>
      <div className="border-t border-ink-600 pb-28 pt-6 lg:pb-6">
        <div className="container-x flex flex-wrap items-center justify-between gap-3 text-xs text-steel-dim">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved. {site.domain}</p>
          <p className="flex flex-wrap gap-x-5 gap-y-1"><Link className="py-1.5 hover:text-white" to="/privacy">Privacy policy</Link><span className="py-1.5">Registered 2026</span></p>
        </div>
      </div>
    </footer>
  )
}
