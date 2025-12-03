import React from 'react';

// CSS-only animated background - more performant, no version conflicts
export default function ParticleBG() {
  const prefersReduced = typeof window !== 'undefined' &&
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) return null;

  return (
    <div id="particle-bg" aria-hidden="true">
      <style>{`
        #particle-bg {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          z-index: 0;
          background: #23242a;
          overflow: hidden;
        }
        
        #particle-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(0, 234, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 121, 198, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(0, 234, 255, 0.05) 0%, transparent 40%);
          animation: bgPulse 8s ease-in-out infinite alternate;
        }
        
        #particle-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(0, 234, 255, 0.4) 0%, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(255, 121, 198, 0.4) 0%, transparent 2px),
            radial-gradient(circle at 50% 50%, rgba(0, 234, 255, 0.3) 0%, transparent 1.5px),
            radial-gradient(circle at 20% 60%, rgba(255, 121, 198, 0.3) 0%, transparent 1.5px),
            radial-gradient(circle at 80% 40%, rgba(0, 234, 255, 0.3) 0%, transparent 1.5px),
            radial-gradient(circle at 60% 20%, rgba(255, 121, 198, 0.25) 0%, transparent 1px),
            radial-gradient(circle at 40% 80%, rgba(0, 234, 255, 0.25) 0%, transparent 1px),
            radial-gradient(circle at 90% 90%, rgba(255, 121, 198, 0.2) 0%, transparent 1px),
            radial-gradient(circle at 10% 10%, rgba(0, 234, 255, 0.2) 0%, transparent 1px);
          background-size: 
            200px 200px,
            200px 200px,
            150px 150px,
            180px 180px,
            160px 160px,
            120px 120px,
            140px 140px,
            100px 100px,
            110px 110px;
          animation: particleFloat 20s linear infinite;
          opacity: 0.6;
        }
        
        @keyframes bgPulse {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0.8; transform: scale(1.05); }
        }
        
        @keyframes particleFloat {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-10px, -10px); }
          50% { transform: translate(0, -20px); }
          75% { transform: translate(10px, -10px); }
          100% { transform: translate(0, 0); }
        }
        
        /* Floating orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          animation: orbFloat 15s ease-in-out infinite;
        }
        
        .orb-1 {
          width: 300px;
          height: 300px;
          background: rgba(0, 234, 255, 0.1);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 250px;
          height: 250px;
          background: rgba(255, 121, 198, 0.1);
          top: 60%;
          right: 10%;
          animation-delay: -5s;
        }
        
        .orb-3 {
          width: 200px;
          height: 200px;
          background: rgba(0, 234, 255, 0.08);
          bottom: 20%;
          left: 30%;
          animation-delay: -10s;
        }
        
        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.95); }
          75% { transform: translate(20px, 30px) scale(1.05); }
        }
      `}</style>
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
    </div>
  );
}