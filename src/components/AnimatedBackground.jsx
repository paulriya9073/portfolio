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
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Small vertical light beams */}
            {beams.map((beam) => (
                <div
                    key={beam.id}
                    className="absolute w-[2px] h-[40px] animate-soft-beam"
                    style={{
                        left: `${beam.left}px`,
                        top: `${beam.top}px`,
                        background: 'linear-gradient(to bottom, rgba(103,58,138,0.7), rgba(216,27,96,0.1))',
                        boxShadow: '0 0 6px 1px rgba(255,255,255,0.2)',
                        borderRadius: '1px',
                    }}
                />
            ))}

            {/* Animation */}
            <style jsx>{`
            @keyframes soft-beam-fall {
            0% {
    transform: translateY(0px);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  100% {
    transform: translateY(25px);
    opacity: 0;
  }
}
.animate-soft-beam {
  animation: soft-beam-fall 1.4s ease-in-out forwards;
}
      `}</style>
        </div>
    );
};

export default AnimatedBackground;