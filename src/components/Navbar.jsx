import { Menu, Shield } from "lucide-react"

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-slate-900/50 border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="/" className="inline-flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl blur-md" style={{ background: "radial-gradient(60%_60%_at_50%_50%, rgba(0,154,116,0.6), transparent 70%)" }}></div>
                <div className="relative bg-[#009A74] text-white rounded-xl p-2 shadow-inner shadow-emerald-900/40">
                  <Shield className="w-6 h-6" />
                </div>
              </div>
              <span className="text-white/90 font-bold tracking-wide text-lg">FOOTLOOT</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#what" className="text-white/70 hover:text-white transition-colors">What is</a>
              <a href="#how" className="text-white/70 hover:text-white transition-colors">How it works</a>
              <a href="#experiences" className="text-white/70 hover:text-white transition-colors">Experiences</a>
              <a href="#community" className="text-white/70 hover:text-white transition-colors">Community</a>
              <a href="#rewards" className="text-white/70 hover:text-white transition-colors">Rewards</a>
              <a href="#blog" className="text-white/70 hover:text-white transition-colors">Content</a>
              <a href="#faq" className="text-white/70 hover:text-white transition-colors">FAQ</a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#join"
                className="hidden sm:inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-slate-900"
                style={{ backgroundColor: "#D4AF37" }}
              >
                Join the Community
              </a>
              <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
