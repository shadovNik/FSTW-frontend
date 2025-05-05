import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import Header from '../../components/Header/Header';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [error, setError] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    try {
      const response = await fetch('http://localhost:80/api/login', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        login(data.accessToken);
        localStorage.setItem('isAuth', true);
        navigate("/pc");
      } else {
        setError(data[0].Error);
      }
    } catch {
      console.log('Что-то пошло не так. Попробуйте ещё раз');
    }

  };

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
        <form className={styles['logreg-form']} onSubmit={handleSubmit}>
          <p className={styles['form-header']}>Вход</p>
          <div className={styles['form-context']}>
            <div className={styles['context-part']}>
              <input
                type="text"
                className={styles['part-field']}
                placeholder="Логин"
                required
                id="login"
                name="login"
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
            {error && <p className={styles['loginError']}>{error}</p>}
          </div>
          <button
            type="submit"
            className={styles['form-submit']}
          >
            Далее
          </button>
        </form>
      </main>
    </>
  );
}
