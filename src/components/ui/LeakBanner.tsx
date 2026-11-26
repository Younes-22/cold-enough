import { PlayCircle, SearchCheck } from 'lucide-react'

const steps = ['Find the leak', 'Repair it', 'Pressure-test', 'Recharge']

export function LeakBanner() {
  return (
    <aside id="leak-repair" aria-labelledby="leak-heading" className="scroll-mt-28 rounded-3xl border border-ice/50 bg-ink-800/90 p-6 shadow-[0_0_60px_rgba(63,169,224,.2)] sm:p-8">
      <SearchCheck className="h-8 w-8 text-ice" aria-hidden />
      <h2 id="leak-heading" className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">Losing gas? <span className="text-ice">Tired of temporary fixes?</span></h2>
      <p className="mt-4 text-sm leading-relaxed sm:text-base">Topping up a leaking system without addressing the leak can breach F-Gas regulations. We do it properly, using advanced leak detection equipment.</p>
      <ol className="mt-5 grid grid-cols-2 gap-2">
        {steps.map((s, i) => <li key={s} className="flex items-center gap-2 rounded-xl border border-ink-600 px-3 py-2.5 text-sm font-medium text-fg"><span className="font-mono text-xs text-ice">{i + 1}</span>{s}</li>)}
      </ol>
      <p className="mt-5 font-display font-semibold text-fg">No more repeat top-ups. Just a proper repair.</p>
      <a href="#leak-video" className="mt-4 inline-flex items-center gap-2 py-1 text-sm font-semibold text-ice hover:text-fg"><PlayCircle className="h-5 w-5" aria-hidden />Watch us find a leak</a>
    </aside>
  )
}
