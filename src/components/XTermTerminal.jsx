import React, { useEffect, useRef } from 'react';
import { Terminal as XTerm } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';
import { sound } from '../utils/audio';

export default function XTermTerminal() {
  const terminalRef = useRef(null);
  const xtermInstance = useRef(null);

  const COMMANDS = {
    help: `Available commands:
  quant      : HARSH QUANT TFLite Trading Engine details
  about      : Abir Chowdhury bio & entrepreneurial vision
  cybersec   : Cybersecurity & OSINT recon suite details
  notebooklm : Terminal NotebookLM research AI integration
  education  : Amity University Kolkata (BCA DS & AI with IBM)
  projects   : List deep-tech research & innovations
  photonic   : Photonic chip project details
  skills     : Data Science, AI & Systems toolkit
  contact    : Abir's Email, GitHub & share link
  clear      : Clear terminal screen`,

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

  useEffect(() => {
    if (!terminalRef.current || xtermInstance.current) return;

    const term = new XTerm({
      cursorBlink: true,
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 13,
      theme: {
        background: '#020409',
        foreground: '#f8fafc',
        cursor: '#00f0ff',
        selectionBackground: 'rgba(0, 240, 255, 0.3)'
      }
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(terminalRef.current);
    fitAddon.fit();

    xtermInstance.current = term;

    term.writeln('\x1b[36mWelcome to Abir Chowdhury\'s xterm.js Shell v3.0.0\x1b[0m');
    term.writeln('Type \x1b[33m\'help\'\x1b[0m, \x1b[33m\'quant\'\x1b[0m, \x1b[33m\'cybersec\'\x1b[0m, \x1b[33m\'projects\'\x1b[0m, or \x1b[33m\'contact\'\x1b[0m.\r\n');

    let currentInput = '';
    const prompt = () => {
      term.write('\x1b[35mabir@amity-kolkata:~$\x1b[0m ');
    };

    prompt();

    term.onData((data) => {
      sound.playClick();
      const code = data.charCodeAt(0);

      if (code === 13) {
        // Enter key
        term.writeln('');
        const cmd = currentInput.trim().toLowerCase();
        currentInput = '';

        if (cmd === 'clear') {
          term.clear();
        } else if (COMMANDS[cmd]) {
          const lines = COMMANDS[cmd].split('\n');
          lines.forEach((l) => term.writeln(l));
        } else if (cmd.length > 0) {
          term.writeln(`command not found: \x1b[31m${cmd}\x1b[0m. Type \x1b[33m'help'\x1b[0m.`);
        }

        prompt();
      } else if (code === 127) {
        // Backspace
        if (currentInput.length > 0) {
          currentInput = currentInput.slice(0, -1);
          term.write('\b \b');
        }
      } else if (code < 32) {
        // Control characters
        return;
      } else {
        currentInput += data;
        term.write(data);
      }
    });

    const handleResize = () => fitAddon.fit();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      term.dispose();
    };
  }, []);

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">HIGH-PERFORMANCE XTERM.JS SHELL</span>
        <h2 className="text-3xl font-extrabold text-white mt-1 font-mono">
          Terminal <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-rose-500 text-transparent bg-clip-text">Emulation</span>
        </h2>
      </div>

      <div className="bg-slate-950 border border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl">
        <div className="bg-slate-900/90 px-6 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
          </div>
          <span className="font-mono text-xs text-slate-400">abir@amity-kolkata: ~ (xterm.js)</span>
          <span className="text-[10px] font-mono text-slate-500">VT100 / UTF-8</span>
        </div>

        <div className="p-4 bg-[#020409]">
          <div ref={terminalRef} className="w-full h-80 overflow-hidden" />
        </div>
      </div>
    </section>
  );
}
