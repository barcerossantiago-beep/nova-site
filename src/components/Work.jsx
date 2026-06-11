import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* Dark "browser window" chrome wrapping each fake homepage mockup. */
function BrowserFrame({ children }) {
  return (
    <div className="flex h-full w-full flex-col bg-[#16161d]">
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <div className="ml-3 h-4 w-40 rounded-full bg-white/5" />
      </div>
      <div className="relative flex-1 overflow-hidden">{children}</div>
    </div>
  )
}

/* Fintech dashboard homepage */
function LumenMock() {
  return (
    <div className="flex h-full flex-col gap-4 bg-white p-5 text-gray-900 sm:gap-5 sm:p-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-pink-500 to-violet-500" />
          <div className="h-2.5 w-16 rounded-full bg-gray-200" />
        </div>
        <div className="flex gap-2">
          <div className="h-2.5 w-10 rounded-full bg-gray-100" />
          <div className="h-2.5 w-10 rounded-full bg-gray-100" />
          <div className="h-7 w-20 rounded-full bg-gray-900" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-5 w-3/4 rounded-full bg-gray-900" />
        <div className="h-5 w-1/2 rounded-full bg-gray-200" />
      </div>
      <div className="grid flex-1 grid-cols-3 gap-3">
        {['from-pink-400 to-pink-200', 'from-violet-400 to-violet-200', 'from-cyan-400 to-cyan-200'].map((g) => (
          <div key={g} className="rounded-2xl bg-gray-50 p-3">
            <div className={`h-8 w-8 rounded-xl bg-gradient-to-br ${g}`} />
            <div className="mt-3 h-2 w-12 rounded-full bg-gray-200" />
            <div className="mt-2 h-4 w-16 rounded-full bg-gray-900" />
          </div>
        ))}
      </div>
      <div className="flex h-16 items-end gap-2 rounded-2xl bg-gray-50 p-3">
        {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md bg-gradient-to-t from-pink-400 to-violet-300"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  )
}

/* SaaS product homepage */
function OrbitMock() {
  return (
    <div className="flex h-full flex-col items-center bg-white p-5 text-center text-gray-900 sm:p-7">
      <div className="flex w-full items-center justify-between">
        <div className="h-2.5 w-16 rounded-full bg-gray-900" />
        <div className="flex gap-2">
          <div className="h-2.5 w-10 rounded-full bg-gray-100" />
          <div className="h-2.5 w-10 rounded-full bg-gray-100" />
          <div className="h-2.5 w-10 rounded-full bg-gray-100" />
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center gap-3">
        <div className="h-3 w-32 rounded-full bg-cyan-100" />
        <div className="h-7 w-64 max-w-full rounded-full bg-gray-900" />
        <div className="h-7 w-48 max-w-full rounded-full bg-gray-900" />
        <div className="mt-2 h-3 w-56 max-w-full rounded-full bg-gray-200" />
        <div className="mt-4 h-9 w-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
      </div>
      <div className="mt-auto grid w-full grid-cols-3 gap-3 pt-8">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-2xl bg-gray-50 p-4">
            <div className="mx-auto h-6 w-6 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-400" />
            <div className="mx-auto mt-2 h-2 w-12 rounded-full bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  )
}

/* Dark luxury fashion homepage */
function MaisonMock() {
  return (
    <div className="flex h-full gap-4 bg-[#0d0d10] p-5 text-white sm:p-7">
      <div className="flex-1 rounded-2xl bg-gradient-to-br from-amber-300/30 via-pink-400/20 to-transparent" />
      <div className="flex flex-1 flex-col justify-center gap-3">
        <div className="h-2 w-20 rounded-full bg-amber-300/60" />
        <div className="h-6 w-full rounded-full bg-white/90" />
        <div className="h-6 w-3/4 rounded-full bg-white/90" />
        <div className="mt-2 h-2 w-full rounded-full bg-white/15" />
        <div className="h-2 w-2/3 rounded-full bg-white/15" />
        <div className="mt-4 h-9 w-28 rounded-full border border-white/30" />
      </div>
    </div>
  )
}

/* Health & wellness homepage */
function PulseMock() {
  return (
    <div className="flex h-full flex-col gap-5 bg-white p-5 text-gray-900 sm:p-7">
      <div className="flex items-center justify-between">
        <div className="h-2.5 w-16 rounded-full bg-gray-900" />
        <div className="h-7 w-20 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
      </div>
      <div className="grid flex-1 grid-cols-2 gap-4">
        <div className="flex flex-col justify-center gap-3">
          <div className="h-2.5 w-20 rounded-full bg-violet-200" />
          <div className="h-6 w-full rounded-full bg-gray-900" />
          <div className="h-6 w-4/5 rounded-full bg-gray-900" />
          <div className="mt-2 h-2 w-full rounded-full bg-gray-200" />
          <div className="h-2 w-2/3 rounded-full bg-gray-200" />
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-violet-100 to-cyan-100 p-4">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400" />
          <div className="mt-4 h-2 w-1/2 rounded-full bg-white/80" />
          <div className="mt-2 h-2 w-3/4 rounded-full bg-white/60" />
          <div className="mt-6 h-16 rounded-xl bg-white/70" />
        </div>
      </div>
    </div>
  )
}

/* Dark AI product homepage */
function VertexMock() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden bg-[#0a0a12] p-5 text-white sm:p-7">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-pink-500/40 via-violet-500/40 to-amber-400/30 blur-2xl" />
      <div className="relative z-10 flex w-full items-center justify-between">
        <div className="h-2.5 w-14 rounded-full bg-white/80" />
        <div className="h-7 w-7 rounded-full border border-white/20" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-3 text-center">
        <div className="h-2.5 w-28 rounded-full bg-white/10" />
        <div className="h-7 w-56 max-w-full rounded-full bg-white/90" />
        <div className="h-7 w-40 max-w-full rounded-full bg-white/90" />
        <div className="mt-3 h-9 w-32 rounded-full bg-gradient-to-r from-pink-500 to-amber-400" />
      </div>
    </div>
  )
}

const projects = [
  { name: 'Lumen Finance', tag: 'Brand + Web', year: '2025', Mock: LumenMock },
  { name: 'Orbit Labs', tag: 'Product Design', year: '2025', Mock: OrbitMock },
  { name: 'Maison Noir', tag: 'Identity', year: '2024', Mock: MaisonMock },
  { name: 'Pulse Health', tag: 'Web + Motion', year: '2024', Mock: PulseMock },
  { name: 'Vertex AI', tag: 'Brand System', year: '2024', Mock: VertexMock },
]

export default function Work() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const ctx = gsap.context(() => {
      const track = trackRef.current
      // distance the track must travel to reveal its overflow
      const getScrollAmount = () => track.scrollWidth - window.innerWidth + 64

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
      })

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${getScrollAmount()}`,
        pin: true,
        scrub: 1,
        animation: tween,
        invalidateOnRefresh: true,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="work" ref={sectionRef} className="relative overflow-hidden scroll-mt-24">
      <div className="flex items-center px-6 pt-24">
        <div className="mx-auto w-full max-w-6xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan">
            Selected work
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">
            Recent <span className="text-aurora aurora-move">projects.</span>
          </h2>
        </div>
      </div>

      <div className="flex items-center py-16">
        <div ref={trackRef} className="flex gap-6 px-8 will-change-transform">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group relative h-[60vh] w-[78vw] shrink-0 cursor-pointer overflow-hidden rounded-3xl shadow-xl shadow-black/30 sm:w-[46vw] lg:w-[34vw]"
            >
              <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
                <BrowserFrame>
                  <p.Mock />
                </BrowserFrame>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 pt-20">
                <div className="flex items-center justify-between text-sm font-medium text-white/80">
                  <span className="rounded-full bg-white/10 px-3 py-1 backdrop-blur">{p.tag}</span>
                  <span>{p.year}</span>
                </div>
                <h3 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                  {p.name}
                </h3>
                <span className="mt-3 inline-flex translate-y-2 items-center gap-2 text-white/90 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  View case study
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
