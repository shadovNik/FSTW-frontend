import "./About.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <>
      <Header
        linksContent={
          <>
            <Link to="/pc" className="logregHref">
              <div className="logregButton persCab">
                <p className="loginRegister text">Личный кабинет</p>
              </div>
            </Link>
          </>
        }
      />
      <main className="main about">
        <div className="aboutContent">
          <p className="aboutContent-header">IT-Стажировки | AI — умный помощник для вашей карьеры</p>
          <div className="aboutContent-content">
            <div className="aboutPart">
              <p className="aboutPartHeader">О проекте</p>
              <div className="horizontalLine"></div>
              <p className="aboutPartContent">Мы создали этот агрегатор стажировок, чтобы помочь студентам УрФУ быстро находить подходящие вакансии и легко готовиться к ним</p>
            </div>
            <div className="aboutPart">
              <p className="aboutPartHeader">Что делает наш сервис особенным?</p>
              <div className="horizontalLine"></div>
              <p className="aboutPartContent">Умные подборки — нейросеть анализирует ваш профиль и рекомендует стажировки</p>
              <p className="aboutPartContent">Чат-бот — помогает улучшить резюме и отвечает на вопросы о вакансиях</p>
              <p className="aboutPartContent">Только для УрФУ — мы учитываем ваш факультет и курс</p>
            </div>
            <div className="aboutPart">
              <p className="aboutPartHeader">Наша миссия</p>
              <div className="horizontalLine"></div>
              <p className="aboutPartContent">Сделать поиск стажировок простым и эффективным, чтобы вы могли сосредоточиться на учёбе и карьере</p>
            </div>
            <div className="aboutPart">
              <p className="aboutPartHeader">Команда</p>
              <div className="horizontalLine"></div>
              <p className="aboutPartContent">Мы — четверо студентов ИРИТ-РтФ УрФУ, объединившихся для этого проекта:</p>
              <div className="aboutPerson">
                <img src="/img/Lead.svg" />
                <div className="aboutPerson-text">
                  <p className="aboutPerson-name">Кирилл Лисов (Тимлид)</p>
                  <p className="aboutPartContent">Роль — аналитика, адаптирование сайта под мобильные устройства</p>
                  <p className="aboutPartContent">Задача — координирование команды и проектирование функционала</p>
                </div>
              </div>
              <div className="aboutPerson">
                <img src="/img/backend.svg" />
                <div className="aboutPerson-text">
                  <p className="aboutPerson-name">Сергей Ситдиков (Бэкенд-разработчик)</p>
                  <p className="aboutPartContent">Роль — разработка внутреннего устройства сайта</p>
                  <p className="aboutPartContent">Задача — обеспечение функционала сайта на сервере</p>
                </div>
              </div>
              <div className="aboutPerson">
                <img src="/img/frontend.svg" />
                <div className="aboutPerson-text">
                  <p className="aboutPerson-name">Никита Сергеевич (Фронтенд-разработчик)</p>
                  <p className="aboutPartContent">Роль — разработка внешнегоо устройства сайта</p>
                  <p className="aboutPartContent">Задача — обеспечение пользовательского функционала сайта</p>
                </div>
              </div>
              <div className="aboutPerson">
                <img src="/img/designer.svg" />
                <div className="aboutPerson-text">
                  <p className="aboutPerson-name">Владислав Патрокеев (Дизайнер)</p>
                  <p className="aboutPartContent">Роль — UI/UX дизайн</p>
                  <p className="aboutPartContent">Задача — создание понятного и современного дизайн</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
