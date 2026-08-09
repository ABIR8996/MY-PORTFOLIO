import React from 'react';
import { Mail, Share2, ArrowUp, Code } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export default function Footer({ onShare }) {
  const triggerConfetti = () => {
    sound.playClick();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    onShare();
  };

  return (
    <footer id="connect" className="pt-20 pb-10 px-6 border-t border-slate-800/80 bg-slate-950/90 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="bg-gradient-to-r from-sky-950/60 via-purple-950/40 to-slate-950 border border-sky-500/30 rounded-3xl p-10 text-center flex flex-col items-center gap-6 shadow-2xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Let's Connect & <span className="bg-gradient-to-r from-sky-400 to-purple-400 text-transparent bg-clip-text">Innovate</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl">
            Open for technology ventures, research collaborations, deep-tech innovations, and strategic discussions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <a
              href="mailto:abirc6733@gmail.com"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-sky-500 to-purple-600 text-white font-semibold rounded-2xl shadow-xl shadow-sky-500/20 hover:scale-105 transition-all"
            >
              <Mail size={18} />
              <span>abirc6733@gmail.com</span>
            </a>

            <a
              href="https://github.com/ABIR8996"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="flex items-center gap-2 px-6 py-3.5 bg-slate-900 border border-slate-700 text-white font-semibold rounded-2xl hover:border-sky-400 transition-all"
            >
              <Code size={18} />
              <span>GitHub: ABIR8996</span>
            </a>

            <button
              onClick={triggerConfetti}
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-2 px-6 py-3.5 bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 font-semibold rounded-2xl hover:bg-emerald-500 hover:text-black transition-all"
            >
              <Share2 size={18} />
              <span>Copy Profile Link</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 pt-6 border-t border-slate-900">
          <div>
            <span className="text-slate-300 font-bold">ABIR CHOWDHURY</span> • Tech Entrepreneur & Innovator (Amity University Kolkata)
          </div>
          <a href="#about" onClick={() => sound.playClick()} className="flex items-center gap-1 text-slate-400 hover:text-sky-400 transition-colors">
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
