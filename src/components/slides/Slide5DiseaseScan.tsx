import React from 'react';
import { motion } from 'motion/react';
import { KineticTitle } from '../KineticTitle';
import { SlideData } from '../../data/presentationData';
import { MobileFrame } from '../MobileFrame';
import { 
  Camera, 
  AlertTriangle, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  Activity,
  Layers,
  Sparkles
} from 'lucide-react';

interface SlideProps {
  slide: SlideData;
  onNext?: () => void;
}

export const Slide5DiseaseScan: React.FC<SlideProps> = ({ slide, onNext }) => {
  return (
    <div className="h-full flex flex-col justify-between p-4 md:p-8 relative overflow-hidden">
      
      {/* Top Header */}
      <div>
        <KineticTitle
          category="Computer Vision & Plant Pathology (Screen 3)"
          text="AI Leaf Vision Diagnosis"
          subtitle="Edge Deep Learning for Rapid Foliar Pathogen Detection & Prescriptive Care"
          size="large"
        />
      </div>

      {/* Two Column Layout */}
      <div className="my-auto py-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left 7 Cols: Pathology & AI Inference Explanations */}
        <div className="lg:col-span-7 space-y-3.5">
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
            <h3 className="text-sm md:text-base font-black text-white font-['Outfit'] flex items-center gap-2">
              <Camera className="w-4 h-4 text-emerald-400" />
              <span>Screen 3: Sub-Second Image Classification Pipeline</span>
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Trained on over 65,000 foliar disease imagery samples across South Asian paddy belts. The lightweight MobileNetV3 / EfficientNet-Lite model delivers high precision on low-end Android smartphones.
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

          {/* Diagnostic Case Study Box */}
          <div className="bg-red-950/20 border border-red-500/30 p-3.5 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-red-400 uppercase font-['Outfit'] flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                Live Detection Case: Rice Blast (Pyricularia oryzae)
              </span>
              <span className="text-xs font-mono font-black text-red-300 bg-red-900/60 px-2 py-0.5 rounded border border-red-500/40">
                Confidence: 94.2%
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                <span className="text-slate-400 font-bold block text-[10px] uppercase">Morphology:</span>
                <span className="text-slate-200 text-[11px] leading-tight">
                  Spindle/diamond-shaped lesions with grayish necrotic centers and brown margins.
                </span>
              </div>
              <div className="bg-emerald-950/40 p-2 rounded-lg border border-emerald-500/30">
                <span className="text-emerald-400 font-bold block text-[10px] uppercase">Exact Prescription:</span>
                <span className="text-emerald-200 text-[11px] leading-tight">
                  Tricyclazole 75% WP @ 0.6g/L water + stop excess urea top-dressing.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Live Interactive Mobile Frame (Screen 3 Scan) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="text-center mb-2">
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
              <Camera className="w-3.5 h-3.5" />
              Live Interactive Screen 3 Mockup
            </span>
          </div>
          <MobileFrame activeTab="scan" scale="md" isInteractive={true} />
        </div>

      </div>

      {/* Footer Nav */}
      <div className="border-t border-slate-800 pt-3 flex items-center justify-between">
        <div className="text-xs text-slate-400 font-medium">
          Slide 5 of 8 • Computer Vision Diagnostic Engine
        </div>
        {onNext && (
          <button
            onClick={onNext}
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-4 py-2 rounded-xl border border-slate-700 flex items-center gap-2 text-xs transition-all active:scale-95 shrink-0"
          >
            <span>Next: APMC Mandi Price Alerts</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>
        )}
      </div>

    </div>
  );
};
