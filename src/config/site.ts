export const site = {
  name: 'Cold Enough',
  domain: 'coldenough.co.uk',
  slogan: 'Call Cold Enough, Cooling is what we do best!',
  phoneDisplay: '01322 842594',
  phoneHref: 'tel:+441322842594',
  mobileDisplay: '07468 605566',
  mobileHref: 'tel:+447468605566',
  hours: 'Monday – Saturday: 8am – 6pm',
  hoursNote: 'Emergency call-outs available',
  serviceArea: 'London and surrounding areas',
  email: 'info.coldenough@gmail.com',
  // WhatsApp number supplied by the client (07468 605566) in international format.
  whatsappNumber: '447468605566',
  whatsappMessage: "Hi Cold Enough, I'd like to enquire about your refrigeration services.",
  emergencyLine: 'Emergency response within 4 hours',
  jobsCompleted: 'Over 1,000 jobs completed',
} as const

// Enquiry form delivery (Formspree). Set VITE_FORMSPREE_ID in .env – see .env.example.
// Left empty, the form does NOT send anything and says so to the visitor.
const formspreeId = (import.meta.env.VITE_FORMSPREE_ID as string | undefined)?.trim()
export const formEndpoint = formspreeId ? `https://formspree.io/f/${formspreeId}` : ''

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`
export const mailtoUrl = `mailto:${site.email}`

export const services = [
  { path: '/commercial-refrigeration', label: 'Commercial Refrigeration' },
  { path: '/cold-rooms-freezer-rooms', label: 'Cold Rooms & Freezer Rooms' },
  { path: '/refrigeration-repairs', label: 'Refrigeration Repairs' },
  { path: '/service-maintenance', label: 'Service & Maintenance' },
] as const

export const nav = [
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
] as const
