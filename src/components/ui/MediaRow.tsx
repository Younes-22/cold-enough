import type { CSSProperties } from 'react'
import type { Media } from '../../data/media'
import { Reveal } from './Reveal'

/**
 * Photos and tap-to-play videos. Stacked on phones; side by side from tablet up, with
 * column widths following each aspect ratio so the row lines up without cropping.
 */
export function MediaRow({ items, className = '' }: { items: Media[]; className?: string }) {
  const cols = items.map((m) => `minmax(0, ${(m.width / m.height).toFixed(4)}fr)`).join(' ')
  return (
    <div style={{ '--cols': cols } as CSSProperties} className={`grid items-start gap-4 md:grid-cols-[var(--cols)] ${className}`}>
      {items.map((m, i) => (
        <Reveal key={m.src} delay={i * 90}>
          <figure className={`mx-auto w-full md:max-w-none ${m.height > m.width ? 'max-w-sm' : ''}`}>
            {m.poster ? (
              // Nothing but the cover image downloads until the visitor presses play.
              <video controls muted playsInline preload="none" width={m.width} height={m.height} poster={m.poster} aria-label={m.alt} style={{ aspectRatio: `${m.width} / ${m.height}` }} className="h-auto w-full rounded-xl2 border border-ink-600 bg-ink-900">
                <source src={m.src} type="video/mp4" />
              </video>
            ) : (
              <img src={m.src} alt={m.alt} width={m.width} height={m.height} loading="lazy" decoding="async" className="h-auto w-full rounded-xl2 border border-ink-600" />
            )}
            <figcaption className="mt-3 text-center text-sm">{m.caption}</figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  )
}
