import { MessageCircle, MessageSquare, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Automatic DM Replies',
    desc: 'Instantly respond to common questions, send links, and capture leads without lifting a finger.',
    Icon: MessageCircle,
  },
  {
    title: 'Comment Autoresponder',
    desc: 'Trigger DMs when users comment on posts or Reels to start conversations automatically.',
    Icon: MessageSquare,
  },
  {
    title: 'Smart Routing',
    desc: 'Escalate hot leads to humans, tag conversations, and organize your inbox with precision.',
    Icon: Zap,
  },
  {
    title: 'Secure & Compliant',
    desc: 'Connect via official APIs. Your data stays encrypted and under your control.',
    Icon: Shield,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Built for creators, brands, and teams</h2>
          <p className="mt-3 text-white/70">Everything you need to automate conversations and convert attention into outcomes.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:border-white/20 transition"
            >
              <div className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center">
                <f.Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
