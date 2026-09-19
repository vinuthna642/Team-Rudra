import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sprout, 
  Camera, 
  TrendingUp, 
  Warehouse, 
  Home, 
  CloudSun, 
  Users, 
  AlertTriangle, 
  ChevronDown, 
  LogOut, 
  Search, 
  PhoneCall, 
  CheckCircle2, 
  RefreshCw,
  Bell,
  Sliders,
  Cpu,
  Droplets,
  Sparkles
} from 'lucide-react';

export type MobileTab = 'home' | 'soil' | 'scan' | 'market' | 'storage';

interface MobileFrameProps {
  activeTab?: MobileTab;
  onTabChange?: (tab: MobileTab) => void;
  scale?: 'sm' | 'md' | 'lg';
  isInteractive?: boolean;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({
  activeTab: controlledTab,
  onTabChange,
  scale = 'md',
  isInteractive = true,
}) => {
  const [internalTab, setInternalTab] = useState<MobileTab>(controlledTab || 'home');
  const currentTab = controlledTab !== undefined ? controlledTab : internalTab;

  const handleTabClick = (tab: MobileTab) => {
    if (!isInteractive) return;
    setInternalTab(tab);
    if (onTabChange) onTabChange(tab);
  };

  // State for Screen 2 (Soil Analyzer)
  const [sensorMode, setSensorMode] = useState<'iot' | 'manual'>('manual');
  const [moisture, setMoisture] = useState('40');
  const [phLevel, setPhLevel] = useState('6.5');
  const [nitrogen, setNitrogen] = useState('120');
  const [phosphorus, setPhosphorus] = useState('45');
  const [calculatedReport, setCalculatedReport] = useState(true);
  const [isCalculating, setIsCalculating] = useState(false);

  // State for Screen 3 (Leaf Scan)
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(true);

  // State for Screen 4 (Market)
  const [searchQuery, setSearchQuery] = useState('');
  const [targetCrop, setTargetCrop] = useState('Paddy / Rice (వరి)');
  const [targetPrice, setTargetPrice] = useState('');
  const [alertSet, setAlertSet] = useState(false);

  // State for Screen 5 (Storage)
  const [bookedStorage, setBookedStorage] = useState(false);
  const [callingDriver, setCallingDriver] = useState(false);

  // Handle Calculate Soil Report
  const handleCalculateReport = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setCalculatedReport(true);
    }, 600);
  };

  // Handle Scan AI
  const handleRunScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 800);
  };

  const scaleClasses = {
    sm: 'w-[300px] h-[610px]',
    md: 'w-[340px] md:w-[360px] h-[680px]',
    lg: 'w-[380px] h-[740px]',
  }[scale];

  return (
    <div className={`relative mx-auto ${scaleClasses} bg-[#111928] rounded-[44px] p-3 shadow-2xl border-[6px] border-[#2d3748] shadow-emerald-950/40 flex flex-col overflow-hidden`}>
      {/* Top Phone Speaker & Camera Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-36 bg-[#2d3748] rounded-b-2xl z-50 flex items-center justify-center gap-2">
        <div className="w-10 h-1 bg-[#1a202c] rounded-full"></div>
        <div className="w-2.5 h-2.5 bg-[#1a202c] rounded-full"></div>
      </div>

      {/* Screen Container */}
      <div className="relative w-full h-full bg-[#f8fafc] text-slate-800 rounded-[34px] overflow-hidden flex flex-col text-[13px] select-none font-sans">
        
        {/* App Header (Present on all screens, matching user screenshot) */}
        <div className="bg-[#059669] text-white pt-6 pb-2.5 px-3 flex items-center justify-between shadow-sm z-30">
          <div className="flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-full bg-emerald-800/80 flex items-center justify-center border border-emerald-400/40 shadow-inner">
              <Sprout className="w-4 h-4 text-emerald-300" />
            </div>
            <div>
              <div className="font-extrabold text-xs tracking-tight leading-none text-white font-['Outfit']">
                SmartSoil & Crop Care
              </div>
              <div className="text-[9px] text-emerald-200 font-medium tracking-wide">
                Kisan AI Assistant <span className="text-[8px] bg-emerald-800 px-1 py-0.2 rounded font-bold">IN</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button 
              onClick={() => alert("Language switcher: Available in English, Telugu (తెలుగు), and Hindi (हिंदी).")}
              className="flex items-center gap-0.5 bg-emerald-800/90 hover:bg-emerald-800 px-2 py-1 rounded-md text-[11px] font-semibold text-emerald-100 transition-colors"
            >
              <span>English</span>
              <ChevronDown className="w-3 h-3 text-emerald-300" />
            </button>
            <button 
              title="Logout"
              className="w-6 h-6 rounded-md bg-red-500 hover:bg-red-600 flex items-center justify-center text-white transition-colors"
            >
              <LogOut className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Global Alert Bar (Matching screenshots) */}
        <div className="bg-[#fffbeb] border-b border-amber-200 text-amber-900 px-2.5 py-1 text-[10px] flex items-center gap-1.5 font-medium overflow-hidden whitespace-nowrap z-20">
          <span className="bg-[#d97706] text-white px-1 py-0.2 rounded font-bold text-[9px] tracking-wide uppercase">ALERT</span>
          <span className="truncate flex items-center gap-1">
            <span>🌧️ Heavy rainfall advisory for Vijayawada region. Ensure drainage.</span>
          </span>
        </div>

        {/* Main Screen Content Body (Dynamic based on selected tab) */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 space-y-3 bg-[#f8fafc] custom-scrollbar">
          <AnimatePresence mode="wait">

            {/* SCREEN 1: HOME DASHBOARD */}
            {currentTab === 'home' && (
              <motion.div
                key="tab-home"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                {/* Welcome Card */}
                <div className="bg-gradient-to-br from-[#059669] to-[#047857] text-white rounded-2xl p-3.5 shadow-md">
                  <div className="inline-block bg-emerald-800/90 text-emerald-200 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wider mb-1">
                    WELCOME KISAN
                  </div>
                  <h2 className="text-lg font-black tracking-tight leading-snug font-['Outfit']">
                    Vinuthna (Kisan)
                  </h2>
                  <p className="text-[11px] text-emerald-100/90 mt-0.5 leading-tight font-medium">
                    AI-powered soil diagnosis, crop health, and direct market access.
                  </p>

                  <div className="flex items-center gap-2 mt-3">
                    <button 
                      onClick={() => handleTabClick('soil')}
                      className="flex-1 bg-[#fbbf24] hover:bg-[#f59e0b] text-slate-900 font-bold py-1.5 px-2.5 rounded-lg flex items-center justify-center gap-1 text-[11px] shadow-sm transition-transform active:scale-95"
                    >
                      <Sprout className="w-3.5 h-3.5 text-slate-900 fill-slate-900" />
                      <span>Test Soil Now</span>
                    </button>
                    <button 
                      onClick={() => handleTabClick('scan')}
                      className="flex-1 bg-emerald-800/80 hover:bg-emerald-800 text-white font-bold py-1.5 px-2.5 rounded-lg flex items-center justify-center gap-1 text-[11px] border border-emerald-400/30 shadow-sm transition-transform active:scale-95"
                    >
                      <Camera className="w-3.5 h-3.5 text-white" />
                      <span>Scan Leaf AI</span>
                    </button>
                  </div>
                </div>

                {/* Quick Services */}
                <div>
                  <h3 className="font-extrabold text-xs text-slate-800 mb-2 font-['Outfit']">
                    Quick Services
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    <button 
                      onClick={() => handleTabClick('soil')}
                      className="bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl p-2 flex flex-col items-center justify-center text-center shadow-xs transition-transform active:scale-95"
                    >
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mb-1">
                        <Sprout className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700">Soil & NPK</span>
                    </button>

                    <button 
                      onClick={() => handleTabClick('scan')}
                      className="bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl p-2 flex flex-col items-center justify-center text-center shadow-xs transition-transform active:scale-95"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                        <Camera className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700">Disease AI</span>
                    </button>

                    <button 
                      onClick={() => handleTabClick('market')}
                      className="bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl p-2 flex flex-col items-center justify-center text-center shadow-xs transition-transform active:scale-95"
                    >
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mb-1">
                        <TrendingUp className="w-4 h-4 text-amber-600" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700">APMC Mandi</span>
                    </button>

                    <button 
                      onClick={() => handleTabClick('storage')}
                      className="bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl p-2 flex flex-col items-center justify-center text-center shadow-xs transition-transform active:scale-95"
                    >
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mb-1">
                        <Warehouse className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700">Cold Storage</span>
                    </button>

                    <button 
                      onClick={() => alert("Buyers & FPO Directory: 48 verified farmer producer organizations and bulk agri-aggregators connected in Vijayawada & Guntur.")}
                      className="bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl p-2 flex flex-col items-center justify-center text-center shadow-xs transition-transform active:scale-95"
                    >
                      <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center mb-1">
                        <Users className="w-4 h-4 text-rose-600" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700">Buyers & FPO</span>
                    </button>

                    <button 
                      onClick={() => alert("Hyperlocal Weather: 28°C, Humidity 84%, Light rain expected at 4:00 PM. High nitrogen absorption rate.")}
                      className="bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl p-2 flex flex-col items-center justify-center text-center shadow-xs transition-transform active:scale-95"
                    >
                      <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center mb-1">
                        <CloudSun className="w-4 h-4 text-cyan-600" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700">Weather</span>
                    </button>
                  </div>
                </div>

                {/* Latest Soil Health Status Card */}
                <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-extrabold text-xs text-slate-800 font-['Outfit']">
                      Latest Soil Health Status
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Optimal
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div>
                      <div className="text-[9px] text-slate-500 font-semibold uppercase">Moisture</div>
                      <div className="text-sm font-black text-slate-800 font-['Outfit']">42%</div>
                    </div>
                    <div className="border-x border-slate-200">
                      <div className="text-[9px] text-slate-500 font-semibold uppercase">Soil pH</div>
                      <div className="text-sm font-black text-slate-800 font-['Outfit']">6.8</div>
                    </div>
                    <div>
                      <div className="text-[9px] text-slate-500 font-semibold uppercase">NPK Score</div>
                      <div className="text-sm font-black text-emerald-600 font-['Outfit']">Good</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SCREEN 2: DUAL MODE SOIL ANALYZER */}
            {currentTab === 'soil' && (
              <motion.div
                key="tab-soil"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                {/* Title & Mode Switcher */}
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-black text-slate-900 font-['Outfit']">
                    Dual Mode Soil Analyzer
                  </h2>
                  <div className="flex items-center bg-slate-200 p-0.5 rounded-lg text-[10px] font-bold">
                    <button
                      onClick={() => setSensorMode('iot')}
                      className={`px-2 py-0.5 rounded-md transition-all ${
                        sensorMode === 'iot' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      IoT Sensor
                    </button>
                    <button
                      onClick={() => setSensorMode('manual')}
                      className={`px-2 py-0.5 rounded-md transition-all ${
                        sensorMode === 'manual' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      Manual
                    </button>
                  </div>
                </div>

                {/* Input Card */}
                <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-xs space-y-2.5">
                  <div className="text-[10px] font-extrabold tracking-wider text-slate-700 uppercase">
                    ENTER SOIL LAB / TEST KIT VALUES
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">
                        Moisture (%)
                      </label>
                      <input
                        type="text"
                        value={moisture}
                        onChange={(e) => setMoisture(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">
                        pH Level (0-14)
                      </label>
                      <input
                        type="text"
                        value={phLevel}
                        onChange={(e) => setPhLevel(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">
                        Nitrogen (N kg/ac)
                      </label>
                      <input
                        type="text"
                        value={nitrogen}
                        onChange={(e) => setNitrogen(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-500 font-semibold block mb-0.5">
                        Phosphorus (P kg/ac)
                      </label>
                      <input
                        type="text"
                        value={phosphorus}
                        onChange={(e) => setPhosphorus(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-800 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleCalculateReport}
                    disabled={isCalculating}
                    className="w-full bg-[#059669] hover:bg-[#047857] text-white font-extrabold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 text-xs shadow-sm transition-all active:scale-98"
                  >
                    {isCalculating ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin text-white" />
                    ) : (
                      <span>Calculate Soil Report 📊</span>
                    )}
                  </button>
                </div>

                {/* Soil Testing Report Card (Matching Screenshot 2) */}
                {calculatedReport && (
                  <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-xs space-y-2">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                      <div className="flex items-center gap-1 font-extrabold text-xs text-slate-800 font-['Outfit']">
                        <span>📋</span>
                        <span>Soil Testing Report Card</span>
                      </div>
                      <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        Healthy
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      </span>
                    </div>

                    <div className="space-y-1.5 text-[11px]">
                      <div className="flex items-center justify-between py-0.5 border-b border-slate-50">
                        <span className="text-slate-500 font-medium">Soil Moisture Level:</span>
                        <span className="font-extrabold text-slate-800 flex items-center gap-1">
                          {moisture}% (Optimal <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>)
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-0.5 border-b border-slate-50">
                        <span className="text-slate-500 font-medium leading-tight">
                          NPK Status (Nitrogen-Phosphorus-Potassium):
                        </span>
                        <span className="font-extrabold text-slate-800 text-right whitespace-nowrap">
                          N:{nitrogen} P:{phosphorus}<br />K:75
                        </span>
                      </div>

                      <div className="flex items-center justify-between py-0.5 border-b border-slate-50">
                        <span className="text-slate-500 font-medium">Water Requirement Adjustment:</span>
                        <span className="font-extrabold text-blue-600">+10% Maintenance</span>
                      </div>
                    </div>

                    {/* Suitable Crops Match Section */}
                    <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-2 space-y-1">
                      <div className="font-bold text-[10px] text-emerald-900 flex items-center gap-1">
                        <Sprout className="w-3 h-3 text-emerald-600" />
                        <span>Suitable Crops Match:</span>
                      </div>
                      <ol className="list-decimal list-inside text-[10px] font-semibold text-slate-700 space-y-0.5">
                        <li>Paddy (Rice) - <span className="text-emerald-700 font-extrabold">96% Match</span></li>
                        <li>Cotton - <span className="text-emerald-700 font-extrabold">89% Match</span></li>
                        <li>Maize - <span className="text-emerald-700 font-extrabold">82% Match</span></li>
                      </ol>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* SCREEN 3: AI SCAN LEAF */}
            {currentTab === 'scan' && (
              <motion.div
                key="tab-scan"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                {/* Upload & Photo Box */}
                <div className="bg-emerald-50/60 border-2 border-dashed border-emerald-300 rounded-2xl p-3 text-center space-y-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-200/80 mx-auto flex items-center justify-center">
                    <Camera className="w-4 h-4 text-emerald-800" />
                  </div>
                  <button 
                    onClick={handleRunScan}
                    className="w-full bg-[#059669] hover:bg-[#047857] text-white font-bold py-1.5 px-3 rounded-xl text-xs shadow-xs"
                  >
                    Upload or Capture Leaf Photo
                  </button>
                  <p className="text-[9px] text-slate-500 font-medium">
                    Supports JPG, PNG with any basic smartphone camera
                  </p>

                  {/* Leaf Image Sample (Matching Screenshot 3) */}
                  <div className="relative mx-auto w-36 h-28 rounded-xl overflow-hidden border border-slate-300 shadow-sm bg-slate-900">
                    {/* SVG Graphic recreation of diseased leaf with diamond lesions */}
                    <svg viewBox="0 0 160 120" className="w-full h-full object-cover">
                      <rect width="160" height="120" fill="#2d3748" />
                      {/* Leaf body */}
                      <path d="M20,95 Q80,20 145,50 Q110,110 30,105 Z" fill="#65a30d" />
                      {/* Leaf yellowing disease area */}
                      <path d="M70,40 Q115,45 135,65 Q100,90 75,70 Z" fill="#eab308" />
                      <path d="M100,55 Q135,60 140,80 Q110,95 95,75 Z" fill="#ca8a04" />
                      {/* Leaf Veins */}
                      <path d="M30,95 Q80,50 140,55" stroke="#365314" strokeWidth="2" fill="none" />
                      <path d="M60,75 Q75,55 90,50" stroke="#365314" strokeWidth="1" fill="none" />
                      <path d="M85,67 Q105,58 115,55" stroke="#365314" strokeWidth="1" fill="none" />
                      {/* Blast necrotic diamond lesions */}
                      <ellipse cx="60" cy="70" rx="6" ry="10" fill="#1c1917" stroke="#ca8a04" strokeWidth="1.5" transform="rotate(-15 60 70)" />
                      <ellipse cx="80" cy="60" rx="7" ry="12" fill="#1c1917" stroke="#ca8a04" strokeWidth="1.5" transform="rotate(25 80 60)" />
                      <ellipse cx="105" cy="65" rx="5" ry="9" fill="#1c1917" stroke="#ca8a04" strokeWidth="1" transform="rotate(-10 105 65)" />
                      <ellipse cx="120" cy="70" rx="6" ry="10" fill="#1c1917" stroke="#ca8a04" strokeWidth="1" transform="rotate(15 120 70)" />
                      <ellipse cx="90" cy="78" rx="4" ry="7" fill="#1c1917" />
                    </svg>

                    <div className="absolute bottom-1 right-1 bg-black/60 text-white text-[8px] px-1 py-0.5 rounded backdrop-blur-xs font-mono">
                      Target: Paddy Leaf
                    </div>
                  </div>

                  <button
                    onClick={handleRunScan}
                    disabled={isScanning}
                    className="w-full bg-[#fbbf24] hover:bg-[#f59e0b] text-slate-900 font-extrabold py-1.5 px-3 rounded-xl flex items-center justify-center gap-1 text-xs shadow-xs transition-transform active:scale-98"
                  >
                    {isScanning ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin text-slate-900" />
                    ) : (
                      <span>Run AI Analysis ⚡</span>
                    )}
                  </button>
                </div>

                {/* AI Disease Result Card */}
                {scanComplete && (
                  <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-xs space-y-2">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                      <div className="flex items-center gap-1 font-black text-xs text-red-600 font-['Outfit']">
                        <AlertTriangle className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                        <span>Rice Blast (Pyricularia oryzae)</span>
                      </div>
                      <span className="bg-red-50 text-red-600 text-[9px] font-bold px-1.5 py-0.5 rounded border border-red-200">
                        Confidence: 94.2%
                      </span>
                    </div>

                    {/* Symptoms */}
                    <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                      <div className="text-[10px] font-extrabold text-slate-800">
                        Symptoms Identified:
                      </div>
                      <p className="text-[10px] text-slate-600 mt-0.5 leading-snug">
                        Diamond-shaped lesions with gray centers on leaves and stem nodes.
                      </p>
                    </div>

                    {/* Recommended Treatment */}
                    <div className="bg-emerald-50/80 p-2 rounded-xl border border-emerald-100">
                      <div className="text-[10px] font-extrabold text-emerald-900">
                        Recommended Treatment:
                      </div>
                      <p className="text-[10px] text-emerald-800 mt-0.5 leading-snug">
                        Spray Tricyclazole 75% WP @ 0.6g per liter of water. Avoid excessive nitrogen fertilizer application.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* SCREEN 4: APMC MANDI PRICE ALERTS */}
            {currentTab === 'market' && (
              <motion.div
                key="tab-market"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                {/* Top Title & Live Feed */}
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-black text-slate-900 font-['Outfit']">
                    APMC Mandi Price Alerts
                  </h2>
                  <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    Live Feed
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  </span>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search crop or mandi (e.g. Rice, Guntur)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 text-[11px] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 shadow-xs"
                  />
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5" />
                </div>

                {/* Price Cards List (Matching Screenshot 4) */}
                <div className="space-y-1.5">
                  {/* Card 1: Paddy */}
                  <div className="bg-white border border-slate-200/90 rounded-xl p-2 flex items-center justify-between shadow-xs">
                    <div>
                      <div className="font-extrabold text-xs text-slate-800">
                        Paddy (Common)
                      </div>
                      <div className="text-[9px] text-slate-500 flex items-center gap-0.5">
                        <span className="text-red-500">📍</span> Vijayawada APMC
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-xs text-slate-900 font-['Outfit']">
                        ₹2,380 / Quintal
                      </div>
                      <div className="text-[9px] font-bold text-emerald-600">
                        +2.4%
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Red Chilli */}
                  <div className="bg-white border border-slate-200/90 rounded-xl p-2 flex items-center justify-between shadow-xs">
                    <div>
                      <div className="font-extrabold text-xs text-slate-800">
                        Red Chilli (Teja)
                      </div>
                      <div className="text-[9px] text-slate-500 flex items-center gap-0.5">
                        <span className="text-red-500">📍</span> Guntur APMC
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-xs text-slate-900 font-['Outfit']">
                        ₹18,500 / Quintal
                      </div>
                      <div className="text-[9px] font-bold text-emerald-600">
                        +5.1%
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Cotton */}
                  <div className="bg-white border border-slate-200/90 rounded-xl p-2 flex items-center justify-between shadow-xs">
                    <div>
                      <div className="font-extrabold text-xs text-slate-800">
                        Cotton (Long Staple)
                      </div>
                      <div className="text-[9px] text-slate-500 flex items-center gap-0.5">
                        <span className="text-red-500">📍</span> Warangal APMC
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-xs text-slate-900 font-['Outfit']">
                        ₹7,450 / Quintal
                      </div>
                      <div className="text-[9px] font-bold text-slate-500">
                        0.0%
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Maize */}
                  <div className="bg-white border border-slate-200/90 rounded-xl p-2 flex items-center justify-between shadow-xs">
                    <div>
                      <div className="font-extrabold text-xs text-slate-800">
                        Maize (Hybrid)
                      </div>
                      <div className="text-[9px] text-slate-500 flex items-center gap-0.5">
                        <span className="text-red-500">📍</span> Khammam APMC
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-xs text-slate-900 font-['Outfit']">
                        ₹2,250 / Quintal
                      </div>
                      <div className="text-[9px] font-bold text-red-500">
                        -1.2%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Set Price Target Notification Box */}
                <div className="bg-[#059669] text-white rounded-2xl p-3 shadow-md space-y-2">
                  <div className="flex items-center gap-1 text-xs font-black font-['Outfit']">
                    <Bell className="w-3.5 h-3.5 text-amber-300" />
                    <span>Set Price Target Notification</span>
                  </div>

                  <select
                    value={targetCrop}
                    onChange={(e) => setTargetCrop(e.target.value)}
                    className="w-full bg-white text-slate-800 font-semibold rounded-lg px-2.5 py-1.5 text-xs focus:outline-none"
                  >
                    <option value="Paddy / Rice (వరి)">Paddy / Rice (వరి)</option>
                    <option value="Red Chilli (Teja)">Red Chilli (Teja)</option>
                    <option value="Cotton (Long Staple)">Cotton (Long Staple)</option>
                    <option value="Maize (Hybrid)">Maize (Hybrid)</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Target Price (₹ per Quintal)"
                    value={targetPrice}
                    onChange={(e) => setTargetPrice(e.target.value)}
                    className="w-full bg-white text-slate-800 rounded-lg px-2.5 py-1.5 text-xs placeholder-slate-400 focus:outline-none font-medium"
                  />

                  <button
                    onClick={() => {
                      setAlertSet(true);
                      setTimeout(() => setAlertSet(false), 3000);
                    }}
                    className="w-full bg-[#fbbf24] hover:bg-[#f59e0b] text-slate-900 font-extrabold py-1.5 px-3 rounded-xl flex items-center justify-center gap-1 text-xs shadow-xs transition-transform active:scale-98"
                  >
                    <Bell className="w-3.5 h-3.5 text-slate-900 fill-slate-900" />
                    <span>{alertSet ? 'Alert Configured! ✓' : 'Set Alert'}</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* SCREEN 5: COLD STORAGE & LOGISTICS */}
            {currentTab === 'storage' && (
              <motion.div
                key="tab-storage"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                <div>
                  <h2 className="text-sm font-black text-slate-900 font-['Outfit']">
                    Cold Storage & Logistics Finder
                  </h2>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">
                    Prevent post-harvest loss by discovering verified cold-storage units and transport trucks near your location.
                  </p>
                </div>

                {/* Storage Card 1 */}
                <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-xs space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-black text-xs text-slate-900 font-['Outfit']">
                        Sri Srinivasa Cold Storage
                      </div>
                      <div className="text-[9px] text-slate-500 flex items-center gap-0.5 mt-0.5">
                        <span className="text-red-500">📍</span> NH-16, Mangalagiri (4.2 km away)
                      </div>
                    </div>
                    <button
                      onClick={() => setBookedStorage(!bookedStorage)}
                      className={`font-bold px-2.5 py-1 rounded-lg text-[10px] shadow-xs transition-all active:scale-95 ${
                        bookedStorage
                          ? 'bg-slate-200 text-slate-700'
                          : 'bg-[#059669] hover:bg-[#047857] text-white'
                      }`}
                    >
                      {bookedStorage ? 'Booked ✓' : 'Book Space'}
                    </button>
                  </div>

                  <div className="text-[10px] font-bold text-emerald-700 bg-emerald-50/70 px-2 py-1 rounded-md">
                    Capacity Available: 450 Metric Tons • ₹120/bag/month
                  </div>
                </div>

                {/* Transport Logistics Card 2 */}
                <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-xs space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-black text-xs text-slate-900 font-['Outfit']">
                        Kisan Express Transport Truck
                      </div>
                      <div className="text-[9px] text-slate-500 flex items-center gap-0.5 mt-0.5">
                        <span>🚚</span> Vijayawada Hub (Mini Truck 2 Ton)
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setCallingDriver(true);
                        setTimeout(() => setCallingDriver(false), 2500);
                      }}
                      className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-2.5 py-1 rounded-lg text-[10px] shadow-xs transition-all active:scale-95 flex items-center gap-1"
                    >
                      <PhoneCall className="w-2.5 h-2.5" />
                      <span>{callingDriver ? 'Calling...' : 'Call Driver'}</span>
                    </button>
                  </div>

                  <div className="text-[10px] font-bold text-blue-700 bg-blue-50/70 px-2 py-1 rounded-md">
                    Verified Driver • GPS Enabled • ₹22/km
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Bottom Navigation Bar (Matching User Screenshots Exactly) */}
        <div className="bg-white border-t border-slate-200/90 py-1 px-1 flex items-center justify-around z-30 shadow-md">
          <button
            onClick={() => handleTabClick('home')}
            className={`flex flex-col items-center py-1 px-2 rounded-lg transition-colors ${
              currentTab === 'home' ? 'text-[#059669]' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <Home className="w-4 h-4" />
            <span className="text-[9px] font-bold mt-0.5">Home</span>
          </button>

          <button
            onClick={() => handleTabClick('soil')}
            className={`flex flex-col items-center py-1 px-2 rounded-lg transition-colors ${
              currentTab === 'soil' ? 'text-[#059669]' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <Sprout className="w-4 h-4" />
            <span className="text-[9px] font-bold mt-0.5">Soil</span>
          </button>

          <button
            onClick={() => handleTabClick('scan')}
            className={`flex flex-col items-center py-1 px-2 rounded-lg transition-colors ${
              currentTab === 'scan' ? 'text-[#059669]' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <Camera className="w-4 h-4" />
            <span className="text-[9px] font-bold mt-0.5">AI Scan</span>
          </button>

          <button
            onClick={() => handleTabClick('market')}
            className={`flex flex-col items-center py-1 px-2 rounded-lg transition-colors ${
              currentTab === 'market' ? 'text-[#059669]' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span className="text-[9px] font-bold mt-0.5">Market</span>
          </button>

          <button
            onClick={() => handleTabClick('storage')}
            className={`flex flex-col items-center py-1 px-2 rounded-lg transition-colors ${
              currentTab === 'storage' ? 'text-[#059669]' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <Warehouse className="w-4 h-4" />
            <span className="text-[9px] font-bold mt-0.5">Storage</span>
          </button>
        </div>

        {/* Android / iPhone Bottom gesture bar */}
        <div className="bg-white py-1 flex justify-center">
          <div className="w-24 h-1 bg-slate-300 rounded-full"></div>
        </div>

      </div>
    </div>
  );
};
