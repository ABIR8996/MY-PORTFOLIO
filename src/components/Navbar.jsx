import React, { useState } from 'react';
import { Volume2, VolumeX, Share2, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Navbar({ onShare }) {
  const [muted, setMuted] = useState(false);

  const toggleSound = () => {
    const isMuted = sound.toggleMute();
    setMuted(isMuted);
    if (!isMuted) sound.playClick();
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-slate-950/70 backdrop-blur-xl border border-sky-500/20 rounded-full px-6 py-3 shadow-2xl">
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-3 text-white font-extrabold text-lg tracking-tight hover:text-sky-400 transition-colors"
          onMouseEnter={() => sound.playHover()}
        >
          <span className="bg-gradient-to-r from-sky-400 to-purple-500 text-transparent bg-clip-text text-xl">
            ABIR CHOWDHURY
          </span>
          <span className="font-mono text-xs px-2.5 py-0.5 bg-sky-500/10 border border-sky-400/30 text-sky-400 rounded-full">
            TECH ENTREPRENEUR
          </span>
        </a>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#about" onMouseEnter={() => sound.playHover()} className="hover:text-sky-400 transition-colors">About</a>
          <a href="#education" onMouseEnter={() => sound.playHover()} className="hover:text-sky-400 transition-colors">Education</a>
          <a href="#projects" onMouseEnter={() => sound.playHover()} className="hover:text-sky-400 transition-colors">Deep Roots (Work)</a>
          <a href="#achievements" onMouseEnter={() => sound.playHover()} className="hover:text-sky-400 transition-colors">Achievements</a>
          <a href="#skills" onMouseEnter={() => sound.playHover()} className="hover:text-sky-400 transition-colors">Skills</a>
        </nav>

        {/* Audio & Share Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSound}
            onMouseEnter={() => sound.playHover()}
            className="p-2.5 bg-slate-900/80 border border-slate-700/60 rounded-full text-slate-300 hover:text-sky-400 hover:border-sky-400 transition-all"
            title={muted ? 'Unmute Audio FX' : 'Mute Audio FX'}
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          <button
            onClick={onShare}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-purple-600 text-white text-xs font-semibold rounded-full shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:scale-105 transition-all"
          >
            <Share2 size={14} />
            <span>Share Profile</span>
          </button>
        </div>
      </div>
    </header>
  );
}
