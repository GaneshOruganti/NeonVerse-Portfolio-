'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const NeuralBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const nodes = containerRef.current.querySelectorAll('.node');
    const connections = containerRef.current.querySelectorAll('.connection');

    // Random floating animation for nodes
    nodes.forEach((node) => {
      gsap.to(node, {
        x: 'random(-20, 20)',
        y: 'random(-20, 20)',
        duration: 'random(3, 5)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    // Pulse animation for connections
    connections.forEach((conn) => {
      gsap.to(conn, {
        opacity: 'random(0.1, 0.4)',
        duration: 'random(2, 4)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 z-0">
      <svg width="100%" height="100%" className="w-full h-full">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Connection Lines */}
        <line className="connection" x1="10%" y1="20%" x2="25%" y2="40%" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.2" />
        <line className="connection" x1="25%" y1="40%" x2="15%" y2="60%" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.2" />
        <line className="connection" x1="15%" y1="60%" x2="35%" y2="75%" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.2" />
        <line className="connection" x1="35%" y1="75%" x2="50%" y2="55%" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.2" />
        
        <line className="connection" x1="80%" y1="15%" x2="70%" y2="35%" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.2" />
        <line className="connection" x1="70%" y1="35%" x2="85%" y2="55%" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.2" />
        <line className="connection" x1="85%" y1="55%" x2="75%" y2="80%" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.2" />

        {/* Neural Nodes */}
        <circle className="node" cx="10%" cy="20%" r="3" fill="hsl(var(--accent))" filter="url(#glow)" />
        <circle className="node" cx="25%" cy="40%" r="4" fill="hsl(var(--primary))" filter="url(#glow)" />
        <circle className="node" cx="15%" cy="60%" r="3" fill="hsl(var(--accent))" filter="url(#glow)" />
        <circle className="node" cx="35%" cy="75%" r="5" fill="hsl(var(--primary))" filter="url(#glow)" />
        <circle className="node" cx="50%" cy="55%" r="3" fill="hsl(var(--accent))" filter="url(#glow)" />
        
        <circle className="node" cx="80%" cy="15%" r="4" fill="hsl(var(--primary))" filter="url(#glow)" />
        <circle className="node" cx="70%" cy="35%" r="3" fill="hsl(var(--accent))" filter="url(#glow)" />
        <circle className="node" cx="85%" cy="55%" r="5" fill="hsl(var(--primary))" filter="url(#glow)" />
        <circle className="node" cx="75%" cy="80%" r="3" fill="hsl(var(--accent))" filter="url(#glow)" />
      </svg>
    </div>
  );
};

export default NeuralBackground;
