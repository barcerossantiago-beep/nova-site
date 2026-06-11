import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Magnetic from './Magnetic'

const links = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Services', href: '#services' },
  { label: 'Studio', href: '#stats' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-3 top-3 z-50 sm:inset-x-4 sm:top-4"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled ? 'glass shadow-lg shadow-black/40' : 'bg-transparent'
        }`}
      >
        <a href="#top" className="font-display text-xl font-extrabold tracking-tight">
          NOVA<span className="text-pink">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-pink to-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <Magnetic strength={0.5}>
          <a
            href="mailto:barceros.santiago@gmail.com"
            className="inline-flex cursor-pointer items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-pink hover:text-white"
          >
            Start a project
          </a>
        </Magnetic>
      </nav>
    </motion.header>
  )
}
