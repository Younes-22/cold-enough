import { Snowflake } from 'lucide-react'

/**
 * Image placeholder. Pass `src` once a real photo is available; until then a
 * labelled panel is shown so the layout stays accurate.
 */
export function ImageSlot({ src, alt, label, className = '' }: { src?: string; alt: string; label: string; className?: string }) {
  if (src) return <img src={src} alt={alt} loading="lazy" decoding="async" className={`h-full w-full object-cover ${className}`} />
  return (
    <div role="img" aria-label={`Placeholder: ${alt}`} className={`relative flex h-full min-h-[14rem] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-ink-700 via-ink-800 to-ink ${className}`}>
      <div className="grid-bg absolute inset-0" />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <Snowflake className="h-10 w-10 text-ice/70 animate-floaty" aria-hidden />
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel-dim">Photo placeholder</p>
        <p className="font-display text-sm text-fg/80">{label}</p>
      </div>
    </div>
  )
}
