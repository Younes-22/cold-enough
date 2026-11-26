import { useState, type FormEvent } from 'react'
import { AlertTriangle, CheckCircle2, Send } from 'lucide-react'
import { Button } from './ui/Button'
import { formEndpoint, mailtoUrl, site } from '../config/site'

type Values = { name: string; phone: string; email: string; service: string; urgency: string; message: string }
type Errors = Partial<Record<keyof Values, string>>

const empty: Values = { name: '', phone: '', email: '', service: '', urgency: 'standard', message: '' }
const serviceOptions = ['Commercial refrigeration', 'Cold room / freezer room', 'Refrigeration repair', 'Service & maintenance', 'Other refrigeration enquiry']

function validate(v: Values): Errors {
  const e: Errors = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^[+\d][\d\s()-]{8,}$/.test(v.phone.trim())) e.phone = 'Please enter a valid phone number.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (!v.service) e.service = 'Please choose a service.'
  if (v.message.trim().length < 10) e.message = 'Please tell us a little more (at least 10 characters).'
  return e
}

/**
 * Delivers the enquiry via Formspree (https://formspree.io), which emails it to
 * the address registered on the Formspree form. Returns true only if Formspree
 * confirms receipt. With no endpoint configured nothing is sent.
 */
async function submitEnquiry(v: Values): Promise<boolean> {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), 15000)
  try {
    const res = await fetch(formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: `Website enquiry – ${v.service}${v.urgency === 'emergency' ? ' (EMERGENCY)' : ''}`,
        name: v.name.trim(),
        phone: v.phone.trim(),
        email: v.email.trim(),
        service: v.service,
        urgency: v.urgency === 'emergency' ? 'Emergency / breakdown' : 'Standard enquiry',
        message: v.message.trim(),
      }),
      signal: ctrl.signal,
    })
    return res.ok
  } catch {
    return false
  } finally {
    clearTimeout(timer)
  }
}

const input = 'mt-2 w-full rounded-xl border border-ink-600 bg-ink px-4 py-3 text-base text-white placeholder:text-steel-dim transition-colors focus:border-ice focus:outline-none focus:ring-2 focus:ring-ice/30 aria-[invalid=true]:border-flame'

export function EnquiryForm() {
  const [values, setValues] = useState<Values>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sent' | 'unsent' | 'failed'>('idle')

  const set = (k: keyof Values) => (e: { target: { value: string } }) => setValues((s) => ({ ...s, [k]: e.target.value }))

  const mailto = () => {
    const body = `Name: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email}\nService: ${values.service}\nUrgency: ${values.urgency === 'emergency' ? 'Emergency / breakdown' : 'Standard'}\n\n${values.message}`
    return `${mailtoUrl}?subject=${encodeURIComponent('Website enquiry – ' + values.service)}&body=${encodeURIComponent(body)}`
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) { document.getElementById(`f-${Object.keys(found)[0]}`)?.focus(); return }
    // Honeypot: real visitors never see or fill this field; bots do.
    if ((document.getElementById('f-website') as HTMLInputElement | null)?.value) { setStatus('sent'); return }
    if (!formEndpoint) { setStatus('unsent'); return }
    setBusy(true)
    const ok = await submitEnquiry(values)
    setBusy(false)
    if (ok) { setStatus('sent'); setValues(empty) } else setStatus('failed')
  }

  if (status === 'sent') {
    return (
      <div className="card p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto h-12 w-12 text-ice" />
        <h3 className="mt-4 text-2xl font-semibold">Thanks – we have your enquiry</h3>
        <p className="mt-3 text-sm leading-relaxed">We will get back to you as soon as we can. For a breakdown, calling is quicker: <a className="font-semibold text-white underline" href={site.phoneHref}>{site.phoneDisplay}</a> or <a className="font-semibold text-white underline" href={site.mobileHref}>{site.mobileDisplay}</a>.</p>
        <div className="mt-6"><Button variant="ghost" onClick={() => setStatus('idle')}>Send another enquiry</Button></div>
      </div>
    )
  }

  if (status === 'unsent') {
    return (
      <div className="card p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto h-12 w-12 text-ice" />
        <h3 className="mt-4 text-2xl font-semibold">Thanks – your details are ready to send</h3>
        <p className="mt-3 text-sm leading-relaxed">This online form is not yet connected to an inbox, so nothing has been sent. To get your enquiry to us, use the button below, or call {site.phoneDisplay} / {site.mobileDisplay}.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href={mailto()}><Send className="h-4 w-4" /> Send by email</Button>
          <Button variant="ghost" onClick={() => { setStatus('idle'); setValues(empty) }}>Start again</Button>
        </div>
      </div>
    )
  }

  const err = (k: keyof Values) => errors[k] && <p id={`e-${k}`} className="mt-1.5 text-xs text-flame-light">{errors[k]}</p>
  const a11y = (k: keyof Values) => ({ id: `f-${k}`, 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `e-${k}` : undefined })

  return (
    <form onSubmit={onSubmit} noValidate className="card relative space-y-5 overflow-hidden p-6 sm:p-8" aria-label="Enquiry form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="f-name" className="text-sm font-medium text-white">Name</label><input {...a11y('name')} autoComplete="name" className={input} value={values.name} onChange={set('name')} />{err('name')}</div>
        <div><label htmlFor="f-phone" className="text-sm font-medium text-white">Phone</label><input {...a11y('phone')} type="tel" autoComplete="tel" className={input} value={values.phone} onChange={set('phone')} />{err('phone')}</div>
      </div>
      <div><label htmlFor="f-email" className="text-sm font-medium text-white">Email</label><input {...a11y('email')} type="email" autoComplete="email" className={input} value={values.email} onChange={set('email')} />{err('email')}</div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="f-service" className="text-sm font-medium text-white">Service</label>
          <select {...a11y('service')} className={input} value={values.service} onChange={set('service')}>
            <option value="">Select…</option>{serviceOptions.map((o) => <option key={o}>{o}</option>)}
          </select>{err('service')}
        </div>
        <div>
          <label htmlFor="f-urgency" className="text-sm font-medium text-white">Urgency</label>
          <select id="f-urgency" className={input} value={values.urgency} onChange={set('urgency')}>
            <option value="standard">Standard enquiry</option><option value="emergency">Emergency / breakdown</option>
          </select>
        </div>
      </div>
      {values.urgency === 'emergency' && <p className="rounded-xl border border-flame/40 bg-flame/10 p-4 text-sm text-flame-light">Breakdown? Calling is fastest: <a className="font-semibold underline" href={site.phoneHref}>{site.phoneDisplay}</a> or <a className="font-semibold underline" href={site.mobileHref}>{site.mobileDisplay}</a>. We aim to respond to emergencies within 4 hours.</p>}
      <div><label htmlFor="f-message" className="text-sm font-medium text-white">How can we help?</label><textarea {...a11y('message')} rows={5} className={input} value={values.message} onChange={set('message')} />{err('message')}</div>
      {/* Honeypot – hidden from people and assistive tech */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden"><label htmlFor="f-website">Website</label><input id="f-website" name="website" tabIndex={-1} autoComplete="off" /></div>
      {status === 'failed' && (
        <p role="alert" className="flex gap-3 rounded-xl border border-flame/40 bg-flame/10 p-4 text-sm text-flame-light"><AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden /><span>Sorry, that did not go through. Please try again, or call <a className="font-semibold underline" href={site.phoneHref}>{site.phoneDisplay}</a>, or <a className="font-semibold underline" href={mailto()}>send it by email</a>.</span></p>
      )}
      <Button type="submit" disabled={busy} className="w-full sm:w-auto"><Send className="h-4 w-4" />{busy ? 'Sending…' : 'Submit enquiry'}</Button>
    </form>
  )
}
