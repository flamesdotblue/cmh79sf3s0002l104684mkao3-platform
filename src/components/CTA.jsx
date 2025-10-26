import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 text-center backdrop-blur-sm"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Start automating in minutes</h3>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Free trial included. Connect your account, set one flow, and see the impact today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#" className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-transparent hover:text-white border border-white/20 transition">
              Get Started — Free Trial
            </a>
            <a href="#" className="px-6 py-3 rounded-full bg-transparent text-white font-medium border border-white/20 hover:border-white/40 transition">
              Book a demo
            </a>
          </div>
          <div className="mt-4 text-xs text-white/50">No credit card required</div>
        </motion.div>
      </div>
    </section>
  );
}
