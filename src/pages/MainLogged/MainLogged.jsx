import { Link } from 'react-router-dom';
import './MainLogged.css';
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header';

export default function MainLogged() {
  return (
    <>
      <Header
        linksContent={
          <>
            <Link to="/" className="logreg-href">
              <div className="logreg-button pers-cab">
                <p className="login-register text">Личный кабинет</p>
              </div>
            </Link>
          </>
        }
      />
      <main class="main main-logged">
        <div class="main-content main-logged">
          <div class="assistant">
            <p class="assistant header">Стажировки УрФУ х AI</p>
            <div class="assistant search">
              <input type="text" class="search-input" placeholder="Ищи стажировку здесь!" />
            </div>
          </div>
          <div class="assistant-description">
            <p class="assistant-description header">Найдите стажировку мечты с умным помощником</p>
            <p class="assistant-description description">Наш сайт - это агрегатор стажировок для студентов УрФУ,
              где можно не только искать вакансии, но и легко создавать резюме,
              получать персонализированные рекомендации и готовиться к собеседованиям.
              <br />Мы собираем актуальные предложения от компаний в одном месте, экономя ваше время и силы.</p>
          </div>
          <div class="assistant-description">
            <p class="assistant-description header">Ваш Al-ассистент для карьеры</p>
            <div class="a-d part">
              <p class="a-d header">Чат-помощник</p>
              <p class="assistant-description description">- Ответит на вопросы о стажировках</p>
              <p class="assistant-description description">- Проведёт тестовое собеседование</p>
              <p class="assistant-description description">- Подскажет, как улучшить резюме</p>
            </div>
            <div class="a-d part">
              <p class="a-d header">Умные подборки</p>
              <p class="assistant-description description">- Показывает «Топ стажировок» на основе
                <br />популярности среди студентов</p>
              <p class="assistant-description description">- Рекомендует вакансии специально для вас
                <br />(анализирует ваш профиль и резюме)</p>
            </div>
            <div class="a-d part">
              <p class="a-d header">Персонализированные советы</p>
              <p class="assistant-description description">- Подсказывает, какие навыки добавить
                <br />для конкретной компании</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
