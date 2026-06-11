import Reveal from './Reveal'

const Icon = ({ path }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d={path} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const services = [
  {
    title: 'Brand Identity',
    body: 'Names, logos, systems and the strategy underneath them. Identities built to scale across every surface.',
    path: 'M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z',
    span: 'md:col-span-2',
    glow: 'from-pink/25',
  },
  {
    title: 'Web & Digital',
    body: 'Sites and platforms that feel alive — fast, accessible and animated with intent.',
    path: 'M3 5h18v14H3zM3 9h18M7 13h6',
    span: '',
    glow: 'from-cyan/25',
  },
  {
    title: 'Product Design',
    body: 'From flows to pixels — interfaces people actually want to use.',
    path: 'M4 4h16v12H4zM8 20h8M12 16v4',
    span: '',
    glow: 'from-violet/25',
  },
  {
    title: 'Motion & 3D',
    body: 'Story-driven motion, micro-interactions and dimensional visuals that hold attention.',
    path: 'M5 3v18l15-9z',
    span: 'md:col-span-2',
    glow: 'from-amber/25',
  },
]

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <Reveal>
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-soft">
          What we do
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
          A full studio, <span className="text-aurora aurora-move">under one roof.</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08} className={s.span}>
            <article
              className={`group glass relative h-full cursor-pointer overflow-hidden rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1`}
            >
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${s.glow} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="relative">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Icon path={s.path} />
                </div>
                <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 max-w-md text-white/60">{s.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
