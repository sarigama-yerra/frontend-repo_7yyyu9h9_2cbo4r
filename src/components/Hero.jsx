import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 flex flex-col md:flex-row items-center gap-10">
        <div className="text-center md:text-left max-w-2xl">
          <p className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-cyan-200/70 bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur">SDE • SDET • Portfolio</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Building reliable, delightful software with a testing mindset
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Personal portfolio showcasing end-to-end product engineering, automation, and quality-first delivery.
          </p>
          <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-4 py-2 rounded-lg transition-colors">
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-2 rounded-lg transition-colors border border-white/10">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
