import React from 'react';
import { ArrowUpRight, Mail, Code, MapPin, GraduationCap, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Hero({ onShare }) {
  return (
    <section id="about" className="min-h-screen pt-36 pb-20 px-6 flex flex-col justify-center max-w-7xl mx-auto relative select-none">
      
      {/* Meta Pill Bar */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 rounded-full text-xs font-mono font-semibold">
          <Sparkles size={14} className="text-cyan-400 animate-pulse" />
          <span>TECH ENTREPRENEUR & DEEP-TECH INNOVATOR</span>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/90 border border-slate-800 text-slate-300 rounded-full text-xs font-mono">
          <MapPin size={12} className="text-rose-500" />
          <span>📍 Kolkata, India</span>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/90 border border-slate-800 text-slate-300 rounded-full text-xs font-mono">
          <GraduationCap size={14} className="text-purple-400" />
          <span>BCA DS & AI (IBM Collaboration) @ Amity University Kolkata (2025–2029)</span>
        </div>
      </div>

      {/* Massive Full Name Header Lockup: ABIR CHOWDHURY */}
      <div className="relative z-10 flex flex-col gap-2">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter uppercase font-mono text-white leading-tight">
          ABIR <br />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-rose-500 text-transparent bg-clip-text">
            CHOWDHURY
          </span>
        </h1>

        <p className="text-2xl sm:text-4xl font-medium text-slate-200 max-w-4xl mt-6 leading-tight font-sans">
          Bridging deep hardware principles with cutting-edge software intelligence.
        </p>
      </div>

      {/* Bio Paragraph */}
      <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed font-sans mt-6">
        Building at the intersection of <strong>HARSH QUANT FinTech AI, Cybersecurity & OSINT, Integrated Photonics (Si3N4), Post-Quantum Cryptography (NIST ML-KEM-768)</strong>, and <strong>Autonomous AI Systems</strong>.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4 pt-8">
        <a
          href="https://github.com/ABIR8996"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => sound.playHover()}
          onClick={() => sound.playClick()}
          className="flex items-center gap-3 px-8 py-4 bg-slate-900/90 border border-slate-700 rounded-2xl text-white font-mono text-sm hover:border-cyan-400 hover:text-cyan-400 transition-all hover:-translate-y-1 shadow-2xl"
        >
          <Code size={18} />
          <span>GitHub: ABIR8996</span>
          <ArrowUpRight size={16} />
        </a>

        <a
          href="mailto:abirc6733@gmail.com"
          onMouseEnter={() => sound.playHover()}
          onClick={() => sound.playClick()}
          className="flex items-center gap-3 px-8 py-4 bg-slate-900/90 border border-slate-700 rounded-2xl text-white font-mono text-sm hover:border-cyan-400 hover:text-cyan-400 transition-all hover:-translate-y-1 shadow-2xl"
        >
          <Mail size={18} />
          <span>abirc6733@gmail.com</span>
        </a>

        <button
          onClick={() => {
            sound.playClick();
            onShare();
          }}
          onMouseEnter={() => sound.playHover()}
          className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-600 to-rose-600 text-white font-mono text-sm font-semibold rounded-2xl shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all"
        >
          📋 Copy Profile Link
        </button>
      </div>

    </section>
  );
}
