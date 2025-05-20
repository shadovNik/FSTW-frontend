import "./FAQ.css";

import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FAQelem from "../../components/FAQelem/FAQelem";

export default function FAQ() {
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
      <main className="main FAQ">
        <div className="FAQ-content">
          <p className="FAQ-header">FAQ</p>
          <div className="FAQ-container">
            <FAQelem
              elemHeader="Регистрация и профиль"
              elemContent={
                <>
                  <div className="elemContent">
                    <p className="elemContentQuestion">Как зарегистрироваться?</p>
                    <p className="elemContentAnswer">Вам нужна только почта и пароль.
                      После регистрации заполните профиль (факультет, курс, навыки)
                      — это поможет нейросети подбирать стажировки.</p>
                  </div>
                  <div className="elemContent">
                    <p className="elemContentQuestion">Можно ли изменить факультет или курс?</p>
                    <p className="elemContentAnswer">Да, в любое время в разделе “Личный кабинет” - “Профиль”.</p>
                  </div>
                  <div className="elemContent">
                    <p className="elemContentQuestion">Обязательно указывать реальные данные?</p>
                    <p className="elemContentAnswer">Да, иначе нейросеть будет рекомендовать нерелевантные вакансии.</p>
                  </div>
                </>
              }
            />

            <FAQelem
              elemHeader="Работа с резюме"
              elemContent={
                <>
                  <div className="elemContent">
                    <p className="elemContentQuestion">Как создать резюме?</p>
                    <p className="elemContentAnswer">Перейдите в “Создание резюме” и заполните поля: Контакты, цель, образование, навыки.
                      <br />Поля “ФИО”, “Факультет” и “Курс” загрузятся из профиля автоматически</p>
                  </div>
                  <div className="elemContent">
                    <p className="elemContentQuestion">Можно ли иметь несколько резюме?</p>
                    <p className="elemContentAnswer">Да, например из разных направлений (IT и маркетинг)</p>
                  </div>
                  <div className="elemContent">
                    <p className="elemContentQuestion">Как нейросеть помогает с резюме?</p>
                    <p className="elemContentAnswer">В чате с нейросетью Вы можете попросить её помочь с заполнением полей
                      в резюме (она знает о вашем резюме всю информацию), проанализировать его,
                      провести краткое собеседование и другое</p>
                  </div>
                </>
              }
            />

            <FAQelem
              elemHeader="Поиск стажировок"
              elemContent={
                <>
                  <div className="elemContent">
                    <p className="elemContentQuestion">Как искать вакансии?</p>
                    <p className="elemContentAnswer">Используйте фильтры: Направление (IT, Инженерия и т.д),
                      формат работы (очно/удаленно), курс (1-2, 3-4, 4+)</p>
                  </div>
                  <div className="elemContent">
                    <p className="elemContentQuestion">Почему я не вижу зарплату в некоторых вакансиях?</p>
                    <p className="elemContentAnswer">Не все компании указывают ее - уточняйте на их сайте после перехода</p>
                  </div>
                </>
              }
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
