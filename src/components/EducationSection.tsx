import { GraduationCap, Award, Cloud, Terminal, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 border-t border-white/5 bg-[#121218]/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Education &amp; Certifications
          </h2>
          <p className="text-sm text-slate-400">
            Academic distinction and cloud platform credentials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Education timeline */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Academic Degrees
            </h3>

            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {edu.period}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {edu.score}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mt-1">
                  {edu.degree}
                </h4>
                <p className="text-xs text-slate-400 font-medium">
                  {edu.institution}
                </p>
                <p className="text-xs text-slate-400 mt-2">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          {/* Industry Certifications */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 flex items-center gap-2">
              <Cloud className="w-4 h-4" />
              Industry Certifications
            </h3>

            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {cert.code}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mt-1">
                  {cert.name}
                </h4>
                <p className="text-xs text-indigo-400 font-medium">
                  {cert.issuer}
                </p>
                <p className="text-xs text-slate-400 mt-2">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
