'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './page.module.css';

export default function DisplayMessage() {
  const params = useSearchParams();

  const receiver = decodeURIComponent(params.get('to') ?? '');
  const sender = decodeURIComponent(params.get('from') ?? '');
  const message = decodeURIComponent(params.get('message') ?? '');
  const flower = decodeURIComponent(params.get('flower') ?? '');
  const colour = decodeURIComponent(params.get('colour') ?? '');

  return (
    <div style={{ color: 'white'}}>
      {receiver}<br></br>
      {sender}<br></br>
      {message}<br></br>
      {flower}<br></br>
      {colour}<br></br>
    </div>
  )
}
