import React from 'react';
import { Shield, Cpu, Code2, TrendingUp } from 'lucide-react';
import { sound } from '../utils/audio';

export default function SkillsMatrix() {
  const categories = [
    {
      title: 'Quant AI & FinTech',
      icon: <TrendingUp className="text-cyan-400" size={24} />,
      skills: ['TFLite INT8 Quantization', '1D-CNN + GRU Models', 'Kotlin Android NNAPI', 'OpenCL / Vulkan GPU', 'Level 2 Orderbook Depth', 'Hardware KeyStore TEE']
    },
    {
      title: 'Data Science & AI (IBM)',
      icon: <Shield className="text-emerald-400" size={24} />,
      skills: ['IBM Data Analytics', 'Machine Learning', 'PyTorch / TensorFlow', 'Big Data Analysis', 'Data Visualization', 'Python 3.14']
    },
    {
      title: 'Cybersecurity & Recon',
      icon: <Code2 className="text-purple-400" size={24} />,
      skills: ['Cybersecurity Recon', 'OSINT Sherlock', 'Vulnerability Scan', 'Network Recon', 'Zero-Trust Security', 'Threat Intelligence']
    },
    {
      title: 'Photonics & Systems',
      icon: <Cpu className="text-rose-400" size={24} />,
      skills: ['PyMeep FDTD', 'gdsfactory Si3N4', 'NIST ML-KEM-768 PQC', 'Rust (rookiepy)', 'Linux Systems', 'NotebookLM SDK']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">GSAP STAGGERED MATRIX</span>
        <h2 className="text-4xl font-extrabold text-white mt-2 font-mono">
          Skills & <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-rose-500 text-transparent bg-clip-text">Technical Toolkit</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            onMouseEnter={() => sound.playHover()}
            className="bg-slate-950/80 backdrop-blur-2xl border border-slate-800 rounded-3xl p-6 flex flex-col gap-5 shadow-2xl hover:border-cyan-400/50 transition-all hover:-translate-y-2"
          >
            <div className="flex items-center gap-3">
              {cat.icon}
              <h3 className="text-base font-bold text-white font-mono">{cat.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s, sIdx) => (
                <span
                  key={sIdx}
                  onMouseEnter={() => sound.playHover()}
                  className="text-xs font-mono px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-all cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
