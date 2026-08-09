import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });

      tl.to('#loader-text', {
        duration: 0.6,
        y: -100,
        opacity: 0,
        ease: 'power4.inOut'
      })
      .to('#loader-bg', {
        duration: 1,
        scaleY: 0,
        transformOrigin: 'top center',
        ease: 'expo.inOut'
      });
    }
  }, [progress, onComplete]);

  return (
    <div
      id="loader-bg"
      className="fixed inset-0 z-50 bg-[#020409] flex flex-col justify-between p-8 sm:p-16 select-none overflow-hidden"
    >
      {/* Top Header */}
      <div className="flex justify-between items-center text-xs font-mono text-cyan-400 tracking-widest uppercase">
        <span>ABIR CHOWDHURY // DEEP-TECH PORTAL</span>
        <span>INITIALIZING NEURAL SYSTEM</span>
      </div>

      {/* Center Cinematic 0-100% Reveal */}
      <div id="loader-text" className="my-auto flex flex-col items-center justify-center text-center">
        <span className="text-[12vw] font-extrabold font-mono leading-none tracking-tighter bg-gradient-to-r from-cyan-400 via-purple-500 to-rose-500 text-transparent bg-clip-text">
          {progress < 10 ? `00${progress}` : progress < 100 ? `0${progress}` : progress}%
        </span>
        <div className="w-64 h-1 bg-slate-900 rounded-full mt-6 overflow-hidden border border-cyan-500/20">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs font-mono text-slate-400 mt-4 tracking-wider uppercase">
          LOADING TFLite INT8 MODELS & PHOTONIC SHADERS...
        </p>
      </div>

      {/* Bottom Footer */}
      <div className="flex justify-between items-center text-xs font-mono text-slate-500">
        <span>AMITY UNIVERSITY KOLKATA</span>
        <span>BCA DS & AI (IBM)</span>
      </div>
    </div>
  );
}
