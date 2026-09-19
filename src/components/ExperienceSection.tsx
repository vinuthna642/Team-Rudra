import { Users, Trophy, MessageSquare, Heart, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function ExperienceSection() {
  const exp = PORTFOLIO_DATA.experience[0];

  return (
    <section id="experience" className="py-20 px-6 border-t border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section Heading */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Leadership &amp; Campus Life</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold border-b border-slate-800 pb-2 text-cyan-400">
            Experience &amp; Extracurriculars
          </h2>
        </div>

        {/* 2-Column Grid matching user's structure */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Volunteer Experience Card */}
          <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 backdrop-blur-sm space-y-4 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-semibold text-lg text-slate-100 flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                <span>Volunteer Experience</span>
              </h3>
              <span className="text-xs px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                Event Coordination
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong className="text-slate-100 font-semibold">{exp.title}:</strong>{' '}
                {exp.description}
              </p>

              <div className="p-3.5 rounded-lg bg-slate-800/50 border border-slate-700/50 space-y-2 text-xs text-slate-300">
                <div className="text-cyan-400 font-semibold text-xs">Core Responsibilities:</div>
                <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="leading-relaxed">{h}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.skillsCovered.map((skill, i) => (
                  <span key={i} className="px-2 py-0.5 rounded text-xs bg-slate-800 text-slate-300 border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Extracurricular Activities Card */}
          <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 backdrop-blur-sm space-y-4 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-semibold text-lg text-slate-100 flex items-center gap-2">
                <Users className="w-5 h-5 text-cyan-400" />
                <span>Extracurricular Activities</span>
              </h3>
              <span className="text-xs px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                Campus Activities
              </span>
            </div>

            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-start gap-3">
                <Trophy className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-100">Sports:</strong>{' '}
                  <span className="text-slate-300">Cricket, Volleyball</span>
                  <p className="text-xs text-slate-400 mt-0.5">Competitive participation fostering agile coordination, team communication, and sportsmanship.</p>
                </div>
              </li>

              <li className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-start gap-3">
                <Users className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-100">Club Activities:</strong>{' '}
                  <span className="text-slate-300">Active Member, Focus Club</span>
                  <p className="text-xs text-slate-400 mt-0.5">Contributing member participating in peer technical groups and campus learning sessions.</p>
                </div>
              </li>

              <li className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-100">Public Speaking:</strong>{' '}
                  <span className="text-slate-300">Participated in Debate Competitions</span>
                  <p className="text-xs text-slate-400 mt-0.5">Structured verbal argumentation, topic analysis, and persuasive public presentation.</p>
                </div>
              </li>

              <li className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-start gap-3">
                <Heart className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-100">Community Service:</strong>{' '}
                  <span className="text-slate-300">Volunteered in College Initiatives</span>
                  <p className="text-xs text-slate-400 mt-0.5">Active volunteer support across university environmental and community welfare initiatives.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
