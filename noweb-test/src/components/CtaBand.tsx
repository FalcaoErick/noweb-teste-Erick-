export default function CtaBand() {
  return (
    <section id="cta" className="py-20 bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div>
          <h3 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
            Let’s Create<br />Something Great
          </h3>
          <p className="text-sm text-muted mt-4 max-w-sm">
            We Shift You From Today's Reality To Tomorrow's Potential, Ensuring
          </p>
        </div>

        
        <a href="#contact" className="w-40 h-40 flex flex-col items-center justify-center rounded-full bg-primary text-black font-medium text-center hover:bg-lime-400 transition-colors duration-300">
          <span className="text-sm">Let’s Talk</span>
          
        </a>
      </div>
    </section>
  )
}