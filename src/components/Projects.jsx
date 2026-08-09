import React, { useState, useEffect, useRef } from 'react';
import { Shield, Bot, Cpu, Lock, Video, Car, TrendingUp } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Projects() {
  const [temp, setTemp] = useState(25);
  const canvasRef = useRef(null);

  // Waveguide Canvas Phase Simulator
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animId;
    const renderWave = () => {
      const w = (canvas.width = canvas.parentElement.clientWidth);
      const h = (canvas.height = canvas.parentElement.clientHeight);

      ctx.clearRect(0, 0, w, h);

      ctx.fillStyle = '#070c1e';
      ctx.fillRect(0, h * 0.3, w, h * 0.4);

      ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
      ctx.lineWidth = 2;
      ctx.strokeRect(0, h * 0.3, w, h * 0.4);

      const tempOffset = temp - 25;
      const phaseShift = (tempOffset * 0.00008).toFixed(4);

      const time = Date.now() * 0.005;
      ctx.beginPath();
      ctx.moveTo(0, h / 2);

      for (let x = 0; x < w; x++) {
        const y = h / 2 + Math.sin(x * 0.03 + time + parseFloat(phaseShift)) * 16;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3;
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 12;
      ctx.stroke();

      animId = requestAnimationFrame(renderWave);
    };

    renderWave();
    return () => cancelAnimationFrame(animId);
  }, [temp]);

  const projectsList = [
    {
      title: 'HARSH QUANT // TFLite Ultra-Low Latency Trading Terminal',
      category: 'Quant AI & FinTech',
      icon: <TrendingUp className="text-cyan-400" size={24} />,
      tags: ['TensorFlow Lite INT8', '1D-CNN + GRU', 'Kotlin Android NNAPI', 'Vite Glassmorphism'],
      desc: 'Ultra-low latency cybernetic algorithmic trading hub & Android TFLite architecture. Uses full-integer INT8 quantization (<150 KB) for sub-2ms local neural inference on NPU/GPU with level 2 orderbook depth analysis.',
      image: null,
      bg: 'from-cyan-950/40 to-slate-950'
    },
    {
      title: 'Cybersecurity & OSINT Threat Reconnaissance Suite',
      category: 'Cybersecurity & OSINT',
      icon: <Shield className="text-emerald-400" size={24} />,
      tags: ['Cybersecurity', 'OSINT Sherlock', 'Network Recon', 'Zero-Trust'],
      desc: 'Engineered an offensive security & threat intelligence suite incorporating username footprint auditing (sherlock), network scanner integration, and zero-trust security monitoring.',
      image: null,
      bg: 'from-emerald-950/40 to-slate-950'
    },
    {
      title: 'NotebookLM Terminal AI Research Automation',
      category: 'AI Research & Automation',
      icon: <Bot className="text-purple-400" size={24} />,
      tags: ['NotebookLM CLI', 'Python Automation', 'RAG Knowledge Base', 'Playwright'],
      desc: 'Configured a terminal-native AI research workflow using notebooklm-py and Playwright. Built automated Python sync scripts (sync_notebooklm.py) to auto-ingest PDFs and devlogs for CLI queries and AI podcasts.',
      image: null,
      bg: 'from-purple-950/40 to-slate-950'
    },
    {
      title: 'Harsh-Climate Resilient Photonic Edge Processor',
      category: 'Integrated Photonics',
      icon: <Cpu className="text-sky-400" size={24} />,
      tags: ['Silicon Nitride (Si3N4)', 'PyMeep FDTD', 'gdsfactory', 'Optical Compute'],
      desc: 'Designing an athermal, EMI-immune integrated photonic processor running post-quantum cryptography (PQC) for extreme defense applications (-50°C to +125°C).',
      image: '/assets/photonic_chip_hero.jpg',
      bg: 'from-sky-950/40 to-slate-950',
      interactive: true
    },
    {
      title: 'Quantum-Resistant Defense Cryptography Engine',
      category: 'Post-Quantum Security',
      icon: <Lock className="text-indigo-400" size={24} />,
      tags: ['Post-Quantum Security', 'ML-KEM-768', 'Kyber', 'C++ / liboqs'],
      desc: 'Hardware acceleration of NIST FIPS 203 ML-KEM-768 (Kyber) polynomial ring arithmetic for sub-nanosecond key encapsulation on military field radios.',
      image: '/assets/pqc_quantum_defense.jpg',
      bg: 'from-indigo-950/40 to-slate-950'
    },
    {
      title: 'Autonomous Generative AI Video Pipeline',
      category: 'Generative AI',
      icon: <Video className="text-pink-400" size={24} />,
      tags: ['AI Generative Video', 'LTX / Wan Pipelines', 'Python 3.14'],
      desc: 'End-to-end generative AI video and media automation pipeline integrating scene depth estimation, prompt synthesis, and automated video assembly.',
      image: '/assets/ai_video_pipeline.jpg',
      bg: 'from-pink-950/40 to-slate-950'
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">🌱 THE DEEP ROOTS OF INNOVATION</span>
        <h2 className="text-4xl font-extrabold text-white mt-2">
          Featured <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-emerald-400 text-transparent bg-clip-text">Projects & Work</span>
        </h2>
        <p className="text-slate-400 mt-3 text-base">
          Foundational engineering innovations across Quant Trading AI, Cybersecurity, Photonic Chips, AI Automation, and Quantum Security.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsList.map((project, idx) => (
          <div
            key={idx}
            onMouseEnter={() => sound.playHover()}
            className="group relative bg-slate-950/80 backdrop-blur-2xl border border-sky-500/20 rounded-3xl overflow-hidden hover:border-sky-400/60 transition-all duration-500 flex flex-col shadow-2xl hover:-translate-y-2"
          >
            {project.image ? (
              <div className="w-full h-52 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              </div>
            ) : (
              <div className={`w-full h-44 bg-gradient-to-br ${project.bg} border-b border-slate-800 flex items-center justify-center p-6`}>
                <div className="p-4 bg-slate-900/80 border border-slate-700/80 rounded-2xl shadow-xl">
                  {project.icon}
                </div>
              </div>
            )}

            <div className="p-8 flex flex-col gap-4 flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-mono px-2.5 py-1 bg-sky-500/10 border border-sky-400/20 text-sky-400 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {project.desc}
              </p>

              {/* Interactive Thermal Simulator Widget inside Photonic Chip project */}
              {project.interactive && (
                <div className="mt-2 p-4 bg-slate-900/90 border border-slate-800 rounded-2xl">
                  <div className="flex justify-between items-center mb-2 text-xs font-mono">
                    <span className="text-sky-400">⚡ Interactive Waveguide Simulator</span>
                    <span className="text-white font-bold">{temp > 0 ? `+${temp}` : temp}°C</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-slate-400 font-mono">-50°C</span>
                    <input
                      type="range"
                      min="-50"
                      max="125"
                      value={temp}
                      onChange={(e) => setTemp(parseInt(e.target.value, 10))}
                      className="w-full accent-sky-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                    />
                    <span className="text-[10px] text-slate-400 font-mono">+125°C</span>
                  </div>

                  <div className="w-full h-16 mt-3 rounded-lg overflow-hidden relative">
                    <canvas ref={canvasRef} className="w-full h-full" />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
