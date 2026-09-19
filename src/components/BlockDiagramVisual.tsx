import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Smartphone, 
  ShieldCheck, 
  Server, 
  Store, 
  TrendingUp, 
  Users, 
  Handshake, 
  IndianRupee, 
  CheckCircle, 
  Globe, 
  Database, 
  Cpu, 
  Layers
} from 'lucide-react';

interface BlockDiagramVisualProps {
  interactive?: boolean;
}

export const BlockDiagramVisual: React.FC<BlockDiagramVisualProps> = ({ interactive = true }) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const nodeDetails: Record<string, { title: string; tech: string; description: string; latency: string }> = {
    pwa: {
      title: "Farmer Mobile Interface (PWA)",
      tech: "Vite + React 19 + Service Worker Cache + Web Manifest",
      description: "Operates offline in low-connectivity rural zones. Multilingual UI support in Telugu, Hindi, and English with voice command capabilities.",
      latency: "< 1.2s cold start"
    },
    gateway: {
      title: "Marketplace Gateway & Router",
      tech: "Express / Node Microservice + JWT + Redis State Caching",
      description: "Handles TLS encryption, farmer authentication, request throttling, and fast in-memory response caching for price feeds.",
      latency: "< 45ms routing"
    },
    mandi: {
      title: "Live APMC Mandi Engine",
      tech: "AgMarkNet Ingestion Engine + WebSockets Real-Time Stream",
      description: "Scrapes and aggregates modal price tickers across regional mandis (Vijayawada, Guntur, Warangal, Khammam) with automated target alert triggers.",
      latency: "15-sec polling refresh"
    },
    fpo: {
      title: "FPO & Buyer Directory",
      tech: "Relational Ledger + Geolocation Spatial Query + KYC Verifier",
      description: "Direct connection with verified Farmer Producer Organizations (FPOs), bulk processors, and cooperative transport fleets.",
      latency: "Real-time index"
    },
    output: {
      title: "Transparent Value Output",
      tech: "Smart Contract Settlement & Direct UPI/Bank Disbursal",
      description: "Eliminates village middlemen commissions (saving 22-38%), guarantees fair market prices, and enables direct institutional trade.",
      latency: "Zero intermediary fee"
    }
  };

  return (
    <div className="w-full bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700/80 p-4 md:p-6 shadow-xl flex flex-col font-sans">
      
      {/* Block Diagram Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-700/60">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-xs md:text-sm font-extrabold text-white uppercase tracking-wider font-['Outfit']">
            System Architecture Block Diagram
          </span>
          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full font-mono">
            High-Throughput PWA Flow
          </span>
        </div>
        {interactive && (
          <span className="text-[11px] text-slate-400 font-medium">
            💡 Click any layer below to inspect engineering specifications
          </span>
        )}
      </div>

      {/* Main Diagram Canvas */}
      <div className="flex flex-col items-center space-y-3 relative max-w-2xl mx-auto w-full">

        {/* 1. TOP BLOCK: FARMER MOBILE INTERFACE (PWA) */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          onClick={() => interactive && setSelectedNode('pwa')}
          className={`w-full bg-[#dcfce7] border-2 ${
            selectedNode === 'pwa' ? 'border-emerald-600 ring-2 ring-emerald-400' : 'border-[#22c55e]'
          } rounded-2xl p-3 md:p-4 text-slate-900 shadow-md cursor-pointer transition-all`}
        >
          <div className="flex items-center gap-3">
            {/* Left Graphic: Farmer with smartphone */}
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white border border-emerald-300 shadow-xs flex items-center justify-center p-1.5 shrink-0">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-amber-200 border border-amber-400 flex items-center justify-center text-xs">
                  👨‍🌾
                </div>
                <div className="mt-1 flex items-center gap-0.5 bg-blue-600 text-white px-1 py-0.2 rounded text-[7px] font-bold">
                  <Smartphone className="w-2 h-2" />
                  <span>PWA</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-sm md:text-base font-black text-emerald-950 font-['Outfit'] tracking-tight">
                FARMER MOBILE INTERFACE (PWA)
              </h3>
              <p className="text-xs font-bold text-emerald-800 mt-0.5">
                (Multilingual UI: English, Telugu, Hindi)
              </p>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="bg-emerald-700 text-white text-[9px] font-extrabold px-2 py-0.5 rounded shadow-xs">
                  English
                </span>
                <span className="bg-amber-600 text-white text-[9px] font-extrabold px-2 py-0.5 rounded shadow-xs">
                  తెలుగు
                </span>
                <span className="bg-purple-700 text-white text-[9px] font-extrabold px-2 py-0.5 rounded shadow-xs">
                  हिंदी
                </span>
                <span className="text-[10px] text-emerald-900 font-semibold ml-auto hidden sm:inline">
                  Offline-First Local Storage
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Down Arrow 1 */}
        <div className="flex flex-col items-center text-emerald-400 py-0.5">
          <div className="w-1 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-emerald-500"></div>
        </div>

        {/* 2. MIDDLE BLOCK: MARKETPLACE GATEWAY & ROUTER */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          onClick={() => interactive && setSelectedNode('gateway')}
          className={`w-full bg-[#ede9fe] border-2 ${
            selectedNode === 'gateway' ? 'border-indigo-600 ring-2 ring-indigo-400' : 'border-[#6366f1]'
          } rounded-2xl p-3 md:p-4 text-slate-900 shadow-md cursor-pointer transition-all`}
        >
          <div className="flex items-center gap-3">
            {/* Left Graphic: Cloud with shield + server */}
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white border border-indigo-200 shadow-xs flex items-center justify-center p-2 shrink-0">
              <div className="flex flex-col items-center justify-center gap-1 text-indigo-600">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
                <Server className="w-4 h-4 text-indigo-700" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-sm md:text-base font-black text-indigo-950 font-['Outfit'] tracking-tight">
                MARKETPLACE GATEWAY & ROUTER
              </h3>
              <p className="text-xs font-semibold text-indigo-900 mt-0.5">
                (Handles secure requests and local state caching)
              </p>
              <div className="flex items-center gap-2 mt-1.5 text-[10px] text-indigo-800 font-medium">
                <span className="bg-indigo-100 px-2 py-0.5 rounded border border-indigo-200 font-mono">
                  TLS / JWT Auth
                </span>
                <span className="bg-indigo-100 px-2 py-0.5 rounded border border-indigo-200 font-mono">
                  Redis State Cache
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Branching Down Arrows */}
        <div className="w-full flex justify-around py-0.5 text-indigo-400">
          <div className="flex flex-col items-center">
            <div className="w-1 h-4 bg-indigo-500 rounded-full"></div>
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-indigo-500"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-1 h-4 bg-indigo-500 rounded-full"></div>
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-indigo-500"></div>
          </div>
        </div>

        {/* 3. PARALLEL ENGINES: LIVE APMC MANDI ENGINE (LEFT) & FPO / BUYER DIRECTORY (RIGHT) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
          
          {/* 3A: LIVE APMC MANDI ENGINE */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            onClick={() => interactive && setSelectedNode('mandi')}
            className={`bg-[#fef3c7] border-2 ${
              selectedNode === 'mandi' ? 'border-amber-600 ring-2 ring-amber-400' : 'border-[#f59e0b]'
            } rounded-2xl p-3 text-slate-900 shadow-md cursor-pointer transition-all flex flex-col`}
          >
            <div className="flex items-start gap-2.5 mb-2">
              <div className="w-12 h-12 rounded-xl bg-white border border-amber-300 shadow-xs flex items-center justify-center p-1.5 shrink-0">
                <div className="flex flex-col items-center text-amber-700">
                  <Store className="w-5 h-5 text-amber-700" />
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-black text-amber-950 font-['Outfit'] leading-tight">
                  LIVE APMC MANDI ENGINE
                </h4>
                <div className="text-[10px] text-amber-800 font-bold mt-0.5">
                  AgMarkNet Integration
                </div>
              </div>
            </div>

            <ul className="space-y-1 text-[11px] font-semibold text-amber-950 mt-1 pl-1">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span>Real-time price tickers</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span>Regional market trends</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span>Custom target price alerts</span>
              </li>
            </ul>
          </motion.div>

          {/* 3B: FPO & BUYER DIRECTORY */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            onClick={() => interactive && setSelectedNode('fpo')}
            className={`bg-[#dbeafe] border-2 ${
              selectedNode === 'fpo' ? 'border-blue-600 ring-2 ring-blue-400' : 'border-[#3b82f6]'
            } rounded-2xl p-3 text-slate-900 shadow-md cursor-pointer transition-all flex flex-col`}
          >
            <div className="flex items-start gap-2.5 mb-2">
              <div className="w-12 h-12 rounded-xl bg-white border border-blue-300 shadow-xs flex items-center justify-center p-1.5 shrink-0">
                <div className="flex flex-col items-center text-blue-700">
                  <Users className="w-5 h-5 text-blue-700" />
                  <Handshake className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-black text-blue-950 font-['Outfit'] leading-tight">
                  FPO & BUYER DIRECTORY
                </h4>
                <div className="text-[10px] text-blue-800 font-bold mt-0.5">
                  Direct Institutional Network
                </div>
              </div>
            </div>

            <ul className="space-y-1 text-[11px] font-semibold text-blue-950 mt-1 pl-1">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span>Verified cooperatives</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span>Direct bulk aggregators</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span>Cold storage logistics link</span>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Merging Down Arrows */}
        <div className="w-full flex justify-around py-0.5">
          <div className="w-1/2 flex justify-center">
            <div className="w-1 h-4 bg-pink-500 rounded-full"></div>
          </div>
          <div className="w-1/2 flex justify-center">
            <div className="w-1 h-4 bg-pink-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col items-center -mt-2">
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-pink-500"></div>
        </div>

        {/* 4. BOTTOM BLOCK: TRANSPARENT VALUE OUTPUT */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          onClick={() => interactive && setSelectedNode('output')}
          className={`w-full bg-[#fdf2f8] border-2 ${
            selectedNode === 'output' ? 'border-pink-600 ring-2 ring-pink-400' : 'border-[#ec4899]'
          } rounded-2xl p-3 md:p-4 text-slate-900 shadow-md cursor-pointer transition-all`}
        >
          <div className="flex items-center gap-3">
            {/* Left Graphic: Rupee shield with caring hands */}
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white border border-pink-200 shadow-xs flex items-center justify-center p-2 shrink-0">
              <div className="flex flex-col items-center justify-center text-pink-600">
                <div className="w-7 h-7 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 font-extrabold text-sm">
                  ₹
                </div>
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-sm md:text-base font-black text-pink-950 font-['Outfit'] tracking-tight">
                TRANSPARENT VALUE OUTPUT
              </h3>
              <p className="text-xs font-semibold text-pink-900 mt-0.5">
                (Empowers farmers with fair price discovery and direct contracts)
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-1.5 text-[10px] text-pink-950 font-bold">
                <span className="bg-pink-100 px-2 py-0.5 rounded border border-pink-200">
                  Zero Middleman Commissions
                </span>
                <span className="bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded border border-emerald-300">
                  +28% Farmer Net Revenue
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Selected Node Details Drawer */}
      {selectedNode && nodeDetails[selectedNode] && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3.5 bg-slate-800/90 border border-emerald-500/40 rounded-xl text-white text-xs shadow-lg space-y-1.5"
        >
          <div className="flex items-center justify-between border-b border-slate-700 pb-1.5">
            <span className="font-black text-emerald-400 font-['Outfit'] text-sm">
              Layer Inspection: {nodeDetails[selectedNode].title}
            </span>
            <span className="font-mono text-[10px] bg-slate-700 px-2 py-0.5 rounded text-emerald-300">
              Latency: {nodeDetails[selectedNode].latency}
            </span>
          </div>
          <div className="text-slate-300 leading-relaxed font-medium">
            {nodeDetails[selectedNode].description}
          </div>
          <div className="flex items-center gap-2 pt-1 font-mono text-[11px] text-slate-400">
            <span className="text-emerald-400 font-bold">Tech Stack:</span>
            <span>{nodeDetails[selectedNode].tech}</span>
          </div>
        </motion.div>
      )}

    </div>
  );
};
