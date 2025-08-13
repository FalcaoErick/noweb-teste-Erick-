export default function Hero() {
  return (
    <section className="bg-white py-16">
      <div className="px-4 flex flex-col items-center text-center">
        <div className="space-y-4 max-w-2xl mb-12">
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-tight">
            Digital
            Solution
          </h1>
          <p className="max-w-prose text-zinc-700">
            We believe that the surest measure of success is when our partners grow with us.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="#services" className="px-5 py-2 rounded-full bg-primary text-black font-medium">
              View All Services
            </a>
            <a href="#about" className="px-5 py-2 rounded-full border hover:bg-zinc-100">
              More About Us
            </a>
          </div>
        </div>

        <div className="mt-12 w-full">
          <div className="flex justify-center">
            <img 
              src="/foto10.jpg" 
              alt="Pessoas colaborando em um laptop" 
              className="w-full max-w-4xl h-auto rounded-3xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}