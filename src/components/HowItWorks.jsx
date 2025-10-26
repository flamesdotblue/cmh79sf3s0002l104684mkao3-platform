import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Connect your Instagram',
    desc: 'Authenticate securely with the official API. No passwords stored.',
  },
  {
    number: '02',
    title: 'Design your flows',
    desc: 'Set triggers for keywords, comments, or story replies. Define smart responses and routing.',
  },
  {
    number: '03',
    title: 'Go live',
    desc: 'Turn on automations and watch replies happen in real time—day or night.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How DM Route works</h2>
          <p className="mt-3 text-white/70">From setup to scale in minutes, not weeks.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="text-white/40 text-sm">{step.number}</div>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-white/70">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
