import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRESENTATION_SLIDES } from './data/presentationData';
import { PresentationHeader, ViewMode, ThemeMode } from './components/PresentationHeader';
import { SpeakerNotesDrawer } from './components/SpeakerNotesDrawer';
import { InteractiveAppDashboard } from './components/InteractiveAppDashboard';
import { SlideGridView } from './components/SlideGridView';
import { BlockDiagramVisual } from './components/BlockDiagramVisual';
import { ExportDeckModal } from './components/ExportDeckModal';
import { PrintableDeck } from './components/PrintableDeck';
import { playSlideTransitionSound } from './utils/audio';

// Slide Components
import { Slide1Title } from './components/slides/Slide1Title';
import { Slide2Problem } from './components/slides/Slide2Problem';
import { Slide3Dashboard } from './components/slides/Slide3Dashboard';
import { Slide4SoilAnalyzer } from './components/slides/Slide4SoilAnalyzer';
import { Slide5DiseaseScan } from './components/slides/Slide5DiseaseScan';
import { Slide6MandiIntelligence } from './components/slides/Slide6MandiIntelligence';
import { Slide7Logistics } from './components/slides/Slide7Logistics';
import { Slide8Architecture } from './components/slides/Slide8Architecture';

import { 
  ChevronLeft, 
  ChevronRight, 
  HelpCircle, 
  Maximize2, 
  Sparkles,
  Layers,
  Smartphone,
  Presentation,
  Download
} from 'lucide-react';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>('slides');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>('emerald');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const currentSlide = PRESENTATION_SLIDES[currentSlideIndex];
  const totalSlides = PRESENTATION_SLIDES.length;

  // Next Slide Handler
  const goToNextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      if (prev < totalSlides - 1) {
        if (soundEnabled) playSlideTransitionSound();
        return prev + 1;
      }
      return prev;
    });
  }, [totalSlides, soundEnabled]);

  // Prev Slide Handler
  const goToPrevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      if (prev > 0) {
        if (soundEnabled) playSlideTransitionSound();
        return prev - 1;
      }
      return prev;
    });
  }, [soundEnabled]);

  // Jump to specific slide
  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      if (soundEnabled) playSlideTransitionSound();
      setCurrentSlideIndex(index);
      setViewMode('slides');
    }
  };

  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore key events if typing in an input
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        goToNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrevSlide();
      } else if (e.key.toLowerCase() === 'n') {
        setIsNotesOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === 'g') {
        setViewMode((prev) => (prev === 'grid' ? 'slides' : 'grid'));
      } else if (e.key.toLowerCase() === 'm') {
        setViewMode((prev) => (prev === 'mobile-app' ? 'slides' : 'mobile-app'));
      } else if (e.key.toLowerCase() === 'p') {
        setIsPlaying((prev) => !prev);
      } else if (e.key.toLowerCase() === 'd') {
        setIsExportModalOpen((prev) => !prev);
      } else if (e.key === '?') {
        setShowKeyboardHelp((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide]);

  // Auto-play slideshow timer (10 seconds per slide)
  useEffect(() => {
    if (isPlaying && viewMode === 'slides') {
      autoPlayTimerRef.current = setInterval(() => {
        setCurrentSlideIndex((prev) => {
          if (prev >= totalSlides - 1) {
            setIsPlaying(false);
            return 0; // wrap around
          }
          if (soundEnabled) playSlideTransitionSound();
          return prev + 1;
        });
      }, 9000);
    } else {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    }

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isPlaying, viewMode, totalSlides, soundEnabled]);

  // Fullscreen toggle handler
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Theme color definitions
  const themeBackgrounds = {
    emerald: 'bg-[#091510] text-slate-100',
    amber: 'bg-[#181206] text-amber-50',
    night: 'bg-[#0b1120] text-slate-100',
    ivory: 'bg-[#121619] text-slate-100',
  }[currentTheme];

  // Render active slide component
  const renderSlideContent = () => {
    switch (currentSlideIndex) {
      case 0:
        return (
          <Slide1Title 
            slide={currentSlide} 
            onNext={goToNextSlide} 
            onOpenExportModal={() => setIsExportModalOpen(true)}
          />
        );
      case 1:
        return <Slide2Problem slide={currentSlide} onNext={goToNextSlide} />;
      case 2:
        return <Slide3Dashboard slide={currentSlide} onNext={goToNextSlide} />;
      case 3:
        return <Slide4SoilAnalyzer slide={currentSlide} onNext={goToNextSlide} />;
      case 4:
        return <Slide5DiseaseScan slide={currentSlide} onNext={goToNextSlide} />;
      case 5:
        return <Slide6MandiIntelligence slide={currentSlide} onNext={goToNextSlide} />;
      case 6:
        return <Slide7Logistics slide={currentSlide} onNext={goToNextSlide} />;
      case 7:
        return (
          <Slide8Architecture 
            slide={currentSlide} 
            onReset={() => goToSlide(0)} 
            onOpenExportModal={() => setIsExportModalOpen(true)}
          />
        );
      default:
        return (
          <Slide1Title 
            slide={currentSlide} 
            onNext={goToNextSlide} 
            onOpenExportModal={() => setIsExportModalOpen(true)}
          />
        );
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`min-h-screen flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950 ${themeBackgrounds} transition-colors duration-500`}
    >
      {/* Top Presentation Control Header */}
      <PresentationHeader
        currentSlideIndex={currentSlideIndex}
        totalSlides={totalSlides}
        slideTitle={currentSlide.title}
        category={currentSlide.category}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        isPlaying={isPlaying}
        onTogglePlay={() => setIsPlaying(!isPlaying)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        isNotesOpen={isNotesOpen}
        onToggleNotes={() => setIsNotesOpen(!isNotesOpen)}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
        onPrevSlide={goToPrevSlide}
        onNextSlide={goToNextSlide}
        onOpenExportModal={() => setIsExportModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-x-hidden">
        
        {/* VIEW 1: LIVE PRESENTATION SLIDESHOW */}
        {viewMode === 'slides' && (
          <div className="flex-1 flex flex-col items-center justify-center p-2 sm:p-4 md:p-6">
            {/* 16:9 Presentation Stage Card */}
            <div className="w-full max-w-6xl aspect-[16/9] min-h-[640px] md:min-h-[700px] bg-slate-950/70 border border-slate-800/90 rounded-3xl shadow-2xl overflow-hidden relative flex flex-col backdrop-blur-md">
              
              {/* Slide Progress Bar on Top of Stage */}
              <div className="w-full h-1 bg-slate-900 absolute top-0 left-0 right-0 z-40">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 transition-all duration-300"
                  style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
                ></div>
              </div>

              {/* Animated Slide Transition */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlideIndex}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="w-full h-full flex flex-col"
                >
                  {renderSlideContent()}
                </motion.div>
              </AnimatePresence>

              {/* Left / Right Floating Slide Controls for Hover Access */}
              {currentSlideIndex > 0 && (
                <button
                  onClick={goToPrevSlide}
                  title="Previous Slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 border border-slate-700/60 flex items-center justify-center transition-all z-30 shadow-lg backdrop-blur-xs hidden md:flex"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              {currentSlideIndex < totalSlides - 1 && (
                <button
                  onClick={goToNextSlide}
                  title="Next Slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 border border-slate-700/60 flex items-center justify-center transition-all z-30 shadow-lg backdrop-blur-xs hidden md:flex"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}

            </div>

            {/* Quick Slide Navigation Dots & Shortcuts Tray */}
            <div className="w-full max-w-6xl mt-3 px-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                {PRESENTATION_SLIDES.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => goToSlide(i)}
                    title={`Go to Slide ${i + 1}: ${s.title}`}
                    className={`transition-all rounded-full ${
                      i === currentSlideIndex 
                        ? 'w-7 h-2 bg-emerald-400' 
                        : 'w-2 h-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2.5">
                {/* Download Deck Trigger Button */}
                <button
                  onClick={() => setIsExportModalOpen(true)}
                  className="bg-emerald-500/15 hover:bg-emerald-500 hover:text-slate-950 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-xl flex items-center gap-1.5 font-bold transition-all shadow-sm cursor-pointer font-['Outfit']"
                  title="Download Pitch Deck as PDF or PowerPoint (.pptx)"
                >
                  <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Download Deck (PDF / PPT)</span>
                </button>

                <button
                  onClick={() => setShowKeyboardHelp(true)}
                  className="hover:text-emerald-400 flex items-center gap-1 transition-colors"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Shortcuts (?)</span>
                </button>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline font-mono text-[11px]">
                  [← / →] Slide • [D] Download • [N] Notes
                </span>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: DEDICATED 5-SCREEN MOBILE APPLICATION PLAYGROUND */}
        {viewMode === 'mobile-app' && (
          <div className="flex-1 py-4">
            <InteractiveAppDashboard />
          </div>
        )}

        {/* VIEW 3: SYSTEM ARCHITECTURE BLOCK DIAGRAM FOCUS */}
        {viewMode === 'architecture' && (
          <div className="flex-1 max-w-5xl mx-auto p-4 md:p-8 space-y-6 w-full">
            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-3xl text-center space-y-2">
              <div className="inline-block bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                Architectural Blueprint Focus
              </div>
              <h2 className="text-2xl font-black text-white font-['Outfit']">
                SmartSoil & Crop Care - System Flow
              </h2>
              <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Recreation of the complete 4-tier distributed architecture connecting the multilingual farmer progressive web app to real-time APMC mandi feeds and transparent value realization.
              </p>
            </div>

            <BlockDiagramVisual interactive={true} />
          </div>
        )}

        {/* VIEW 4: ALL 8 SLIDES GRID OVERVIEW */}
        {viewMode === 'grid' && (
          <div className="flex-1 py-4">
            <SlideGridView
              currentSlideIndex={currentSlideIndex}
              onSelectSlide={goToSlide}
              onOpenExportModal={() => setIsExportModalOpen(true)}
            />
          </div>
        )}

      </main>

      {/* Speaker Notes Drawer */}
      <SpeakerNotesDrawer
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        slide={currentSlide}
        slideIndex={currentSlideIndex}
      />

      {/* Download Pitch Deck Modal */}
      <ExportDeckModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        currentSlideIndex={currentSlideIndex}
      />

      {/* Hidden container for 8-page landscape printing */}
      <PrintableDeck />

      {/* Keyboard Shortcuts Modal */}
      <AnimatePresence>
        {showKeyboardHelp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-base font-black text-white font-['Outfit'] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Presenter Keyboard Shortcuts</span>
                </h3>
                <button
                  onClick={() => setShowKeyboardHelp(false)}
                  className="text-slate-400 hover:text-white text-sm"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                  <span>Next Slide</span>
                  <span className="font-mono bg-slate-800 px-2 py-0.5 rounded text-white">→ / Spacebar</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                  <span>Previous Slide</span>
                  <span className="font-mono bg-slate-800 px-2 py-0.5 rounded text-white">←</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                  <span>Download Deck (PDF / PPT)</span>
                  <span className="font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">D</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                  <span>Toggle Speaker Notes</span>
                  <span className="font-mono bg-slate-800 px-2 py-0.5 rounded text-white">N</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                  <span>Slide Grid Overview</span>
                  <span className="font-mono bg-slate-800 px-2 py-0.5 rounded text-white">G</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                  <span>Mobile App Playground</span>
                  <span className="font-mono bg-slate-800 px-2 py-0.5 rounded text-white">M</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                  <span>Toggle Autoplay</span>
                  <span className="font-mono bg-slate-800 px-2 py-0.5 rounded text-white">P</span>
                </div>
              </div>

              <button
                onClick={() => setShowKeyboardHelp(false)}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2 rounded-xl text-xs font-['Outfit'] cursor-pointer"
              >
                Close Shortcuts
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
