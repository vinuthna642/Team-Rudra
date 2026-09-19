import { GraduationCap, User, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 border-t border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <User className="w-3.5 h-3.5 text-cyan-400" />
            <span>Profile &amp; Academics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold border-b border-slate-800 pb-2 text-cyan-400">
            Education &amp; Background
          </h2>
        </div>

        {/* Education List Cards */}
        <div className="space-y-4">
          {PORTFOLIO_DATA.education.map((item, index) => (
            <div 
              key={index}
              className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 backdrop-blur-sm hover:border-cyan-500/40 transition-colors"
            >
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                    <h3 className="font-semibold text-lg text-slate-100">{item.institution}</h3>
                  </div>
                  <p className="text-slate-300 text-sm mt-1">{item.degree}</p>
                </div>
                <span className="text-cyan-400 font-medium text-sm px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50">
                  {item.period} | {item.score}
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="bg-slate-900/60 p-6 sm:p-8 rounded-xl border border-slate-800 backdrop-blur-sm space-y-4">
          <h3 className="font-semibold text-lg text-slate-100 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            <span>Academic &amp; Technical Foundation</span>
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {PORTFOLIO_DATA.about.p1}
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {PORTFOLIO_DATA.about.p2}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800">
            {PORTFOLIO_DATA.about.stats.map((stat, i) => (
              <div key={i} className="p-3 rounded-lg bg-slate-800/50 border border-slate-800 text-center">
                <div className="text-cyan-400 font-bold text-sm sm:text-base">{stat.value}</div>
                <div className="text-slate-400 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
