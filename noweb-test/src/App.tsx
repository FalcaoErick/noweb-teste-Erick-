import Header from './components/Header'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Services from './components/Services'
import Workflow from './components/Workflow'
import CtaBand from './components/CtaBand'
import Footer from './components/Footer'
import SearchCepModal from './components/SearchCepModal'
import AboutSection from './components/AboutSection'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <Metrics />
        <Services />
        <Workflow />
        <CtaBand />
      </main>
      <Footer />
      <SearchCepModal />
    </>
  )
}