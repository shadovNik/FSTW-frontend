import { Link } from "react-router-dom";
import "./MainEdited.css";
import { useState } from "react";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";

export default function MainEdited() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="Header mainEdited">
        <div
          className="fstwLogo"
          onClick={(e) => {
            e.preventDefault();
            toggleMenu();
          }}
        >
          <img
            src="/img/LogoEdited.svg"
            className="FSTW"
            width="150"
            height="50"
            alt="Логотип персонального кабинета"
          />
        </div>
        <div className="loginRegisters">
          <Link to="/registration" className="logregHref">
            <p className="loginRegisters texts">Зарегистрироваться</p>
          </Link>
          <Link to="/login" className="logregHref">
            <p className="loginRegisters texts">Войти</p>
          </Link>
        </div>
      </header>
      {isMenuOpen && <NavigationMenu onClose={() => setIsMenuOpen(false)} />}
      <main className="mainEdited">
        <div className="contentHeader">
          <p className="contentHeader--text">IT-Стажировки | AI</p>
          <Link to="/internships" className="internshipsLinkEdited">
            <div className="assistantSearch">
              <p className="searchInputs">Ищи стажировку здесь</p>
            </div>
          </Link>
        </div>
        <div className="editedContent">
          <div className="editedContent--block">
            <p className="editedContent--header">Найди стажировку мечты с умным помощником</p>
            <p className="editedContent--text">Наш сайт - это агрегатор стажировок для студентов УрФУ, где можно не только искать
              вакансии, но и легко создавать резюме, получать персонализированные рекомендации
              и готовиться к собеседованиям
            </p>
            <p className="editedContent--text">Мы собираем актуальные предложения от компаний<br />
              в одном месте, экономя ваше время и силы</p>
          </div>
          <div className="verticalLine"></div>
          <div className="editedContent--block second">
            <p className="editedContent--header">Ваш Al-ассистент для карьеры</p>
            <p className="editedContent--text"><span className="bold">Чат-помощник</span><br />
              - Ответит на вопросы о стажировках<br />
              - Проведёт тестовое собеседование<br />
              - Подскажет, как улучшить резюме
            </p>
            <p className="editedContent--text"><span className="bold">Умные подборки</span><br />
              - Показывает «Топ стажировок» на основе популярности среди студентов<br />
              - Рекомендует вакансии специально для вас (анализирует ваш профиль и резюме)
            </p>
            <p className="editedContent--text"><span className="bold">Персонализированные советы</span><br />
              - Подсказывает, какие навыки добавить для конкретной компании
            </p>
          </div>
        </div>
      </main>
      <footer className="editedFooter">
      <div className="footer-content">
        <Link to="/about" className="content-link">
          <p className="content-text">О проекте</p>
        </Link>
        <Link to="/FAQ" className="content-link">
          <p className="content-text">FAQ</p>
        </Link>
      </div>
      <div className="footer-content">
        <img src="/img/cu-logo.svg" width="54" height="54" alt="Логотип персонального кабинета" />
        <img src="/img/fstw-footer.svg" width="132" height="67" alt="Логотип персонального кабинета" />
      </div>
    </footer>
    </>
  );
}
