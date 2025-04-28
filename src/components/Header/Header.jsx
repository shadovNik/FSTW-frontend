import { useState } from 'react';
import styles from './Header.module.css';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

export default function Header({ linksContent = null }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className={`${styles.header} main-page`}>
        <a
          className={styles['fstw-logo']}
          href="/index.html"
          onClick={(e) => {
            e.preventDefault();
            toggleMenu();
          }}
        >
          <img src="/img/fstw.svg" width="180" height="45" alt="Логотип персонального кабинета" />
        </a>
        {linksContent && <div className={styles['login-register']}>{linksContent}</div>}
      </header>
      {isMenuOpen && <NavigationMenu onClose={ () => setIsMenuOpen(false) } />}
    </>
  );
}
