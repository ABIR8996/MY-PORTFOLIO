import * as THREE from 'three';

export const LiquidRippleShader = {
  uniforms: {
    uTime: { value: 0.0 },
    uHover: { value: 0.0 },
    uTexture: { value: null },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) }
  },

  vertexShader: `
    uniform float uTime;
    uniform float uHover;
    varying vec2 vUv;
    varying float vWave;

    void main() {
      vUv = uv;
      vec3 pos = position;

      // Calculate subtle wave displacement based on position & hover state
      float wave = sin(pos.x * 5.0 + uTime * 2.0) * cos(pos.y * 5.0 + uTime * 2.0) * uHover * 0.15;
      pos.z += wave;
      vWave = wave;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,

  fragmentShader: `
    uniform float uTime;
    uniform float uHover;
    uniform sampler2D uTexture;
    uniform vec2 uMouse;
    varying vec2 vUv;
    varying float vWave;

    void main() {
      vec2 uv = vUv;

      // Distort UV coordinates based on liquid ripple mathematical sine waves
      float displacement = sin(uv.y * 20.0 + uTime * 3.0) * 0.02 * uHover;
      uv.x += displacement;
      uv.y += displacement * sin(uv.x * 15.0 + uTime * 2.0);

      vec4 color = texture2D(uTexture, uv);

      // Enhance edge glow with electric cobalt & neon crimson highlights
      color.rgb += vec3(0.0, 0.94, 1.0) * vWave * 2.0;
      color.rgb += vec3(1.0, 0.0, 0.33) * uHover * 0.1;

      gl_FragColor = color;
    }
  `
};
