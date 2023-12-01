import React from 'react';
import logo from '../../public/logo.svg';
import styles from './Header.module.css';
import Link from 'next/link';

function Header() {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href='/'> 
        <img 
          className={styles.image}
          src='https://www.svgrepo.com/show/512258/flower-92.svg'
        />
      </Link>
    </div>
  )
}

export default Header;