import Header from '../../components/Header/Header';
import styles from './login.module.css';
import styles1 from '../../components/Header/Header.module.css';

export default function Login() {
  return (
    <>
      <Header
        linksContent={
          <>
            <a href="/registration.html" className={styles1['logreg-href']}>
              <div className={`${styles1['logreg-button']} ${styles1.reg}`}>
                <p className={`${styles1['login-register']} ${styles1.text}`}>Зарегистрироваться</p>
              </div>
            </a>
          </>
        }
      />
      <main className={`${styles['main']} login`}>
        <form className={styles['logreg-form']}>
          <p className={styles['form-header']}>Вход</p>
          <div className={styles['form-context']}>
            <div className={styles['context-part']}>
              <input type="text" className={styles['part-field']} placeholder="Логин" required id="email" name="login" />
            </div>
            <div className="context-part">
              <input type="password" className={styles['part-field']} placeholder="Пароль" required id="password" name="password" />
            </div>
          </div>
          <button type="button" className={styles['form-submit']}>
            Далее
          </button>
        </form>
      </main>
    </>
  )
}
