import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })
      const data = await res.json()
      if (res.ok) setStatus('Thanks! I will get back to you shortly.')
      else setStatus(data.detail || 'Something went wrong')
    } catch (err) {
      setStatus('Unable to send right now.')
    }
  }

  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s connect</h2>
          <p className="mt-2 text-slate-300">Open to roles and collaborations</p>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <div className="flex items-center gap-2 text-slate-300">
            <Mail className="w-4 h-4" /> <span>Drop a message</span>
          </div>
          <input name="name" required placeholder="Your name" className="w-full bg-slate-900/70 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-slate-500" />
          <input name="email" type="email" required placeholder="Email" className="w-full bg-slate-900/70 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-slate-500" />
          <textarea name="message" required placeholder="Message" rows="4" className="w-full bg-slate-900/70 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-slate-500" />
          <button className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-4 py-2 rounded-lg transition-colors">
            Send <Send className="w-4 h-4" />
          </button>
          {status && <p className="text-sm text-slate-300">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
