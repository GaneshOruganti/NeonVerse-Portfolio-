'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BoyAnimation = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const dom = {
      face: svgRef.current.querySelector('.face'),
      eye: svgRef.current.querySelectorAll('.eye'),
      innerFace: svgRef.current.querySelector('.inner-face'),
      hairFront: svgRef.current.querySelector('.hair-front'),
      shadow: svgRef.current.querySelectorAll('.shadow'),
      ear: svgRef.current.querySelectorAll('.ear'),
      eyebrowLeft: svgRef.current.querySelector('.eyebrow-left'),
      eyebrowRight: svgRef.current.querySelector('.eyebrow-right'),
    };

    const meTl = gsap.timeline({
      onComplete: addMouseEvent,
      delay: 0.5,
    });

    gsap.set(svgRef.current.querySelector('.bg'), { transformOrigin: '50% 50%' });
    gsap.set(svgRef.current.querySelector('.ear-right'), { transformOrigin: '0% 50%' });
    gsap.set(svgRef.current.querySelector('.ear-left'), { transformOrigin: '100% 50%' });
    gsap.set(svgRef.current.querySelector('.me'), { opacity: 1 });

    meTl
      .from(
        svgRef.current.querySelector('.me'),
        {
          duration: 1,
          yPercent: 100,
          ease: 'elastic.out(0.5, 0.4)',
        },
        0.5
      )
      .from(
        svgRef.current.querySelectorAll('.head, .hair-front, .shadow'),
        {
          duration: 0.9,
          yPercent: 20,
          ease: 'elastic.out(0.58, 0.25)',
        },
        0.6
      )
      .from(
        svgRef.current.querySelector('.ear-right'),
        {
          duration: 1,
          rotate: 40,
          yPercent: 10,
          ease: 'elastic.out(0.5, 0.2)',
        },
        0.7
      )
      .from(
        svgRef.current.querySelector('.ear-left'),
        {
          duration: 1,
          rotate: -40,
          yPercent: 10,
          ease: 'elastic.out(0.5, 0.2)',
        },
        0.7
      )
      .to(
        svgRef.current.querySelector('.glasses'),
        {
          duration: 1,
          keyframes: [{ yPercent: -10 }, { yPercent: -0 }],
          ease: 'elastic.out(0.5, 0.2)',
        },
        0.75
      )
      .from(
        svgRef.current.querySelectorAll('.eyebrow-right , .eyebrow-left'),
        {
          duration: 1,
          yPercent: 300,
          ease: 'elastic.out(0.5, 0.2)',
        },
        0.7
      )
      .to(
        svgRef.current.querySelectorAll('.eye-right , .eye-left'),
        {
          duration: 0.01,
          opacity: 1,
        },
        0.85
      )
      .to(
        svgRef.current.querySelectorAll('.eye-right-2 , .eye-left-2'),
        {
          duration: 0.01,
          opacity: 0,
        },
        0.85
      );

    const blink = gsap.timeline({
      repeat: -1,
      repeatDelay: 5,
      paused: true,
    });

    blink
      .to(
        svgRef.current.querySelectorAll('.eye-right, .eye-left'),
        {
          duration: 0.01,
          opacity: 0,
        },
        0
      )
      .to(
        svgRef.current.querySelectorAll('.eye-right-2, .eye-left-2'),
        {
          duration: 0.01,
          opacity: 1,
        },
        0
      )
      .to(
        svgRef.current.querySelectorAll('.eye-right, .eye-left'),
        {
          duration: 0.01,
          opacity: 1,
        },
        0.15
      )
      .to(
        svgRef.current.querySelectorAll('.eye-right-2 , .eye-left-2'),
        {
          duration: 0.01,
          opacity: 0,
        },
        0.15
      );

    let dizzyIsPlaying = false;
    const dizzy = gsap.timeline({
      paused: true,
      onComplete: () => {
        dizzyIsPlaying = false;
      },
    });

    dizzy
      .to(
        svgRef.current.querySelector('.eyes'),
        {
          duration: 0.01,
          opacity: 0,
        },
        0
      )
      .to(
        svgRef.current.querySelector('.dizzy'),
        {
          duration: 0.01,
          opacity: 0.3,
        },
        0
      )
      .to(
        svgRef.current.querySelector('.mouth'),
        {
          duration: 0.01,
          opacity: 0,
        },
        0
      )
      .to(
        svgRef.current.querySelector('.oh'),
        {
          duration: 0.01,
          opacity: 0.85,
        },
        0
      )
      .to(
        svgRef.current.querySelectorAll('.head, .shadow'),
        {
          duration: 0.5,
          rotate: 2,
          repeat: 5,
          yoyo: true,
          ease: 'sine.inOut',
        },
        0
      )
      .to(
        svgRef.current.querySelector('.me'),
        {
          duration: 0.5,
          rotate: -1,
          repeat: 5,
          yoyo: true,
          ease: 'sine.inOut',
        },
        0
      )
      .to(
        svgRef.current.querySelector('.dizzy-1'),
        {
          rotate: -360,
          duration: 0.5,
          repeat: 5,
          transformOrigin: '50% 50%',
          ease: 'none',
        },
        0.01
      )
      .to(
        svgRef.current.querySelector('.dizzy-2'),
        {
          rotate: 360,
          duration: 0.5,
          repeat: 5,
          transformOrigin: '50% 50%',
          ease: 'none',
        },
        0.01
      )
      .to(
        svgRef.current.querySelector('.eyes'),
        {
          duration: 0.01,
          opacity: 1,
        },
        2.5
      )
      .to(
        svgRef.current.querySelector('.dizzy'),
        {
          duration: 0.01,
          opacity: 0,
        },
        2.5
      )
      .to(
        svgRef.current.querySelector('.oh'),
        {
          duration: 0.01,
          opacity: 0,
        },
        2.5
      )
      .to(
        svgRef.current.querySelector('.mouth'),
        {
          duration: 0.01,
          opacity: 1,
        },
        2.5
      );

    let xPosition = 0;
    let yPosition = 0;

    let height = typeof window !== 'undefined' ? window.innerHeight : 0;
    let width = typeof window !== 'undefined' ? window.innerWidth : 0;

    function percentage(partialValue: number, totalValue: number) {
      return (100 * partialValue) / totalValue;
    }

    function updateScreenCoords(event: MouseEvent) {
      if (!dizzyIsPlaying) {
        xPosition = event.clientX;
        yPosition = event.clientY;
      }
      if (!dizzyIsPlaying && Math.abs(event.movementX) > 500) {
        dizzyIsPlaying = true;
        dizzy.restart();
      }
    }

    let storedXPosition = 0;
    let storedYPosition = 0;

    function animateFace() {
      if (xPosition === null) return;
      if (storedXPosition === xPosition && storedYPosition === yPosition) return;

      const x = percentage(xPosition, width) - 50;
      const y = percentage(yPosition, height) - 50;

      const yHigh = percentage(yPosition, height) - 20;
      const yLow = percentage(yPosition, height) - 80;

      gsap.to(dom.face, {
        yPercent: yLow / 20,
        xPercent: x / 20,
        duration: 0.3,
        ease: 'power1.out',
      });
      gsap.to(dom.eye, {
        yPercent: yHigh / 2,
        xPercent: x / 1.5,
        duration: 0.3,
        ease: 'power1.out',
      });
      gsap.to(dom.innerFace, {
        yPercent: y / 4,
        xPercent: x / 5,
        duration: 0.3,
        ease: 'power1.out',
      });
      gsap.to(dom.hairFront, {
        yPercent: yHigh / 10,
        xPercent: x / 15,
        duration: 0.3,
        ease: 'power1.out',
      });
      gsap.to(dom.shadow, {
        yPercent: (yLow / 15) * -1,
        xPercent: (x / 15) * -1,
        duration: 0.3,
        ease: 'power1.out',
      });
      gsap.to(dom.ear, {
        yPercent: (y / 1) * -1,
        xPercent: (x / 7) * -1,
        duration: 0.3,
        ease: 'power1.out',
      });
      gsap.to([dom.eyebrowLeft, dom.eyebrowRight], {
        yPercent: y * 3,
        duration: 0.3,
        ease: 'power1.out',
      });

      storedXPosition = xPosition;
      storedYPosition = yPosition;
    }

    function addMouseEvent() {
      if (typeof window === 'undefined') return;
      const safeToAnimate = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

      if (safeToAnimate) {
        window.addEventListener('mousemove', updateScreenCoords);
        gsap.ticker.add(animateFace);
        blink.play();
      }
    }

    function updateWindowSize() {
      if (typeof window === 'undefined') return;
      height = window.innerHeight;
      width = window.innerWidth;
    }

    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);

    return () => {
      window.removeEventListener("mousemove", updateScreenCoords);
      window.removeEventListener("resize", updateWindowSize);
      gsap.ticker.remove(animateFace);
      meTl.kill();
      blink.kill();
      dizzy.kill();
    }
  }, []);

  return (
    <svg ref={svgRef} viewBox="0 10 211.73 180" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <defs>
        <radialGradient id="neon-background-glow" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#C9C8BF" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#AFACA1" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#141413" stopOpacity="0.05" />
        </radialGradient>
        <clipPath id="background-clip">
          <path
            d="M39 153.73s31.57 19.71 77.26 15.21 90.18-37.23 90.36-72.33-8.82-80.28-33.59-86.29C136.84-6.57 114.13-5.82 88-2.82S34.73 11.45 16.71 48.24C-1.5 66.64-4.88 125.2 39 153.73z"
            fill="none"
          />
        </clipPath>

        <linearGradient id="linear-gradient" x1="102.94" y1="154.47" x2="102.94" y2="36.93" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3c3c3c" />
          <stop offset="0.35" stopColor="#222" />
          <stop offset="0.54" stopColor="#111" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
      </defs>
      <path
        className="bg"
        d="M39 153.73s31.57 19.71 77.26 15.21 90.18-37.23 90.36-72.33-10.51-57-35.28-63-50.22 17-76.31 20-60.12-15.88-78.32 2.51S-4.88 125.2 39 153.73z"
        fill="url(#neon-background-glow)"
      />
      <g clipPath="url(#background-clip)">
        <g className="me" opacity="0">
          <g className="body">
            <path className="neck" d="M114.26 143.16v-14a9.22 9.22 0 10-18.43 0v14c-15.27 2.84-24.74 15.08-24.74 27.33H139c0-12.24-9.5-24.49-24.74-27.33z" fill="#ede3d1" />
            <path className="top" d="M114.26,143.16 L95.82,143.16 C95.82,143.16 90,145 90,150 L95,155 L115,155 L120,150 C120,145 114.26,143.16 114.26,143.16 z M80.25,155 H130.61 v15 H80.25z" fill="#fff" stroke="#404040" strokeWidth=".5" />
            <path className="shoulder" d="M95.82 142.87c-16 1.84-29.37 19.5-29.37 40h29.37z" fill="#404040" />
            <path className="shoulder" d="M114.23 142.67c15.76 1.85 29 19.6 29 40.2h-29z" fill="#404040" />
          </g>
          <path className="shadow" d="M95.82 122.36h18.41v14.31s-10.5 5.54-18.41 0z" fill="#efceb9" />
          <g className="head">
            <g className="ear-left ear">
              <path d="M63.52 105.14A8.21 8.21 0 0072 113.2a8.36 8.36 0 008.51-8.1A8.21 8.21 0 0072 97a8.36 8.36 0 00-8.48 8.14z" fill="#ede3d1" />
              <path
                d="M68.54 104.48a17 17 0 014.14.41c1.07.31 1.94 1 3 1.31a.39.39 0 00.43-.57c-1.15-2.38-5.49-1.86-7.58-1.67a.26.26 0 000 .52z"
                fill="#b5aa9a"
              />
            </g>
            <g className="ear-right ear">
              <path d="M144.37 105.24a8.2 8.2 0 01-8.37 8.06 8.35 8.35 0 01-8.51-8.1 8.21 8.21 0 018.42-8.06 8.35 8.35 0 018.46 8.1z" fill="#ede3d1" />
              <path
                d="M139.6 104c-2.1-.19-6.43-.72-7.59 1.67a.39.39 0 00.44.57c1.07-.26 1.92-1 3-1.31a17.51 17.51 0 014.15-.41.26.26 0 000-.52z"
                fill="#b5aa9a"
              />
            </g>
            <g className="face">
              <rect x="73.99" y="48.26" width="61.54" height="80.49" rx="26.08" transform="rotate(180 104.76 88.5)" fill="#ede3d1" />
              <g className="inner-face">
                <path className="eyebrow-right" d="M120.73 79a9 9 0 00-4-1.22 9.8 9.8 0 00-4.19.87" fill="none" stroke="#b5aa9a" strokeWidth="1.04" />
                <path className="eyebrow-left" d="M97.12 79.41a9.53 9.53 0 00-4-1.11 10.58 10.58 0 00-4.2.76" fill="none" stroke="#b5aa9a" strokeWidth="1.04" />
                <path className="mouth" d="M97 107.52s7.06 4.62 14 1.59" fill="none" stroke="#b5aa9a" strokeWidth="1.04" />
                <path
                  className="oh"
                  opacity="0"
                  d="M105.56,117.06c4-.14,5-2.89,4.7-5.64s-1.88-6.7-4.84-6.62-4.73,4.36-4.9,6.72S101.57,117.19,105.56,117.06Z"
                  fill="#262528"
                />
                <g className="eyes">
                  <path className="eye-left eye" d="M89.48 87.37c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z" fill="#2b343b" />
                  <path className="eye-right eye" d="M113.67 87.37c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z" fill="#2b343b" />
                  <path className="eye-right-2 eye" d="M114.11 88a5.72 5.72 0 002.48.72 6.46 6.46 0 002.59-.45" opacity="0" fill="none" stroke="#282828" strokeWidth="1.04" />
                  <path className="eye-left-2 eye" d="M89.85 88a5.77 5.77 0 002.56.3 6.48 6.48 0 002.49-.87" fill="none" opacity="0" stroke="#282828" strokeWidth="1.04" />
                </g>
                <path
                  className="dizzy dizzy-1"
                  opacity="0"
                  d="M113.61,87.6c.54-2.66,2.66-3.84,4.63-3.37A3.3,3.3,0,0,1,117,90.71a2.53,2.53,0,0,1-2-3,2.48,2.48,0,0,1,2.73-1.92A1.71,1.71,0,0,1,119.32,88a1.59,1.59,0,0,1-1.75,1.34c-.79-.1-1.41-.59-1-1.42s1-.72,1.22-.24"
                  fill="none"
                  stroke="#000"
                  strokeWidth="0.75"
                />
                <path
                  className="dizzy dizzy-2"
                  opacity="0"
                  d="M96.15,87.27c-.54-2.66-2.66-3.84-4.63-3.37s-2.89,1.9-2.46,4a3.11,3.11,0,0,0,3.68,2.45,2.53,2.53,0,0,0,2-3A2.49,2.49,0,0,0,92,85.49a1.71,1.71,0,0,0-1.57,2.13A1.57,1.57,0,0,0,92.19,89c.79-.11,1.41-.6,1-1.43s-1-.72-1.22-.23"
                  fill="none"
                  stroke="#000"
                  strokeWidth="0.75"
                />
                <path className="nose" d="M102.39 98.13s3.09 1.55 5.78 0" fill="none" stroke="#e0d5c1" />
                <path
                  className="glasses"
                  d="M133.54 81.76c-4.7-1.42-15.29-2.42-19.83-.45-5.82 2.17-3.18 1.57-8.55 1.17-5.36.4-2.74 1-8.55-1.18-7.3-2.55-15.58-.24-22.25.72v2.75c2.46.24 1.26 6.78 3.06 10.32 2.13 7.23 12.69 9.55 18.19 5.49 3.9-2 7.08-10.32 7.21-12.86 0-1.64 4.15-2.57 4.61.24.11 2.53 3.42 10.69 7.28 12.62 5.5 4 16 1.74 18.17-5.49 1.8-3.54 1.69-9.92 2.88-10.32s.74-2.67 0-2.75-1.02-.1-2.22-.26zM97.25 97.49C90.94 104.81 79 101.2 78 92.3c-.7-2.62-1-7.3 1.27-9.12s6.88-1.87 9.23-2c11.14-.26 16.62 5.6 8.75 16.31zm35.12-5.19c-3.71 17.2-27.26 7.42-22.09-7.36 1.87-3.11 9.09-3.84 11.55-3.73 8.07-.04 12.7 1.79 10.54 11.09z"
                  fill="#111"
                  opacity=".85"
                />
                <path
                  className="blush-left eye"
                  d="M89.9 98.17a2.66 2.66 0 01-1.55-.93 3.73 3.73 0 01-.76-3.12 3 3 0 011-1.56 2 2 0 011.4-.42 3 3 0 012.5 2.72.76.76 0 010 .21 3.19 3.19 0 01.11.91 2.1 2.1 0 01-1.77 2.21 2.07 2.07 0 01-.93-.02zM89.34 96v-.05s-.04.05 0 .05z"
                  fill="#efceb9"
                  fillRule="evenodd"
                />
                <path
                  className="blush-right eye"
                  d="M118.93 98.19a2.09 2.09 0 01-1.77-2.19 3.58 3.58 0 01.1-.91v-.21a3 3 0 012.51-2.72 2 2 0 011.4.42 3 3 0 011 1.56 3.73 3.73 0 01-.76 3.12 2.66 2.66 0 01-1.55.93 2.08 2.08 0 01-.93 0zm1.53-2.2v.05c0 .05.05-.04 0-.04z"
                  fill="#efceb9"
                  fillRule="evenodd"
                />
              </g>
              <path
                className="hair-front"
                d="M136.1,55.61 C131.22,48.79 120,44 115.33,43.84 S100.33,42 92.68,45.84 s-16,4.51-18.77,8.26 c-2.77,3.75-4.17,14-2.77,20.41 c1,3 4.5,2 8,-1.5 c1.5,-1.5 2,-3 2,-3 L83,72 c2,-3 6,-4 10,-4 s8,2 10,5 l1,1.5 c0,0 2,-3 6,-3 s8,2 10,4 l1,1.5 c0,0 2,-3 5,-3 c3,0,5,2,5,4 c0,0-0.58,6.43-3.3,7.25 C141.5,83.43,141,63.43,136.1,55.61Z"
                fill="#222"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default BoyAnimation;
