export default function StrategySection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
        
        <div className="md:col-span-1">
          
          <div className="space-y-4">
            <p className="uppercase text-sm text-muted">What Sets Us Apart</p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Driving Digital Success With Strategy Design
            </h2>
            <p className="text-sm text-zinc-700">
              We Believe That The Surest Measure Of Success Is When Our Partners With Us More Than Half It's More Than Just The Visuals
            </p>
          </div>
          
          
          <div className="mt-8">
            <img src="/foto9.jpg" alt="Pessoas trabalhando juntas em um laptop" className="w-full h-auto rounded-2xl" />
          </div>
        </div>

        
        <div className="md:col-span-1">
          
          <div className="mb-8">
            <img src="/foto8.jpg" alt="Pessoas em uma reunião casual" className="w-full h-auto rounded-2xl" />
          </div>

          
          <div className="space-y-4 text-sm">
            <div className="p-6 rounded-2xl border bg-zinc-50">
              <h3 className="font-semibold mb-2">Our Mission</h3>
              <p className="text-muted">
                Conduct thorough market research to the fast target audience behaviours. Submit as many design tasks
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              
              <a href="#contact" className="flex items-center justify-center w-28 h-28 rounded-full border border-black/10 text-black font-medium text-center text-sm">
                Contact Us
              </a>
              
              
              <div className="flex gap-4">
                <div className="w-28 h-28 flex flex-col items-center justify-center rounded-full bg-yellow-300/30 text-center text-xs p-2">
                  <span className="font-medium">Marketing Strategy</span>
                </div>
                <div className="w-28 h-28 flex flex-col items-center justify-center rounded-full bg-lime-300/30 text-center text-xs p-2">
                  <span className="font-medium">UX/UI Solution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}