export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 sm:flex-row">
        <a href="#top" className="font-display text-2xl font-extrabold">
          NOVA<span className="text-pink">.</span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="tel:+15302310056"
            className="text-sm font-medium text-white/55 transition-colors duration-200 hover:text-white"
          >
            (530) 231-0056
          </a>
          <a
            href="mailto:barceros.santiago@gmail.com"
            className="text-sm font-medium text-white/55 transition-colors duration-200 hover:text-white"
          >
            barceros.santiago@gmail.com
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-white/55 transition-colors duration-200 hover:text-white"
          >
            Instagram
          </a>
        </nav>

        <p className="text-sm text-white/40">© {2026} NOVA Studio</p>
      </div>
    </footer>
  )
}
