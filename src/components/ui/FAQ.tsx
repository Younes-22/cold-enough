import { Plus } from 'lucide-react'

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-ink-600 rounded-xl2 border border-ink-600 bg-ink-800">
      {items.map((it) => (
        <details key={it.q} className="group p-5 sm:p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
            {it.q}<Plus className="h-5 w-5 shrink-0 text-ice transition-transform group-open:rotate-45" aria-hidden />
          </summary>
          <p className="mt-3 text-sm leading-relaxed">{it.a}</p>
        </details>
      ))}
    </div>
  )
}
