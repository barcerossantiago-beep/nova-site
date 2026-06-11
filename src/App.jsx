import { useLenis } from './lib/useLenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Work from './components/Work'
import Stats from './components/Stats'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  useLenis()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
