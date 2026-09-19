import { useState } from 'react';
import { Wallet, TrendingUp, Sparkles, ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import ProjectDetailsModal from './ProjectDetailsModal';

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 px-6 border-t border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section Heading */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold border-b border-slate-800 pb-2 text-cyan-400">
            Projects
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-6">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div 
              key={project.id}
              className="bg-slate-900/60 p-6 sm:p-7 rounded-xl border border-slate-800 backdrop-blur-sm space-y-4 hover:border-cyan-500/50 transition-all group"
            >
              {/* Header row */}
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5 border border-cyan-500/20">
                    {project.id === 'digital-wallet-app' ? (
                      <Wallet className="w-6 h-6 text-cyan-400" />
                    ) : (
                      <TrendingUp className="w-6 h-6 text-cyan-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-slate-100 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 shrink-0">
                  {project.badge}
                </span>
              </div>

              {/* Highlights list matching prompt exactly */}
              <ul className="list-disc list-inside text-sm text-slate-300 space-y-1.5 pl-1">
                {project.keyHighlights.map((highlight, index) => (
                  <li key={index} className="leading-relaxed">
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tags and Action Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-0.5 rounded text-xs bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>View Details &amp; Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
