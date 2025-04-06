import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [beams, setBeams] = useState([]);

  useEffect(() => {
    const createBeam = () => {
      const screenWidth = window.innerWidth;
      const cols = Math.floor(screenWidth / 50);
      const col = Math.floor(Math.random() * cols);
      const left = col * 50;

      const id = Math.random().toString(36).substr(2, 9);
      const top = Math.random() * window.innerHeight * 0.8; // Random Y offset

      const beam = { id, left, top };

      setBeams((prev) => [...prev, beam]);

      setTimeout(() => {
        setBeams((prev) => prev.filter((b) => b.id !== id));
      }, 1200);
    };

    const interval = setInterval(() => {
      createBeam();
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d060f] to-[#28032c]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '3rem 3rem',
        }}
      />

      {/* Small vertical light beams */}
      {beams.map((beam) => (
        <div
          key={beam.id}
          className="absolute w-[2px] h-[40px] bg-fuchsia-950 opacity-40 animate-small-beam"
          style={{
            left: `${beam.left}px`,
            top: `${beam.top}px`,
          }}
        />
      ))}

      {/* Animation */}
      <style jsx>{`
        @keyframes small-beam-fall {
          0% {
            transform: translateY(0px);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }
        .animate-small-beam {
          animation: small-beam-fall .5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;