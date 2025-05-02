import { Link, useNavigate } from 'react-router-dom';
import styles from './Registration.module.css';
import Header from '../../components/Header/Header';

export default function Registration() {
  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    try {
      const response = await fetch('http://localhost:80/api/register', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        await navigate("/login");
      }

      if (!response.ok) {
        console.log(response);
      }
    } catch {
      console.log('Что-то не так');
    }

  };

  return (
    <>
      <Header
        linksContent={
          <Link to="/login" className={styles['logreg-href']}>
            <div className={`${styles['logreg-button']} ${styles.log}`}>
              <p className={`${styles['login-register']} ${styles.text}`}>Войти</p>
            </div>
          </Link>
        }
      />
      <main className={`${styles.main} ${styles.registration}`}>
        <form className={styles['logreg-form']} onSubmit={handleSubmit}>
          <p className={styles['form-header']}>Регистрация</p>
          <div className={styles['form-context']}>
            <div className={styles['context-part']}>
              <input
                type="text"
                pattern="[A-Za-zА-Яа-я0-9.-_]{2,}"
                className={styles['part-field']}
                placeholder="Логин"
                required
                id="Login"
                name="Login"
              />
            </div>
            <div className={styles['context-part']}>
              <input
                type="email"
                className={styles['part-field']}
                placeholder="Адрес электронной почты"
                required
                id="Email"
                name="Email"
              />
            </div>
            <div className={styles['context-part']}>
              <input
                type="password"
                className={styles['part-field']}
                placeholder="Пароль"
                required
                id="Password"
                name="Password"
              />
            </div>
            <div className={styles['context-part']}>
              <input
                type="password"
                className={styles['part-field']}
                placeholder="Подтверждение пароля"
                required
                id="PasswordRepeat"
                name="PasswordRepeat"
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
