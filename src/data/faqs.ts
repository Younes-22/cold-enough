import { site } from '../config/site'

/** FAQs shown on every service page and on the home page. */
export const generalFaqs = [
  { q: 'Where do you operate?', a: 'We operate in London and surrounding areas. If you are not sure whether we cover your location, please get in touch to check.' },
  { q: 'What are your opening hours?', a: `${site.hours}. ${site.hoursNote}.` },
  { q: 'Do you offer emergency call-outs?', a: `Yes, emergency call-outs are available, with ${site.emergencyLine.toLowerCase()}. That is our response commitment, not a promise that every repair will be finished in that time. Call ${site.phoneDisplay} or ${site.mobileDisplay}.` },
  { q: 'What do you work on?', a: 'Commercial refrigeration only: display cabinets, multidecks, serve-over counters, fridges and freezers, cold rooms and freezer rooms, with installation, repair and maintenance.' },
]
