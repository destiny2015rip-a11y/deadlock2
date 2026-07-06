'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Cube = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [glitchType, setGlitchType] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (isHovered) {
      setGlitchType(Math.floor(Math.random() * 4));
      
      const colors = ['#9D00FF', '#FFFFFF', '#00FFCC', '#FF00CC'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      controls.set({ 
        backgroundColor: randomColor,
        boxShadow: `0 0 25px ${randomColor}`,
        opacity: 1,
        scale: 1.1,
        zIndex: 50
      });

      const timer = setTimeout(() => {
        controls.start({ 
          backgroundColor: 'rgba(71, 85, 105, 0.2)', 
          boxShadow: '0 0 0px rgba(0,0,0,0)',
          opacity: 0.5,
          scale: 1,
          zIndex: 1,
          transition: { duration: 4 } 
        });
        setIsHovered(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isHovered, controls]);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      animate={controls}
      initial={{ backgroundColor: 'rgba(71, 85, 105, 0.2)', opacity: 0.5 }}
      className="w-full h-full cursor-crosshair border-[0.5px] border-white/10 relative overflow-hidden"
    >
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {glitchType === 1 && <div className="w-full h-[3px] bg-white absolute top-1/2 -translate-y-1/2" />}
          {glitchType === 2 && (
            <div className="flex flex-col gap-[3px] h-full w-full p-[2px]">
              <div className="h-[2px] w-full bg-cyan-400" />
              <div className="h-[2px] w-1/2 bg-white" />
            </div>
          )}
          {glitchType === 3 && <div className="absolute inset-0 bg-white/30" />}
        </div>
      )}
    </motion.div>
  );
};

export const GlitchBackground = () => {
  const [dimensions, setDimensions] = useState({ cols: 0, rows: 0 });

  useEffect(() => {
    const calculateGrid = () => {
      const cellSize = 45; 
      const cols = Math.ceil(window.innerWidth / cellSize);
      const rows = Math.ceil(window.innerHeight / cellSize);
      setDimensions({ cols, rows });
    };

    calculateGrid();
    window.addEventListener('resize', calculateGrid);
    return () => window.removeEventListener('resize', calculateGrid);
  }, []);

  const totalCubes = useMemo(() => dimensions.cols * dimensions.rows, [dimensions]);

  if (totalCubes === 0) return null;

  return (
    <div 
      className="fixed inset-0 grid overflow-hidden bg-[#020617] pointer-events-auto"
      style={{ 
        gridTemplateColumns: `repeat(${dimensions.cols}, 1fr)`,
        gridTemplateRows: `repeat(${dimensions.rows}, 1fr)`,
        zIndex: -1
      }}
    >
      {Array.from({ length: totalCubes }).map((_, i) => (
        <Cube key={i} />
      ))}
    </div>
  );
};
