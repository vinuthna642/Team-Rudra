import React from 'react';
import { PRESENTATION_SLIDES } from '../data/presentationData';
import { Sprout, Award } from 'lucide-react';

export const PrintableDeck: React.FC = () => {
  return (
    <div id="printable-presentation-deck" className="print-only hidden">
      {PRESENTATION_SLIDES.map((slide, index) => (
        <div 
          key={slide.id} 
          className="print-slide-page p-8 bg-white text-slate-900 flex flex-col justify-between"
          style={{
            pageBreakAfter: index < PRESENTATION_SLIDES.length - 1 ? 'always' : 'auto',
            breakAfter: index < PRESENTATION_SLIDES.length - 1 ? 'page' : 'auto',
            minHeight: '100vh',
            boxSizing: 'border-box',
          }}
        >
          {/* Slide Header */}
          <div>
            <div className="flex justify-between items-center border-b-2 border-emerald-600 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                  🌿
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    {slide.category}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    SmartSoil & Crop Care • AI Kisan Platform
                  </div>
                </div>
              </div>

              <div className="text-right">
                <span className="inline-block bg-slate-100 text-slate-800 text-xs font-bold px-2.5 py-1 rounded">
                  Slide {index + 1} of {PRESENTATION_SLIDES.length}
                </span>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  Author: Ponduri Vinuthna
                </div>
              </div>
            </div>

            {/* Slide Title & Subtitle */}
            <div className="mb-5">
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">
                {slide.title}
              </h1>
              <p className="text-sm text-slate-600 mt-1 font-medium italic">
                {slide.headline || slide.subtitle}
              </p>
            </div>

            {/* Metrics Row */}
            {slide.keyMetrics && slide.keyMetrics.length > 0 && (
              <div className="grid grid-cols-4 gap-3 mb-5">
                {slide.keyMetrics.map((metric, mIdx) => (
                  <div key={mIdx} className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
                    <div className="text-xl font-black text-emerald-700">
                      {metric.value}
                    </div>
                    <div className="text-xs font-bold text-slate-800 mt-0.5">
                      {metric.label}
                    </div>
                    {metric.change && (
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        {metric.change}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Bullet Points Grid (2x2) */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {slide.bulletPoints.map((bullet, bIdx) => (
                <div key={bIdx} className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 flex flex-col justify-between">
                  <div>
                    {bullet.tag && (
                      <span className="inline-block bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded mb-1">
                        {bullet.tag}
                      </span>
                    )}
                    <h3 className="text-xs font-bold text-slate-900">
                      {bullet.heading}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {bullet.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Footer with Presenter Notes */}
          <div className="pt-3 border-t border-slate-200 mt-auto">
            {slide.speakerNotes && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-2.5 mb-2 text-xs text-slate-700">
                <span className="font-bold text-amber-800 mr-1.5 uppercase text-[10px]">
                  Speaker Notes:
                </span>
                {slide.speakerNotes}
              </div>
            )}
            <div className="flex justify-between items-center text-[10px] text-slate-500">
              <span>SmartSoil & Crop Care • National AgriTech Innovation Pitch</span>
              <span>Ponduri Vinuthna (Kisan AI Research Lead)</span>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};
