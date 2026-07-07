'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Cube = React.memo(({ id }: { id: number }) => {
  const controls = useAnimation();
  const [isActive, setIsActive] = useState(false);

  const handlePointerEnter = useCallback(() => {
    if (isActive) return;
    setIsActive(true);

    const colors = ['#9D00FF', '#FFFFFF', '#00FFCC', '#FF00CC', '#7000FF'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Мгновенная вспышка
    controls.set({ 
      backgroundColor: color,
      boxShadow: `0 0 20px ${color}`,
      opacity: 1,
      scale: 1.1,
      zIndex: 10
    });

    // Плавное затухание (шлейф)
    setTimeout(() => {
      controls.start({ 
        backgroundColor: 'rgba(71, 85, 105, 0.1)', 
        boxShadow: '0 0 0px rgba(0,0,0,0)',
        opacity: 0.2,
        scale: 1,
        zIndex: 1,
        transition: { duration: 3.5, ease: "easeOut" } 
      }).then(() => setIsActive(false));
    }, 150);
  }, [isActive, controls]);

  return (
    <motion.div
      onPointerMove={handlePointerEnter}
      animate={controls}
      initial={{ backgroundColor: 'rgba(71, 85, 105, 0.1)', opacity: 0.2 }}
      className="w-full h-full border-[0.5px] border-white/5 relative"
    />
  );
});

Cube.displayName = 'Cube';

export const GlitchBackground = () => {
  const [dimensions, setDimensions] = useState({ cols: 0, rows: 0 });

  useEffect(() => {
    const calculateGrid = () => {
      const cellSize = 30; // Плотная сетка для шлейфа
      const cols = Math.ceil(window.innerWidth / cellSize);
      const rows = Math.ceil(window.innerHeight / cellSize);
      setDimensions({ cols, rows });
    };

    calculateGrid();
    window.addEventListener('resize', calculateGrid);
    return () => window.removeEventListener('resize', calculateGrid);
  }, []);

  const cubes = useMemo(() => {
    const total = dimensions.cols * dimensions.rows;
    if (total === 0) return null;
    return Array.from({ length: total }).map((_, i) => (
      <Cube key={i} id={i} />
    ));
  }, [dimensions]);

  if (!cubes) return null;

  return (
    <div 
      className="fixed inset-0 grid overflow-hidden bg-[#020617] pointer-events-auto"
      style={{ 
        gridTemplateColumns: `repeat(${dimensions.cols}, 1fr)`,
        gridTemplateRows: `repeat(${dimensions.rows}, 1fr)`,
        zIndex: -1,
        touchAction: 'none'
      }}
    >
      {cubes}
    </div>
  );
};
