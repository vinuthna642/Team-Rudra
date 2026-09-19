import React from 'react';
import { motion } from 'motion/react';
import { KineticTitle } from '../KineticTitle';
import { SlideData } from '../../data/presentationData';
import { MobileFrame } from '../MobileFrame';
import { 
  CloudRain, 
  Sparkles, 
  Smartphone, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Zap
} from 'lucide-react';

interface SlideProps {
  slide: SlideData;
  onNext?: () => void;
}

export const Slide3Dashboard: React.FC<SlideProps> = ({ slide, onNext }) => {
  return (
    <div className="h-full flex flex-col justify-between p-4 md:p-8 relative overflow-hidden">
      
      {/* Top Header */}
      <div>
        <KineticTitle
          category="Mobile Application Interface (Screen 1)"
          text="Kisan Mobile Dashboard"
          subtitle="Glanceable Telemetry, Hyperlocal Weather Advisories & Instant Diagnostic Access"
          size="large"
        />
      </div>

      {/* Two Column Showcase: Left = Architectural Explanations; Right = Live Mobile Frame */}
      <div className="my-auto py-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left 7 Cols: Detailed Functional Annotations */}
        <div className="lg:col-span-7 space-y-3.5">
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
            <h3 className="text-sm md:text-base font-black text-white font-['Outfit'] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Screen 1: The Smallholder Farmer Command Center</span>
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Designed with high-contrast emerald and gold palettes for sharp visibility under direct sunlight in open fields. Zero clutter ensures rapid field adoption by elderly and multilingual farmers.
            </p>
          </div>

          <div className="space-y-2.5">
            {slide.bulletPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/40 p-3 rounded-xl transition-all"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs md:text-sm text-emerald-300 font-['Outfit']">
                    {point.heading}
                  </span>
                  {point.tag && (
                    <span className="text-[10px] bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded font-mono font-bold">
                      {point.tag}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-300/90 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Real-time Status Badge Strip */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            <div className="bg-slate-900/50 border border-slate-800 p-2 rounded-xl text-center">
              <div className="text-[10px] text-slate-400 font-semibold">Moisture Metric</div>
              <div className="text-sm font-black text-white font-['Outfit']">42% (Optimal)</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 p-2 rounded-xl text-center">
              <div className="text-[10px] text-slate-400 font-semibold">Soil Reaction</div>
              <div className="text-sm font-black text-emerald-400 font-['Outfit']">pH 6.8 Neutral</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 p-2 rounded-xl text-center">
              <div className="text-[10px] text-slate-400 font-semibold">NPK Rating</div>
              <div className="text-sm font-black text-amber-400 font-['Outfit']">Good Balance</div>
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Live Interactive Mobile Frame (Screen 1 Home) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="text-center mb-2">
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
              <Smartphone className="w-3 h-3" />
              Live Interactive Screen 1 Mockup
            </span>
          </div>
          <MobileFrame activeTab="home" scale="md" isInteractive={true} />
        </div>

      </div>

      {/* Footer Nav */}
      <div className="border-t border-slate-800 pt-3 flex items-center justify-between">
        <div className="text-xs text-slate-400 font-medium">
          Slide 3 of 8 • Mobile PWA Interface Overview
        </div>
        {onNext && (
          <button
            onClick={onNext}
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-4 py-2 rounded-xl border border-slate-700 flex items-center gap-2 text-xs transition-all active:scale-95 shrink-0"
          >
            <span>Next: Dual Mode Soil Analyzer</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>
        )}
      </div>

    </div>
  );
};
