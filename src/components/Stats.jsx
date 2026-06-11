import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import Reveal from './Reveal'

const stats = [
  { value: 120, suffix: '+', label: 'Projects shipped' },
  { value: 38, suffix: '', label: 'Awards & mentions' },
  { value: 15, suffix: '', label: 'Countries served' },
  { value: 98, suffix: '%', label: 'Client retention' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const dur = 1400
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span
      ref={ref}
      className="text-aurora aurora-move font-display block text-5xl font-extrabold leading-[1.2] sm:text-6xl"
    >
      {n}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section id="stats" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="text-center lg:text-left">
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-2 text-sm text-white/55">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
