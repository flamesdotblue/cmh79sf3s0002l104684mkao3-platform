import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black pointer-events-none" />

      <header className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-white" />
            <span className="text-lg font-semibold tracking-tight">DM Route</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#how-it-works" className="hover:text-white transition">How it works</a>
            <a href="#cta" className="hover:text-white transition">Pricing</a>
            <a href="#cta" className="px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-transparent hover:text-white border border-white/20 transition">Connect Instagram</a>
          </nav>
        </div>
      </header>

      <div className="relative z-10 pt-20 pb-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-8 items-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="md:col-span-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-[-0.02em]">
              Automate Instagram DMs and Comments with elegance
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/70 max-w-2xl">
              DM Route connects to your Instagram so you can reply instantly, 24/7. Build flows for common questions, route conversations, and never miss a lead again.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-black font-medium hover:bg-transparent hover:text-white border border-white/20 transition">
                Connect Instagram
              </a>
              <a href="#how-it-works" className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-transparent text-white font-medium border border-white/20 hover:border-white/40 transition">
                See how it works
              </a>
            </div>
            <div className="mt-6 text-xs text-white/50">
              No password stored. Official API connection.
            </div>
          </motion.div>
          <div className="md:col-span-4" />
        </div>
      </div>
    </section>
  );
}
