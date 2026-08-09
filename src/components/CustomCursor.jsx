import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState({ active: false, text: '' });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const card = target.closest('.project-card, [data-cursor="explore"]');
      const link = target.closest('a, [data-cursor="view"]');
      const slider = target.closest('input[type="range"], [data-cursor="drag"]');
      const button = target.closest('button, [data-cursor="click"]');

      if (card) {
        setCursorState({ active: true, text: 'EXPLORE' });
      } else if (slider) {
        setCursorState({ active: true, text: 'DRAG' });
      } else if (link) {
        setCursorState({ active: true, text: 'VIEW' });
      } else if (button) {
        setCursorState({ active: true, text: 'CLICK' });
      } else {
        setCursorState({ active: false, text: '' });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      {/* Dynamic Cursor Badge Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center font-mono text-[10px] font-bold tracking-widest transition-transform duration-200 ease-out ${
          cursorState.active
            ? 'w-20 h-20 -translate-x-10 -translate-y-10 bg-cyan-400/20 border-2 border-cyan-400 text-cyan-300 backdrop-blur-md scale-110 shadow-[0_0_20px_rgba(0,240,255,0.4)]'
            : 'w-8 h-8 -translate-x-4 -translate-y-4 border border-cyan-400/50 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`
        }}
      >
        {cursorState.active && <span>{cursorState.text}</span>}
      </div>

      {/* Core Glowing Pointer Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 -translate-x-1 -translate-y-1 bg-cyan-400 rounded-full pointer-events-none z-50 shadow-[0_0_12px_#00f0ff]"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`
        }}
      />
    </>
  );
}
