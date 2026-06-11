import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { name: 'Lumen Finance', tag: 'Brand + Web', year: '2025', from: '#ec4899', to: '#8b5cf6' },
  { name: 'Orbit Labs', tag: 'Product Design', year: '2025', from: '#06b6d4', to: '#3b82f6' },
  { name: 'Maison Noir', tag: 'Identity', year: '2024', from: '#f59e0b', to: '#ec4899' },
  { name: 'Pulse Health', tag: 'Web + Motion', year: '2024', from: '#8b5cf6', to: '#06b6d4' },
  { name: 'Vertex AI', tag: 'Brand System', year: '2024', from: '#ec4899', to: '#f59e0b' },
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
              className="group relative h-[60vh] w-[78vw] shrink-0 cursor-pointer overflow-hidden rounded-3xl sm:w-[46vw] lg:w-[34vw]"
              style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
            >
              <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0" />
              <div className="relative flex h-full flex-col justify-between p-8">
                <div className="flex items-center justify-between text-sm font-medium text-white/80">
                  <span className="rounded-full bg-black/20 px-3 py-1">{p.tag}</span>
                  <span>{p.year}</span>
                </div>
                <div>
                  <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
                    {p.name}
                  </h3>
                  <span className="mt-3 inline-flex translate-y-2 items-center gap-2 text-white/90 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    View case study
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
