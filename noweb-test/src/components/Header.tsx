import { useUiStore } from '../store/useUiStore'

export default function Header() {
  const open = useUiStore((s) => s.openSearch)
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        
        <div className="font-bold tracking-tight">NEX</div>

        
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          <a href="#services" className="hover:text-black">Services</a>
          <a href="#workflow" className="hover:text-black">How we work</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>
        
        
        <div className="flex items-center gap-3">
          <button onClick={open} className="px-3 py-1.5 rounded-full border hover:bg-zinc-50 text-sm">
            Buscar CEP
          </button>
          <a href="#cta" className="px-4 py-1.5 rounded-full bg-primary text-black font-medium text-sm">
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  )
}