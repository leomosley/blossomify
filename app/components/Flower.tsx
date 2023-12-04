import React from 'react';

type FlowerProps = {
  colour: string;
  flower: number;
}

export default function Flower({ colour, flower }: FlowerProps) {
  return (
    <div>Flower</div>
  )
}
