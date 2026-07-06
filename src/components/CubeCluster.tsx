'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Cube = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [glitchType, setGlitchType] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (isHovered) {
      // При наведении выбираем случайный стиль "глюка"
      setGlitchType(Math.floor(Math.random() * 4));
      
      const colors = [
        '#9D00FF', // Яркий фиолетовый
        '#FFFFFF', // Белый
        '#00FFCC', // Тиловый/Мятный
        '#FF00CC'  // Розовый
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      controls.set({ 
        backgroundColor: randomColor,
        boxShadow: `0 0 20px ${randomColor}`,
        opacity: 1,
        scale: 1.05
      });

      const timer = setTimeout(() => {
        controls.start({ 
          backgroundColor: 'rgba(30, 41, 59, 0.5)', // Темно-серый/прозрачный
          boxShadow: '0 0 0px rgba(0,0,0,0)',
          opacity: 0.3,
          scale: 1,
          transition: { duration: 3 } 
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
      initial={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', opacity: 0.3 }}
      className="w-10 h-10 cursor-crosshair flex-shrink-0 border-[0.5px] border-white/5 relative overflow-hidden"
    >
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {glitchType === 1 && (
            <div className="w-full h-[2px] bg-white absolute top-1/2 -translate-y-1/2 animate-pulse" />
          )}
          {glitchType === 2 && (
            <div className="flex flex-col gap-[2px] h-full w-full p-[2px]">
              <div className="h-[2px] w-full bg-cyan-400" />
              <div className="h-[2px] w-1/2 bg-white" />
              <div className="h-[2px] w-full bg-purple-400" />
            </div>
          )}
          {glitchType === 3 && (
            <div className="grid grid-cols-2 grid-rows-2 gap-[2px] h-full w-full p-[2px]">
              <div className="bg-white/50" />
              <div className="bg-transparent" />
              <div className="bg-transparent" />
              <div className="bg-cyan-400/50" />
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

interface CubeClusterProps {
  className?: string;
  cols?: number;
  rows?: number;
  shape?: 'scatter' | 'heavy' | 'long';
}

export const CubeCluster: React.FC<CubeClusterProps> = ({ className, cols = 12, rows = 12, shape = 'scatter' }) => {
  const cubes = [];
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const randomFactor = Math.random();
      let shouldRender = true;
      
      // Создаем более интересные "хаотичные" формы как в пиксель-арте
      if (shape === 'scatter') {
        shouldRender = randomFactor > 0.4;
      } else if (shape === 'heavy') {
        shouldRender = randomFactor > 0.2;
      }
      
      if (shouldRender) {
        cubes.push(
          <div key={`${r}-${c}`} style={{ gridColumnStart: c + 1, gridRowStart: r + 1 }}>
            <Cube />
          </div>
        );
      }
    }
  }

  return (
    <div className={`grid gap-0 p-1 ${className}`} 
         style={{ 
           gridTemplateColumns: `repeat(${cols}, 40px)`,
           gridTemplateRows: `repeat(${rows}, 40px)`,
           background: 'rgba(0,0,0,0.3)',
           backdropFilter: 'blur(4px)',
           border: '1px solid rgba(255,255,255,0.05)'
         }}>
      {cubes}
    </div>
  );
};
