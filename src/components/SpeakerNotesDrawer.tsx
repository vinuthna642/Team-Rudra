import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlideData } from '../data/presentationData';
import { X, Mic, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

interface SpeakerNotesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  slide: SlideData;
  slideIndex: number;
}

export const SpeakerNotesDrawer: React.FC<SpeakerNotesDrawerProps> = ({
  isOpen,
  onClose,
  slide,
  slideIndex,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-t border-emerald-500/40 p-4 md:p-6 shadow-2xl max-h-[45vh] overflow-y-auto"
        >
          <div className="max-w-4xl mx-auto space-y-3">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Mic className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-white font-['Outfit']">
                    Speaker Notes & Talking Points • Slide {slideIndex + 1}: {slide.title}
                  </h4>
                  <div className="text-[10px] text-emerald-400 font-mono">
                    Presenter Script for Ponduri Vinuthna (Kisan Lead)
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Script Text */}
            <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-xl text-slate-200 text-xs md:text-sm leading-relaxed font-sans shadow-inner">
              <div className="text-emerald-400 font-bold text-xs mb-1 font-mono">
                🎙️ Suggested Oral Presentation Script:
              </div>
              "{slide.speakerNotes}"
            </div>

            {/* Key Bullets to Emphasize */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
              {slide.bulletPoints.map((b, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white font-['Outfit']">{b.heading}: </span>
                    <span className="text-slate-300 text-[11px]">{b.description}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
