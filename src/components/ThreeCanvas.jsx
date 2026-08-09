import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGlossyShapes() {
  const torusRef = useRef();
  const sphereRef = useRef();
  const wireRef = useRef();
  const knotRef = useRef();

  const prevMouse = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    // Calculate cursor velocity
    const dx = state.mouse.x - prevMouse.current.x;
    const dy = state.mouse.y - prevMouse.current.y;
    velocity.current.x = THREE.MathUtils.lerp(velocity.current.x, dx * 10, 0.1);
    velocity.current.y = THREE.MathUtils.lerp(velocity.current.y, dy * 10, 0.1);

    prevMouse.current.x = state.mouse.x;
    prevMouse.current.y = state.mouse.y;

    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.2 + velocity.current.y * 0.5;
      torusRef.current.rotation.y += delta * 0.3 + velocity.current.x * 0.5;
      torusRef.current.position.x = THREE.MathUtils.lerp(
        torusRef.current.position.x,
        2.5 + state.mouse.x * 1.5,
        0.05
      );
    }

    if (sphereRef.current) {
      sphereRef.current.rotation.y -= delta * 0.15 + velocity.current.x * 0.4;
      sphereRef.current.position.y = THREE.MathUtils.lerp(
        sphereRef.current.position.y,
        -1.2 + state.mouse.y * 1.0,
        0.05
      );
    }

    if (wireRef.current) {
      wireRef.current.rotation.x -= delta * 0.12 + velocity.current.y * 0.6;
      wireRef.current.rotation.z += delta * 0.18 + velocity.current.x * 0.6;
    }

    if (knotRef.current) {
      knotRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group>
      {/* Glossy Metallic Wireframe Torus */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={torusRef} position={[2.5, 0.5, -2]}>
          <torusKnotGeometry args={[1.5, 0.42, 128, 32]} />
          <MeshWobbleMaterial
            color="#00f0ff"
            factor={0.35}
            speed={1.8}
            roughness={0.1}
            metalness={0.9}
            wireframe={true}
          />
        </mesh>
      </Float>

      {/* Floating Refractive Glass Sphere */}
      <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.8}>
        <mesh ref={sphereRef} position={[-2.8, -1.2, -3]}>
          <sphereGeometry args={[1.2, 64, 64]} />
          <MeshWobbleMaterial
            color="#ff0055"
            factor={0.25}
            speed={1.5}
            roughness={0.05}
            metalness={0.95}
            wireframe={true}
          />
        </mesh>
      </Float>

      {/* Deep Space Glowing Silicon Node */}
      <Float speed={2.5} rotationIntensity={2} floatIntensity={2.5}>
        <mesh ref={wireRef} position={[-2.2, 1.8, -4]}>
          <icosahedronGeometry args={[1.4, 2]} />
          <MeshWobbleMaterial
            color="#00ff88"
            factor={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            wireframe={true}
          />
        </mesh>
      </Float>

      {/* Background Micro Octahedron */}
      <Float speed={1} rotationIntensity={0.8} floatIntensity={1}>
        <mesh ref={knotRef} position={[3.2, -2.2, -5]}>
          <octahedronGeometry args={[1.0, 1]} />
          <MeshWobbleMaterial
            color="#a855f7"
            factor={0.2}
            speed={1}
            roughness={0.1}
            metalness={0.8}
            wireframe={true}
          />
        </mesh>
      </Float>
    </group>
  );
}

function NeuralParticles() {
  const pointsRef = useRef();

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.06;
      pointsRef.current.rotation.x += delta * 0.03;
    }
  });

  const count = 2000;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 28;
  }

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f0ff"
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.45}
      />
    </Points>
  );
}

export default function ThreeCanvas() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[#020409]">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#00f0ff" />
        <pointLight position={[-10, -10, -5]} intensity={3} color="#ff0055" />
        <FloatingGlossyShapes />
        <NeuralParticles />
      </Canvas>
    </div>
  );
}
