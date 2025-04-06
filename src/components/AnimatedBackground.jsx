import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1]">

      {/* Base animated gradient */}
      <div 
        className="absolute bg-gradient-to-br from-[#0d060f] to-[#28032c]  inset-0"
      />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    
    </div>
  );
};

export default AnimatedBackground;