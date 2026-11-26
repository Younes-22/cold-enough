import { Reveal } from './Reveal'

export function SectionHeading({ eyebrow, title, intro, center }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-steel sm:text-lg">{intro}</p>}
    </Reveal>
  )
}
