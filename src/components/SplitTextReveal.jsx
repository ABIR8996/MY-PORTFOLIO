import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SplitTextReveal({ text, className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = container.querySelectorAll('.char');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        {
          y: '100%',
          opacity: 0,
          rotateX: -45
        },
        {
          y: '0%',
          opacity: 1,
          rotateX: 0,
          stagger: 0.025,
          duration: 0.85,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, container);

    return () => ctx.revert();
  }, [text]);

  const words = text.split(' ');

  return (
    <span ref={containerRef} className={`inline-block overflow-hidden ${className}`}>
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split('').map((char, cIdx) => (
            <span
              key={cIdx}
              className="char inline-block transition-transform duration-75"
              style={{ willChange: 'transform, opacity' }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
