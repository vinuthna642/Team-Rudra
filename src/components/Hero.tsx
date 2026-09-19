import { Sparkles, ArrowRight, FileText, Award, Github, Linkedin, Mail, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-6 relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-20 -left-20 pointer-events-none" />
      <div className="absolute w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-3xl bottom-10 -right-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
        {/* Top pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 text-xs text-cyan-400 font-medium mb-1 border border-cyan-500/20 shadow-xs backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>{PORTFOLIO_DATA.badgeText}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {PORTFOLIO_DATA.name}
          </span>
        </h1>

        {/* Subtitle description */}
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {PORTFOLIO_DATA.subheadline}
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-sm font-medium">
          <a 
            href={`mailto:${PORTFOLIO_DATA.contact.email}`} 
            className="px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold transition shadow-md shadow-cyan-500/20 flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </a>

          <a 
            href={PORTFOLIO_DATA.contact.github} 
            target="_blank" 
            rel="noreferrer"
            className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition flex items-center gap-2"
          >
            <Github className="w-4 h-4 text-slate-300" />
            <span>GitHub</span>
          </a>

          <a 
            href={PORTFOLIO_DATA.contact.linkedin} 
            target="_blank" 
            rel="noreferrer"
            className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4 text-cyan-400" />
            <span>LinkedIn</span>
          </a>

          <button
            onClick={onOpenResume}
            className="px-5 py-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition flex items-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Resume</span>
          </button>
        </div>

        {/* Quick Credentials Badges Bar */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-3 text-xs">
          <div className="bg-slate-900/70 backdrop-blur-sm px-3.5 py-1.5 rounded-full flex items-center gap-2 text-slate-300 border border-slate-800">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>KL University • <strong>CGPA: 9.17</strong></span>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-sm px-3.5 py-1.5 rounded-full flex items-center gap-2 text-slate-300 border border-slate-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>AWS Certified Cloud Practitioner</span>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-sm px-3.5 py-1.5 rounded-full flex items-center gap-2 text-slate-300 border border-slate-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>HackerRank SQL Skill Certified</span>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-sm px-3.5 py-1.5 rounded-full flex items-center gap-2 text-slate-300 border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>Sri Chaitanya • <strong>91%</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
