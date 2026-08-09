import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';

import Loader from './components/Loader';
import ThreeCanvas from './components/ThreeCanvas';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GSAPScrollMarquee from './components/GSAPScrollMarquee';
import Education from './components/Education';
import ProjectCarouselWebGL from './components/ProjectCarouselWebGL';
import Achievements from './components/Achievements';
import SkillsMatrix from './components/SkillsMatrix';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    // Lenis Inertia Smooth Scroll (Ultra Smooth 60fps)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setToast(true);
      setTimeout(() => setToast(false), 3000);
    });
  };

  return (
    <div className="relative text-slate-100 min-h-screen selection:bg-cyan-400 selection:text-black font-sans bg-[#020409]">
      {/* Cinematic 0-100% Loader */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* 3D WebGL Background Canvas */}
      <ThreeCanvas />

      {/* Light Source Custom Cursor */}
      <CustomCursor />

      {/* Header Navbar */}
      <Navbar onShare={handleShare} />

      {/* Main Page Content Overlay */}
      <main className="relative z-10">
        <Hero onShare={handleShare} />
        <GSAPScrollMarquee />
        <Education />
        <ProjectCarouselWebGL />
        <Achievements />
        <SkillsMatrix />
      </main>

      {/* Footer & Share Toast */}
      <Footer onShare={handleShare} />

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-8 right-8 z-50 px-6 py-3 bg-emerald-400 text-black font-mono font-bold text-xs rounded-full shadow-2xl animate-bounce flex items-center gap-2">
          <span>✅ Profile link copied to clipboard!</span>
        </div>
      )}
    </div>
  );
}
