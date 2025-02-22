import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const RotatingModel = () => {
  const { scene } = useGLTF('/spine_model/scene.gltf');
  const modelRef = useRef();

  // Rotate the model slowly on the Y-axis
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust the value to control the speed of rotation
    }
  });

  return <primitive ref={modelRef} object={scene} scale={0.2} position={[0, -4.5, 0]} />;
};

const ThreeDVis = () => {
  return (
    <Canvas
      style={{ width: '100vw', height: '100vh' }}
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color(0 / 255, 0 / 255, 0 / 255)); // RGB(0, 0, 0)
      }}
    >
      {/* Ambient light for softer lighting */}
      <ambientLight intensity={0.5} />
      
      {/* Directional light shining from the top */}
      <directionalLight
        position={[0, 10, 0]} // Positioned above the scene
        intensity={1} // Adjust intensity as needed
        castShadow // Enable shadows
      />
      
      {/* Model with rotation */}
      <RotatingModel />
      
      {/* Controls for rotating the scene */}
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDVis;
