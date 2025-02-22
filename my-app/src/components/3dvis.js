import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const ThreeDVis = () => {
  const { scene } = useGLTF('/spine_model/scene.gltf');
  
  // Reference for directional light
  const directionalLightRef = useRef();

  useEffect(() => {
    if (directionalLightRef.current) {
      // Make sure the directional light points to the center of the scene
      directionalLightRef.current.target.position.set(0, 0, 0); // Pointing at the center of the scene
    }
  }, []);

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
        ref={directionalLightRef}
        position={[0, 10, 0]} // Positioned above the scene
        intensity={1} // Adjust intensity as needed
        castShadow // Enable shadows
      />
      
      {/* Model */}
      <primitive object={scene} scale={0.2} position={[0, -4.5, 0]} />
      
      {/* Controls for rotating the scene */}
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDVis;
