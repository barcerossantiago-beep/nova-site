import Reveal from './Reveal'
import Magnetic from './Magnetic'

export default function CTA() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-28">
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 px-8 py-20 text-center sm:py-28">
          {/* animated aurora field behind the card */}
          <div className="aurora-move absolute inset-0 -z-10 bg-[radial-gradient(40rem_20rem_at_30%_20%,rgba(236,72,153,0.35),transparent),radial-gradient(40rem_20rem_at_70%_80%,rgba(6,182,212,0.3),transparent),radial-gradient(30rem_20rem_at_50%_50%,rgba(139,92,246,0.3),transparent)]" />

          <h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-6xl">
            Let's make something
            <br />
            worth staring at.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            Tell us what you're building. We'll bring the craft, the strategy and the
            obsessive attention to detail.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Magnetic strength={0.45}>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=barceros.santiago@gmail.com&su=New%20project%20inquiry"
                target="_blank"
                rel="noreferrer"
                className="inline-flex cursor-pointer items-center rounded-full bg-white px-8 py-4 font-semibold text-ink transition-colors duration-200 hover:bg-pink hover:text-white"
              >
                Start a project
              </a>
            </Magnetic>
            <a
              href="sms:+15302310056"
              className="text-sm font-medium text-white/70 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline"
            >
              Text (530) 231-0056
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
