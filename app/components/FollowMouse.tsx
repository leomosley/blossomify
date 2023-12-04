'use client';
import React, { useState, useEffect } from 'react';
import styles from './FollowMouse.module.css';

type position = {
  x?: number;
  y?: number;
}

export default function FollowMouse() {
  const [mousePosition, setMousePosition] = useState<position>({});
  const [inWindow, setInWindow] = useState<boolean>(true);

  const size = 50;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      let offset = size / 2;
      if (inWindow) {
        setTimeout(() => {
          setMousePosition({ 
            x: e.clientX - offset, 
            y: e.clientY - offset
          });
        }, 75);
      } else {
        setMousePosition({});
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [inWindow]);

  const handleMouseLeave = () => {
    setInWindow(false);
  };

  const handleMouseEnter = () => {
    setInWindow(true);
  };

  return (
    <div
      style={{
        display: (mousePosition.x !== undefined && inWindow)? 'flex' : 'none',
        position: 'absolute',
        left: mousePosition.x,
        top: mousePosition.y,
        width: size,
        height: size,
        borderRadius: '100%',
        backgroundColor: 'red',
        zIndex: -1,
      }}
    >
    </div>
  )
}
