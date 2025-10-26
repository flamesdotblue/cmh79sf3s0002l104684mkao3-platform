export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-full bg-white" />
          <span className="text-sm font-medium">DM Route</span>
        </div>
        <nav className="flex items-center gap-6 text-xs text-white/60">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#how-it-works" className="hover:text-white transition">How it works</a>
          <a href="#cta" className="hover:text-white transition">Pricing</a>
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
        </nav>
        <p className="text-xs text-white/50">© {new Date().getFullYear()} DM Route. All rights reserved.</p>
      </div>
    </footer>
  );
}
