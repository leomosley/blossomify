'use client';
import React from 'react';
import styles from './Form.module.css';

export default function Form() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.box}>
          <h5 className={styles.label }>To</h5>
          <input className={styles.input} placeholder='Who your sending it to'/>
        </div>
        <div className={styles.box}>
          <h5 className={styles.label}>From</h5>
          <input className={styles.input} placeholder='Your name'/>
        </div>
        <div className={`${styles.box} ${styles.message}`}>
          <h5 className={styles.label}>Message</h5>
          <textarea className={`${styles.input} ${styles.message}`} placeholder='Your message'/>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  )
}
