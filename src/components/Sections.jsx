import { Trophy, LineChart, Gamepad2, Users, Coins, Newspaper, Sparkles } from "lucide-react"

export function WhatIs() {
  const items = [
    { icon: Sparkles, title: "Fun predictions", desc: "Challenge friends with light, social predictions built for fun — not betting." },
    { icon: LineChart, title: "Data-driven insights", desc: "Clean, digestible analysis that makes football smarter and more enjoyable." },
    { icon: Gamepad2, title: "Rewards & mini-games", desc: "Play daily games, climb leaderboards and unlock exclusive drops." },
  ]
  return (
    <section id="what" className="relative py-20">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(500px_200px_at_20%_0%,#D4AF37,transparent),radial-gradient(500px_200px_at_80%_100%,#009A74,transparent)" }}></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center">What is FOOTLOOT?</h2>
        <p className="mt-3 text-white/70 text-center max-w-2xl mx-auto">A community-first platform that blends prediction fun with real football intelligence and friendly rewards.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-6 text-white/90 hover:bg-white/7 transition-colors">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl" style={{ backgroundColor: "#009A74" }}>
                <it.icon className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">{it.title}</h3>
              <p className="mt-2 text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  const steps = [
    { t: "Choose challenges", d: "Pick daily matchups, duels or mini-games you like." },
    { t: "Make predictions", d: "Set your picks with friendly odds and smart hints." },
    { t: "Earn points & loot", d: "Score for accuracy, streaks and community boosts." },
    { t: "Unlock rewards", d: "Redeem tokens, roles and perks in the shop." },
  ]
  return (
    <section id="how" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center">How it works</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-6 text-white/80">
              <div className="text-[11px] uppercase tracking-widest text-white/60">Step {i+1}</div>
              <div className="mt-2 text-lg font-semibold text-white">{s.t}</div>
              <p className="mt-2 text-white/70">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Experiences() {
  const cards = [
    { k: "FOOTLOOT LAB", d: "Deep-dive analysis made friendly: xG, momentum, pass networks and more.", icon: LineChart },
    { k: "FOOTLOOT BATTLE", d: "1v1 prediction duels with friends. Fair, fast, fun.", icon: Trophy },
    { k: "FOOTLOOT ARENA", d: "Interactive mini-games: streaks, quizzes, powerups.", icon: Gamepad2 },
  ]
  return (
    <section id="experiences" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center">FOOTLOOT Experiences</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40">
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl" style={{ backgroundColor: "#D4AF37" }}>
                  <c.icon className="text-slate-900" />
                </div>
                <div className="mt-4 text-xl font-extrabold text-white">{c.k}</div>
                <p className="mt-2 text-white/70">{c.d}</p>
              </div>
              <div className="h-32 bg-gradient-to-tr from-[#009A74]/20 to-[#D4AF37]/20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Community() {
  return (
    <section id="community" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <h3 className="text-3xl font-extrabold text-white">Built with the community</h3>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Share picks, learn from others, and celebrate the game together. Beginners welcome — good vibes only.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#join" className="rounded-xl px-5 py-3 text-sm font-semibold text-slate-900" style={{ backgroundColor: "#D4AF37" }}>Join Discord</a>
            <a href="#join" className="rounded-xl px-5 py-3 text-sm font-semibold border border-white/15 text-white">Follow Instagram</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Rewards() {
  return (
    <section id="rewards" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8">
            <h3 className="text-3xl font-extrabold text-white">Rewards that feel good</h3>
            <p className="mt-3 text-white/70">Earn points from predictions and games. Convert to tokens, unlock roles, and soon — redeem perks in the shop.</p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-center gap-3"><Coins className="w-5 h-5 text-[#D4AF37]"/> Points → Tokens</li>
              <li className="flex items-center gap-3"><Trophy className="w-5 h-5 text-[#D4AF37]"/> Ranks & Roles</li>
              <li className="flex items-center gap-3"><Users className="w-5 h-5 text-[#D4AF37]"/> Community boosts</li>
            </ul>
            <p className="mt-6 text-sm text-white/70 italic">Play to enjoy, not to bet.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#009A74]/10 to-[#D4AF37]/10 p-8">
            <div className="grid grid-cols-3 gap-4">
              {["Points", "Tokens", "Shop Soon", "Badges", "Loot Boxes", "Perks"].map((k, i) => (
                <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center text-white/80">{k}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function BlogPreview() {
  const posts = [
    { t: "What is xG?", d: "Understand expected goals like a pro — the simple way." },
    { t: "Match momentum", d: "Visualizing game control with easy charts." },
    { t: "Fair play predictions", d: "Designing a system that rewards skill, not risk." },
  ]
  return (
    <section id="blog" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-extrabold text-white text-center">From the Blog</h3>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40">
              <div className="h-32 bg-gradient-to-tr from-[#009A74]/20 to-[#D4AF37]/20"></div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white">{p.t}</h4>
                <p className="mt-2 text-white/70">{p.d}</p>
                <a href="#" className="mt-3 inline-block text-sm font-semibold" style={{ color: "#D4AF37" }}>Read more →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FAQ() {
  const faqs = [
    { q: "Is this gambling?", a: "No. It’s built for friendly fun and learning, not betting or real-money wagering." },
    { q: "Do I need football knowledge?", a: "Not at all. We make insights accessible for total beginners." },
    { q: "How do rewards work?", a: "Earn points through predictions and games. Convert to tokens and unlock perks soon." },
  ]
  return (
    <section id="faq" className="relative py-20">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-extrabold text-white text-center">FAQ</h3>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6">
              <summary className="cursor-pointer list-none text-white font-semibold flex items-center justify-between">
                {f.q}
                <span className="ml-4 text-[#D4AF37] group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <p className="mt-3 text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="relative mt-10 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} FOOTLOOT. All rights reserved.</p>
          <div className="text-sm text-white/60">Clean • Emerald • Gold</div>
        </div>
      </div>
    </footer>
  )
}
