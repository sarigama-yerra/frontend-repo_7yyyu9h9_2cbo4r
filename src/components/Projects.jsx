import { Code2, TestTubes, Globe, Bot } from 'lucide-react'

const projects = [
  {
    title: 'Full‑stack Issue Tracker',
    badge: 'SDE',
    icon: Code2,
    description: 'A production-ready bug tracking tool with auth, role-based access, and CI-powered deployments.',
    stack: ['React', 'FastAPI', 'MongoDB', 'Tailwind'],
    link: '#'
  },
  {
    title: 'API Test Automation',
    badge: 'SDET',
    icon: TestTubes,
    description: 'Reusable pytest framework with Allure reporting, contract tests, and CI matrix runs.',
    stack: ['Python', 'Pytest', 'Docker', 'GitHub Actions'],
    link: '#'
  },
  {
    title: 'Performance Benchmarking',
    badge: 'SDET',
    icon: Globe,
    description: 'k6 & Locust workload modeling with scalable cloud runners and actionable dashboards.',
    stack: ['k6', 'Locust', 'Grafana', 'Cloud'],
    link: '#'
  },
  {
    title: 'ChatOps QA Assistant',
    badge: 'SDE',
    icon: Bot,
    description: 'Slack bot that triages failures, fetches logs, and triggers test reruns with guardrails.',
    stack: ['Node', 'Bolt', 'OpenAI', 'Redis'],
    link: '#'
  },
]

function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(34,211,238,0.08),transparent_40%),radial-gradient(600px_circle_at_80%_0%,rgba(59,130,246,0.08),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Work</h2>
          <p className="mt-2 text-slate-300">Blend of product engineering and test excellence</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, description, icon: Icon, badge, stack, link }) => (
            <a key={title} href={link} className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2">
                  <div className="w-10 h-10 grid place-items-center rounded-lg bg-gradient-to-br from-cyan-500/90 to-blue-500/90 text-white shadow-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-300/20">{badge}</span>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">{title}</h3>
                <p className="mt-1 text-sm text-slate-300">{description}</p>
              </div>
              <div className="mt-auto pt-2 text-xs text-slate-400 flex flex-wrap gap-2">
                {stack.map(s => (
                  <span key={s} className="px-2 py-1 rounded-md bg-slate-900/60 border border-white/10">{s}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
