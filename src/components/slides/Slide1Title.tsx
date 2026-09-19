import React from 'react';
import { motion } from 'motion/react';
import { KineticTitle } from '../KineticTitle';
import { SlideData } from '../../data/presentationData';
import { 
  Sprout, 
  Cpu, 
  TrendingUp, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Layers, 
  ArrowRight,
  CheckCircle2,
  Download
} from 'lucide-react';

interface SlideProps {
  slide: SlideData;
  onNext?: () => void;
  onOpenExportModal?: () => void;
}

export const Slide1Title: React.FC<SlideProps> = ({ slide, onNext, onOpenExportModal }) => {
  return (
    <div className="h-full flex flex-col justify-between p-4 md:p-8 relative overflow-hidden">
      
      {/* Background Decorative Rings & Ambient Glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Header Meta Info */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald-500/20 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-emerald-400 p-0.5 shadow-lg shadow-emerald-500/30 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <Sprout className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
              National AgriTech Innovation
            </div>
            <div className="text-slate-400 text-xs font-medium">
              Autonomous Farm Diagnostics & Price Discovery
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onOpenExportModal && (
            <button
              onClick={onOpenExportModal}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs px-3 py-1.5 rounded-full font-black flex items-center gap-1.5 shadow-md shadow-emerald-500/20 transition-all cursor-pointer font-['Outfit']"
              title="Download presentation in PDF or PowerPoint (.pptx)"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Download Deck (PDF / PPT)</span>
            </button>
          )}
          <span className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            Live Deck
          </span>
          <span className="bg-slate-800 border border-slate-700 text-slate-300 text-xs px-2.5 py-1 rounded-full font-mono hidden sm:inline">
            8 Slides
          </span>
        </div>
      </div>

      {/* Center Hero Kinetic Title & Presentation Subtitle */}
      <div className="my-auto py-6 space-y-4 max-w-4xl">
        <KineticTitle
          category="Next-Generation AI & IoT Platform"
          text="SmartSoil & Crop Care"
          subtitle="Empowering Indian Smallholder Farmers with Dual-Mode Soil Telemetry, Vision AI Pathogen Diagnosis, and Direct APMC Mandi Intelligence."
          size="hero"
        />

        {/* Lead Author & Credits Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-flex flex-wrap items-center gap-3 bg-slate-900/80 border border-emerald-500/30 px-4 py-2.5 rounded-2xl shadow-lg backdrop-blur-sm"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-amber-400 flex items-center justify-center text-slate-950 font-black text-sm shadow-sm">
            V
          </div>
          <div>
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              Project Lead & Researcher
            </div>
            <div className="text-sm font-black text-white font-['Outfit'] flex items-center gap-1.5">
              <span>Vinuthna (Kisan AI Lead)</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.2 rounded-full border border-emerald-500/40">
                Author & Presenter
              </span>
            </div>
          </div>
        </motion.div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
          {slide.bulletPoints.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
              className="bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/40 p-3.5 rounded-xl transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-sm text-emerald-300 font-['Outfit'] group-hover:text-emerald-200">
                  {item.heading}
                </span>
                {item.tag && (
                  <span className="text-[10px] font-mono font-bold bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                    {item.tag}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-300/90 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Key Metric Strips */}
      <div className="border-t border-slate-800 pt-4 flex flex-wrap items-center justify-between gap-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-1">
          {slide.keyMetrics?.map((metric, i) => (
            <div key={i} className="bg-slate-900/40 border border-slate-800/80 px-3 py-2 rounded-xl">
              <div className="text-base md:text-xl font-black text-white font-['Outfit'] flex items-center gap-1">
                <span>{metric.value}</span>
                <span className="text-[10px] text-emerald-400 font-normal">{metric.change}</span>
              </div>
              <div className="text-[11px] text-slate-400 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {onNext && (
          <button
            onClick={onNext}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center gap-2 text-xs md:text-sm font-['Outfit'] transition-all active:scale-95 group shrink-0"
          >
            <span>Begin Presentation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        )}
      </div>

    </div>
  );
};
