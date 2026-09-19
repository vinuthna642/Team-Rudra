import React from 'react';
import { motion } from 'motion/react';
import { KineticTitle } from '../KineticTitle';
import { SlideData } from '../../data/presentationData';
import { MobileFrame } from '../MobileFrame';
import { 
  Warehouse, 
  Truck, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  TrendingDown
} from 'lucide-react';

interface SlideProps {
  slide: SlideData;
  onNext?: () => void;
}

export const Slide7Logistics: React.FC<SlideProps> = ({ slide, onNext }) => {
  return (
    <div className="h-full flex flex-col justify-between p-4 md:p-8 relative overflow-hidden">
      
      {/* Top Header */}
      <div>
        <KineticTitle
          category="Post-Harvest Infrastructure (Screen 5)"
          text="Cold Storage & Logistics Finder"
          subtitle="Preventing Post-Harvest Spoilage Through Localized Warehousing & GPS Transport Dispatch"
          size="large"
        />
      </div>

      {/* Two Column Layout */}
      <div className="my-auto py-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left 7 Cols: Logistics & Loss Mitigation Explanations */}
        <div className="lg:col-span-7 space-y-3.5">
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
            <h3 className="text-sm md:text-base font-black text-white font-['Outfit'] flex items-center gap-2">
              <Warehouse className="w-4 h-4 text-emerald-400" />
              <span>Screen 5: Securing the Perishable Supply Chain</span>
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              India loses over ₹1,52,000 Crores of agricultural produce annually due to lack of cold storage accessibility. SmartSoil connects smallholders with micro-warehouses and localized freight in seconds.
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

          {/* Key Logistics Case Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            <div className="bg-slate-900/70 border border-slate-800 p-3 rounded-xl">
              <div className="text-xs font-black text-white font-['Outfit'] flex items-center gap-1.5">
                <Warehouse className="w-3.5 h-3.5 text-purple-400" />
                <span>Sri Srinivasa Cold Storage</span>
              </div>
              <div className="text-[11px] text-slate-300 mt-1">
                NH-16 Mangalagiri (4.2 km) • 450 MT Available • ₹120/bag/month
              </div>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 p-3 rounded-xl">
              <div className="text-xs font-black text-white font-['Outfit'] flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-blue-400" />
                <span>Kisan Express Transport Truck</span>
              </div>
              <div className="text-[11px] text-slate-300 mt-1">
                Vijayawada Hub (Mini 2 Ton) • GPS Verified • Flat ₹22/km
              </div>
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Live Interactive Mobile Frame (Screen 5 Storage) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="text-center mb-2">
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
              <Warehouse className="w-3.5 h-3.5" />
              Live Interactive Screen 5 Mockup
            </span>
          </div>
          <MobileFrame activeTab="storage" scale="md" isInteractive={true} />
        </div>

      </div>

      {/* Footer Nav */}
      <div className="border-t border-slate-800 pt-3 flex items-center justify-between">
        <div className="text-xs text-slate-400 font-medium">
          Slide 7 of 8 • Cold Storage Discovery & Farm Logistics
        </div>
        {onNext && (
          <button
            onClick={onNext}
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-4 py-2 rounded-xl border border-slate-700 flex items-center gap-2 text-xs transition-all active:scale-95 shrink-0"
          >
            <span>Next: System Architecture & Block Diagram</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>
        )}
      </div>

    </div>
  );
};
