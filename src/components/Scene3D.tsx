
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ModernGeometry() {
  const groupRef = useRef<THREE.Group>(null);
  const cubesRef = useRef<THREE.Mesh[]>([]);
  
  // Create multiple floating cubes with different sizes and colors
  const cubes = useMemo(() => {
    const cubeData = [];
    for (let i = 0; i < 12; i++) {
      cubeData.push({
        position: [
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6
        ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ],
        scale: 0.3 + Math.random() * 0.7,
        color: [
          '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
          '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F',
          '#BB8FCE', '#85C1E9', '#F8C471', '#82E0AA'
        ][i],
        speed: 0.5 + Math.random() * 1.5
      });
    }
    return cubeData;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
    
    cubesRef.current.forEach((cube, i) => {
      if (cube) {
        const speed = cubes[i].speed;
        cube.rotation.x = state.clock.elapsedTime * speed * 0.5;
        cube.rotation.y = state.clock.elapsedTime * speed * 0.3;
        cube.rotation.z = state.clock.elapsedTime * speed * 0.2;
        
        // Floating motion
        cube.position.y = cubes[i].position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {cubes.map((cube, index) => (
        <mesh
          key={index}
          ref={(el) => cubesRef.current[index] = el!}
          position={cube.position as [number, number, number]}
          scale={cube.scale}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={cube.color}
            roughness={0.3}
            metalness={0.1}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
      
      {/* Central wireframe sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
      
      {/* Rotating rings */}
      <group>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[3, 0.1, 8, 32]} />
          <meshStandardMaterial color="#64FFDA" transparent opacity={0.6} />
        </mesh>
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[3.5, 0.1, 8, 32]} />
          <meshStandardMaterial color="#FF4081" transparent opacity={0.4} />
        </mesh>
      </group>
    </group>
  );
}

function DynamicLighting() {
  const lightRef = useRef<THREE.PointLight>(null);
  
  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(state.clock.elapsedTime) * 5;
      lightRef.current.position.z = Math.cos(state.clock.elapsedTime) * 5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight ref={lightRef} position={[0, 5, 0]} intensity={1} color="#64FFDA" />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#FF4081" />
      <pointLight position={[-5, -5, -5]} intensity={0.6} color="#9C27B0" />
      <directionalLight position={[10, 10, 5]} intensity={0.5} color="#ffffff" />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <DynamicLighting />
        <ModernGeometry />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
