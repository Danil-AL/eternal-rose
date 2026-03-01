import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Rose3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfaf0f6);

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(400, 400);
    mountRef.current.appendChild(renderer.domElement);

    // Стебель
    const stemGeo = new THREE.CylinderGeometry(0.08, 0.12, 4, 16);
    const stemMat = new THREE.MeshBasicMaterial({ color: 0x228B22 });
    const stem = new THREE.Mesh(stemGeo, stemMat);
    stem.position.y = -1.8;
    scene.add(stem);

    // Лепестки (простая роза из сфер)
    const petalMat = new THREE.MeshBasicMaterial({ color: 0xff69b4 });
    const petals: THREE.Mesh[] = [];
    for (let i = 0; i < 8; i++) {
      const petal = new THREE.Mesh(
        new THREE.SphereGeometry(0.9 + Math.random() * 0.3, 16, 16),
        petalMat
      );
      const angle = (i / 8) * Math.PI * 2;
      petal.position.set(
        Math.cos(angle) * 1.2,
        0.5 + Math.sin(i * 0.8) * 0.4,
        Math.sin(angle) * 1.2
      );
      petal.scale.set(0.6, 0.8, 0.6);
      scene.add(petal);
      petals.push(petal);
    }

    camera.position.z = 5;

    let bloomed = false;
    let time = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;
      stem.rotation.y += 0.005;

      petals.forEach((p, i) => {
        p.rotation.y += 0.008 + Math.sin(time + i) * 0.002;
        if (bloomed) {
          p.scale.set(1 + Math.sin(time * 3 + i) * 0.05, 1.1 + Math.sin(time * 4 + i) * 0.1, 1);
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleClick = () => {
      if (!bloomed) {
        petals.forEach(p => p.scale.set(1.2, 1.4, 1.2));
        bloomed = true;
      }
    };
    renderer.domElement.addEventListener('click', handleClick);

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      renderer.domElement.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div ref={mountRef}>
      <p style={{ color: '#c71585', marginTop: '10px' }}>Кликни на розу — пусть расцветёт! 🌹</p>
    </div>
  );
};

export default Rose3D;