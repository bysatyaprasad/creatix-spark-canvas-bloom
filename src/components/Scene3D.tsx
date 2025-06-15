
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Text3D, Center } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function LuxuryInteriorScene() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Professional color palette
  const colors = {
    gold: '#D4AF37',
    marble: '#F5F5DC',
    walnut: '#8B4513',
    brass: '#B5651D',
    ivory: '#FFFFF0'
  };

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Luxury sofa representation */}
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
        <mesh position={[-2, 0, 0]}>
          <boxGeometry args={[2.5, 0.8, 1.2]} />
          <meshStandardMaterial color={colors.walnut} roughness={0.2} metalness={0.1} />
        </mesh>
        <mesh position={[-2, 0.6, 0]}>
          <boxGeometry args={[2.3, 0.4, 1]} />
          <meshStandardMaterial color={colors.ivory} roughness={0.8} />
        </mesh>
      </Float>

      {/* Coffee table */}
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.15}>
        <mesh position={[0, -0.3, 0.5]}>
          <cylinderGeometry args={[0.8, 0.8, 0.1]} />
          <meshStandardMaterial color={colors.marble} roughness={0.1} metalness={0.3} />
        </mesh>
        <mesh position={[0, -0.5, 0.5]}>
          <cylinderGeometry args={[0.05, 0.05, 0.4]} />
          <meshStandardMaterial color={colors.brass} roughness={0.2} metalness={0.8} />
        </mesh>
      </Float>

      {/* Decorative vase */}
      <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh position={[2, 0, -0.5]}>
          <cylinderGeometry args={[0.3, 0.4, 1.2, 8]} />
          <meshStandardMaterial color={colors.gold} roughness={0.1} metalness={0.9} />
        </mesh>
      </Float>

      {/* Architectural elements - pillars */}
      <mesh position={[-3, 0, -2]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 4]} />
        <meshStandardMaterial color={colors.marble} roughness={0.1} />
      </mesh>
      <mesh position={[3, 0, -2]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 4]} />
        <meshStandardMaterial color={colors.marble} roughness={0.1} />
      </mesh>

      {/* Floating geometric art pieces */}
      {[...Array(6)].map((_, i) => (
        <Float key={i} speed={0.5 + i * 0.1} rotationIntensity={0.1} floatIntensity={0.2}>
          <mesh
            position={[
              (Math.random() - 0.5) * 8,
              (Math.random() - 0.5) * 3 + 2,
              (Math.random() - 0.5) * 6 - 2
            ]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          >
            <octahedronGeometry args={[0.15]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? colors.gold : colors.brass} 
              roughness={0.1} 
              metalness={0.9}
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function ProfessionalLighting() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.2} 
        color="#FFFFFF"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-5, 5, 5]} intensity={0.8} color="#F4E4BC" />
      <pointLight position={[5, -5, -5]} intensity={0.6} color="#D4AF37" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        color="#FFFFFF"
        castShadow
      />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas 
        camera={{ position: [0, 2, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        shadows
      >
        <ProfessionalLighting />
        <LuxuryInteriorScene />
        <Environment preset="apartment" />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
}
