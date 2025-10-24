'use client';

export default function GalaxyBackground() {
  return (
    <>
      {/* Pure black background */}
      <div className="fixed inset-0 z-0 bg-black" />
      
      {/* Static stars - CSS only, no canvas */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="stars-small"></div>
        <div className="stars-medium"></div>
        <div className="stars-large"></div>
      </div>
      
      {/* Nebula clouds - Milky Way inspired */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Main milky way band - horizontal */}
        <div 
          className="absolute w-full h-[800px] blur-[100px] opacity-20"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.3) 20%, rgba(168, 85, 247, 0.4) 40%, rgba(236, 72, 153, 0.3) 60%, rgba(59, 130, 246, 0.2) 80%, transparent 100%)',
            top: '30%',
            left: '0',
            transform: 'rotate(-15deg)',
            animation: 'float 40s ease-in-out infinite',
          }}
        />
        
        {/* Purple nebula cloud */}
        <div 
          className="absolute w-[1000px] h-[1000px] rounded-full blur-[120px] opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(124, 58, 237, 0.2) 50%, transparent 75%)',
            top: '10%',
            left: '10%',
            animation: 'float 50s ease-in-out infinite',
          }}
        />
        
        {/* Pink nebula */}
        <div 
          className="absolute w-[800px] h-[800px] rounded-full blur-[100px] opacity-12"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.35) 0%, rgba(219, 39, 119, 0.18) 50%, transparent 75%)',
            bottom: '15%',
            right: '15%',
            animation: 'float 45s ease-in-out infinite reverse',
          }}
        />
      </div>
    </>
  );
}
