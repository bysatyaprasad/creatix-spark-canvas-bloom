
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, useTexture, Sphere, Box } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ModernInteriorScene() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Modern sofa - clean lines */}
      <Float speed={0.5} rotationIntensity={0.02} floatIntensity={0.1}>
        <group position={[-1.5, -0.5, 0]}>
          <Box args={[2.8, 0.6, 1.4]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#2a2a2a" roughness={0.3} metalness={0.1} />
          </Box>
          <Box args={[2.6, 0.8, 1.2]} position={[0, 0.35, 0]}>
            <meshStandardMaterial color="#f5f5f5" roughness={0.8} metalness={0.05} />
          </Box>
          <Box args={[0.3, 0.8, 1.2]} position={[-1.25, 0.35, 0]}>
            <meshStandardMaterial color="#f5f5f5" roughness={0.8} metalness={0.05} />
          </Box>
          <Box args={[0.3, 0.8, 1.2]} position={[1.25, 0.35, 0]}>
            <meshStandardMaterial color="#f5f5f5" roughness={0.8} metalness={0.05} />
          </Box>
        </group>
      </Float>

      {/* Modern coffee table - glass and steel */}
      <Float speed={0.3} rotationIntensity={0.01} floatIntensity={0.05}>
        <group position={[0.5, -0.8, 1]}>
          <Box args={[1.5, 0.05, 0.8]} position={[0, 0.4, 0]}>
            <meshStandardMaterial 
              color="#ffffff" 
              transparent 
              opacity={0.3} 
              roughness={0.0} 
              metalness={0.9}
              envMapIntensity={1}
            />
          </Box>
          <Box args={[0.05, 0.8, 0.05]} position={[-0.7, 0, -0.35]}>
            <meshStandardMaterial color="#c0c0c0" roughness={0.1} metalness={0.9} />
          </Box>
          <Box args={[0.05, 0.8, 0.05]} position={[0.7, 0, -0.35]}>
            <meshStandardMaterial color="#c0c0c0" roughness={0.1} metalness={0.9} />
          </Box>
          <Box args={[0.05, 0.8, 0.05]} position={[-0.7, 0, 0.35]}>
            <meshStandardMaterial color="#c0c0c0" roughness={0.1} metalness={0.9} />
          </Box>
          <Box args={[0.05, 0.8, 0.05]} position={[0.7, 0, 0.35]}>
            <meshStandardMaterial color="#c0c0c0" roughness={0.1} metalness={0.9} />
          </Box>
        </group>
      </Float>

      {/* Modern floor lamp */}
      <Float speed={0.4} rotationIntensity={0.01} floatIntensity={0.08}>
        <group position={[2.5, -0.9, -0.5]}>
          <Box args={[0.05, 2.5, 0.05]} position={[0, 0.75, 0]}>
            <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
          </Box>
          <Sphere args={[0.3]} position={[0, 2.2, 0]}>
            <meshStandardMaterial 
              color="#ffffff" 
              transparent 
              opacity={0.9} 
              roughness={0.1}
              emissive="#ffffff"
              emissiveIntensity={0.3}
            />
          </Sphere>
          <Box args={[0.4, 0.1, 0.4]} position={[0, -0.9, 0]}>
            <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
          </Box>
        </group>
      </Float>

      {/* Abstract art piece - floating geometric forms */}
      <Float speed={0.6} rotationIntensity={0.05} floatIntensity={0.15}>
        <group position={[-2.5, 1, -1.5]}>
          <Box args={[0.8, 1.2, 0.08]} position={[0, 0, 0]}>
            <meshStandardMaterial 
              color="#d4af37" 
              roughness={0.3} 
              metalness={0.7}
              emissive="#d4af37"
              emissiveIntensity={0.1}
            />
          </Box>
          <Box args={[0.6, 0.6, 0.06]} position={[0.2, 0.3, 0.1]}>
            <meshStandardMaterial 
              color="#8b4513" 
              roughness={0.4} 
              metalness={0.3}
            />
          </Box>
        </group>
      </Float>

      {/* Modern plant pot */}
      <Float speed={0.35} rotationIntensity={0.02} floatIntensity={0.06}>
        <group position={[1.8, -0.6, -1.8]}>
          <mesh>
            <cylinderGeometry args={[0.25, 0.35, 0.8]} />
            <meshStandardMaterial color="#2c2c2c" roughness={0.7} metalness={0.1} />
          </mesh>
          <Sphere args={[0.4]} position={[0, 0.6, 0]}>
            <meshStandardMaterial color="#228b22" roughness={0.9} metalness={0.0} />
          </Sphere>
        </group>
      </Float>

      {/* Ambient geometric elements */}
      {[...Array(8)].map((_, i) => (
        <Float key={i} speed={0.2 + i * 0.05} rotationIntensity={0.02} floatIntensity={0.08}>
          <Sphere
            args={[0.03]}
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 4 + 1,
              (Math.random() - 0.5) * 8 - 1
            ]}
          >
            <meshStandardMaterial 
              color={i % 3 === 0 ? "#d4af37" : i % 3 === 1 ? "#c0c0c0" : "#ffffff"} 
              roughness={0.2} 
              metalness={0.8}
              transparent
              opacity={0.6}
              emissive={i % 3 === 0 ? "#d4af37" : "#ffffff"}
              emissiveIntensity={0.1}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}

function StudioLighting() {
  return (
    <>
      <ambientLight intensity={0.3} color="#ffffff" />
      <directionalLight 
        position={[5, 8, 3]} 
        intensity={1.5} 
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-3, 4, 3]} intensity={0.6} color="#ffd700" />
      <pointLight position={[3, -2, -3]} intensity={0.4} color="#87ceeb" />
      <spotLight
        position={[0, 8, 0]}
        angle={0.2}
        penumbra={0.5}
        intensity={1}
        color="#ffffff"
        castShadow
      />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas 
        camera={{ position: [0, 2, 6], fov: 45 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          shadowMap: true,
          shadowMapType: THREE.PCFSoftShadowMap
        }}
        style={{ background: 'transparent' }}
        shadows
      >
        <StudioLighting />
        <ModernInteriorScene />
        <Environment preset="studio" />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 6}
          target={[0, 0, 0]}
          dampingFactor={0.05}
          enableDamping={true}
        />
      </Canvas>
    </div>
  );
}
