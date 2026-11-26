import { site } from '../config/site'
import { bubbleLeakVideo, leakDetectorVideo, type Media } from './media'
import {
  Boxes, CakeSlice, CalendarCheck, ChefHat, ClipboardCheck, Droplets, Ham, Handshake, Milk, PhoneCall, Refrigerator, ScanSearch, ShieldCheck,
  ShoppingCart, Snowflake, Store, Thermometer, ThermometerSnowflake, TriangleAlert, Wrench, type LucideIcon,
} from 'lucide-react'

export type ServicePageData = {
  slug: string; icon: LucideIcon; title: string; seoDescription: string; eyebrow: string; heroTitle: string; intro: string
  cardText: string; tags: string[]
  featuresTitle: string
  features: { icon: LucideIcon; title: string; text: string }[]
  /** Full-width feature card with photos, shown below the other features. */
  showcase?: { icon: LucideIcon; title: string; text: string; photos: { src: string; alt: string; width: number; height: number }[] }
  emergency?: { title: string; text: string }
  steps?: { title: string; text: string }[]
  faqs: { q: string; a: string }[]
  image?: { src?: string; label: string; alt: string }
  /** Checklist of common causes of a problem, with a call to action. */
  causes?: { title: string; intro: string; items: string[]; more: string; closingTitle: string; closingText: string }
  /** Section of on-site photos and videos, shown below the features. */
  gallery?: { title: string; intro: string; items: Media[] }
  /** Explainer section with short reasons, shown above the gallery. */
  why?: { title: string; intro: string; points: { title: string; text: string }[] }
}

const eResp = 'Emergency response within 4 hours. This is our response commitment, not a guarantee that every repair is finished in that time.'

export const servicePages: ServicePageData[] = [
  {
    slug: 'commercial-refrigeration', icon: Boxes, title: 'Commercial Refrigeration',
    seoDescription: 'Commercial refrigeration installation for retail and hospitality: display cabinets, multidecks, serve-over counters, fridges, freezers and supermarket pack systems.',
    eyebrow: 'Commercial Refrigeration', heroTitle: 'Commercial refrigeration for retail and hospitality.',
    intro: 'Installation of refrigeration equipment for shops, restaurants, cafés and commercial kitchens. F-Gas certified.',
    cardText: 'Display cabinets, multidecks, serve-over counters and commercial fridges and freezers.', tags: ['Display cabinets', 'Multidecks', 'Serve-over'],
    featuresTitle: 'What we install',
    features: [
      { icon: CakeSlice, title: 'Display cabinets', text: 'Refrigerated display for showing product while keeping it at temperature.' },
      { icon: Milk, title: 'Multideck refrigeration', text: 'Open-front multideck units for retail chilled aisles.' },
      { icon: Ham, title: 'Serve-over counters', text: 'Counter refrigeration for delis, bakeries, butchers and food service.' },
      { icon: Refrigerator, title: 'Commercial fridges & freezers', text: 'Upright and under-counter units for kitchens and back-of-house.' },
      { icon: Store, title: 'Retail systems', text: 'Refrigeration systems designed around how your shop trades.' },
      { icon: ChefHat, title: 'Hospitality systems', text: 'Refrigeration for restaurants, bars, cafés and catering operations.' },
    ],
    showcase: {
      icon: ShoppingCart,
      title: 'Supermarket refrigeration',
      text: 'Multi-compressor and pack systems, including CO2.',
      photos: [
        { src: '/images/supermarket-pack-system.jpg', alt: 'Refrigeration pack with five compressors, variable speed drives and a receiver vessel', width: 1600, height: 1200 },
        { src: '/images/supermarket-co2-charging.jpg', alt: 'Carbon dioxide cylinder connected by hose to a refrigeration pack', width: 1200, height: 1600 },
        { src: '/images/supermarket-control-panel.jpg', alt: 'Compressor control panel with run and fault indicator lights', width: 1600, height: 1200 },
      ],
    },
    emergency: { title: 'Equipment down mid-service?', text: eResp },
    faqs: [
      { q: 'Do you work with both retail and hospitality?', a: 'Yes. We install commercial refrigeration for retail and hospitality premises.' },
      { q: 'Can you help choose the right equipment?', a: 'Get in touch with your requirements and we will talk through suitable options.' },
    ],
  },
  {
    slug: 'cold-rooms-freezer-rooms', icon: Snowflake, title: 'Cold Rooms & Freezer Rooms',
    seoDescription: 'Cold room and freezer room installation, repairs and maintenance.',
    eyebrow: 'Cold Rooms & Freezer Rooms', heroTitle: 'Cold rooms and freezer rooms, built to fit.',
    intro: 'Walk-in cold rooms and freezer rooms installed, repaired and maintained for businesses that store product at temperature.',
    cardText: 'Cold room and freezer room installation, repairs and maintenance.', tags: ['Cold rooms', 'Freezer rooms'],
    featuresTitle: 'Cold room services',
    features: [
      { icon: ThermometerSnowflake, title: 'Cold room installation', text: 'Chilled storage rooms installed for your premises and product.' },
      { icon: Snowflake, title: 'Freezer room installation', text: 'Walk-in freezer rooms for frozen storage.' },
      { icon: Wrench, title: 'Repairs', text: 'Fault finding and repair on existing cold and freezer rooms.' },
      { icon: CalendarCheck, title: 'Maintenance', text: 'Planned servicing to keep rooms running reliably.' },
    ],
    emergency: { title: 'Cold room not holding temperature?', text: eResp },
    steps: [
      { title: 'Enquiry', text: 'Tell us what you need to store and where.' },
      { title: 'Specification', text: 'We discuss the size, temperature and requirements of the room.' },
      { title: 'Installation', text: 'Your room is installed by qualified engineers.' },
      { title: 'Ongoing support', text: 'Servicing, repairs and breakdown response afterwards.' },
    ],
    faqs: [
      { q: 'Can you repair a cold room you did not install?', a: 'Please contact us with the details and we will advise.' },
      { q: 'Do you offer maintenance for cold rooms?', a: 'Yes, repairs and maintenance are part of our cold room service.' },
    ],
    image: { src: '/images/cold-room-fresh.jpg', label: 'Cold room installation photo', alt: 'Walk-in cold room with shelving of fresh salad and prepared food' },
  },
  {
    slug: 'refrigeration-repairs', icon: Wrench, title: 'Refrigeration Repairs',
    seoDescription: 'Commercial refrigeration repairs: breakdowns, fault diagnosis, temperature control issues and refrigerant system faults. Emergency response within 4 hours.',
    eyebrow: 'Refrigeration Repairs', heroTitle: 'Refrigeration broken down? Call us now.',
    intro: 'Fast response when commercial refrigeration fails. We diagnose the fault and repair it, with emergency response within 4 hours.',
    cardText: 'Breakdowns, fault diagnosis, temperature control and refrigerant system faults.', tags: ['Breakdowns', 'Fault diagnosis', 'Emergency'],
    featuresTitle: 'Faults we repair',
    features: [
      { icon: TriangleAlert, title: 'Refrigeration breakdowns', text: 'Equipment that has stopped cooling or stopped running.' },
      { icon: ScanSearch, title: 'Fault diagnosis', text: 'Finding the root cause rather than guessing.' },
      { icon: Thermometer, title: 'Temperature control issues', text: 'Units that will not hold, reach or regulate temperature.' },
      { icon: Droplets, title: 'Refrigerant system faults', text: 'Faults in the refrigerant circuit, handled by F-Gas certified engineers.' },
    ],
    emergency: { title: 'Emergency response within 4 hours', text: 'Call us as soon as you spot a problem. ' + eResp },
    steps: [
      { title: 'Call', text: 'Phone us or message on WhatsApp and describe the fault.' },
      { title: 'Respond', text: 'Emergency response within 4 hours.' },
      { title: 'Diagnose', text: 'An engineer identifies the fault on site.' },
      { title: 'Repair', text: 'We repair what we can, or advise on next steps if parts or further work are needed.' },
    ],
    faqs: [
      { q: 'How quickly will you respond?', a: 'Our commitment is emergency response within 4 hours. It does not mean every repair will be completed in that time.' },
      { q: 'What should I do if my refrigeration breaks down?', a: `Call us on ${site.phoneDisplay} or ${site.mobileDisplay} as soon as you can and describe the fault. If food or stock is at risk, tell us when you call.` },
    ],
    causes: {
      title: 'Freezer, cold room or chiller constantly icing up?',
      intro: 'It’s a problem many businesses struggle with. Excessive ice build-up can be caused by several faults, including:',
      items: [
        'Faulty defrost heaters', 'Faulty door frame (tape) heaters', 'Faulty drain line heaters', 'Faulty pan heaters', 'Blocked drainage systems',
        'Faulty defrost probes', 'Compressors running continuously', 'Faulty evaporator fan motors', 'Incorrect defrost settings', 'Doors not closing or sealing properly',
      ],
      more: 'And many more.',
      closingTitle: 'Don’t just remove the ice – fix the cause!',
      closingText: 'We diagnose the problem, identify the root cause and carry out the necessary repairs to get your refrigeration system working efficiently again.',
    },
    gallery: {
      title: 'Faults we find on site', intro: 'Gas leaks and iced-up equipment from real call-outs.',
      items: [
        leakDetectorVideo,
        bubbleLeakVideo,
        { src: '/images/iced-up-freezer-fans.jpeg', width: 1600, height: 1200, alt: 'Freezer fans and housing covered in thick frost', caption: 'Iced-up freezer fans.' },
        { src: '/images/iced-up-freezer-testing.jpeg', width: 1200, height: 1600, alt: 'Clamp meter testing a refrigeration unit with ice built up on the pipework', caption: 'Testing an iced-up unit.' },
      ],
    },
  },
  {
    slug: 'service-maintenance', icon: Thermometer, title: 'Service & Maintenance',
    seoDescription: 'Preventative maintenance, routine servicing, inspections, breakdown support and maintenance contracts for commercial refrigeration.',
    eyebrow: 'Service & Maintenance', heroTitle: 'Keep refrigeration running, before it fails.',
    intro: 'Planned servicing and inspections help catch problems early. We also offer maintenance contracts and breakdown support.',
    cardText: 'Preventative maintenance, routine servicing, inspections and maintenance contracts.', tags: ['Preventative', 'Inspections', 'Contracts'],
    featuresTitle: 'Maintenance services',
    features: [
      { icon: ShieldCheck, title: 'Preventative maintenance', text: 'Regular scheduled servicing to reduce the chance of unexpected failure.' },
      { icon: ClipboardCheck, title: 'Refrigeration inspections', text: 'Inspection of systems and equipment condition.' },
      { icon: PhoneCall, title: 'Breakdown support', text: 'Help when something does go wrong, with emergency response within 4 hours.' },
      { icon: Handshake, title: 'Maintenance contracts', text: 'Ongoing cover arranged around your equipment. Contact us to discuss terms.' },
    ],
    emergency: { title: 'Already have a breakdown?', text: eResp },
    faqs: [
      { q: 'What do maintenance contracts include?', a: 'Contract terms are agreed per customer. Contact us to discuss what you need.' },
      { q: 'How often should refrigeration be serviced?', a: 'It depends on your equipment and use. We can advise when you get in touch.' },
    ],
    why: {
      title: 'Why PPM matters',
      intro: 'Planned preventative maintenance (PPM) means servicing your equipment on a regular schedule instead of waiting for it to break down.',
      points: [
        { title: 'Fewer breakdowns', text: 'Worn parts and developing faults can be picked up before they stop your equipment.' },
        { title: 'Protects your stock', text: 'Equipment that holds temperature reliably means less risk of spoiled food and lost trade.' },
        { title: 'Lower running costs', text: 'Clogged condensers and iced-up coils make equipment work harder and use more energy.' },
        { title: 'Longer equipment life', text: 'Clean, well-maintained equipment is under less strain.' },
        { title: 'Leaks caught early', text: 'Regular checks help find refrigerant leaks. Many systems legally require leak checks under F-Gas regulations.' },
        { title: 'Better hygiene', text: 'Cleaning clears the dirt and standing water that build up out of sight.' },
      ],
    },
    gallery: {
      title: 'What gets missed without it', intro: 'Dirt, dust and standing water hidden inside equipment.',
      items: [
        { src: '/videos/dirty-fridge-maintenance.mp4', poster: '/videos/dirty-fridge-maintenance-poster.jpg', width: 576, height: 1024, alt: 'Dirty standing water inside a refrigeration unit', caption: 'Dirty standing water inside a fridge.' },
        { src: '/images/cleaning-dirty-condenser.jpeg', width: 1600, height: 1200, alt: 'Thick mat of dust being cleared from a condenser coil', caption: 'Clearing a dust-clogged condenser.' },
      ],
    },
  },
]
