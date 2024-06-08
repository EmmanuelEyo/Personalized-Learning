"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDAdaptiveModel = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentMountRef = mountRef.current;
    if (!currentMountRef) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Set alpha to true for transparency

    renderer.setSize(window.innerWidth * 0.73, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Set clear color to transparent

    currentMountRef.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true }); // Change color to blue
    const torusKnot = new THREE.Mesh(geometry, material);

    scene.add(torusKnot);
    camera.position.z = 50;

    const animate = () => {
      requestAnimationFrame(animate);
      torusKnot.rotation.x += 0.01;
      torusKnot.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (currentMountRef) {
        currentMountRef.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }}></div>;
};

export default ThreeDAdaptiveModel;
