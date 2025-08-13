const cards = [
  { title:'Web Design and Development', desc:'Established in 1995, NEXIN has been a leading force...' },
  { title:'Branding and Creative Services', desc:'Established in 1995, NEXIN has been a leading force...' },
  { title:'Creative Digital Agency', desc:'Established in 1995, NEXIN has been a leading force...' },
]
export default function Services() {
  return (
    <section id="services" className="py-16 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Empowering Brands Through Strategic Digital Services</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <article key={c.title} className="p-6 rounded-2xl border bg-white">
              <h3 className="font-medium">{c.title}</h3>
              <p className="mt-2 text-sm text-muted">{c.desc}</p>
            </article>
          ))}
        </div>
        
        
        <div className="mt-12 relative w-full h-96 rounded-2xl overflow-hidden">
          
          <img
            src="/foto6.jpg" 
            alt="Pessoas em uma sala de reunião"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-black/60" />
          
          
          <div className="absolute inset-0 flex items-center justify-center">
            <a href="#" className="flex items-center justify-center w-28 h-28 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-sm text-white transition-colors duration-300">
              <span className="text-sm">PLAY VIDEO</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
