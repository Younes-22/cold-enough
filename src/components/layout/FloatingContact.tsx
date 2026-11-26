import { Link } from 'react-router-dom'
import { FileText, MessageCircle, Phone } from 'lucide-react'
import { site, whatsappUrl } from '../../config/site'

/** Phones: fixed bottom action bar. Desktop: single WhatsApp bubble. */
export function FloatingContact() {
  return (
    <>
      <nav aria-label="Quick contact" className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-600 bg-ink/95 backdrop-blur-xl lg:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <div className="grid grid-cols-3 gap-2 px-3 py-2.5">
          <a href={site.phoneHref} className="flex h-12 items-center justify-center gap-2 rounded-full bg-flame font-display text-sm font-semibold text-fg active:scale-95"><Phone className="h-4 w-4" />Call</a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] font-display text-sm font-semibold text-white active:scale-95"><MessageCircle className="h-4 w-4" />WhatsApp</a>
          <Link to="/contact" className="flex h-12 items-center justify-center gap-2 rounded-full bg-fg font-display text-sm font-semibold text-ink active:scale-95"><FileText className="h-4 w-4" />Quote</Link>
        </div>
      </nav>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with Cold Enough on WhatsApp" className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 lg:flex"><MessageCircle className="h-7 w-7" /></a>
    </>
  )
}
