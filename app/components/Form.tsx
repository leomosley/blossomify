'use client';
import React, { useState } from 'react';
import styles from './Form.module.css';
import Link from 'next/link';


export default function Form() {
  const [receiver, setReceiver] = useState<string>('');
  const [sender, setSender] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [flower, setFlower] = useState<number>(0);
  const [colour, setColour] = useState<string>('');
  const [link, setLink] = useState<string | undefined>();

  const handleSubmit = () => {
    let encReceiver = encodeURIComponent(receiver);
    let encSender = encodeURIComponent(sender);
    let encMessage = encodeURIComponent(message);
    let encFlower = encodeURIComponent(flower);
    let encColour = encodeURIComponent(colour);

    let url = `/message?to=${encReceiver}&from=${encSender}&message=${encMessage}&flower=${encFlower}&colour=${encColour}`
    setLink(url);
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.box}>
          <h5 className={styles.label }>To</h5>
          <input 
            className={styles.input} 
            placeholder='Who your sending it to' 
            onChange={(e) => setReceiver(e.target.value)}
          />
        </div>
        <div className={styles.box}>
          <h5 className={styles.label}>From</h5>
          <input 
            className={styles.input} 
            placeholder='Your name'
            onChange={(e) => setSender(e.target.value)}
          />
        </div>
        <div className={`${styles.box} ${styles.message}`}>
          <h5 className={styles.label}>Message</h5>
          <textarea 
            className={`${styles.input} ${styles.message}`} 
            placeholder='Your message'
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.right}>
          <div className={styles.box}>
            <h5 className={styles.label}>Flower</h5>
            <input 
              className={styles.input} 
              type='number'
              onChange={(e) => setFlower(e.target.valueAsNumber)}
            />
          </div>
          <div className={styles.box}>
            <h5 className={styles.label}>Colour</h5>
            <input 
              className={styles.input} 
              type='color'
              onChange={(e) => setColour(e.target.value)}
            />
          </div>
          <div className={styles.box}>
            <button
              className={styles.button} 
              onClick={handleSubmit}
            ></button>
            {link? <Link href={link}>Link</Link> : <></>}
          </div>
      </div>
    </div>
  )
}