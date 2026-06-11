import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import Reveal from './Reveal'
import Magnetic from './Magnetic'

/* Tilts toward the cursor in 3D — drag your mouse over it */
function TiltDemo() {
  const ref = useRef(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 150, damping: 12 })
  const sry = useSpring(ry, { stiffness: 150, damping: 12 })

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    ry.set(px * 24)
    rx.set(-py * 24)
  }
  const reset = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <div className="flex h-full items-center justify-center" style={{ perspective: 600 }}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ rotateX: srx, rotateY: sry }}
        className="h-20 w-20 cursor-pointer rounded-2xl bg-gradient-to-br from-pink via-violet to-cyan shadow-2xl shadow-violet/30"
      />
    </div>
  )
}

/* Hover the pill — it leans toward your cursor */
function MagneticDemo() {
  return (
    <div className="flex h-full items-center justify-center">
      <Magnetic strength={0.6}>
        <div className="cursor-pointer rounded-full bg-gradient-to-r from-pink to-cyan px-6 py-2.5 text-sm font-semibold text-white">
          Hover me
        </div>
      </Magnetic>
    </div>
  )
}

/* Loops bars sliding/fading in like scroll-triggered content */
function RevealDemo() {
  return (
    <div className="flex h-full flex-col justify-center gap-2.5 px-6">
      {[70, 50, 30].map((w, i) => (
        <motion.div
          key={i}
          className="h-3 rounded-full bg-gradient-to-r from-pink to-cyan"
          style={{ width: `${w}%` }}
          animate={{ opacity: [0, 1, 1, 0], y: [14, 0, 0, 14] }}
          transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.2, times: [0, 0.3, 0.8, 1] }}
        />
      ))}
    </div>
  )
}

/* A dot drifting along a track with eased, weighted motion */
function ScrollDemo() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative h-24 w-1 rounded-full bg-white/10">
        <motion.div
          className="absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan to-violet shadow-[0_0_12px] shadow-cyan"
          animate={{ y: [0, 84, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

/* A morphing, glowing gradient blob */
function AuroraDemo() {
  return (
    <div className="flex h-full items-center justify-center overflow-hidden">
      <motion.div
        className="h-20 w-20 rounded-full bg-gradient-to-br from-pink via-violet to-cyan blur-xl"
        animate={{ scale: [1, 1.35, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

/* Counts up and fills a bar once it's scrolled into view */
function DataDemo() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / 1200, 1)
      setN(Math.round((1 - Math.pow(1 - p, 3)) * 87))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView])

  return (
    <div ref={ref} className="flex h-full flex-col items-center justify-center gap-3">
      <span className="text-aurora aurora-move font-display text-4xl font-extrabold leading-tight">
        {n}%
      </span>
      <div className="h-2 w-32 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-pink to-cyan"
          initial={{ width: 0 }}
          animate={inView ? { width: '87%' } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

const items = [
  {
    title: '3D Tilt Elements',
    body: 'Cards and visuals that respond to your cursor with real depth — not just a flat hover state.',
    Demo: TiltDemo,
  },
  {
    title: 'Magnetic Buttons',
    body: 'Buttons and links that lean toward your cursor for a tactile, premium feel.',
    Demo: MagneticDemo,
  },
  {
    title: 'Scroll-Triggered Reveals',
    body: 'Content animates in as it enters the viewport — nothing static, nothing boring.',
    Demo: RevealDemo,
  },
  {
    title: 'Buttery Smooth Scroll',
    body: 'Every scroll feels weighted and intentional, not jumpy or instant.',
    Demo: ScrollDemo,
  },
  {
    title: 'Living Gradients',
    body: 'Flowing, animated color fields that give your brand atmosphere and depth.',
    Demo: AuroraDemo,
  },
  {
    title: 'Animated Stats & Charts',
    body: 'Numbers that count up and bars that grow — make your data feel alive.',
    Demo: DataDemo,
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <Reveal>
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan">
          What's possible
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
          Everything your site <span className="text-aurora aurora-move">can do.</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ title, body, Demo }, i) => (
          <Reveal key={title} delay={i * 0.06}>
            <article className="glass group h-full overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1">
              <div className="h-36 border-b border-white/5 bg-black/20">
                <Demo />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-white/60">{body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
