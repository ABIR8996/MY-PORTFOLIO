import React from 'react';
import { Award, Zap, Shield, Bot, Cpu } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Achievements() {
  const achievementsList = [
    {
      num: '01',
      title: 'HARSH QUANT TFLite Trading Hub',
      desc: 'Engineered sub-2ms post-training INT8 quantized 1D-CNN + GRU model architecture (<150 KB) with native Kotlin OpenCL/Vulkan GPU & NNAPI NPU delegates.',
      icon: <Zap className="text-cyan-400" size={24} />
    },
    {
      num: '02',
      title: 'Cybersecurity & OSINT Threat Reconnaissance',
      desc: 'Built offensive network auditing and digital footprint reconnaissance tools (sherlock, cybersec_project) for threat identification and zero-trust security auditing.',
      icon: <Shield className="text-emerald-400" size={24} />
    },
    {
      num: '03',
      title: 'IBM Data Analysis & AI Specialization',
      desc: 'Mastered Data Science analytics, machine learning algorithms, and IBM big data workflows at Amity University Kolkata (Batch 2025–2029).',
      icon: <Award className="text-purple-400" size={24} />
    },
    {
      num: '04',
      title: 'NotebookLM Terminal AI Automation',
      desc: 'Created Python auto-sync automation (sync_notebooklm.py) using notebooklm-py and Playwright to query scientific libraries & generate podcasts in CLI.',
      icon: <Bot className="text-pink-400" size={24} />
    },
    {
      num: '05',
      title: 'Photonic Chip Layout & PQC Engine',
      desc: 'Engineered an athermal silicon nitride (Si3N4) photonic layout engine (gdsfactory) and NIST FIPS 203 ML-KEM-768 post-quantum key exchange.',
      icon: <Cpu className="text-amber-400" size={24} />
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">🌟 THE GOLDEN BLOSSOMS & MILESTONES</span>
        <h2 className="text-4xl font-extrabold text-white mt-2 font-mono">
          Key <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-rose-500 text-transparent bg-clip-text">Achievements</span>
        </h2>
        <p className="text-slate-400 mt-3 text-base font-sans">
          Milestones across Quant FinTech AI, Cybersecurity, IBM Data Science, and Deep-Tech Hardware.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsList.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => sound.playHover()}
            className="bg-slate-950/80 backdrop-blur-2xl border border-slate-800 rounded-3xl p-8 flex flex-col gap-4 hover:border-cyan-400/50 transition-all hover:-translate-y-2 shadow-2xl"
          >
            <div className="flex justify-between items-center">
              <span className="font-mono text-2xl font-extrabold text-slate-600">{item.num}</span>
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl">
                {item.icon}
              </div>
            </div>

            <h3 className="text-lg font-bold text-white font-mono mt-2">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-sans">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
