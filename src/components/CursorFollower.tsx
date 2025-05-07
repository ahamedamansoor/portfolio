import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Only show cursor on desktop
      if (!isVisible && window.innerWidth > 768) {
        setIsVisible(true);
      }

      // Check if cursor is over clickable element
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      if (window.innerWidth > 768) {
        setIsVisible(true);
      }
    };

    // Add mouse event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Hide on mobile/tablet devices
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-indigo-600 mix-blend-difference z-[9999] pointer-events-none hidden md:block"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 1.8 : 1,
        }}
        transition={{
          x: { duration: 0, type: 'spring', stiffness: 300, damping: 28 },
          y: { duration: 0, type: 'spring', stiffness: 300, damping: 28 },
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 },
        }}
        style={{
          width: '8px',
          height: '8px',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-indigo-400 z-[9999] pointer-events-none hidden md:block"
        animate={{
          x: position.x - 24,
          y: position.y - 24,
          opacity: isVisible ? 0.15 : 0,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          x: { duration: 0.15, type: 'spring', stiffness: 200, damping: 28 },
          y: { duration: 0.15, type: 'spring', stiffness: 200, damping: 28 },
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 },
        }}
        style={{
          width: '48px',
          height: '48px',
        }}
      />
    </>
  );
};

export default CursorFollower;