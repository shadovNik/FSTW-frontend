import styles from './registration.module.css';
import Header from '../../components/Header/Header';

export default function Registration() {
  return (
    <>
      <Header
        linksContent={
          <a href="/login.html" className={styles['logreg-href']}>
            <div className={`${styles['logreg-button']} ${styles.log}`}>
              <p className={`${styles['login-register']} ${styles.text}`}>Войти</p>
            </div>
          </a>
        }
      />
      <main className={`${styles.main} ${styles.registration}`}>
        <form className={styles['logreg-form']}>
          <p className={styles['form-header']}>Регистрация</p>
          <div className={styles['form-context']}>
            <div className={styles['context-part']}>
              <input
                type="text"
                pattern="[A-Za-zА-Яа-я0-9.-_]{2,}"
                className={styles['part-field']}
                placeholder="Логин"
                required
                id="loginLog"
                name="loginLog"
              />
            </div>
            <div className={styles['context-part']}>
              <input
                type="email"
                className={styles['part-field']}
                placeholder="Адрес электронной почты"
                required
                id="email"
                name="email"
              />
            </div>
            <div className={styles['context-part']}>
              <input
                type="password"
                className={styles['part-field']}
                placeholder="Пароль"
                required
                id="password"
                name="password"
              />
            </div>
            <div className={styles['context-part']}>
              <input
                type="password"
                className={styles['part-field']}
                placeholder="Подтверждение пароля"
                required
                id="password-confirm"
                name="password-confirm"
              />
            </div>
          </div>
          <button type="submit" className={styles['form-submit']}>
            Далее
          </button>
        </form>
      </main>
    </>
  );
}
