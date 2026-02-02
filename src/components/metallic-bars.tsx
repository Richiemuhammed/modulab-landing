/**
 * Metallic Bars Component using Three.js
 * Creates 4 pixel-perfect 3D metallic boxes matching the reference image
 */

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import * as THREE from 'three'

interface MetallicBarsProps {
  className?: string
}

interface BoxProps {
  position: [number, number, number]
  color: string
  size: [number, number, number]
  metallic?: number
  roughness?: number
}

function MetallicBox({ position, color, size, metallic = 0.9, roughness = 0.1 }: BoxProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial
        color={color}
        metalness={metallic}
        roughness={roughness}
      />
    </mesh>
  )
}

// Camera controller for isometric view
function CameraController() {
  const { camera } = useThree()
  
  useEffect(() => {
    // Isometric view: camera positioned to show top, front, and right faces
    // Standard isometric angle: ~35.264° elevation, 45° azimuth
    // Position camera to look at the boxes from isometric angle
    const distance = 25
    const elevation = Math.asin(1 / Math.sqrt(3)) // ~35.264° for true isometric
    const azimuth = Math.PI / 4 // 45 degrees
    
    camera.position.set(
      distance * Math.cos(elevation) * Math.cos(azimuth),
      distance * Math.sin(elevation),
      distance * Math.cos(elevation) * Math.sin(azimuth)
    )
    camera.lookAt(0, -3, 0) // Look at center of where boxes are
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.updateProjectionMatrix()
    }
  }, [camera])
  
  return null
}

function MetallicBars3D() {
  // 4 metallic boxes with orange, black, white, gray
  // Isometric view: bars standing vertically, showing top, front, and right faces
  // Positioned to flow from top-right corner down-left
  // Size format: [width, height, depth] where height is the vertical length of the bar
  const boxes = [
    { 
      position: [6, 0, 6] as [number, number, number], // Top-right
      color: '#F97316', // Orange
      size: [4, 20, 4] as [number, number, number],
      metallic: 0.9,
      roughness: 0.1
    },
    { 
      position: [2, -2.5, 2] as [number, number, number], // Down-left from first
      color: '#1a1a1a', // Black
      size: [4, 22, 4] as [number, number, number],
      metallic: 0.95,
      roughness: 0.05
    },
    { 
      position: [-2, -5, -2] as [number, number, number], // Further down-left
      color: '#ffffff', // White
      size: [4, 18, 4] as [number, number, number],
      metallic: 0.85,
      roughness: 0.15
    },
    { 
      position: [-6, -7.5, -6] as [number, number, number], // Bottom-left
      color: '#525252', // Gray
      size: [4, 21, 4] as [number, number, number],
      metallic: 0.9,
      roughness: 0.1
    },
  ]

  return (
    <>
      {/* Ambient light for overall illumination */}
      <ambientLight intensity={1.2} />
      {/* Main directional light from top-left */}
      <directionalLight position={[10, 15, 8]} intensity={1.5} />
      {/* Fill light from right */}
      <directionalLight position={[-8, 10, -5]} intensity={0.8} />
      {/* Additional light for better visibility */}
      <pointLight position={[5, 10, 5]} intensity={0.6} />
      
      {boxes.map((box, index) => (
        <MetallicBox
          key={index}
          position={box.position}
          color={box.color}
          size={box.size}
          metallic={box.metallic}
          roughness={box.roughness}
        />
      ))}
    </>
  )
}

export default function MetallicBars({ className = '' }: MetallicBarsProps) {
  return (
    <div 
      className={`relative ${className}`}
      style={{
        width: '400px',
        height: '400px',
        background: 'transparent',
      }}
    >
      <Canvas
        camera={{
          position: [20, 18, 20], // Isometric angle position - looking at origin
          fov: 50,
          near: 0.1,
          far: 1000,
        }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <CameraController />
        <MetallicBars3D />
      </Canvas>
    </div>
  )
}
