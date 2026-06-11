const items = [
  'Brand Identity',
  'Web Design',
  'Product Design',
  'Motion',
  'Art Direction',
  'Development',
  'Strategy',
  'Campaigns',
]

function Row() {
  return (
    <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
      {items.map((item) => (
        <span key={item} className="flex items-center gap-10">
          <span className="font-display text-2xl font-bold text-white/80 sm:text-4xl">
            {item}
          </span>
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-pink to-cyan" />
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <section className="border-y border-white/5 py-8" aria-label="What we do">
      <div className="flex overflow-hidden">
        {/* duplicated row so the loop is seamless */}
        <Row />
        <Row />
      </div>
    </section>
  )
}
