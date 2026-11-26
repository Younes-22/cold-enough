import { CheckCircle2 } from 'lucide-react'
import { useSeo } from '../hooks/useSeo'
import { Button } from '../components/ui/Button'
import { CTABand } from '../components/ui/CTABand'
import { MediaRow } from '../components/ui/MediaRow'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import type { Media } from '../data/media'

const video = (n: number, alt: string, caption: string): Media => ({ src: `/videos/project-page-${n}.mp4`, poster: `/videos/project-page-${n}-poster.jpg`, width: 576, height: 1024, alt, caption })

const pipeworkProject: Media[] = [
  video(1, 'Walk round a plant area with pipe runs, wrapped units and a cold room', 'A look around the site.'),
  video(2, 'Copper pipe runs on wall-mounted tray, partly insulated', 'Pipe runs and insulation.'),
  video(3, 'Copper pipework routed around and over cold room panels', 'Pipework around the cold room.'),
  { src: '/images/project-page-4.jpeg', width: 739, height: 1600, alt: 'Copper elbows, couplings and P-traps laid out before installation', caption: 'Fittings and P-traps ready to install.' },
]

const pipework = [
  ['Clean, dry pipe', 'Keeping pipe ends sealed until they are joined helps keep out moisture and dirt.'],
  ['Nitrogen while brazing', 'Flowing oxygen-free nitrogen through the pipe stops scale forming inside it.'],
  ['Designed for oil return', 'Correct pipe sizes, falls and traps help oil get back to the compressor.'],
  ['Solid support', 'Well-clipped pipework limits vibration and strain on joints.'],
  ['Proper insulation', 'Insulating cold pipes limits heat gain, condensation and ice.'],
  ['Test before charging', 'Pressure testing finds leaks, and evacuating the system removes air and moisture.'],
]

const tips = [
  ['Give it room to breathe', 'Keep condensers clean and clear, and don’t stack stock against fans or air vents.'],
  ['Look after the doors', 'Close them promptly and replace damaged seals.'],
  ['Check temperatures daily', 'A written log helps you spot a slow change before it becomes a breakdown.'],
  ['Act on warning signs', 'Ice build-up, new noises or constant running are worth getting checked early.'],
]

export default function Projects() {
  useSeo('Projects', 'Refrigeration projects by Cold Enough, including pipework installation, plus good practice for refrigeration pipework and equipment care.')
  return (
    <>
      <PageHero eyebrow="Projects" title="Work we’re doing and have done." intro="A look at our refrigeration work on site, and what goes into doing it properly." />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="In progress" title="Refrigeration pipework installation" intro="Installing and fixing copper pipework: running it along tray and around a cold room, and insulating it." />
          <MediaRow items={pipeworkProject} className="mt-12" />
        </div>
      </section>

      <section className="border-y border-ink-600 bg-ink-900 py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Best practice" title="What good pipework involves" intro="Much of a system’s reliability comes down to work you rarely see once it is finished." />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pipework.map(([t, d], i) => (
              <li key={t}><Reveal delay={i * 70} className="h-full"><div className="card h-full p-6"><span className="font-mono text-sm text-ice">0{i + 1}</span><h3 className="mt-3 text-lg font-semibold">{t}</h3><p className="mt-2 text-sm leading-relaxed">{d}</p></div></Reveal></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="For business owners" title="Looking after your refrigeration" intro="Simple habits that help between service visits." />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {tips.map(([t, d], i) => (
              <li key={t}><Reveal delay={i * 70} className="h-full"><div className="card h-full p-6"><CheckCircle2 className="h-6 w-6 text-ice" aria-hidden /><h3 className="mt-4 text-lg font-semibold">{t}</h3><p className="mt-2 text-sm leading-relaxed">{d}</p></div></Reveal></li>
            ))}
          </ul>
          <div className="mt-10"><Button variant="ghost" to="/service-maintenance">Service &amp; maintenance</Button></div>
        </div>
      </section>

      <CTABand title="Planning an installation? Talk to Cold Enough." />
    </>
  )
}
