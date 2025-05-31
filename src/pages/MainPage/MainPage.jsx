import { Link } from 'react-router-dom';
import './MainPage.css';
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header';

export default function MainPage() {
  return (
    <>
      <Header
        linksContent={
          <>
            <Link to="/registration" className="logreg-href">
              <div className="logreg-button reg">
                <p className="login-register text">Зарегистрироваться</p>
              </div>
            </Link>
            <Link to="/login" className="logreg-href">
              <div className="logreg-button log">
                <p className="login-register text">Войти</p>
              </div>
            </Link>
          </>
        }
      />
      <main className="main main-page">
        <div className="main-content main-page">
          <div className="assistant">
            <p className="assistant header">IT-Стажировки | AI</p>
            <Link to="/internships" className='internshipsLink'>
              <div className="assistant search">
                  <p className="search-input">Ищи стажировку здесь</p>
              </div>
            </Link>
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
