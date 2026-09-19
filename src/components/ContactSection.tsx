import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, Sparkles, Github, Linkedin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.contact.email}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Pisini Visweswara Rao,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 px-6 border-t border-slate-800/80 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl bottom-0 left-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Get in Touch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-cyan-400">
          Let's Connect
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Feel free to reach out for collaborations, opportunities, or technical discussions!
        </p>

        {/* Highlighted Email & Phone Links matching prompt */}
        <div className="space-y-2 py-2">
          <p className="text-cyan-400 font-medium text-base sm:text-lg">
            Email:{' '}
            <a 
              href={`mailto:${PORTFOLIO_DATA.contact.email}`} 
              className="underline hover:text-cyan-300 transition-colors"
            >
              {PORTFOLIO_DATA.contact.email}
            </a>
          </p>
          <p className="text-cyan-400 font-medium text-base sm:text-lg">
            Phone:{' '}
            <a 
              href={`tel:${PORTFOLIO_DATA.contact.phone.replace(/\s+/g, '')}`} 
              className="underline hover:text-cyan-300 transition-colors"
            >
              {PORTFOLIO_DATA.contact.phone}
            </a>
          </p>
        </div>

        {/* Primary Contact CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a 
            href={`mailto:${PORTFOLIO_DATA.contact.email}`} 
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-slate-950 px-6 py-3 rounded-lg font-semibold transition shadow-md shadow-cyan-500/20 text-sm"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email</span>
          </a>

          <a 
            href={PORTFOLIO_DATA.contact.github} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-5 py-3 rounded-lg font-medium transition text-sm"
          >
            <Github className="w-4 h-4 text-slate-300" />
            <span>GitHub Profile</span>
          </a>

          <a 
            href={PORTFOLIO_DATA.contact.linkedin} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-5 py-3 rounded-lg font-medium transition text-sm"
          >
            <Linkedin className="w-4 h-4 text-cyan-400" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Quick Message Form Toggle */}
        <div className="pt-2">
          <button
            onClick={() => setShowForm(!showForm)}
            className="text-xs text-cyan-400 hover:text-cyan-300 underline underline-offset-4 cursor-pointer"
          >
            {showForm ? 'Hide Quick Message Form' : 'Send a direct message via email client →'}
          </button>
        </div>

        {/* Quick Message Form */}
        {showForm && (
          <form 
            onSubmit={handleSendMessage} 
            className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 max-w-md mx-auto text-left space-y-3 shadow-xl backdrop-blur-sm"
          >
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
              <input 
                type="text" 
                required
                placeholder="Your Name" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Your Email</label>
              <input 
                type="email" 
                required
                placeholder="your@email.com" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Message</label>
              <textarea 
                rows={3} 
                required
                placeholder="Hello Pisini, I'd like to connect regarding..." 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-600 text-slate-950 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Launch Email Client</span>
            </button>
          </form>
        )}

        {/* Contact details pill strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 pt-4">
          <button 
            onClick={handleCopyEmail}
            className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 px-4 py-2 rounded-lg hover:text-white transition-colors cursor-pointer"
            title="Click to copy email"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Copy Email</span>
            {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
          </button>

          <button 
            onClick={handleCopyPhone}
            className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 px-4 py-2 rounded-lg hover:text-white transition-colors cursor-pointer"
            title="Click to copy phone"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>Copy Phone</span>
            {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
          </button>

          <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 px-4 py-2 rounded-lg text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>KL University, Andhra Pradesh</span>
          </div>
        </div>
      </div>
    </section>
  );
}
