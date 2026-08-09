import React from 'react';
import { Shield, Cpu, Code2, TrendingUp } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase">TECHNICAL TOOLKIT</span>
        <h2 className="text-4xl font-extrabold text-white mt-2">
          Skills & <span className="bg-gradient-to-r from-sky-400 to-purple-500 text-transparent bg-clip-text">Expertise</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-950/80 backdrop-blur-2xl border border-sky-500/20 rounded-3xl p-8 flex flex-col gap-6 shadow-xl hover:border-sky-400/50 transition-all">
          <div className="flex items-center gap-3 text-cyan-400">
            <TrendingUp size={24} />
            <h3 className="text-lg font-bold text-white">HARSH QUANT & FinTech AI</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['TFLite INT8 Quantization', '1D-CNN + GRU Models', 'Kotlin Android NNAPI', 'OpenCL / Vulkan GPU', 'Level 2 Orderbook Depth', 'Hardware KeyStore TEE'].map((s, i) => (
              <span key={i} onMouseEnter={() => sound.playHover()} className="text-xs font-mono px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-all">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-slate-950/80 backdrop-blur-2xl border border-sky-500/20 rounded-3xl p-8 flex flex-col gap-6 shadow-xl hover:border-sky-400/50 transition-all">
          <div className="flex items-center gap-3 text-emerald-400">
            <Shield size={24} />
            <h3 className="text-lg font-bold text-white">Cybersecurity & AI (IBM)</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Cybersecurity Recon', 'OSINT Sherlock', 'IBM Data Analytics', 'Machine Learning', 'PyTorch / TensorFlow', 'Zero-Trust Security'].map((s, i) => (
              <span key={i} onMouseEnter={() => sound.playHover()} className="text-xs font-mono px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl hover:border-emerald-400 hover:text-emerald-400 transition-all">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-slate-950/80 backdrop-blur-2xl border border-sky-500/20 rounded-3xl p-8 flex flex-col gap-6 shadow-xl hover:border-sky-400/50 transition-all">
          <div className="flex items-center gap-3 text-purple-400">
            <Code2 size={24} />
            <h3 className="text-lg font-bold text-white">Photonics & Systems</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['PyMeep FDTD', 'gdsfactory Si3N4', 'NIST ML-KEM-768 PQC', 'Python 3.14', 'Rust (rookiepy)', 'NotebookLM SDK'].map((s, i) => (
              <span key={i} onMouseEnter={() => sound.playHover()} className="text-xs font-mono px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl hover:border-purple-400 hover:text-purple-400 transition-all">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
