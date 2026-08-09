import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase">ACADEMIC JOURNEY</span>
        <h2 className="text-4xl font-extrabold text-white mt-2">
          Education & <span className="bg-gradient-to-r from-sky-400 to-purple-500 text-transparent bg-clip-text">Studies</span>
        </h2>
        <p className="text-slate-400 mt-3 text-base">
          My academic foundation at Amity University Kolkata in specialized collaboration with IBM Data Analysis.
        </p>
      </div>

      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
        
        <div className="relative bg-slate-950/80 backdrop-blur-2xl border border-sky-500/20 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row gap-8 items-start shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 flex-shrink-0">
            <GraduationCap size={36} />
          </div>

          <div className="flex flex-col gap-4 flex-grow">
            <div className="flex flex-wrap justify-between items-start gap-2">
              <div>
                <span className="text-xs font-mono text-sky-400 font-semibold">2nd Year, 3rd Semester • Batch 2025 – 2029</span>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  BCA in Data Science & Artificial Intelligence (DS & AI)
                </h3>
                <h4 className="text-lg font-semibold text-purple-400 mt-0.5">Amity University Kolkata</h4>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 text-purple-300 rounded-full text-xs font-medium">
                <Award size={14} />
                <span>IBM Data Analysis Collaboration</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Rigorous coursework across Data Science analytics, Machine Learning algorithms, Artificial Intelligence models, Big Data processing, Cybersecurity frameworks, Integrated Photonics, and Post-Quantum Security.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'IBM Data Analytics',
                'Artificial Intelligence & ML',
                'Cybersecurity Recon',
                'Integrated Photonics R&D',
                'Post-Quantum Security',
                'Python 3.14 / C++ / Rust'
              ].map((item, idx) => (
                <span
                  key={idx}
                  onMouseEnter={() => sound.playHover()}
                  className="text-xs font-mono px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl hover:border-sky-400 hover:text-sky-400 transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
