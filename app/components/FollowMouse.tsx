'use client';
import React, { useState, useEffect } from 'react';
import styles from './FollowMouse.module.css';

type Position = {
  x?: number;
  y?: number;
}

type LastPosition = {
  flowerTimestamp?: number;
  flowerPosition: Position;
  mousePosition: Position;
}

type Config = {
  flowerAnimationDuration: number;
  minTimeBetweenFlowers: number;
  minDistBetweenFlowers: number;
  sizes: string[];
  animations: string[];
  src: string;
}

type FollowMouseProps = {
  colour?: string;
};

export default function FollowMouse({ colour }: FollowMouseProps) {
  const [mousePosition, setMousePosition] = useState<Position>({});
  const [lastPosition, setLastPosition] = useState<LastPosition>({
    flowerTimestamp: new Date().getTime(),
    flowerPosition: { x: 0, y: 0 },
    mousePosition: { x: 0, y: 0},
  });

  const config: Config = {
    flowerAnimationDuration: 1500,
    minTimeBetweenFlowers: 250,
    minDistBetweenFlowers: 750,
    sizes: ['1.2rem', '1rem', '0.6rem'],
    animations: [styles.fallone, styles.falltwo, styles.fallthree],
    src: 'https://www.svgrepo.com/show/165289/flower-with-rounded-petals.svg'
  }

  const size = 5;

  const createFlower = (position: Position) => {
    const flower = document.createElement('img');

    flower.className = `${styles.flower}  ${config.animations[Math.floor(Math.random() * config.animations.length)]}`;
    flower.style.left = position.x + 'px';
    flower.style.top = position.y + 'px';
    flower.style.width = config.sizes[Math.floor(Math.random() * config.sizes.length)];
    flower.style.animationDuration = config.flowerAnimationDuration + 'ms';
    flower.src = config.src;

    document.body.appendChild(flower);

    setTimeout(() => {
      document.body.removeChild(flower);
    }, config.flowerAnimationDuration);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      let offset = size / 2;
      const mousePos = { 
        x: e.clientX - offset, 
        y: e.clientY - offset
      }
      
      setLastPosition((prev) => ({
        ...prev,
        flowerPosition: mousePos
      }));

      const now = new Date().getTime();
      const hasBeenLongEnough = now - (lastPosition.flowerTimestamp ?? 0) > config.minTimeBetweenFlowers;
      const hasMovedFarEnough = Math.sqrt(
        Math.pow((lastPosition.flowerPosition.x ?? 0) - mousePos.x, 2) +
        Math.pow((lastPosition.flowerPosition.y ?? 0)- mousePos.y, 2)
      ) >= config.minDistBetweenFlowers;

      if (hasMovedFarEnough || hasBeenLongEnough) {
        createFlower(mousePos);
        setLastPosition((prevLast) => ({
          ...prevLast,
          flowerPosition: mousePos,
          flowerTimestamp: now,
        }));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [size, lastPosition]);

  return (
    <div
      style={{
        display: (mousePosition.x)? 'flex' : 'none',
        position: 'absolute',
        left: mousePosition.x,
        top: mousePosition.y,
        width: size,
        height: size,
        zIndex: -10,
        background: colour? colour : '',
      }}
    >
    </div>
  )
}
