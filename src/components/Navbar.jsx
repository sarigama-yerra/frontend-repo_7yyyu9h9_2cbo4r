import { Menu, Github, Linkedin } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md/50 bg-slate-900/40 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
          <span className="text-white font-semibold tracking-tight group-hover:text-cyan-200 transition-colors">Your Name</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="text-slate-300 hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <button className="md:hidden text-white/80 hover:text-white">
          <Menu className="w-6 h-6" />
        </button>
      </nav>
    </header>
  )
}

export default Navbar
