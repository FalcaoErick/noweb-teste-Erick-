export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid md:grid-cols-4 gap-12 text-sm">
          
          
          <div className="md:col-span-1">
            <div className="font-bold tracking-tight text-white mb-4">NEXIN</div>
            <p className="text-muted">
              Established in 1995, NEXIN has been a leading force in the digital landscape for over two decades.
            </p>
          </div>

          
          <div className="md:col-span-1">
            <h4 className="font-medium mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-muted">
              <a href="#" className="hover:text-white">Home</a>
              <a href="#services" className="hover:text-white">Our Services</a>
              <a href="#" className="hover:text-white">Case Studies</a>
              <a href="#" className="hover:text-white">About Us</a>
              <a href="#" className="hover:text-white">Contact Us</a>
            </nav>
          </div>

          
          <div className="md:col-span-1">
            <h4 className="font-medium mb-4">Contact Info</h4>
            <div className="flex flex-col space-y-2 text-muted">
              <a href="mailto:contato@nexin.com" className="hover:text-white">contato@nexin.com</a>
              <a href="tel:+5511999999999" className="hover:text-white">+55 (11) 99999-9999</a>
              <p>Rua Exemplo, 123 - Cidade, Estado</p>
            </div>
          </div>

          
          <div className="md:col-span-1">
            <h4 className="font-medium mb-4">Follow Us</h4>
            <div className="flex flex-col space-y-2 text-muted">
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Instagram</a>
            </div>
          </div>
        </div>

        
        <div className="mt-12 pt-8 border-t border-zinc-700 text-sm text-muted flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 NEXIN. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}