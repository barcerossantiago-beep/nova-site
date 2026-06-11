import { motion } from 'framer-motion'
import Magnetic from './Magnetic'

const line1 = ['We', 'build', 'brands']
const line2 = ['that', 'refuse', 'to']
const line3 = ['blend', 'in.']

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}
const word = {
  hidden: { opacity: 0, y: '110%' },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

function Line({ words, accent = false }) {
  return (
    <span className="block overflow-hidden">
      <motion.span variants={container} className="flex flex-wrap justify-center gap-x-4">
        {words.map((w, i) => (
          <span key={i} className="overflow-hidden">
            <motion.span
              variants={word}
              className={`inline-block ${accent ? 'text-aurora aurora-move' : ''}`}
            >
              {w}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-6">
      {/* floating aurora blobs */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-[12%] top-[22%] h-72 w-72 rounded-full bg-pink/40 blur-[110px]"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 30, 0], x: [0, -25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[10%] top-[35%] h-80 w-80 rounded-full bg-cyan/30 blur-[120px]"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute bottom-[18%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet/40 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/80"
        >
          <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_12px] shadow-cyan" />
          A creative studio for ambitious teams
        </motion.div>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-display text-5xl font-extrabold leading-[0.95] sm:text-7xl md:text-8xl"
        >
          <Line words={line1} />
          <Line words={line2} />
          <Line words={line3} accent />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mx-auto mt-8 max-w-xl text-lg text-white/65"
        >
          We design and ship brand identities, websites and products with a level of
          craft your competitors will quietly envy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic strength={0.45}>
            <a
              href="#contact"
              className="aurora-move inline-flex cursor-pointer items-center rounded-full bg-gradient-to-r from-pink via-violet to-cyan px-7 py-3.5 font-semibold text-white shadow-lg shadow-pink/30 transition-shadow duration-200 hover:shadow-xl hover:shadow-violet/40"
            >
              Start a project
            </a>
          </Magnetic>
          <a
            href="#work"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white/85 transition-colors duration-200 hover:border-white/40 hover:text-white"
          >
            See our work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/40"
      >
        Scroll
      </motion.div>
    </section>
  )
}
