'use client';

import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  baseSize: number;
}

export const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let lastPos = { x: 0, y: 0 };
    let hasMoved = false;

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      // Fit to the entire page height
      canvas.height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
    };

    const createParticle = (x: number, y: number): Particle => {
      const maxLife = 90; // 1.5s
      const baseSize = Math.random() * 4 + 2;
      return {
        // Random offset for airiness
        x: x + (Math.random() - 0.5) * 15,
        y: y + (Math.random() - 0.5) * 15,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        life: maxLife,
        maxLife: maxLife,
        baseSize: baseSize,
      };
    };

    const onMouseMove = (e: MouseEvent) => {
      const currX = e.pageX;
      const currY = e.pageY;

      if (!hasMoved) {
        lastPos = { x: currX, y: currY };
        hasMoved = true;
        return;
      }

      // Linear interpolation to prevent gaps
      const dx = currX - lastPos.x;
      const dy = currY - lastPos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      // Create a particle every 6-8 pixels for smooth trail
      const steps = Math.max(1, Math.floor(distance / 7));

      for (let i = 0; i <= steps; i++) {
        const x = lastPos.x + (dx * (i / steps));
        const y = lastPos.y + (dy * (i / steps));
        
        // Slightly random generation for organic feel
        if (Math.random() > 0.3) {
          particles.push(createParticle(x, y));
        }
      }

      lastPos = { x: currX, y: currY };
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    
    const observer = new ResizeObserver(resize);
    observer.observe(document.body);

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life--;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        p.x += p.vx;
        p.y += p.vy;

        const lifeRatio = p.life / p.maxLife;
        const opacity = lifeRatio * 0.7; // Start at 70% opacity
        const currentSize = p.baseSize * lifeRatio; // Shrink to 0
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 pointer-events-none"
      style={{ zIndex: 1, mixBlendMode: 'screen' }}
    />
  );
};
