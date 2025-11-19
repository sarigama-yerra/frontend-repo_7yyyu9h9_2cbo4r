import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <footer className="border-t border-white/10 py-10 bg-slate-950/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Your Name — Built with a quality-first mindset
        </div>
      </footer>
    </div>
  )
}

export default App
