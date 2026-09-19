import React from 'react';
import { motion } from 'motion/react';
import { KineticTitle } from '../KineticTitle';
import { SlideData } from '../../data/presentationData';
import { MobileFrame } from '../MobileFrame';
import { 
  TrendingUp, 
  IndianRupee, 
  Bell, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Radio
} from 'lucide-react';

interface SlideProps {
  slide: SlideData;
  onNext?: () => void;
}

export const Slide6MandiIntelligence: React.FC<SlideProps> = ({ slide, onNext }) => {
  return (
    <div className="h-full flex flex-col justify-between p-4 md:p-8 relative overflow-hidden">
      
      {/* Top Header */}
      <div>
        <KineticTitle
          category="Market Intelligence & Price Discovery (Screen 4)"
          text="APMC Mandi Price Alerts"
          subtitle="Real-Time Mandi Streaming, AgMarkNet Ingestion & Automated Target Triggers"
          size="large"
        />
      </div>

      {/* Two Column Layout */}
      <div className="my-auto py-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left 7 Cols: Market Architecture & Economic Value */}
        <div className="lg:col-span-7 space-y-3.5">
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
            <h3 className="text-sm md:text-base font-black text-white font-['Outfit'] flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Screen 4: Defeating Price Asymmetry in Rural Trade</span>
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Integrates with government APMC API portals and regional spot market brokers to broadcast authenticated modal rates directly to the farmer's pocket, eliminating unverified village hearsay.
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

          {/* Regional Mandi Ticker Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
            <div className="bg-slate-900/70 border border-slate-800 p-2.5 rounded-xl">
              <div className="text-[10px] text-slate-400 font-semibold">Vijayawada (Paddy)</div>
              <div className="text-xs md:text-sm font-black text-white font-['Outfit'] mt-0.5">₹2,380 / Q</div>
              <div className="text-[10px] font-bold text-emerald-400">+2.4% Today</div>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 p-2.5 rounded-xl">
              <div className="text-[10px] text-slate-400 font-semibold">Guntur (Red Chilli)</div>
              <div className="text-xs md:text-sm font-black text-amber-300 font-['Outfit'] mt-0.5">₹18,500 / Q</div>
              <div className="text-[10px] font-bold text-emerald-400">+5.1% Spike</div>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 p-2.5 rounded-xl">
              <div className="text-[10px] text-slate-400 font-semibold">Warangal (Cotton)</div>
              <div className="text-xs md:text-sm font-black text-white font-['Outfit'] mt-0.5">₹7,450 / Q</div>
              <div className="text-[10px] font-bold text-slate-400">0.0% Steady</div>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 p-2.5 rounded-xl">
              <div className="text-[10px] text-slate-400 font-semibold">Khammam (Maize)</div>
              <div className="text-xs md:text-sm font-black text-white font-['Outfit'] mt-0.5">₹2,250 / Q</div>
              <div className="text-[10px] font-bold text-red-400">-1.2% Dip</div>
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Live Interactive Mobile Frame (Screen 4 Market) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="text-center mb-2">
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
              <Radio className="w-3 h-3 animate-pulse text-emerald-400" />
              Live Interactive Screen 4 Mockup
            </span>
          </div>
          <MobileFrame activeTab="market" scale="md" isInteractive={true} />
        </div>

      </div>

      {/* Footer Nav */}
      <div className="border-t border-slate-800 pt-3 flex items-center justify-between">
        <div className="text-xs text-slate-400 font-medium">
          Slide 6 of 8 • Market Intelligence & Automated Price Targets
        </div>
        {onNext && (
          <button
            onClick={onNext}
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-4 py-2 rounded-xl border border-slate-700 flex items-center gap-2 text-xs transition-all active:scale-95 shrink-0"
          >
            <span>Next: Cold Storage & Logistics</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>
        )}
      </div>

    </div>
  );
};
