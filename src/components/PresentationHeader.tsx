import React from 'react';
import { 
  Play, 
  Pause, 
  Maximize2, 
  Minimize2, 
  FileText, 
  LayoutGrid, 
  Smartphone, 
  Layers, 
  Volume2, 
  VolumeX, 
  Palette, 
  ChevronLeft, 
  ChevronRight,
  Sprout,
  Presentation,
  Download,
  FileDown,
  Printer,
  Sparkles
} from 'lucide-react';

export type ViewMode = 'slides' | 'mobile-app' | 'architecture' | 'grid';
export type ThemeMode = 'emerald' | 'amber' | 'night' | 'ivory';

interface PresentationHeaderProps {
  currentSlideIndex: number;
  totalSlides: number;
  slideTitle: string;
  category: string;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  isNotesOpen: boolean;
  onToggleNotes: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onOpenExportModal: () => void;
}

export const PresentationHeader: React.FC<PresentationHeaderProps> = ({
  currentSlideIndex,
  totalSlides,
  slideTitle,
  category,
  viewMode,
  onViewModeChange,
  isPlaying,
  onTogglePlay,
  isFullscreen,
  onToggleFullscreen,
  isNotesOpen,
  onToggleNotes,
  soundEnabled,
  onToggleSound,
  currentTheme,
  onThemeChange,
  onPrevSlide,
  onNextSlide,
  onOpenExportModal,
}) => {
  return (
    <header className="bg-slate-950/90 border-b border-slate-800/80 backdrop-blur-md px-3 md:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 select-none z-40">
      
      {/* Left: Project Branding & Slide Progress */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center shadow-sm">
            <Sprout className="w-4 h-4 text-slate-950 font-black" />
          </div>
          <div className="hidden sm:block">
            <div className="text-xs font-black tracking-tight text-white font-['Outfit']">
              SmartSoil & Crop Care
            </div>
            <div className="text-[10px] text-emerald-400 font-mono">
              Live PPT Deck • Vinuthna (Kisan)
            </div>
          </div>
        </div>

        {/* Slide Counter & Arrow Steppers */}
        <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-0.5 shadow-inner">
          <button
            onClick={onPrevSlide}
            disabled={currentSlideIndex === 0}
            title="Previous Slide (Left Arrow)"
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <span className="px-2 text-xs font-mono font-bold text-white whitespace-nowrap">
            {currentSlideIndex + 1} <span className="text-slate-500 font-normal">/</span> {totalSlides}
          </span>

          <button
            onClick={onNextSlide}
            disabled={currentSlideIndex === totalSlides - 1}
            title="Next Slide (Right Arrow / Spacebar)"
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Current Slide Mini Title */}
        <div className="hidden lg:flex items-center gap-2 pl-2 border-l border-slate-800">
          <span className="text-[10px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2 py-0.5 rounded font-mono font-bold">
            {category}
          </span>
          <span className="text-xs font-bold text-slate-300 truncate max-w-xs font-['Outfit']">
            {slideTitle}
          </span>
        </div>
      </div>

      {/* Center: View Switcher Tabs */}
      <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-xl p-1 text-xs font-semibold">
        <button
          onClick={() => onViewModeChange('slides')}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
            viewMode === 'slides'
              ? 'bg-emerald-500 text-slate-950 font-black shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Presentation className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Live PPT Deck</span>
          <span className="md:hidden">Slides</span>
        </button>

        <button
          onClick={() => onViewModeChange('mobile-app')}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
            viewMode === 'mobile-app'
              ? 'bg-emerald-500 text-slate-950 font-black shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span className="hidden md:inline">5 Screens App</span>
          <span className="md:hidden">App</span>
        </button>

        <button
          onClick={() => onViewModeChange('architecture')}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
            viewMode === 'architecture'
              ? 'bg-emerald-500 text-slate-950 font-black shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Block Diagram</span>
          <span className="md:hidden">Flow</span>
        </button>

        <button
          onClick={() => onViewModeChange('grid')}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
            viewMode === 'grid'
              ? 'bg-emerald-500 text-slate-950 font-black shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          <span className="hidden md:inline">All 8 Slides</span>
          <span className="md:hidden">Grid</span>
        </button>
      </div>

      {/* Right: Presentation Controls (Play, Notes, Sound, Fullscreen, Theme) */}
      <div className="flex items-center gap-1.5">
        
        {/* Download Deck (PDF / PPT) Modal Trigger */}
        <button
          onClick={onOpenExportModal}
          title="Download Presentation as PDF or PowerPoint (.pptx)"
          className="p-1.5 px-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md shadow-emerald-500/20 transition-all font-['Outfit'] cursor-pointer"
        >
          <Download className="w-3.5 h-3.5 stroke-[2.5]" />
          <span className="hidden sm:inline">Download Deck</span>
          <span className="text-[10px] bg-slate-950/20 px-1.5 py-0.2 rounded font-mono font-bold">
            PDF/PPT
          </span>
        </button>

        {/* Slideshow Auto Play */}
        <button
          onClick={onTogglePlay}
          title={isPlaying ? "Pause Slideshow" : "Auto-Play Slideshow (10s per slide)"}
          className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 font-bold transition-all ${
            isPlaying 
              ? 'bg-amber-500/20 border-amber-500/40 text-amber-300' 
              : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
          }`}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{isPlaying ? 'Playing' : 'Auto'}</span>
        </button>

        {/* Speaker Notes */}
        <button
          onClick={onToggleNotes}
          title="Toggle Speaker Notes & Rehearsal Script"
          className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 font-bold transition-all ${
            isNotesOpen 
              ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' 
              : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Notes</span>
        </button>

        {/* Sound Feedback */}
        <button
          onClick={onToggleSound}
          title={soundEnabled ? "Mute Slide Click Sound" : "Enable Slide Click Sound"}
          className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 transition-colors"
        >
          {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
        </button>

        {/* Theme Picker Dropdown */}
        <div className="relative group">
          <button
            title="Switch Visual Theme"
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 transition-colors flex items-center gap-1 text-xs"
          >
            <Palette className="w-3.5 h-3.5 text-emerald-400" />
          </button>
          
          <div className="absolute right-0 top-full mt-1.5 hidden group-hover:flex flex-col bg-slate-900 border border-slate-700 rounded-xl p-1.5 shadow-xl min-w-[130px] z-50 text-xs">
            <button
              onClick={() => onThemeChange('emerald')}
              className={`text-left px-2.5 py-1.5 rounded-lg font-bold flex items-center gap-2 ${
                currentTheme === 'emerald' ? 'bg-emerald-500/20 text-emerald-300' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              Emerald Agri
            </button>
            <button
              onClick={() => onThemeChange('amber')}
              className={`text-left px-2.5 py-1.5 rounded-lg font-bold flex items-center gap-2 ${
                currentTheme === 'amber' ? 'bg-amber-500/20 text-amber-300' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              Golden Harvest
            </button>
            <button
              onClick={() => onThemeChange('night')}
              className={`text-left px-2.5 py-1.5 rounded-lg font-bold flex items-center gap-2 ${
                currentTheme === 'night' ? 'bg-indigo-500/20 text-indigo-300' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
              Midnight Tech
            </button>
          </div>
        </div>

        {/* Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          title={isFullscreen ? "Exit Fullscreen (Esc)" : "Enter Fullscreen Presenter Mode"}
          className="p-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 transition-colors"
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>

      </div>

    </header>
  );
};
