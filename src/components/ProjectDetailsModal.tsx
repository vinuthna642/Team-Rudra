import { X, CheckCircle2, Server, Wallet, TrendingUp } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectDetailsModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl my-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl p-6 sm:p-8 text-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-800">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0 mt-1">
              {project.id === 'digital-wallet-app' ? (
                <Wallet className="w-6 h-6 text-cyan-400" />
              ) : (
                <TrendingUp className="w-6 h-6 text-cyan-400" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="text-xs px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-400 font-semibold border border-cyan-800">
                  {project.badge}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {project.role}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-cyan-400 mt-0.5">
                {project.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6 space-y-6 text-sm max-h-[70vh] overflow-y-auto pr-1">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Overview &amp; Purpose
            </h4>
            <p className="text-slate-300 leading-relaxed text-sm">
              {project.extendedDetails?.problem || project.description}
            </p>
          </div>

          {/* Impact Metrics */}
          {project.impactMetrics && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Core Specifications
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {project.impactMetrics.map((metric, i) => (
                  <div key={i} className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-center">
                    <div className="text-sm sm:text-base font-bold text-cyan-400">{metric.value}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Architecture */}
          {project.extendedDetails?.architecture && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5" />
                <span>Technical Architecture &amp; Implementation</span>
              </h4>
              <ul className="space-y-2">
                {project.extendedDetails.architecture.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Deliverables & Key Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Key Highlights
            </h4>
            <ul className="space-y-2">
              {project.keyHighlights.map((hl, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack tags */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 text-xs border border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            KL University • Computer Science &amp; Engineering
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
