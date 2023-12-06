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

  const ColourSelector = () => {
    const colours: string[] = [
      '#C5FFF8', '#8ADAB2',  '#8CABFF', 
      '#FF90BC', '#FED9ED', '#BEADFA', 
      '#B15EFF',  '#AF2655', 
    ];

    return (
      <div className={styles.colours}>
        {colours.map((c, i) => (
          <button 
            className={`${styles.colourButton} ${colour === colours[i] ? styles.selected : ""} `}
            style={{
              background: colours[i]
            }}
            onClick={() => setColour(colours[i])}
          ></button>
        ))}
        <input 
          className={`${styles.colourButton} ${styles.custom}`} 
          type='color' 
          onChange={(e) => setColour(e.target.value)}
        />
      </div>
    );
  }

  const FlowerSelector = () => {
    const flowers: string[] = [
      "Tulip", "Rose",
      "Lily", "Daisy"
    ];

    return (
      <div className={styles.flowers}>
        {flowers.map((f, i) => (
          <button
            className={`${styles.flowerButton} ${flower === i ? styles.selected : ""}`}
            onClick={() => setFlower(i)}
          >{f}</button>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
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
          <div className={styles.selector}>
            <FlowerSelector />
          </div>
          <div className={styles.selector}>
            <ColourSelector />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.submit}>
          <button
            className={styles.button} 
            onClick={handleSubmit}
          >Generate Link</button>
          {link? <Link className={styles.button} href={link}>Open</Link> : <></>}
        </div>
      </div>
    </div>
  )
}