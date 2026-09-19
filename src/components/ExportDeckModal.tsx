import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  FileText, 
  Presentation, 
  Printer, 
  Check, 
  Sparkles, 
  X, 
  Layers, 
  FileCheck2,
  Copy,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { downloadPDF, downloadPPTX, printPresentation } from '../utils/exportDeck';
import { PRESENTATION_SLIDES } from '../data/presentationData';

interface ExportDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlideIndex: number;
}

export const ExportDeckModal: React.FC<ExportDeckModalProps> = ({
  isOpen,
  onClose,
  currentSlideIndex,
}) => {
  const [includeNotes, setIncludeNotes] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isExportingPDF, setIsExportingPDF] = useState(false);
  const [isExportingPPTX, setIsExportingPPTX] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownloadPDF = async () => {
    try {
      setIsExportingPDF(true);
      setSuccessMessage(null);
      // Small tick to show user feedback
      await new Promise((r) => setTimeout(r, 200));
      downloadPDF({
        includeSpeakerNotes: includeNotes,
        theme: theme,
      });
      setSuccessMessage('Pitch deck PDF downloaded successfully!');
      setTimeout(() => setSuccessMessage(null), 4000);
    } catch (err) {
      console.error('PDF export error:', err);
    } finally {
      setIsExportingPDF(false);
    }
  };

  const handleDownloadPPTX = async () => {
    try {
      setIsExportingPPTX(true);
      setSuccessMessage(null);
      await downloadPPTX({
        includeSpeakerNotes: includeNotes,
      });
      setSuccessMessage('PowerPoint .pptx deck downloaded successfully!');
      setTimeout(() => setSuccessMessage(null), 4000);
    } catch (err) {
      console.error('PPTX export error:', err);
    } finally {
      setIsExportingPPTX(false);
    }
  };

  const handlePrint = () => {
    onClose();
    setTimeout(() => {
      printPresentation();
    }, 300);
  };

  const handleCopyDeckSummary = () => {
    const summaryText = PRESENTATION_SLIDES.map((s, idx) => {
      const bullets = s.bulletPoints.map((b) => `  • ${b.heading}: ${b.description}`).join('\n');
      const metrics = s.keyMetrics ? s.keyMetrics.map(m => `  [${m.value}] ${m.label}`).join(' | ') : '';
      return `SLIDE ${idx + 1}: ${s.title.toUpperCase()} (${s.category})\n${s.headline}\n${metrics ? `Key Metrics: ${metrics}\n` : ''}${bullets}\n${includeNotes && s.speakerNotes ? `Presenter Notes: ${s.speakerNotes}\n` : ''}`;
    }).join('\n========================================\n\n');

    const fullHeader = `SMARTSOIL & CROP CARE - LIVE PITCH DECK\nAuthor & Lead: Ponduri Vinuthna\nTotal Slides: 8\n\n${summaryText}`;

    navigator.clipboard.writeText(fullHeader);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.2 }}
        className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-950/70 via-slate-900 to-slate-900 border-b border-slate-800 p-5 sm:p-6 flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 to-emerald-400 p-0.5 shadow-lg shadow-emerald-500/20 flex-shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Download className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full mb-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Live Deck Export Center
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit'] tracking-tight">
                Download Pitch Deck
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Download the complete 8-slide presentation in <span className="text-emerald-400 font-semibold">PDF</span> or editable <span className="text-amber-400 font-semibold">PowerPoint (.pptx)</span> format.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto flex-1 text-slate-200">
          
          {/* Success Banner */}
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-semibold p-3.5 rounded-2xl flex items-center gap-2.5 shadow-sm"
            >
              <FileCheck2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{successMessage}</span>
            </motion.div>
          )}

          {/* Export Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Option 1: PDF Document */}
            <div className="bg-slate-950/70 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-4 flex flex-col justify-between transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    16:9 Landscape PDF
                  </span>
                </div>
                
                <h3 className="text-base font-bold text-white font-['Outfit']">
                  PDF Presentation (.pdf)
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  High-fidelity vector presentation with all 8 slides, colored metric cards, and presenter notes. Perfect for email submissions & pitch reviews.
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-800/80">
                <button
                  onClick={handleDownloadPDF}
                  disabled={isExportingPDF}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 disabled:opacity-50 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs font-['Outfit'] flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{isExportingPDF ? 'Generating PDF...' : 'Download Deck as PDF'}</span>
                </button>
              </div>
            </div>

            {/* Option 2: PowerPoint PPTX */}
            <div className="bg-slate-950/70 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-4 flex flex-col justify-between transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Presentation className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full border border-amber-500/20">
                    PowerPoint (.pptx)
                  </span>
                </div>

                <h3 className="text-base font-bold text-white font-['Outfit']">
                  Live PPT File (.pptx)
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Genuine editable PowerPoint presentation. Compatible with Microsoft 365, Google Slides, and Apple Keynote with embedded speaker notes.
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-800/80">
                <button
                  onClick={handleDownloadPPTX}
                  disabled={isExportingPPTX}
                  className="w-full bg-amber-500 hover:bg-amber-400 active:bg-amber-600 disabled:opacity-50 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs font-['Outfit'] flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{isExportingPPTX ? 'Creating PPTX...' : 'Download Live PPT (.pptx)'}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Additional Print / Copy Bar */}
          <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <Printer className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <div>
                <div className="font-bold text-slate-200">Browser Print / Save as PDF</div>
                <div className="text-[11px] text-slate-400">Print dialog optimized for 8 landscape slides</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyDeckSummary}
                className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Copy all 8 slides text summary to clipboard"
              >
                {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSummary ? 'Copied Transcript!' : 'Copy Text'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
              >
                <Printer className="w-3.5 h-3.5 text-emerald-400" />
                <span>Open Print View</span>
              </button>
            </div>
          </div>

          {/* Preferences / Customization Toggles */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider">
              Export Configuration
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Speaker Notes Toggle */}
              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 cursor-pointer transition-all">
                <span className="text-xs text-slate-300 font-medium">
                  Include Presenter Rehearsal Notes
                </span>
                <input
                  type="checkbox"
                  checked={includeNotes}
                  onChange={(e) => setIncludeNotes(e.target.checked)}
                  className="w-4 h-4 text-emerald-500 rounded border-slate-700 focus:ring-emerald-500 bg-slate-900 cursor-pointer"
                />
              </label>

              {/* Theme Preference for PDF */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs">
                <span className="text-slate-300 font-medium">PDF Color Theme:</span>
                <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                  <button
                    onClick={() => setTheme('dark')}
                    className={`px-2 py-1 rounded text-[11px] font-bold transition-all ${
                      theme === 'dark' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Dark Pitch
                  </button>
                  <button
                    onClick={() => setTheme('light')}
                    className={`px-2 py-1 rounded text-[11px] font-bold transition-all ${
                      theme === 'light' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Light Print
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Deck Index Summary */}
          <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-3.5 space-y-2">
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Deck Manifest (All 8 Slides Included)</span>
              <span className="text-emerald-400 font-bold">Lead: Ponduri Vinuthna</span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px]">
              {PRESENTATION_SLIDES.map((slide, i) => (
                <div 
                  key={slide.id}
                  className={`p-2 rounded-xl border text-left transition-all ${
                    i === currentSlideIndex 
                      ? 'bg-emerald-500/15 border-emerald-500/40 text-white font-bold' 
                      : 'bg-slate-900/60 border-slate-800/70 text-slate-400'
                  }`}
                >
                  <div className="font-mono text-[9px] text-emerald-400">Slide {i + 1}</div>
                  <div className="truncate font-semibold">{slide.title}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 border-t border-slate-800 px-6 py-3.5 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Client-side generation • No server upload required</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white font-semibold py-1 px-3 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>

      </motion.div>
    </div>
  );
};
