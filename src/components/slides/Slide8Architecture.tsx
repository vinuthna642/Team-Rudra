import React from 'react';
import { motion } from 'motion/react';
import { KineticTitle } from '../KineticTitle';
import { SlideData } from '../../data/presentationData';
import { BlockDiagramVisual } from '../BlockDiagramVisual';
import { 
  Layers, 
  Cpu, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  RotateCcw,
  Award,
  Download
} from 'lucide-react';

interface SlideProps {
  slide: SlideData;
  onReset?: () => void;
  onOpenExportModal?: () => void;
}

export const Slide8Architecture: React.FC<SlideProps> = ({ slide, onReset, onOpenExportModal }) => {
  return (
    <div className="h-full flex flex-col justify-between p-4 md:p-8 relative overflow-hidden">
      
      {/* Top Header */}
      <div>
        <KineticTitle
          category="End-to-End Architecture & Block Diagram"
          text="System Architecture & Flow"
          subtitle="Decoupled Microservice Flow from Multilingual PWA to Transparent Value Output"
          size="large"
        />
      </div>

      {/* Two Column Showcase: Left = System Specs & Impact; Right = Full Block Diagram Canvas */}
      <div className="my-auto py-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left 5 Cols: Microservices Specifications */}
        <div className="lg:col-span-5 space-y-3">
          <div className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-2xl">
            <h3 className="text-sm font-black text-white font-['Outfit'] flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Full-Stack Agricultural Pipeline</span>
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Engineered with an offline-first PWA, state-caching API gateway, parallel AgMarkNet ingestion, and direct FPO settlement rails.
            </p>
          </div>

          <div className="space-y-2">
            {slide.bulletPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/40 p-2.5 rounded-xl transition-all"
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-bold text-xs text-emerald-300 font-['Outfit']">
                    {point.heading}
                  </span>
                  {point.tag && (
                    <span className="text-[9px] bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.2 rounded font-mono font-bold">
                      {point.tag}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-300/90 leading-tight">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Impact Banner */}
          <div className="bg-gradient-to-r from-emerald-950/60 to-slate-900/80 border border-emerald-500/30 p-3 rounded-xl flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-base shrink-0">
              ₹
            </div>
            <div>
              <div className="text-xs font-black text-white font-['Outfit']">
                Demonstrated Socio-Economic Impact
              </div>
              <div className="text-[11px] text-emerald-300">
                +28% Net Farmer Realization • 30% Post-Harvest Spoilage Elimination
              </div>
            </div>
          </div>
        </div>

        {/* Right 7 Cols: The Interactive Block Diagram (Image 6 Recreation) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <BlockDiagramVisual interactive={true} />
        </div>

      </div>

      {/* Footer Conclusion & Reset */}
      <div className="border-t border-slate-800 pt-3 flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs text-slate-400 font-medium flex items-center gap-2">
          <span>Slide 8 of 8 • Conclusion & Technical Verification</span>
          <span className="text-emerald-400 font-bold">• Project by Vinuthna (Kisan)</span>
        </div>
        
        <div className="flex items-center gap-2">
          {onOpenExportModal && (
            <button
              onClick={onOpenExportModal}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-['Outfit'] transition-all shadow-lg shadow-emerald-500/20 shrink-0 cursor-pointer"
              title="Download full presentation as PDF or PowerPoint"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Download Deck (PDF / PPT)</span>
            </button>
          )}

          {onReset && (
            <button
              onClick={onReset}
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 text-xs font-['Outfit'] transition-all active:scale-95 shrink-0 border border-slate-700 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-emerald-400" />
              <span>Replay (Slide 1)</span>
            </button>
          )}
        </div>
      </div>

    </div>
  );
};
