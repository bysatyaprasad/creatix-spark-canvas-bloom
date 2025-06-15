
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function SimpleInteriorScene() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Modern sofa */}
      <group position={[-1.5, -0.5, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.8, 0.6, 1.4]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.3} metalness={0.1} />
        </mesh>
        <mesh position={[0, 0.35, 0]}>
          <boxGeometry args={[2.6, 0.8, 1.2]} />
          <meshStandardMaterial color="#f5f5f5" roughness={0.8} metalness={0.05} />
        </mesh>
      </group>

      {/* Coffee table */}
      <group position={[0.5, -0.8, 1]}>
        <mesh position={[0, 0.4, 0]}>
          <boxGeometry args={[1.5, 0.05, 0.8]} />
          <meshStandardMaterial 
            color="#ffffff" 
            transparent 
            opacity={0.3} 
            roughness={0.0} 
            metalness={0.9}
          />
        </mesh>
        <mesh position={[-0.7, 0, -0.35]}>
          <boxGeometry args={[0.05, 0.8, 0.05]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.1} metalness={0.9} />
        </mesh>
      </group>

      {/* Floor lamp */}
      <group position={[2.5, -0.9, -0.5]}>
        <mesh position={[0, 0.75, 0]}>
          <boxGeometry args={[0.05, 2.5, 0.05]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
        </mesh>
        <mesh position={[0, 2.2, 0]}>
          <sphereGeometry args={[0.3]} />
          <meshStandardMaterial 
            color="#ffffff" 
            transparent 
            opacity={0.9} 
            roughness={0.1}
            emissive="#ffffff"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* Abstract art */}
      <group position={[-2.5, 1, -1.5]}>
        <mesh>
          <boxGeometry args={[0.8, 1.2, 0.08]} />
          <meshStandardMaterial 
            color="#d4af37" 
            roughness={0.3} 
            metalness={0.7}
            emissive="#d4af37"
            emissiveIntensity={0.1}
          />
        </mesh>
      </group>

      {/* Plant */}
      <group position={[1.8, -0.6, -1.8]}>
        <mesh>
          <cylinderGeometry args={[0.25, 0.35, 0.8]} />
          <meshStandardMaterial color="#2c2c2c" roughness={0.7} metalness={0.1} />
        </mesh>
        <mesh position={[0, 0.6, 0]}>
          <sphereGeometry args={[0.4]} />
          <meshStandardMaterial color="#228b22" roughness={0.9} metalness={0.0} />
        </mesh>
      </group>

      {/* Ambient particles */}
      {[...Array(6)].map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 3 + 1,
            (Math.random() - 0.5) * 6
          ]}
        >
          <sphereGeometry args={[0.03]} />
          <meshStandardMaterial 
            color={i % 2 === 0 ? "#d4af37" : "#ffffff"} 
            roughness={0.2} 
            metalness={0.8}
            transparent
            opacity={0.6}
            emissive={i % 2 === 0 ? "#d4af37" : "#ffffff"}
            emissiveIntensity={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

function StudioLighting() {
  return (
    <>
      <ambientLight intensity={0.4} color="#ffffff" />
      <directionalLight 
        position={[5, 8, 3]} 
        intensity={1.2} 
        color="#ffffff"
        castShadow
      />
      <pointLight position={[-3, 4, 3]} intensity={0.5} color="#ffd700" />
      <pointLight position={[3, -2, -3]} intensity={0.3} color="#87ceeb" />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas 
        camera={{ position: [0, 2, 6], fov: 45 }}
        gl={{ antialias: true }}
        style={{ background: 'transparent' }}
      >
        <StudioLighting />
        <SimpleInteriorScene />
        <Environment preset="studio" />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 6}
          target={[0, 0, 0]}
          enableDamping={true}
        />
      </Canvas>
    </div>
  );
}
