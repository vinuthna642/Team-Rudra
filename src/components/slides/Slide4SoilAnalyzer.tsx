import React from 'react';
import { motion } from 'motion/react';
import { KineticTitle } from '../KineticTitle';
import { SlideData } from '../../data/presentationData';
import { MobileFrame } from '../MobileFrame';
import { 
  Sprout, 
  Cpu, 
  Droplets, 
  CheckCircle2, 
  ArrowRight,
  BarChart3,
  Percent
} from 'lucide-react';

interface SlideProps {
  slide: SlideData;
  onNext?: () => void;
}

export const Slide4SoilAnalyzer: React.FC<SlideProps> = ({ slide, onNext }) => {
  return (
    <div className="h-full flex flex-col justify-between p-4 md:p-8 relative overflow-hidden">
      
      {/* Top Header */}
      <div>
        <KineticTitle
          category="Precision Agronomy Engine (Screen 2)"
          text="Dual Mode Soil Analyzer"
          subtitle="Real-Time Chemical Modeling & Crop Suitability Compatibility Algorithm"
          size="large"
        />
      </div>

      {/* Two Column Layout */}
      <div className="my-auto py-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left 7 Cols: Detailed Agronomic Explanations */}
        <div className="lg:col-span-7 space-y-3.5">
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
            <h3 className="text-sm md:text-base font-black text-white font-['Outfit'] flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span>Screen 2: Hybrid Ingestion (IoT Probes & Manual Kits)</span>
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Provides a dual-path architecture: farmers with Bluetooth/LoRa IoT field sensors receive instant continuous telemetry, while traditional farmers can input manual government soil testing card values.
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

          {/* Precision Crop Suitability Ranking Callout */}
          <div className="bg-emerald-950/30 border border-emerald-500/30 p-3 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black text-emerald-300 uppercase font-['Outfit']">
                Algorithmic Crop Suitability Outputs (Current Field Vector)
              </span>
              <span className="text-[10px] font-mono text-slate-400">Regional Model: AP Delta</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-slate-900/80 border border-emerald-500/40 p-2 rounded-lg">
                <div className="text-xs font-black text-white font-['Outfit']">1. Paddy (Rice)</div>
                <div className="text-sm font-black text-emerald-400 font-mono mt-0.5">96% Match</div>
                <div className="text-[9px] text-emerald-300/80">Highest Yield Potential</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-700 p-2 rounded-lg">
                <div className="text-xs font-black text-white font-['Outfit']">2. Cotton</div>
                <div className="text-sm font-black text-amber-400 font-mono mt-0.5">89% Match</div>
                <div className="text-[9px] text-slate-400">Viable Cash Crop</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-700 p-2 rounded-lg">
                <div className="text-xs font-black text-white font-['Outfit']">3. Maize</div>
                <div className="text-sm font-black text-blue-400 font-mono mt-0.5">82% Match</div>
                <div className="text-[9px] text-slate-400">Alternate Rotation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Live Interactive Mobile Frame (Screen 2 Soil) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="text-center mb-2">
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
              <Cpu className="w-3 h-3" />
              Live Interactive Screen 2 Mockup
            </span>
          </div>
          <MobileFrame activeTab="soil" scale="md" isInteractive={true} />
        </div>

      </div>

      {/* Footer Nav */}
      <div className="border-t border-slate-800 pt-3 flex items-center justify-between">
        <div className="text-xs text-slate-400 font-medium">
          Slide 4 of 8 • Dual Mode Telemetry & Agronomy Analysis
        </div>
        {onNext && (
          <button
            onClick={onNext}
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-4 py-2 rounded-xl border border-slate-700 flex items-center gap-2 text-xs transition-all active:scale-95 shrink-0"
          >
            <span>Next: AI Leaf Vision Diagnosis</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>
        )}
      </div>

    </div>
  );
};
