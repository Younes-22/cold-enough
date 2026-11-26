import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'

/** Switches between dark (default) and light mode and remembers the choice. */
export function ThemeToggle() {
  // index.html has already applied any saved choice to <html>.
  const [light, setLight] = useState(() => document.documentElement.dataset.theme === 'light')
  const label = light ? 'Switch to dark mode' : 'Switch to light mode'
  const Icon = light ? Moon : Sun

  const toggle = () => {
    const theme = light ? 'dark' : 'light'
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#05090c' : '#f6f9fb')
    try { localStorage.setItem('theme', theme) } catch { /* storage blocked: the choice lasts for this visit */ }
    setLight(!light)
  }

  return (
    <button type="button" onClick={toggle} aria-label={label} title={label} className="grid h-[2.875rem] w-[2.875rem] shrink-0 place-items-center rounded-full border border-ink-600 text-fg transition-colors hover:border-ice hover:bg-ice/10 max-[359px]:h-[2.625rem] max-[359px]:w-[2.625rem]">
      <Icon className="h-5 w-5" aria-hidden />
    </button>
  )
}
