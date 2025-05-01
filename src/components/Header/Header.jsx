import { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <Link
          to="/main"
          className={styles['fstw-logo']}
          onClick={(e) => {
              e.preventDefault();
              toggleMenu();
          }}
        >
          <img src="/img/fstw.svg" width="180" height="45" alt="Логотип персонального кабинета" />
        </Link>
        {linksContent && <div className={styles['login-register']}>{linksContent}</div>}
      </header>
      {isMenuOpen && <NavigationMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}
