import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Image as DreiImage } from '@react-three/drei';
import * as THREE from 'three';
import { sound } from '../utils/audio';

function Project3DPlane({ index, textureUrl, title, total }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const scroll = useScroll();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Calculate horizontal X positions along 3D spatial curve driven by Lenis scroll progress
    const scrollOffset = scroll ? scroll.offset : 0;
    const xOffset = (index - scrollOffset * (total - 1)) * 4.2;

    meshRef.current.position.x = xOffset;
    meshRef.current.position.y = Math.sin(xOffset * 0.4) * 0.35;
    meshRef.current.position.z = -Math.abs(xOffset) * 0.25;

    // Scale up slightly on hover
    const targetScale = hovered ? 1.08 : 1.0;
    meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1);
    meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, targetScale, 0.1);
  });

  return (
    <group ref={meshRef}>
      <DreiImage
        url={textureUrl || '/assets/photonic_chip_hero.jpg'}
        scale={[3.4, 2.1]}
        transparent
        opacity={0.92}
        onPointerOver={() => {
          setHovered(true);
          sound.playHover();
        }}
        onPointerOut={() => setHovered(false)}
      />
    </group>
  );
}

export default function ThreeProjectsCarousel() {
  const projects = [
    {
      title: 'HARSH QUANT // TFLite Trading Hub',
      image: '/assets/photonic_chip_hero.jpg'
    },
    {
      title: 'Cybersecurity & OSINT Threat Recon Suite',
      image: '/assets/pqc_quantum_defense.jpg'
    },
    {
      title: 'NotebookLM Terminal AI Automation',
      image: '/assets/ai_video_pipeline.jpg'
    },
    {
      title: 'Harsh-Climate Resilient Photonic Edge Processor',
      image: '/assets/photonic_chip_hero.jpg'
    },
    {
      title: 'Quantum-Resistant Defense (PQC) Engine',
      image: '/assets/pqc_quantum_defense.jpg'
    },
    {
      title: 'Autonomous Generative AI Video Pipeline',
      image: '/assets/ai_video_pipeline.jpg'
    },
    {
      title: 'Robotics & Real-Time Linux Audio DSP',
      image: '/assets/photonic_chip_hero.jpg'
    }
  ];

  return (
    <group position={[0, -2, 0]}>
      {projects.map((p, idx) => (
        <Project3DPlane
          key={idx}
          index={idx}
          total={projects.length}
          textureUrl={p.image}
          title={p.title}
        />
      ))}
    </group>
  );
}
