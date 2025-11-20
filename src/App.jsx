import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { WhatIs, HowItWorks, Experiences, Community, Rewards, BlogPreview, FAQ, Footer } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Global background accents */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_70%_0%,rgba(0,154,116,0.15),transparent),radial-gradient(800px_400px_at_30%_100%,rgba(212,175,55,0.14),transparent)]"></div>
        {/* Simplified subtle pattern to avoid data-URI parsing issues */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.12) 0 2px, transparent 2px 24px), repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 18px)",
          }}
        ></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <WhatIs />
        <HowItWorks />
        <Experiences />
        <Community />
        <Rewards />
        <BlogPreview />
        <FAQ />
        <Footer />
      </main>
    </div>
  )
}

export default App
