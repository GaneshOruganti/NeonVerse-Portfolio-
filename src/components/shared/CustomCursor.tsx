'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Set initial position off-screen to avoid jump
    gsap.set(cursor, { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'expo.out',
      });
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);

    // Function to attach listeners to interactive elements
    const attachListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-pointer');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    attachListeners();

    // Use MutationObserver to handle dynamically added elements (like modals or new content)
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;
    
    if (isHovering) {
      gsap.to(cursorRef.current, {
        width: 56,
        height: 56,
        backgroundColor: '#C9C8BF', // Light neutral for strong difference
        mixBlendMode: 'difference',
        duration: 0.4,
        ease: 'power3.out',
      });
    } else {
      gsap.to(cursorRef.current, {
        width: 18,
        height: 18,
        backgroundColor: '#C9C8BF', // Primary neutral
        mixBlendMode: 'normal',
        duration: 0.4,
        ease: 'power3.out',
      });
    }
  }, [isHovering]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
      style={{ 
        width: '18px', 
        height: '18px', 
        backgroundColor: '#C9C8BF'
      }}
    />
  );
};

export default CustomCursor;
