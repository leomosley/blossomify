'use client';
import React, { useState, useEffect } from 'react';
import styles from './FollowMouse.module.css';

type position = {
  x?: number;
  y?: number;
}

type FollowMouseProps = {
  pathName: string;
  colour?: string;
};


export default function FollowMouse({ pathName, colour}: FollowMouseProps) {
  const [mousePosition, setMousePosition] = useState<position>({});

  const size = pathName === 'home'? 1: 10;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      let offset = size / 2;
        setTimeout(() => {
          setMousePosition({ 
            x: e.clientX - offset, 
            y: e.clientY - offset
          });
        }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [size]);

  return (
    <div
      className={(pathName === 'home')? styles.orb : styles.flower}
      style={{
        display: (mousePosition.x)? 'flex' : 'none',
        position: 'absolute',
        left: mousePosition.x,
        top: mousePosition.y,
        width: size,
        height: size,
        zIndex: '-10',
        background: colour? colour : '',
      }}
    >
    </div>
  )
}
