import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'emergency' | 'ghost'
  className?: string
  external?: boolean
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-sm font-semibold transition-all duration-300 focus-visible:outline-offset-2'
const variants = {
  primary: 'bg-fg text-ink hover:bg-ice-light hover:shadow-[0_0_30px_rgba(63,169,224,.45)]',
  emergency: 'bg-flame text-white hover:bg-flame-light hover:text-ink hover:shadow-[0_0_30px_rgba(249,115,22,.5)]',
  ghost: 'border border-ink-600 bg-fg/5 text-fg backdrop-blur hover:border-ice hover:bg-ice/10',
}

export function Button({ children, to, href, variant = 'primary', className = '', external, type = 'button', disabled, onClick }: Props) {
  const cls = `${base} ${variants[variant]} ${disabled ? 'pointer-events-none opacity-60' : ''} ${className}`
  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href) return <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}</a>
  return <button type={type} className={cls} disabled={disabled} onClick={onClick}>{children}</button>
}
