import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MobileFrame, MobileTab } from './MobileFrame';
import { 
  Smartphone, 
  Layers, 
  Sprout, 
  Camera, 
  TrendingUp, 
  Warehouse, 
  HelpCircle,
  ExternalLink,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';

export const InteractiveAppDashboard: React.FC = () => {
  const [selectedScreen, setSelectedScreen] = useState<MobileTab>('home');

  const screenMetadata = {
    home: {
      screenNumber: "Screen 1",
      title: "SmartSoil & Crop Care - Kisan Home",
      desc: "Welcome banner for Kisan Vinuthna, urgent heavy rainfall advisory for Vijayawada, quick services grid, and live soil health telemetry (Moisture 42%, pH 6.8, NPK Good).",
      tags: ["Home Dashboard", "Weather Advisory", "Glanceable UX"]
    },
    soil: {
      screenNumber: "Screen 2",
      title: "Dual Mode Soil Analyzer & Report Card",
      desc: "Toggle between IoT Probes and Manual test kit values. Calculate soil report to generate optimal moisture, NPK status, +10% water adjustment, and ranked crop matches (Paddy 96%, Cotton 89%, Maize 82%).",
      tags: ["IoT Telemetry", "NPK Modeling", "Crop Suitability Match"]
    },
    scan: {
      screenNumber: "Screen 3",
      title: "AI Leaf Photo Scan & Disease Diagnosis",
      desc: "Upload or capture foliage photo. Edge AI model classifies Rice Blast (Pyricularia oryzae) with 94.2% confidence, extracts diamond lesion symptoms, and prescribes Tricyclazole 75% WP @ 0.6g/L.",
      tags: ["Computer Vision", "Rice Blast 94.2%", "Agronomic Prescription"]
    },
    market: {
      screenNumber: "Screen 4",
      title: "APMC Mandi Price Intelligence & Alerts",
      desc: "Real-time mandi tickers (Vijayawada Paddy ₹2,380, Guntur Red Chilli ₹18,500, Warangal Cotton ₹7,450, Khammam Maize ₹2,250). Target price push alert setup for Paddy / Rice (వరి).",
      tags: ["AgMarkNet Live Feed", "Price Volatility", "SMS Alerts"]
    },
    storage: {
      screenNumber: "Screen 5",
      title: "Cold Storage & Farm Logistics Finder",
      desc: "Hyperlocal warehouse search: Sri Srinivasa Cold Storage (Mangalagiri 4.2 km away, 450 MT capacity) with instant booking, and Kisan Express Mini Truck 2 Ton with GPS and driver dispatch at ₹22/km.",
      tags: ["Post-Harvest Loss", "Cold Chain Booking", "Farm Transit Truck"]
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-6">
      
      {/* Top Banner */}
      <div className="bg-slate-900/90 border border-emerald-500/30 p-4 md:p-6 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-2">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Interactive Mobile Application Showcase</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-white font-['Outfit']">
            All 5 Screens Live Interactive Simulator
          </h2>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mt-1">
            Test the live mobile application as a farmer. Switch screens below or tap directly on the phone's bottom navigation bar!
          </p>
        </div>

        {/* Screen Switcher Chips */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
          {(['home', 'soil', 'scan', 'market', 'storage'] as MobileTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedScreen(tab)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedScreen === tab
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              {screenMetadata[tab].screenNumber}: {tab.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Stage: Phone on Left/Center, Detailed Feature Matrix on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left 5 Cols: The Phone Frame */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="sticky top-6">
            <MobileFrame
              activeTab={selectedScreen}
              onTabChange={(tab) => setSelectedScreen(tab)}
              scale="lg"
              isInteractive={true}
            />
          </div>
        </div>

        {/* Right 7 Cols: Detailed Documentation & Screen Breakdown */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Active Screen Title Card */}
          <div className="bg-slate-900/70 border border-slate-800 p-5 rounded-2xl shadow-lg space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                {screenMetadata[selectedScreen].screenNumber}
              </span>
              <h3 className="text-lg md:text-xl font-black text-white font-['Outfit']">
                {screenMetadata[selectedScreen].title}
              </h3>
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed">
              {screenMetadata[selectedScreen].desc}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {screenMetadata[selectedScreen].tags.map((tag, i) => (
                <span key={i} className="text-xs font-semibold bg-slate-800 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-700">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Screen Capabilities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl space-y-1">
              <div className="text-xs font-black text-emerald-400 font-['Outfit'] uppercase">
                Farmer Usability
              </div>
              <p className="text-xs text-slate-300">
                Large touch targets (min 48px), multilingual labels (Telugu/Hindi/English), and voice alerts designed for rural agricultural workers.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl space-y-1">
              <div className="text-xs font-black text-emerald-400 font-['Outfit'] uppercase">
                Offline Capability
              </div>
              <p className="text-xs text-slate-300">
                Cached soil history and local diagnostic models run even when roaming through cellular dead zones in agricultural fields.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl space-y-1">
              <div className="text-xs font-black text-emerald-400 font-['Outfit'] uppercase">
                Hardware Compatibility
              </div>
              <p className="text-xs text-slate-300">
                Bluetooth / LoRa capacitive soil probes or standard Android smartphone camera. No expensive proprietary hardware required.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl space-y-1">
              <div className="text-xs font-black text-emerald-400 font-['Outfit'] uppercase">
                Government Alignment
              </div>
              <p className="text-xs text-slate-300">
                Integrates with AgMarkNet portals, Soil Health Card schemas, and e-NAM agricultural trading network.
              </p>
            </div>
          </div>

          {/* Quick Screen Selector Grid */}
          <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-2xl">
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">
              Explore All 5 Screens Directly:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={() => setSelectedScreen('home')}
                className={`p-2.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedScreen === 'home'
                    ? 'border-emerald-500/60 bg-emerald-950/20 text-white'
                    : 'border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div>
                  <div className="text-xs font-bold text-white font-['Outfit']">Screen 1: Home Dashboard</div>
                  <div className="text-[10px] text-slate-400">Weather & Soil Telemetry Overview</div>
                </div>
                <Sprout className="w-4 h-4 text-emerald-400" />
              </button>

              <button
                onClick={() => setSelectedScreen('soil')}
                className={`p-2.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedScreen === 'soil'
                    ? 'border-emerald-500/60 bg-emerald-950/20 text-white'
                    : 'border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div>
                  <div className="text-xs font-bold text-white font-['Outfit']">Screen 2: Soil Analyzer</div>
                  <div className="text-[10px] text-slate-400">IoT / Manual NPK & Crop Matching</div>
                </div>
                <Sprout className="w-4 h-4 text-emerald-400" />
              </button>

              <button
                onClick={() => setSelectedScreen('scan')}
                className={`p-2.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedScreen === 'scan'
                    ? 'border-emerald-500/60 bg-emerald-950/20 text-white'
                    : 'border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div>
                  <div className="text-xs font-bold text-white font-['Outfit']">Screen 3: AI Leaf Scan</div>
                  <div className="text-[10px] text-slate-400">Rice Blast Pathogen Diagnosis</div>
                </div>
                <Camera className="w-4 h-4 text-emerald-400" />
              </button>

              <button
                onClick={() => setSelectedScreen('market')}
                className={`p-2.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedScreen === 'market'
                    ? 'border-emerald-500/60 bg-emerald-950/20 text-white'
                    : 'border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div>
                  <div className="text-xs font-bold text-white font-['Outfit']">Screen 4: APMC Mandi</div>
                  <div className="text-[10px] text-slate-400">Live Prices & Target SMS Alerts</div>
                </div>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </button>

              <button
                onClick={() => setSelectedScreen('storage')}
                className={`p-2.5 rounded-xl border text-left transition-all flex items-center justify-between sm:col-span-2 ${
                  selectedScreen === 'storage'
                    ? 'border-emerald-500/60 bg-emerald-950/20 text-white'
                    : 'border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div>
                  <div className="text-xs font-bold text-white font-['Outfit']">Screen 5: Cold Storage & Logistics</div>
                  <div className="text-[10px] text-slate-400">Mangalagiri 450 MT Storage & Kisan Express Truck Dispatch</div>
                </div>
                <Warehouse className="w-4 h-4 text-emerald-400" />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
