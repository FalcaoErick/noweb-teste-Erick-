export default function AboutSection() {
  return (
    <section className="bg-dark text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título Principal */}
        <h2 className="text-4xl md:text-5xl font-semibold max-w-2xl leading-tight">
          We Collaborate With A Few Disability Service Providers To Create Inclusive Goods That Meet Their Requirements.
        </h2>

        {/* Blocos de Texto e Métricas */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 text-lg">
          <div>
            <div className="text-5xl font-bold mb-2">25+</div>
            <p className="text-muted">Years Of Experience</p>
          </div>
          <div className="space-y-4">
            <p className="text-muted">
              Established in 1995, NEXIN Has Been A Leading Force In The Digital Landscape For Over Two Decades. We're A Passionate Team Of Designers,
            </p>
            <p className="text-muted">
              Established in 1995, NEXIN Has Been A Leading Force In The Digital Landscape For Over Two Decades. We're A Passionate Team Of Designers,
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="flex items-center text-primary font-medium hover:underline">More About Us <span className="ml-1">→</span></a>
              <a href="#" className="flex items-center text-primary font-medium hover:underline">Get In Touch <span className="ml-1">→</span></a>
            </div>
          </div>
        </div>

        {/* Seção de Marcas/Logos */}
        <div className="mt-16 text-center">
          <p className="text-muted mb-6 text-sm">We Worked With Global Largest Brands</p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 opacity-70">
            {/* Logos */}
            <div className="w-24 md:w-32">
              <img src="/foto2.jpg" alt="Tech Logo" />
            </div>
            <div className="w-24 md:w-32">
              <img src="/foto3.jpg" alt="Technology Slogan" />
            </div>
            <div className="w-24 md:w-32">
              <img src="/foto4.jpg" alt="Technology Slogan" />
            </div>
            <div className="w-24 md:w-32">
              <img src="/foto5.jpg" alt="System Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}