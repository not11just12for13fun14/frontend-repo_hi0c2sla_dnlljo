import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { WhatIs, HowItWorks, Experiences, Community, Rewards, BlogPreview, FAQ, Footer } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Global background accents */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_70%_0%,rgba(0,154,116,0.15),transparent),radial-gradient(800px_400px_at_30%_100%,rgba(212,175,55,0.14),transparent)]"></div>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\"1200\\" height=\\"400\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cdefs%3E%3Cpattern id=\\"tribal\\" width=\\"80\\" height=\\"80\\" patternUnits=\\"userSpaceOnUse\\"%3E%3Cpath d=\\"M0 40 Q20 20 40 40 T80 40 M0 0 L40 40 L0 80 M40 0 L80 40 L40 80\\" fill=\\"none\\" stroke=\\"white\\" stroke-opacity=\\"0.2\\" stroke-width=\\"1\\"/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill=\\"url(%23tribal)\\" width=\\"100%25\\" height=\\"100%25\\"/%3E%3C/svg%3E')" }}></div>
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
