import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { nav, services, site } from '../../config/site'
import { Button } from '../ui/Button'
import { ThemeToggle } from '../ui/ThemeToggle'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-3 whitespace-nowrap max-[359px]:gap-2 ${className}`} aria-label="Cold Enough – home">
      <img src="/logo-mark.png" alt="" width={44} height={44} className="h-11 w-11 max-[359px]:h-9 max-[359px]:w-9" />
      <span className="flex flex-col items-center leading-none">
        <span className="font-display text-lg font-bold uppercase tracking-wide text-fg max-[359px]:text-[15px]">Cold <span className="text-ice">Enough</span></span>
        <span className="mt-1.5 font-display text-[9px] font-semibold uppercase tracking-[0.12em] text-ice max-[359px]:text-[8px] max-[359px]:tracking-[0.08em]">Refrigeration Specialist</span>
      </span>
    </Link>
  )
}

const linkCls = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-fg ${isActive ? 'text-fg' : 'text-steel'}`

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', esc) }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-flame/95 text-center text-xs font-medium text-white">
        <div className="container-x flex items-center justify-center py-2 sm:justify-between">
          <span className="font-mono text-[11px] uppercase tracking-wider sm:text-xs">{site.emergencyLine}</span>
          <a href={site.phoneHref} className="hidden font-mono font-semibold hover:underline sm:inline">{site.phoneDisplay}</a>
        </div>
      </div>
      <div className={`transition-all duration-300 ${scrolled || open ? 'border-b border-ink-600 bg-ink/85 backdrop-blur-xl' : 'bg-transparent'}`}>
        <div className="container-x flex h-[4.5rem] items-center justify-between">
          <Logo />
          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            <div className="group relative">
              <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-steel transition-colors hover:text-fg" aria-haspopup="true">
                Services <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>
              <div className="invisible absolute left-0 top-full w-72 translate-y-2 pt-2 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <ul className="card overflow-hidden p-2 shadow-2xl">
                  {services.map((s) => (
                    <li key={s.path}><NavLink to={s.path} className="block rounded-lg px-4 py-3 text-sm text-steel transition-colors hover:bg-ice/10 hover:text-fg">{s.label}</NavLink></li>
                  ))}
                </ul>
              </div>
            </div>
            {nav.map((n) => <NavLink key={n.path} to={n.path} className={linkCls}>{n.label}</NavLink>)}
          </nav>
          <div className="flex items-center gap-3 max-[359px]:gap-2">
            <div className="hidden items-center gap-3 lg:flex">
              <Button variant="ghost" to="/contact">Get a Quote</Button>
              <Button variant="emergency" href={site.phoneHref}><Phone className="h-4 w-4" /> Call Now</Button>
            </div>
            <ThemeToggle />
            <button className="rounded-full border border-ink-600 p-3 text-fg max-[359px]:p-2.5 lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      <div id="mobile-menu" hidden={!open} className="fixed inset-x-0 bottom-0 top-[6.75rem] overflow-y-auto bg-ink lg:hidden">
        <nav aria-label="Mobile" className="container-x flex flex-col gap-1 py-6">
          <p className="eyebrow mb-2">Services</p>
          {services.map((s) => <NavLink key={s.path} to={s.path} className="rounded-xl px-3 py-3 font-display text-lg text-fg hover:bg-ice/10">{s.label}</NavLink>)}
          <p className="eyebrow mb-2 mt-6">Company</p>
          {nav.map((n) => <NavLink key={n.path} to={n.path} className="rounded-xl px-3 py-3 font-display text-lg text-fg hover:bg-ice/10">{n.label}</NavLink>)}
          <div className="mt-8 flex flex-col gap-3">
            <Button variant="emergency" href={site.phoneHref}><Phone className="h-4 w-4" /> Call Now – {site.phoneDisplay}</Button>
            <Button variant="ghost" to="/contact">Get a Quote</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
