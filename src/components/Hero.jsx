import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background gradient + tribal accents */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(0,154,116,0.25),transparent),radial-gradient(1200px_600px_at_90%_110%,rgba(212,175,55,0.22),transparent)]"></div>
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0, transparent 18px, rgba(255,255,255,0.06) 18px, rgba(255,255,255,0.06) 36px), radial-gradient(600px_200px_at_40%_0%, rgba(255,255,255,0.08), transparent 60%)",
        }}></div>
        {/* Subtle tribal pattern bars */}
        <div className="absolute -left-20 top-24 rotate-[-8deg] w-[140%] h-24 opacity-10"
             style={{ backgroundImage: "repeating-linear-gradient(90deg, #fff 0 2px, transparent 2px 20px)" }}></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-wider text-white/80 shadow-sm">
              Football • Community • Data
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-[0_8px_40px_rgba(0,154,116,0.25)]">
              FOOTLOOT — Football, Reimagined.
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-white/80 leading-relaxed">
              Fun predictions + serious data + community. A premium, modern football universe where anyone can play, learn and win.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#what"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_10px_30px_rgba(0,154,116,0.35)] hover:shadow-[0_14px_40px_rgba(0,154,116,0.45)] transition-shadow"
                style={{ backgroundColor: "#D4AF37" }}
              >
                Discover FOOTLOOT
              </a>
              <a
                href="#community"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold border border-white/15 text-white hover:bg-white/10"
              >
                Join the Community
              </a>
            </div>

            {/* Soft stats row */}
            <div className="mt-10 grid grid-cols-3 gap-4 text-white/80">
              {[
                { k: "+10k", l: "Predictions" },
                { k: "98%", l: "Fair Play" },
                { k: "24/7", l: "Live Vibes" },
              ].map((s, i) => (
                <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                  <div className="text-xl font-extrabold">{s.k}</div>
                  <div className="text-xs text-white/70">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right visual: TV-style card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#009A74]/20 via-transparent to-[#D4AF37]/20"></div>
              <img src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1600&auto=format&fit=crop" alt="Football" className="w-full h-[360px] object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-slate-950/80 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-white/70">Live Analysis</p>
                    <p className="text-white font-semibold">Expected Goals • Pressing • Momentum</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] text-white/70">FOOTLOOT TV</p>
                    <p className="text-white font-semibold">Matchday 12</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
