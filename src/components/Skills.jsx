import { ShieldCheck, Cpu, Workflow, Rocket } from 'lucide-react'

const skills = [
  { title: 'Backend & APIs', icon: Cpu, items: ['FastAPI', 'Node/Express', 'MongoDB', 'Auth'] },
  { title: 'Automation', icon: Workflow, items: ['Pytest', 'Playwright', 'Postman', 'CI Pipelines'] },
  { title: 'Quality Engineering', icon: ShieldCheck, items: ['TDD/BDD', 'Contract tests', 'Perf & Sec', 'Observability'] },
  { title: 'Delivery', icon: Rocket, items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Cloud Runners'] },
]

function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What I Bring</h2>
          <p className="mt-2 text-slate-300">Engineering with empathy, testing with rigor</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ title, items, icon: Icon }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-10 h-10 grid place-items-center rounded-lg bg-gradient-to-br from-cyan-500/90 to-blue-500/90 text-white shadow-lg">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                {items.map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
