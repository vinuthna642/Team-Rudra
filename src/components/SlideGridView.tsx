import React from 'react';
import { motion } from 'motion/react';
import { PRESENTATION_SLIDES, SlideData } from '../data/presentationData';
import { LayoutGrid, Play, CheckCircle2, Download } from 'lucide-react';

interface SlideGridViewProps {
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
  onOpenExportModal?: () => void;
}

export const SlideGridView: React.FC<SlideGridViewProps> = ({
  currentSlideIndex,
  onSelectSlide,
  onOpenExportModal,
}) => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-xl md:text-2xl font-black text-white font-['Outfit'] flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-emerald-400" />
            <span>Complete Presentation Overview (All 8 Slides)</span>
          </h2>
          <p className="text-xs md:text-sm text-slate-400 mt-0.5">
            Click any slide below to instantly jump to that presentation view.
          </p>
        </div>

        {onOpenExportModal && (
          <button
            onClick={onOpenExportModal}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-['Outfit'] transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>Download All Slides (PDF / PPT)</span>
          </button>
        )}
      </div>

      {/* Grid of 8 Slides */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PRESENTATION_SLIDES.map((slide, idx) => {
          const isCurrent = idx === currentSlideIndex;
          return (
            <motion.div
              key={slide.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => onSelectSlide(idx)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between h-56 relative overflow-hidden shadow-lg ${
                isCurrent
                  ? 'bg-emerald-950/40 border-emerald-500 ring-2 ring-emerald-400/50'
                  : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              {/* Top Bar */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                    Slide {idx + 1}
                  </span>
                  {isCurrent && (
                    <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Current
                    </span>
                  )}
                </div>

                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider truncate">
                  {slide.category}
                </div>
                <h3 className="text-sm font-black text-white font-['Outfit'] mt-1 leading-snug line-clamp-2">
                  {slide.title}
                </h3>
              </div>

              {/* Subtitle / Preview Snippet */}
              <p className="text-[11px] text-slate-400 line-clamp-3 leading-relaxed">
                {slide.subtitle}
              </p>

              {/* Bottom Tag */}
              <div className="border-t border-slate-800/80 pt-2 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span>{slide.bulletPoints.length} Key Points</span>
                <span className="text-emerald-400 font-bold group-hover:underline flex items-center gap-1">
                  Open Slide →
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
};
