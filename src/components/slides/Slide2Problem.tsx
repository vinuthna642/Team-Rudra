import React from 'react';
import { motion } from 'motion/react';
import { KineticTitle } from '../KineticTitle';
import { SlideData } from '../../data/presentationData';
import { 
  AlertOctagon, 
  Flame, 
  TrendingDown, 
  Skull, 
  Clock, 
  FileWarning, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface SlideProps {
  slide: SlideData;
  onNext?: () => void;
}

export const Slide2Problem: React.FC<SlideProps> = ({ slide, onNext }) => {
  const problems = [
    {
      title: "Soil Depletion & NPK Misuse",
      stat: "14-21 Days",
      statLabel: "Lab delay for basic NPK test",
      desc: "Farmers blindly dump Urea and chemical fertilizers without knowing Nitrogen/Phosphorus/pH levels, degrading soil biodiversity and lowering harvests.",
      icon: Flame,
      color: "border-red-500/30 bg-red-950/20 text-red-400"
    },
    {
      title: "Late Pathogen Diagnosis",
      stat: "40% Loss",
      statLabel: "Yield ruined by Rice Blast",
      desc: "Foliar diseases like Pyricularia oryzae spread unseen for days before symptoms are identified. Without immediate agronomic prescriptions, fields are devastated.",
      icon: Skull,
      color: "border-amber-500/30 bg-amber-950/20 text-amber-400"
    },
    {
      title: "Mandi Price Asymmetry",
      stat: "22-38%",
      statLabel: "Cut taken by commission agents",
      desc: "Village brokers exploit the lack of transparent, real-time APMC price tickers, coercing cash-strapped farmers into distress sales well below MSP.",
      icon: TrendingDown,
      color: "border-orange-500/30 bg-orange-950/20 text-orange-400"
    },
    {
      title: "Post-Harvest Cold Chain Deficit",
      stat: "₹1.5 Lakh Cr",
      statLabel: "Wasted agricultural produce yearly",
      desc: "Zero visibility on vacant cold storages and last-mile agri-truck transport causes ripe produce to perish in transit or rot under open sheds.",
      icon: AlertOctagon,
      color: "border-rose-500/30 bg-rose-950/20 text-rose-400"
    }
  ];

  return (
    <div className="h-full flex flex-col justify-between p-4 md:p-8 relative overflow-hidden">
      
      {/* Top Header */}
      <div>
        <KineticTitle
          category="Problem Statement & Need Analysis"
          text="The Agrarian Dilemma"
          subtitle="Systemic Vulnerabilities Facing Indian Smallholder Farmers in Andhra Pradesh, Telangana & Nationwide"
          size="large"
        />
        <p className="text-xs md:text-sm text-slate-300 font-medium max-w-3xl leading-relaxed mt-1">
          {slide.headline}
        </p>
      </div>

      {/* 4 Deep-Dive Problem Quadrants */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto py-4">
        {problems.map((prob, idx) => {
          const Icon = prob.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`border rounded-2xl p-4 transition-all hover:scale-[1.01] shadow-lg ${prob.color}`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-900/80 flex items-center justify-center border border-slate-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm md:text-base text-white font-['Outfit']">
                      {prob.title}
                    </h3>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-base md:text-lg font-black font-['Outfit'] text-white">
                    {prob.stat}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    {prob.statLabel}
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mt-2 font-normal">
                {prob.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* The SmartSoil Unified Solution Thesis Bar */}
      <div className="border-t border-slate-800 pt-3 flex flex-wrap items-center justify-between gap-4">
        <div className="bg-emerald-950/40 border border-emerald-500/30 px-4 py-2 rounded-xl flex items-center gap-3 flex-1">
          <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
            ✓
          </div>
          <div className="text-xs text-emerald-200">
            <span className="font-black text-white font-['Outfit']">The SmartSoil Intervention: </span>
            A unified, multilingual PWA that resolves all four pain points in real time on a standard smartphone.
          </div>
        </div>

        {onNext && (
          <button
            onClick={onNext}
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-4 py-2 rounded-xl border border-slate-700 flex items-center gap-2 text-xs transition-all active:scale-95 shrink-0"
          >
            <span>Next: Kisan Dashboard</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>
        )}
      </div>

    </div>
  );
};
