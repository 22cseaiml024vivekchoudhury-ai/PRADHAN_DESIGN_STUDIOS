import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// ==========================================
// 1. BESPOKE PROCEDURAL FURNITURE & ARCHITECTURAL MODELS
// ==========================================

// A Cozy Modernist Sofa Component
export function SofaModel({ position = [0, 0, 0], wireframe = false, scale = 1 }) {
  const colorFabric = wireframe ? '#b88d30' : '#efebe0'; // Cream/Beige
  const colorWood = wireframe ? '#b88d30' : '#c39573';   // Light Oak Wood
  const colorPillow = wireframe ? '#b88d30' : '#c85a17'; // Burnt Orange

  return (
    <group position={position} scale={scale}>
      {/* Base Cushion */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[3.0, 0.35, 1.3]} />
        <meshStandardMaterial color={colorFabric} roughness={0.9} wireframe={wireframe} />
      </mesh>

      {/* Backrest */}
      <mesh position={[0, 0.45, -0.45]}>
        <boxGeometry args={[2.8, 0.8, 0.4]} />
        <meshStandardMaterial color={colorFabric} roughness={0.9} wireframe={wireframe} />
      </mesh>

      {/* Armrests */}
      <mesh position={[-1.4, 0.2, 0]}>
        <boxGeometry args={[0.3, 0.6, 1.25]} />
        <meshStandardMaterial color={colorFabric} roughness={0.9} wireframe={wireframe} />
      </mesh>
      <mesh position={[1.4, 0.2, 0]}>
        <boxGeometry args={[0.3, 0.6, 1.25]} />
        <meshStandardMaterial color={colorFabric} roughness={0.9} wireframe={wireframe} />
      </mesh>

      {/* Decorative Pillows */}
      {/* White Pillow */}
      <mesh position={[-0.8, 0.25, -0.15]} rotation={[0.2, 0.3, 0.1]}>
        <boxGeometry args={[0.55, 0.55, 0.15]} />
        <meshStandardMaterial color="#ffffff" roughness={0.9} wireframe={wireframe} />
      </mesh>
      {/* Burnt Orange Pillow */}
      <mesh position={[0.7, 0.25, -0.15]} rotation={[0.2, -0.2, -0.05]}>
        <boxGeometry args={[0.6, 0.6, 0.15]} />
        <meshStandardMaterial color={colorPillow} roughness={0.9} wireframe={wireframe} />
      </mesh>

      {/* Wooden Legs */}
      {[
        [-1.3, -0.4, 0.4],
        [1.3, -0.4, 0.4],
        [-1.3, -0.4, -0.4],
        [1.3, -0.4, -0.4]
      ].map((legPos, idx) => (
        <mesh key={idx} position={legPos}>
          <cylinderGeometry args={[0.04, 0.02, 0.3, 16]} />
          <meshStandardMaterial color={colorWood} roughness={0.8} wireframe={wireframe} />
        </mesh>
      ))}
    </group>
  );
}

// A Round Light Wood Coffee Table Component
export function CoffeeTableModel({ position = [0, 0, 0], wireframe = false, scale = 1 }) {
  const colorWood = wireframe ? '#b88d30' : '#e6bc98'; // Light Wood
  const colorVase = wireframe ? '#b88d30' : '#f5f0e6'; // Off-white vase

  return (
    <group position={position} scale={scale}>
      {/* Round Wooden Table Top */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.0, 1.0, 0.1, 48]} />
        <meshStandardMaterial color={colorWood} roughness={0.8} metalness={0.0} wireframe={wireframe} />
      </mesh>

      {/* Thick Cylindrical Base */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.7, 48]} />
        <meshStandardMaterial color={colorWood} roughness={0.85} metalness={0.0} wireframe={wireframe} />
      </mesh>

      {/* Decorative Vases on Table */}
      <group position={[-0.2, 0.15, 0.1]}>
        <mesh>
          <sphereGeometry args={[0.12, 24, 24]} />
          <meshStandardMaterial color={colorVase} roughness={0.9} wireframe={wireframe} />
        </mesh>
        {/* Wheat stalks/dried flowers */}
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[0, 0.15, 0]} rotation={[0.2, i * (Math.PI / 1.5), 0.1]}>
            <cylinderGeometry args={[0.005, 0.005, 0.25, 8]} />
            <meshStandardMaterial color="#d4b58a" wireframe={wireframe} />
          </mesh>
        ))}
      </group>
      
      {/* Small Bowl */}
      <mesh position={[0.25, 0.08, -0.1]}>
        <cylinderGeometry args={[0.15, 0.1, 0.08, 32]} />
        <meshStandardMaterial color="#e0d6c8" roughness={0.9} wireframe={wireframe} />
      </mesh>
    </group>
  );
}

// Side Cabinet with Round Lamp
export function SideCabinetWithLampModel({ position = [0, 0, 0], wireframe = false, scale = 1 }) {
  const colorWood = wireframe ? '#b88d30' : '#cba279';
  const colorLampBase = wireframe ? '#b88d30' : '#e3d7c5';
  const colorLampShade = wireframe ? '#b88d30' : '#f8f2e6';

  return (
    <group position={position} scale={scale}>
      {/* Rattan/Cane Cabinet Box */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[0.9, 1.2, 0.8]} />
        <meshStandardMaterial color={colorWood} roughness={0.9} wireframe={wireframe} />
      </mesh>
      
      {/* Cabinet Legs */}
      {[
        [-0.35, -0.9, 0.3], [0.35, -0.9, 0.3],
        [-0.35, -0.9, -0.3], [0.35, -0.9, -0.3]
      ].map((pos, i) => (
        <mesh key={i} position={pos}>
          <cylinderGeometry args={[0.02, 0.015, 0.3, 16]} />
          <meshStandardMaterial color={colorWood} roughness={0.8} wireframe={wireframe} />
        </mesh>
      ))}

      {/* Lamp on top */}
      <group position={[0, 0.4, 0]}>
        {/* Lamp Base (Round) */}
        <mesh position={[0, 0.15, 0]}>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial color={colorLampBase} roughness={0.7} wireframe={wireframe} />
        </mesh>
        {/* Lamp Neck */}
        <mesh position={[0, 0.35, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.1, 16]} />
          <meshStandardMaterial color={colorWood} wireframe={wireframe} />
        </mesh>
        {/* Lamp Shade (Conical/Cylindrical) */}
        <mesh position={[0, 0.55, 0]}>
          <cylinderGeometry args={[0.2, 0.28, 0.35, 32]} />
          <meshStandardMaterial color={colorLampShade} roughness={1.0} emissive={colorLampShade} emissiveIntensity={0.2} wireframe={wireframe} />
        </mesh>
        {/* Lamp Light */}
        {!wireframe && (
          <pointLight position={[0, 0.5, 0]} intensity={1.2} distance={3} color="#fff2e0" />
        )}
      </group>
    </group>
  );
}

// An Architectural Floor Arc Lamp Component
export function FloorLampModel({ position = [0, 0, 0], wireframe = false, scale = 1 }) {
  const colorGold = '#b88d30';

  return (
    <group position={position} scale={scale}>
      {/* Weighted Pedestal Base */}
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.04, 16]} />
        <meshStandardMaterial color={colorGold} metalness={0.9} roughness={0.1} wireframe={wireframe} />
      </mesh>

      {/* Slender Main Shaft */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 2.2, 8]} />
        <meshStandardMaterial color={colorGold} metalness={0.9} roughness={0.1} wireframe={wireframe} />
      </mesh>

      {/* Curved Extension Arm */}
      <mesh position={[-0.32, 1.45, 0]} rotation={[0, 0, Math.PI / 2.5]}>
        <cylinderGeometry args={[0.015, 0.015, 0.75, 8]} />
        <meshStandardMaterial color={colorGold} metalness={0.9} roughness={0.1} wireframe={wireframe} />
      </mesh>

      {/* Conical Lampshade */}
      <mesh position={[-0.68, 1.2, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.2, 0.3, 16]} />
        <meshStandardMaterial color={colorGold} metalness={0.9} roughness={0.1} wireframe={wireframe} />
      </mesh>

      {/* Glowing Warm Light Bulb */}
      <mesh position={[-0.68, 1.05, 0]}>
        <sphereGeometry args={[0.05, 12, 12]} />
        <meshBasicMaterial color="#ffffff" wireframe={wireframe} />
      </mesh>

      {/* Local Spotlight */}
      {!wireframe && (
        <pointLight position={[-0.68, 0.8, 0]} intensity={1.8} distance={3.5} color="#fff2e0" decay={2} />
      )}
    </group>
  );
}

// A Rotating Signature Modernist Lounge Chair Component
export function SignatureLoungeChair({ position = [0, 0, 0], wireframe = false, scale = 1 }) {
  const colorGold = '#b88d30';
  const colorCushion = wireframe ? '#b88d30' : '#a38a75';

  return (
    <group position={position} scale={scale}>
      {/* Tilted Seat Cushion */}
      <mesh position={[0, -0.05, 0]} rotation={[0.05, 0, 0]}>
        <boxGeometry args={[1.3, 0.22, 1.15]} />
        <meshStandardMaterial color={colorCushion} roughness={0.6} metalness={0.1} wireframe={wireframe} />
      </mesh>

      {/* High Tilted Backrest */}
      <mesh position={[0, 0.45, -0.42]} rotation={[0.25, 0, 0]}>
        <boxGeometry args={[1.3, 0.85, 0.18]} />
        <meshStandardMaterial color={colorCushion} roughness={0.65} metalness={0.1} wireframe={wireframe} />
      </mesh>

      {/* Brushed Brass Frame Backing */}
      <mesh position={[0, 0.25, -0.52]} rotation={[0.25, 0, 0]}>
        <boxGeometry args={[1.36, 1.15, 0.03]} />
        <meshStandardMaterial color={colorGold} metalness={0.9} roughness={0.1} wireframe={wireframe} />
      </mesh>

      {/* Outward Flared Brass Legs */}
      {[
        [-0.45, -0.5, 0.38, 0.2],
        [0.45, -0.5, 0.38, -0.2],
        [-0.45, -0.5, -0.38, 0.1],
        [0.45, -0.5, -0.38, -0.1]
      ].map((legData, idx) => (
        <mesh key={idx} position={[legData[0], legData[1], legData[2]]} rotation={[0, 0, legData[3]]}>
          <cylinderGeometry args={[0.025, 0.015, 0.65, 8]} />
          <meshStandardMaterial color={colorGold} metalness={0.9} roughness={0.1} wireframe={wireframe} />
        </mesh>
      ))}

      {/* Side Pedestal Table with floating sculpture */}
      <group position={[1.4, -0.3, 0.3]}>
        <mesh>
          <cylinderGeometry args={[0.28, 0.28, 0.03, 16]} />
          <meshStandardMaterial color={colorGold} metalness={0.9} roughness={0.1} wireframe={wireframe} />
        </mesh>
        <mesh position={[0, -0.25, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
          <meshStandardMaterial color={colorGold} metalness={0.9} roughness={0.1} wireframe={wireframe} />
        </mesh>
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.22, 0.22, 0.03, 16]} />
          <meshStandardMaterial color={colorGold} metalness={0.9} roughness={0.1} wireframe={wireframe} />
        </mesh>
        
        {/* Floating Ring Art Piece */}
        {!wireframe && (
          <Float speed={1.8} floatIntensity={0.3} rotationIntensity={0.6}>
            <mesh position={[0, 0.22, 0]} rotation={[0.5, 0.5, 0]}>
              <torusGeometry args={[0.12, 0.02, 10, 40]} />
              <meshStandardMaterial color={colorGold} metalness={0.95} roughness={0.05} />
            </mesh>
          </Float>
        )}
      </group>
    </group>
  );
}

// Modern Design Studio Showcase Installation - Unique 3D Art Piece for About Page
export function ModernDesignInstallation({ position = [0, 0, 0], scale = 1 }) {
  const colorGold = '#b88d30';
  const colorIvory = '#FAF6F0';
  const frameCubeRef = useRef();
  const floatingCrystalRef = useRef();
  const geometricElementRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Main frame subtle rotation
    if (frameCubeRef.current) {
      frameCubeRef.current.rotation.y = time * 0.25;
      frameCubeRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
    }
    
    // Floating crystal element (spinning only)
    if (floatingCrystalRef.current) {
      floatingCrystalRef.current.rotation.x = time * 0.6;
      floatingCrystalRef.current.rotation.y = time * 0.8;
      floatingCrystalRef.current.rotation.z = time * 0.4;
    }
    
    // Geometric element rotation
    if (geometricElementRef.current) {
      geometricElementRef.current.rotation.z = time * 0.5;
      geometricElementRef.current.rotation.x = Math.cos(time * 0.4) * 0.15;
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* Outer Wireframe Cube Frame - Design concept */}
      <mesh ref={frameCubeRef} position={[0, 0.3, 0]}>
        <boxGeometry args={[2.2, 2.2, 2.2]} />
        <meshStandardMaterial 
          color={colorGold} 
          wireframe 
          emissive={colorGold}
          emissiveIntensity={0.15}
          opacity={0.4} 
          transparent 
        />
      </mesh>

      {/* Solid Inner Cube - Minimalist base form */}
      <mesh position={[0, -0.4, 0]}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial color={colorGold} metalness={0.85} roughness={0.1} />
      </mesh>

      {/* Central Floating Geometric Crystal - Dynamic focal point */}
      <group ref={floatingCrystalRef} position={[0, 0.5, 0]}>
        {/* Wireframe icosahedron */}
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[0.35, 1]} />
          <meshStandardMaterial 
            color={colorGold} 
            wireframe 
            emissiveIntensity={0.3}
            emissive={colorGold}
          />
        </mesh>
        
        {/* Solid inner sphere with glow */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial 
            color={colorIvory} 
            emissive={colorGold}
            emissiveIntensity={0.4}
            roughness={0.05}
            metalness={0.8}
          />
        </mesh>

        {/* Light glow */}
        <pointLight position={[0, 0, 0]} intensity={1.5} distance={2.5} color={colorGold} />
      </group>

      {/* Rotating Geometric Ring Elements */}
      <group ref={geometricElementRef} position={[0, 0.3, 0]}>
        {/* Horizontal golden ring */}
        <mesh rotation={[Math.PI / 2.5, 0, 0]}>
          <torusGeometry args={[0.55, 0.025, 8, 48]} />
          <meshStandardMaterial color={colorGold} metalness={0.95} roughness={0.05} />
        </mesh>

        {/* Vertical golden ring - perpendicular */}
        <mesh rotation={[0, 0, Math.PI / 3]}>
          <torusGeometry args={[0.55, 0.025, 8, 48]} />
          <meshStandardMaterial color={colorGold} metalness={0.9} roughness={0.08} />
        </mesh>
      </group>

      {/* Floating Accent Spheres - Design Philosophy representation */}
      {[
        { pos: [0.8, 0.2, 0.8], size: 0.12 },
        { pos: [-0.8, 0.1, -0.8], size: 0.1 },
        { pos: [0.8, -0.2, -0.8], size: 0.11 }
      ].map((elem, idx) => (
        <Float key={idx} speed={1.2 + idx * 0.3} floatIntensity={0.3} rotationIntensity={0.4}>
          <mesh position={elem.pos}>
            <sphereGeometry args={[elem.size, 12, 12]} />
            <meshStandardMaterial 
              color={colorGold} 
              metalness={0.88} 
              roughness={0.12}
              emissive={colorGold}
              emissiveIntensity={0.1}
            />
          </mesh>
        </Float>
      ))}

      {/* Base Pedestal Platform */}
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.1, 24]} />
        <meshStandardMaterial color={colorGold} metalness={0.85} roughness={0.15} />
      </mesh>

      {/* Subtle Ground Shadow Effect */}
      <mesh position={[0, -0.85, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.0, 24]} />
        <meshBasicMaterial color="#000000" opacity={0.15} transparent />
      </mesh>
    </group>
  );
}

// A Carrara Marble Fluted Column Pedestal & Modern Art Sculpture
export function ArchitecturalColumnPedestal({ position = [0, 0, 0], scale = 1, rotatingSculpture = true }) {
  const colorGold = '#b88d30';
  const innerRingRef = useRef();
  const middleRingRef = useRef();
  const outerRingRef = useRef();
  const crystalRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (innerRingRef.current) {
      innerRingRef.current.rotation.x = time * 0.8;
      innerRingRef.current.rotation.y = time * 0.4;
    }
    if (middleRingRef.current) {
      middleRingRef.current.rotation.y = -time * 0.6;
      middleRingRef.current.rotation.z = time * 0.3;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = -time * 0.4;
      outerRingRef.current.rotation.x = time * 0.5;
    }
    if (crystalRef.current) {
      crystalRef.current.rotation.y = time * 1.2;
      crystalRef.current.position.y = Math.sin(time * 2.5) * 0.06;
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* Pedestal Base Slab (White Marble) */}
      <mesh position={[0, -1.7, 0]}>
        <boxGeometry args={[1.3, 0.2, 1.3]} />
        <meshStandardMaterial color="#ffffff" roughness={0.08} metalness={0.1} />
      </mesh>

      {/* Gold Collar Trim */}
      <mesh position={[0, -1.55, 0]}>
        <boxGeometry args={[1.15, 0.08, 1.15]} />
        <meshStandardMaterial color={colorGold} metalness={0.95} roughness={0.05} />
      </mesh>

      {/* Fluted Cylinder Shaft (Carrara Marble Pedestal) */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.42, 0.42, 2.2, 24]} />
        <meshStandardMaterial color="#FAF6F0" roughness={0.1} metalness={0.15} />
      </mesh>

      {/* Fluted Cylinder Details (simulated with wireframe overlay) */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.425, 0.425, 2.18, 24]} />
        <meshStandardMaterial color={colorGold} wireframe opacity={0.12} transparent />
      </mesh>

      {/* Gold Cap Plate */}
      <mesh position={[0, 0.75, 0]}>
        <boxGeometry args={[1.15, 0.1, 1.15]} />
        <meshStandardMaterial color={colorGold} metalness={0.95} roughness={0.05} />
      </mesh>

      {/* Floating Modern Art Sculpture */}
      {rotatingSculpture && (
        <group position={[0, 1.5, 0]}>
          {/* Outer Golden Ring */}
          <mesh ref={outerRingRef}>
            <torusGeometry args={[0.72, 0.02, 12, 64]} />
            <meshStandardMaterial color="#c9a84c" metalness={0.95} roughness={0.05} />
          </mesh>
          
          {/* Middle Golden Ring */}
          <mesh ref={middleRingRef}>
            <torusGeometry args={[0.58, 0.03, 12, 64]} />
            <meshStandardMaterial color={colorGold} metalness={0.95} roughness={0.05} />
          </mesh>

          {/* Inner Golden Ring */}
          <mesh ref={innerRingRef}>
            <torusGeometry args={[0.45, 0.04, 12, 64]} />
            <meshStandardMaterial color="#8a6d30" metalness={0.95} roughness={0.05} />
          </mesh>

          {/* Floating Kinetic Crystal Gemstone */}
          <group ref={crystalRef}>
            {/* Wireframe Gem Outline */}
            <mesh>
              <octahedronGeometry args={[0.22, 0]} />
              <meshStandardMaterial color={colorGold} wireframe metalness={0.98} roughness={0.02} />
            </mesh>
            {/* Solid Inner Glow Sphere */}
            <mesh>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial color="#ffffff" roughness={0.01} metalness={0.9} emissive="#faf6f0" emissiveIntensity={0.6} />
            </mesh>
          </group>
          <pointLight position={[0, 0, 0]} intensity={2.0} distance={3.5} color="#FAF6F0" />
        </group>
      )}
    </group>
  );
}

// Advanced high-fidelity furniture loader with graceful fallback to procedural models
export function AdvancedFurnitureModel({ position = [0, -1.2, 0], scale = 1, wireframe = false }) {
  const [loading, setLoading] = useState(true);
  const [gltfScene, setGltfScene] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const url = '/models/advanced_furniture.glb';
    const loader = new GLTFLoader();

    // Fetch as arrayBuffer to validate content and avoid dev-server HTML fallback
    fetch(url)
      .then(async (res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        const buffer = await res.arrayBuffer();
        // Quick validation: check first byte for '<' (HTML) or 'g'(glTF) signature
        const header = new Uint8Array(buffer, 0, 4);
        const headerText = String.fromCharCode(header[0], header[1], header[2], header[3]);
        // 'glTF' starts with 'g','l','T','F' — if it looks like HTML ('<' ) or not glTF, bail.
        if (headerText[0] === '<' || headerText.indexOf('glTF') === -1) {
          throw new Error('Not a valid GLB');
        }
        // Parse the arrayBuffer using GLTFLoader.parse
        loader.parse(buffer, '', (parsed) => {
          if (!cancelled) {
            setGltfScene(parsed.scene);
            setLoading(false);
          }
        }, (err) => {
          if (!cancelled) {
            console.warn('GLTF parse error', err);
            setLoading(false);
          }
        });
      })
      .catch((e) => {
        if (!cancelled) {
          console.warn('Could not load GLB:', e.message || e);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // While loading show nothing to avoid popping
  if (loading) return null;

  // If we successfully parsed a GLTF scene, render it
  if (gltfScene) {
    return (
      <group position={position} scale={scale}>
        <primitive object={gltfScene} rotation={[0, Math.PI / 6, 0]} scale={0.9} dispose={null} />
      </group>
    );
  }

  // On error or not available -> fallback procedural composition
  return (
    <group position={position} scale={scale}>
      <SofaModel position={[-0.8, 0, -0.4]} scale={1.0} wireframe={wireframe} />
      <CoffeeTableModel position={[0.2, 0.2, 1.2]} scale={1.0} wireframe={wireframe} />
      <SideCabinetWithLampModel position={[2.1, 0, -0.5]} scale={1.0} wireframe={wireframe} />
    </group>
  );
}

// ==========================================
// 2. THE COMPOSITE BUSINESS-THEMED SCENES
// ==========================================

// The Full Architectural Room Layout Draft Scene (For Hero Section)
function ArchitecturalRoomDraftScene({ wireframe = false }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      // Slow elegant circular drift
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      // Cursor micro-sway parallax
      groupRef.current.rotation.x = state.pointer.y * 0.08;
      groupRef.current.rotation.y += state.pointer.x * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.4, 0]}>
      {/* Ground Technical Layout Grid */}
      <gridHelper args={[10, 10, '#b88d30', wireframe ? 'rgba(184, 141, 48, 0.12)' : 'rgba(184, 141, 48, 0.05)']} position={[0, -1.8, 0]} />

      {/* Wireframe Architectural Boundary Box */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[7, 3.6, 6]} />
        <meshStandardMaterial color="#b88d30" wireframe opacity={wireframe ? 0.08 : 0.03} transparent />
      </mesh>

      {/* Advanced furniture composition (GLB if available, otherwise procedural fallback) */}
      <AdvancedFurnitureModel position={[0, -1.2, 0]} scale={1.0} wireframe={wireframe} />

      {/* Decorative Floor Plan Dimension Lines */}
      {wireframe && (
        <group position={[0, -1.75, 0]}>
          {/* Dimension indicator lines */}
          <mesh position={[0, 0, 3.2]}>
            <boxGeometry args={[6.8, 0.015, 0.015]} />
            <meshBasicMaterial color="#b88d30" opacity={0.4} transparent />
          </mesh>
          <mesh position={[-3.4, 0, 3.2]} rotation={[0, 0, 0]}>
            <boxGeometry args={[0.015, 0.15, 0.15]} />
            <meshBasicMaterial color="#b88d30" opacity={0.6} transparent />
          </mesh>
          <mesh position={[3.4, 0, 3.2]} rotation={[0, 0, 0]}>
            <boxGeometry args={[0.015, 0.15, 0.15]} />
            <meshBasicMaterial color="#b88d30" opacity={0.6} transparent />
          </mesh>
        </group>
      )}
    </group>
  );
}

// The Dining Counter Table / Kitchen layout (For Services Section)
function DiningRoomLayoutScene() {
  const groupRef = useRef();

  useFrame((s) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = s.clock.elapsedTime * 0.06;
      groupRef.current.rotation.x = s.pointer.y * 0.08;
    }
  });

  const woodColor = '#4a3525';
  const fabricColor = '#eaddcf';

  return (
    <group ref={groupRef} position={[0, -0.4, 0]}>
      {/* Modern Dining Table Top */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.8, 0.1, 1.4]} />
        <meshStandardMaterial color="#ffffff" roughness={0.05} metalness={0.1} />
      </mesh>

      {/* Sculptural Wooden Base (Crossed/Intertwined) */}
      <mesh position={[-0.25, -0.7, 0]} rotation={[0, 0, 0.4]}>
        <boxGeometry args={[0.35, 1.6, 0.6]} />
        <meshStandardMaterial color={woodColor} roughness={0.8} metalness={0.05} />
      </mesh>
      <mesh position={[0.25, -0.7, 0]} rotation={[0, 0, -0.4]}>
        <boxGeometry args={[0.35, 1.6, 0.6]} />
        <meshStandardMaterial color={woodColor} roughness={0.8} metalness={0.05} />
      </mesh>

      {/* Decorative Vase on Table */}
      <group position={[0, 0.25, 0]}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial color="#8b7355" roughness={0.9} />
        </mesh>
        <mesh position={[0, 0.15, 0]}>
          <cylinderGeometry args={[0.08, 0.1, 0.15, 16]} />
          <meshStandardMaterial color="#8b7355" roughness={0.9} />
        </mesh>
      </group>

      {/* Modern Curved Chairs */}
      {[
        [-0.8, -0.4, 0.9, 0],       // Front left
        [0.8, -0.4, 0.9, 0],        // Front right
        [-0.8, -0.4, -0.9, Math.PI], // Back left
        [0.8, -0.4, -0.9, Math.PI]   // Back right
      ].map((chair, idx) => (
        <group key={idx} position={[chair[0], chair[1], chair[2]]} rotation={[0, chair[3], 0]}>
          {/* Seat Cushion */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.6, 0.1, 0.5]} />
            <meshStandardMaterial color={fabricColor} roughness={0.9} />
          </mesh>
          {/* Wooden Legs */}
          {[-0.25, 0.25].map((x, i) =>
            [-0.2, 0.2].map((z, j) => (
              <mesh key={`${i}-${j}`} position={[x, -0.5, z]}>
                <cylinderGeometry args={[0.025, 0.02, 1.0, 8]} />
                <meshStandardMaterial color={woodColor} roughness={0.8} />
              </mesh>
            ))
          )}
          {/* Curved Backrest */}
          <mesh position={[0, 0.35, -0.25]}>
            <cylinderGeometry args={[0.35, 0.35, 0.25, 32, 1, false, Math.PI, Math.PI]} />
            <meshStandardMaterial color={fabricColor} roughness={0.9} side={2} />
          </mesh>
          {/* Backrest Wooden Support */}
          <mesh position={[-0.35, 0.25, -0.25]}>
             <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
             <meshStandardMaterial color={woodColor} roughness={0.8} />
          </mesh>
          <mesh position={[0.35, 0.25, -0.25]}>
             <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
             <meshStandardMaterial color={woodColor} roughness={0.8} />
          </mesh>
        </group>
      ))}

      {/* Subtle modern geometric chandelier to balance the top */}
      <group position={[0, 1.6, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.8, 0.015, 8, 50]} />
          <meshStandardMaterial color="#b88d30" metalness={0.95} roughness={0.05} />
        </mesh>
        {[0, Math.PI, Math.PI / 2, -Math.PI / 2].map((angle, idx) => {
          const r = 0.8;
          return (
            <group key={idx} position={[Math.cos(angle) * r, -0.1, Math.sin(angle) * r]}>
               <mesh>
                 <sphereGeometry args={[0.04, 16, 16]} />
                 <meshBasicMaterial color="#ffffff" />
               </mesh>
               <pointLight intensity={0.5} distance={1.5} color="#fff2e0" />
            </group>
          )
        })}
      </group>
    </group>
  );
}

// A Premium Geometric Chandelier / Abstract Art Piece for Gallery
export function PremiumGeometricChandelier({ position = [0, 0, 0], scale = 1 }) {
  const colorGold = '#b88d30';
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.15;
      groupRef.current.rotation.x = Math.sin(time * 0.5) * 0.05;
    }
  });

  return (
    <group position={position} scale={scale} ref={groupRef}>
      {/* Central Axis */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 3, 16]} />
        <meshStandardMaterial color={colorGold} metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Floating Rings */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0, 0.8 - i * 0.8, 0]} rotation={[Math.PI / 2 + i * 0.2, i * 0.5, 0]}>
          <torusGeometry args={[0.6 + i * 0.2, 0.015, 16, 64]} />
          <meshStandardMaterial color={colorGold} metalness={0.95} roughness={0.05} />
        </mesh>
      ))}

      {/* Radiant Prisms */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i * Math.PI * 2) / 6;
        const radius = 0.8;
        return (
          <group key={i} position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}>
            <mesh rotation={[0, angle, 0]}>
              <octahedronGeometry args={[0.15, 0]} />
              <meshStandardMaterial color="#ffffff" roughness={0.05} metalness={0.8} emissive="#faf6f0" emissiveIntensity={0.5} />
            </mesh>
            <pointLight distance={1.5} intensity={0.5} color="#FAF6F0" />
            <mesh position={[0, 0.4, 0]}>
              <cylinderGeometry args={[0.005, 0.005, 0.8, 8]} />
              <meshBasicMaterial color={colorGold} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

// ==========================================
// 3. MAIN COMPONENT CONTAINER
// ==========================================

export default function ThreeScene({ variant = 'hero', wireframe = false }) {
  const groupRef = useRef();

  return (
    <Canvas
      camera={{ position: [0, 0, variant === 'hero' ? 6.5 : 5], fov: 50 }}
      style={{ background: 'transparent', height: '100%', width: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={variant === 'hero' ? 0.45 : 0.6} />
      
      {/* Sophisticated Lighting Design */}
      <pointLight position={[10, 8, 10]} intensity={2.0} color="#FAF6F0" />
      <pointLight position={[-10, -8, -10]} intensity={0.8} color="#dcc58a" />
      
      {/* Subtle Star fields */}
      <Stars radius={90} depth={30} count={350} factor={1.2} saturation={0} fade speed={0.2} />

      {/* Render composite business-themed scene based on variant */}
      {variant === 'hero' && (
        <group position={[0, -1.0, 0]}>
          <ArchitecturalRoomDraftScene wireframe={wireframe} />
        </group>
      )}

      {variant === 'about' && (
        <group ref={groupRef} position={[0, -0.2, -2]} scale={1.2}>
          <ModernDesignInstallation position={[0, 0, 0]} scale={1.2} />
        </group>
      )}

      {variant === 'services' && (
        <group position={[0, -0.4, 0]} scale={1.1}>
          <DiningRoomLayoutScene />
        </group>
      )}

      {variant === 'gallery' && (
        <group position={[0, -0.2, 0]} scale={1.3}>
          <PremiumGeometricChandelier position={[0, 0, 0]} />
        </group>
      )}

      {variant === 'about-sculpture' && (
        <group position={[0, -0.2, 0]} scale={1.4}>
          <ArchitecturalColumnPedestal position={[0, 0, 0]} scale={1.1} rotatingSculpture={true} />
        </group>
      )}
      
      <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.8} minPolarAngle={Math.PI / 3} />
    </Canvas>
  );
}
