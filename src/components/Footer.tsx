import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-6 border-t border-slate-800 text-center text-sm text-slate-400 bg-slate-950/80 backdrop-blur-sm relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-200">{PORTFOLIO_DATA.fullName}</span>
          <span className="text-slate-600">•</span>
          <span className="text-xs text-slate-400">KL University</span>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          <button 
            onClick={scrollToTop}
            className="hover:text-cyan-400 transition-colors flex items-center gap-1 cursor-pointer ml-2"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
