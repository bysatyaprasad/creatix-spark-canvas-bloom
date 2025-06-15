
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingElements() {
  const meshRef = useRef<THREE.Group>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
    if (boxRef.current) {
      boxRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      boxRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Floating geometric shapes representing design elements */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={boxRef} position={[-3, 2, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#8B5CF6" />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh ref={sphereRef} position={[3, -1, 1]}>
          <sphereGeometry args={[0.8]} />
          <meshStandardMaterial color="#06B6D4" />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1}>
        <mesh ref={torusRef} position={[0, -2, -1]}>
          <torusGeometry args={[1, 0.3, 16, 32]} />
          <meshStandardMaterial color="#F59E0B" />
        </mesh>
      </Float>
      
      {/* Wireframe elements for modern tech feel */}
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={3}>
        <mesh position={[2, 3, -2]}>
          <boxGeometry args={[1.5, 0.1, 1.5]} />
          <meshStandardMaterial color="#EC4899" wireframe />
        </mesh>
      </Float>
      
      <Float speed={2.5} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[-2, -3, 2]}>
          <sphereGeometry args={[0.6]} />
          <meshStandardMaterial color="#10B981" wireframe />
        </mesh>
      </Float>
    </group>
  );
}

function Lighting() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
      <pointLight position={[10, -10, 10]} intensity={0.5} color="#06B6D4" />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <Lighting />
        <FloatingElements />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
