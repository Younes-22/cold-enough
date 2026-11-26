import { useSeo } from '../hooks/useSeo'
import { Button } from '../components/ui/Button'

export default function NotFound() {
  useSeo('Page not found', 'Page not found')
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-start justify-center pt-32">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">This page has gone cold.</h1>
      <div className="mt-8"><Button to="/">Back to home</Button></div>
    </section>
  )
}
