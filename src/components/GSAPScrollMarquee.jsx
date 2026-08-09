import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GSAPScrollMarquee() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    // GSAP ScrollTrigger linking scroll velocity to horizontal marquee translation speed
    const anim = gsap.to(el, {
      xPercent: -50,
      ease: 'none',
      duration: 15,
      repeat: -1
    });

    ScrollTrigger.create({
      onUpdate: (self) => {
        const velocity = Math.abs(self.getVelocity());
        const timeScale = 1 + velocity / 200;
        gsap.to(anim, { timeScale, duration: 0.2 });
      }
    });

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div className="w-full overflow-hidden py-16 bg-[#000000] border-y border-cyan-500/20 select-none">
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        <span className="text-7xl sm:text-9xl font-extrabold tracking-tighter uppercase font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-rose-500 to-emerald-400 px-8">
          LET'S CONNECT & INNOVATE // ABIR CHOWDHURY // TECH ENTREPRENEUR & DEEP-TECH INNOVATOR // AMITY UNIVERSITY KOLKATA //
        </span>
        <span className="text-7xl sm:text-9xl font-extrabold tracking-tighter uppercase font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-rose-500 to-emerald-400 px-8">
          LET'S CONNECT & INNOVATE // ABIR CHOWDHURY // TECH ENTREPRENEUR & DEEP-TECH INNOVATOR // AMITY UNIVERSITY KOLKATA //
        </span>
      </div>
    </div>
  );
}
