import styles from './Header.module.css';

export default function Header({ linksContent = null }) {
  return (
    <header className={`${styles.header} main-page`}>
      <a className={styles['fstw-logo']} href="/index.html">
        <img src="/img/fstw.svg" width="180" height="45" alt="Логотип персонального кабинета" />
      </a>
      {linksContent && <div className={styles['login-register']}>{linksContent}</div>}
    </header>
  );
}
