import React from 'react';

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden py-12 bg-slate-950/80 border-y border-cyan-500/20 select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-6xl sm:text-8xl font-extrabold tracking-tighter uppercase font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-rose-500 to-emerald-400 px-8">
          LET'S TALK & INNOVATE // ABIR CHOWDHURY // TECH ENTREPRENEUR & DEEP-TECH INNOVATOR // AMITY UNIVERSITY KOLKATA //
        </span>
        <span className="text-6xl sm:text-8xl font-extrabold tracking-tighter uppercase font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-rose-500 to-emerald-400 px-8">
          LET'S TALK & INNOVATE // ABIR CHOWDHURY // TECH ENTREPRENEUR & DEEP-TECH INNOVATOR // AMITY UNIVERSITY KOLKATA //
        </span>
      </div>
    </div>
  );
}
