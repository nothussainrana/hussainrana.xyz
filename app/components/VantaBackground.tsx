'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      // Dynamically import Three.js and Vanta NET for 3D effect
      Promise.all([
        import('three'),
        import('vanta/dist/vanta.net.min.js'),
      ]).then(([THREE, VANTA]) => {
        window.THREE = THREE;
        window.VANTA = VANTA;

        vantaEffect.current = (VANTA as any).default({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x6366f1,         // Indigo color for subtle connections
          backgroundColor: 0x0,     // Transparent black
          points: 6.00,             // Even fewer points for better performance
          maxDistance: 18.00,       // Shorter connection distance
          spacing: 20.00,           // More space between points
          showDots: true,
        });
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 z-0 opacity-20"
      style={{ width: '100%', height: '100vh' }}
    />
  );
}
