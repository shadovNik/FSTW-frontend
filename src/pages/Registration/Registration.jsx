import { Link, useNavigate } from 'react-router-dom';
import styles from './Registration.module.css';
import Header from '../../components/Header/Header';
import { useState } from 'react';

export default function Registration() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    try {
      const response = await fetch('http://localhost:80/api/register', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        navigate("/login");
      } else {
        const data = await response.json();
        for (let key in data[0]) {
          setError(data[0][key]);
        }
      }
    } catch {
      setError('Что-то пошло не так. Попробуйте ещё раз');
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
            {error && <p className={styles['regError']}>{error}</p>}
          </div>
          <button type="submit" className={styles['form-submit']}>
            Далее
          </button>
        </form>
      </main>
    </>
  );
}
