import './main-page.css';
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header';
import styles from '../../components/Header/Header.module.css';

export default function MainPage() {
  return (
    <>
      <Header
        linksContent={
          <>
            <a href="/registration.html" className={styles['logreg-href']}>
              <div className={`${styles['logreg-button']} ${styles.reg}`}>
                <p className={`${styles['login-register']} ${styles.text}`}>Зарегистрироваться</p>
              </div>
            </a>
            <a href="/login.html" className={styles['logreg-href']}>
              <div className={`${styles['logreg-button']} ${styles.log}`}>
                <p className={`${styles['login-register']} ${styles.text}`}>Войти</p>
              </div>
            </a>
          </>
        }
      />
      <main className="main main-page">
        <div className="main-content main-page">
          <div className="assistant">
            <p className="assistant header">Стажировки УрФУ х AI</p>
            <div className="assistant search">
              <input type="text" className="search-input" placeholder="Ищи стажировку здесь!" />
            </div>
          </div>
          <div className="assistant-description">
            <p className="assistant-description header">Найдите стажировку мечты с умным помощником</p>
            <p className="assistant-description description">
              Наш сайт - это агрегатор стажировок для студентов УрФУ, где можно не только искать вакансии, но и легко
              создавать резюме, получать персонализированные рекомендации и готовиться к собеседованиям.
              <br />
              Мы собираем актуальные предложения от компаний в одном месте, экономя ваше время и силы.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
