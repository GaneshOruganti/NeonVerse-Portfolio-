'use client';

import { useState, useEffect } from 'react';

const roles = [
  'Applied AI Engineer',
  'LLM & RAG Systems',
  'Cloud-Native ML Deployment',
];

const RotatingText = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        if (charIndex < currentRole.length) {
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const timeout = setTimeout(type, isDeleting ? 60 : 100);
    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex, isDeleting]);

  const textToShow = roles[roleIndex].substring(0, charIndex);

  return (
    <div className="flex items-center text-2xl md:text-3xl font-bold tracking-tight">
      <span className="text-foreground/40 mr-2">&lt;</span>
      <span className="text-foreground">
        {textToShow}
        <span className="text-accent animate-pulse ml-0.5">|</span>
      </span>
      <span className="text-foreground/40 ml-2">/&gt;</span>
    </div>
  );
};

export default RotatingText;