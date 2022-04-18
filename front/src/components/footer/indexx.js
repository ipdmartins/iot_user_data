import React from 'react';
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
        <a href="">Besoin d'aide?</a>{'  -  '}
        </li>
        <li>
        <a href="">Conditions d'utilisation</a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2021
      </p>
    </footer>
  )
}

export default Footer