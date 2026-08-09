import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft } from 'lucide-react';
import { sound } from '../utils/audio';

export default function TerminalShell() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'sys', text: "Welcome to Abir Chowdhury's Interactive CLI Profile Shell v2.5.0" },
    { type: 'sys', text: "Type 'help', 'quant', 'about', 'cybersec', 'notebooklm', 'education', 'projects', 'photonic', 'contact', 'clear'." }
  ]);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const COMMANDS = {
    help: `Available commands:
  - quant      : HARSH QUANT TFLite Trading Hub details
  - about      : Abir Chowdhury bio & entrepreneurial vision
  - cybersec   : Cybersecurity & OSINT recon suite details
  - notebooklm : Terminal NotebookLM research AI integration
  - education  : Amity University Kolkata (BCA DS & AI with IBM)
  - projects   : List deep-tech research & innovations
  - photonic   : Photonic chip project details
  - skills     : Data Science, AI & Systems toolkit
  - contact    : Abir's Email, GitHub & share link
  - clear      : Clear terminal screen`,

    quant: `⚡ HARSH QUANT // TFLite Trading Hub:
  • Architecture: Ultra-low latency cybernetic algorithmic trading terminal & mobile TFLite engine
  • Model: 1D-CNN + GRU post-training INT8 quantization (<150 KB) for sub-2ms local NPU/GPU inference
  • Mobile Runner: Native Kotlin Android with OpenCL/Vulkan GPU & NNAPI NPU delegates
  • Analytics: Level 2 orderbook depth, Wilder's RSI, NATR, KeyStore TEE AES-256 encryption`,

    about: `🚀 About Abir Chowdhury:
  Tech Entrepreneur & Innovator | 2nd Year, 3rd Sem Student pursuing BCA in Data Science 
  & Artificial Intelligence at Amity University Kolkata (in collaboration with IBM Data Analysis). 
  Deep-tech researcher bridging HARSH QUANT AI, Cybersecurity, Integrated Photonics (Si3N4), and Post-Quantum Security.`,

    cybersec: `🛡️ Cybersecurity & Recon Suite:
  • OSINT Footprint Recon: Sherlock username auditing & digital footprint analysis
  • Vulnerability Assessment: Network scanning & threat detection
  • Zero-Trust Hardening: Hardened hardware-software security architecture`,

    notebooklm: `🤖 NotebookLM CLI Research Automation:
  • Terminal Setup: Configured notebooklm-py & Playwright in terminal
  • Auto-Sync: Created sync_notebooklm.py to automatically ingest PDFs, devlogs & simulation data
  • AI Output: Real-time CLI Q&A, automated podcast generation & research report synthesis`,

    education: `🎓 Education & Credentials:
  • Student: Abir Chowdhury
  • Degree: BCA in Data Science & Artificial Intelligence (DS & AI)
  • Institution: Amity University Kolkata
  • Specialization: In collaboration with IBM Data Analysis
  • Status: 2nd Year, 3rd Semester (Batch 2025 – 2029)`,

    projects: `📁 Research & Innovations:
  1. HARSH QUANT // TFLite Ultra-Low Latency Trading Terminal (Sub-2ms INT8 NPU Inference)
  2. Cybersecurity & OSINT Recon Suite (Sherlock & Threat Auditing)
  3. NotebookLM Terminal AI Research Automation (notebooklm-py & sync_notebooklm.py)
  4. Harsh-Climate Photonic Edge Processor (Si3N4 chip layout & FDTD thermal sim)
  5. Quantum-Resistant Defense Encryption Engine (NIST ML-KEM-768 Kyber)
  6. Autonomous AI Video Generation Pipeline (LTX/Wan media synthesis)`,

    photonic: `⚡ Photonic Edge Chip Specs:
  • Waveguide Material: Silicon Nitride (Si3N4)
  • Temp Performance: -50°C to +125°C athermal phase stability
  • Interference: 100% EMI/EMP immune
  • Math Engine: Optical Vector-Matrix Multiplication (O-VMM)`,

    skills: `🛠️ Skills & Toolkit:
  • Quant AI & FinTech: HARSH QUANT TFLite INT8, 1D-CNN + GRU, Kotlin NNAPI/Vulkan
  • Data Science & AI: IBM Data Analytics, Machine Learning, PyTorch, Big Data Analysis
  • Cybersecurity: OSINT Sherlock, Threat Auditing, Zero-Trust Hardening
  • Photonics & Security: PyMeep FDTD, gdsfactory, NIST ML-KEM-768 PQC, liboqs`,

    contact: `📬 Contact Abir Chowdhury:
  • Email: abirc6733@gmail.com
  • GitHub: https://github.com/ABIR8996
  • Shareable Profile URL: http://localhost:3000`
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sound.playClick();
      const cmd = inputVal.trim().toLowerCase();
      setInputVal('');

      if (!cmd) return;

      if (cmd === 'clear') {
        setHistory([]);
        return;
      }

      const outputText = COMMANDS[cmd] || `command not found: '${cmd}'. Type 'help' for available commands.`;
      setHistory(prev => [
        ...prev,
        { type: 'user', text: cmd },
        { type: 'resp', text: outputText }
      ]);
    }
  };

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">INTERACTIVE COMMAND SHELL</span>
        <h2 className="text-3xl font-extrabold text-white mt-1">
          Terminal <span className="bg-gradient-to-r from-sky-400 to-purple-500 text-transparent bg-clip-text">Profile Shell</span>
        </h2>
      </div>

      <div className="bg-slate-950 border border-sky-500/30 rounded-3xl overflow-hidden shadow-2xl">
        <div className="bg-slate-900/90 px-6 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
          </div>
          <span className="font-mono text-xs text-slate-400 flex items-center gap-2">
            <Terminal size={14} className="text-sky-400" />
            abir@amity-kolkata: ~
          </span>
          <span className="text-[10px] font-mono text-slate-500">zsh 5.9</span>
        </div>

        <div ref={bodyRef} className="p-6 font-mono text-sm text-slate-300 h-80 overflow-y-auto flex flex-col gap-3">
          {history.map((h, i) => (
            <div key={i} className="leading-relaxed">
              {h.type === 'user' ? (
                <div className="flex items-center gap-2 text-purple-400">
                  <span>abir@amity-kolkata:~$</span>
                  <span className="text-white font-bold">{h.text}</span>
                </div>
              ) : (
                <pre className="whitespace-pre-wrap font-mono text-xs text-slate-300">{h.text}</pre>
              )}
            </div>
          ))}

          <div className="flex items-center gap-2 pt-2">
            <span className="text-purple-400 font-bold">abir@amity-kolkata:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a command (e.g. help, quant, about, cybersec)..."
              className="bg-transparent border-none outline-none font-mono text-sm text-white flex-grow"
            />
            <CornerDownLeft size={14} className="text-slate-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
