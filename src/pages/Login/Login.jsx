import { Link } from 'react-router-dom';
import styles from './login.module.css';
import Header from '../../components/Header/Header';

export default function Login() {
  return (
    <>
      <Header
        linksContent={
          <Link to="/registration" className={styles['logreg-href']}>
            <div className={`${styles['logreg-button']} ${styles.reg}`}>
              <p className={`${styles['login-register']} ${styles.text}`}>Зарегистрироваться</p>
            </div>
          </Link>
        }
      />
      <main className={`${styles.main} ${styles.login}`}>
        <form className={styles['logreg-form']}>
          <p className={styles['form-header']}>Вход</p>
          <div className={styles['form-context']}>
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
          </div>
          <button
            type="button"
            className={styles['form-submit']}
          >
            Далее
          </button>
        </form>
      </main>
    </>
  );
}
