import { Code, Cpu, Layers, Wrench, Award, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function TechnicalToolkit() {
  return (
    <section id="skills" className="py-20 px-6 border-t border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section Heading */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold border-b border-slate-800 pb-2 text-cyan-400">
            Technical Skills &amp; Certifications
          </h2>
        </div>

        {/* 2-Column Grid as in prompt */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Tech Stack Card */}
          <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 backdrop-blur-sm space-y-4 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-semibold text-lg text-slate-100 flex items-center gap-2">
                <Code className="w-5 h-5 text-cyan-400" />
                <span>Tech Stack</span>
              </h3>
              <span className="text-xs px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                Full-Stack
              </span>
            </div>

            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <strong className="text-slate-100">Programming:</strong>
                  <span className="text-slate-300">Java, Python, MySQL</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pl-3.5 pt-1">
                  <span className="px-2 py-0.5 rounded text-xs bg-slate-800 text-cyan-300 border border-slate-700">Java</span>
                  <span className="px-2 py-0.5 rounded text-xs bg-slate-800 text-cyan-300 border border-slate-700">Python</span>
                  <span className="px-2 py-0.5 rounded text-xs bg-slate-800 text-cyan-300 border border-slate-700">MySQL</span>
                </div>
              </li>

              <li className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <strong className="text-slate-100">Web Technologies:</strong>
                  <span className="text-slate-300">HTML, CSS, JavaScript, React.js, Spring Boot</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pl-3.5 pt-1">
                  <span className="px-2 py-0.5 rounded text-xs bg-slate-800 text-cyan-300 border border-slate-700">React.js</span>
                  <span className="px-2 py-0.5 rounded text-xs bg-slate-800 text-cyan-300 border border-slate-700">Spring Boot</span>
                  <span className="px-2 py-0.5 rounded text-xs bg-slate-800 text-slate-300 border border-slate-700">JavaScript</span>
                  <span className="px-2 py-0.5 rounded text-xs bg-slate-800 text-slate-300 border border-slate-700">HTML5</span>
                  <span className="px-2 py-0.5 rounded text-xs bg-slate-800 text-slate-300 border border-slate-700">CSS3</span>
                </div>
              </li>

              <li className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <strong className="text-slate-100">Tools:</strong>
                  <span className="text-slate-300">GitHub, VS Code</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pl-3.5 pt-1">
                  <span className="px-2 py-0.5 rounded text-xs bg-slate-800 text-slate-300 border border-slate-700">GitHub</span>
                  <span className="px-2 py-0.5 rounded text-xs bg-slate-800 text-slate-300 border border-slate-700">VS Code</span>
                  <span className="px-2 py-0.5 rounded text-xs bg-slate-800 text-slate-300 border border-slate-700">Git</span>
                </div>
              </li>

              <li className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <strong className="text-slate-100">Core Subjects:</strong>
                  <span className="text-slate-300">Data Structures &amp; Algorithms, OOP</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pl-3.5 pt-1">
                  <span className="px-2 py-0.5 rounded text-xs bg-slate-800 text-cyan-300 border border-slate-700">DSA</span>
                  <span className="px-2 py-0.5 rounded text-xs bg-slate-800 text-cyan-300 border border-slate-700">Object-Oriented Programming (OOP)</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Certifications Card */}
          <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 backdrop-blur-sm space-y-4 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-semibold text-lg text-slate-100 flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                <span>Certifications</span>
              </h3>
              <span className="text-xs px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                Verified
              </span>
            </div>

            <ul className="space-y-4 text-sm text-slate-300">
              <li className="p-3.5 rounded-lg bg-slate-800/60 border border-slate-700/60 space-y-1">
                <div className="flex items-start gap-2 text-slate-100 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold">AWS Certified Cloud Practitioner</span>
                    <div className="text-xs text-cyan-400 font-normal mt-0.5">Amazon Web Services (AWS)</div>
                  </div>
                </div>
                <p className="text-xs text-slate-400 pl-7">
                  Fundamental understanding of AWS cloud infrastructure, security, core services, and deployment models.
                </p>
              </li>

              <li className="p-3.5 rounded-lg bg-slate-800/60 border border-slate-700/60 space-y-1">
                <div className="flex items-start gap-2 text-slate-100 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold">HackerRank SQL Skill Certification</span>
                    <div className="text-xs text-cyan-400 font-normal mt-0.5">HackerRank Verified</div>
                  </div>
                </div>
                <p className="text-xs text-slate-400 pl-7">
                  Certified proficiency in relational queries, joins, aggregations, subqueries, and structured database operations.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Category Deep Dive Bento Row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {PORTFOLIO_DATA.toolkit.map((item, index) => (
            <div 
              key={index}
              className="bg-slate-900/40 p-5 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2 text-cyan-400">
                {item.iconName === 'code' && <Code className="w-4 h-4" />}
                {item.iconName === 'layers' && <Layers className="w-4 h-4" />}
                {item.iconName === 'wrench' && <Wrench className="w-4 h-4" />}
                {item.iconName === 'cpu' && <Cpu className="w-4 h-4" />}
                <h4 className="text-sm font-semibold text-slate-200">{item.title}</h4>
              </div>
              <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {item.items.map((sub, i) => (
                  <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50">
                    {sub.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
