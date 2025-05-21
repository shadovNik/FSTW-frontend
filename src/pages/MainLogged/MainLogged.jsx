import { Link } from 'react-router-dom';
import styles from './MainLogged.module.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

export default function MainLogged() {
  return (
    <>
      <Header
        linksContent={
          <>
            <Link to="/pc" className={styles.logregHref}>
              <div className={`${styles.logregButton} ${styles.persCab}`}>
                <p className={`${styles.loginRegister} ${styles.text}`}>Личный кабинет</p>
              </div>
            </Link>
          </>
        }
      />
      <main className={`${styles.main} ${styles.mainLogged}`}>
        <div className={`${styles.mainContent} ${styles.mainLogged}`}>
          <div className={styles.assistant}>
            <p className={`${styles.assistantHeader}`}>IT-Стажировки | AI</p>
            <div className={styles.assistantSearch}>
              <p className={styles.searchInput}>Ищи стажировку здесь</p>
            </div>
          </div>
          <div className={styles.assistantDescription}>
            <p className={`${styles.assistantDescriptionHeader}`}>
              Найдите стажировку мечты
              <br />с умным помощником
            </p>
            <p className={`${styles.assistantDescriptionDescription}`}>
              Наш сайт - это агрегатор стажировок для студентов УрФУ, где можно не только искать
              вакансии, но и легко создавать резюме, получать персонализированные рекомендации и
              готовиться к собеседованиям.
              <br />
              Мы собираем актуальные предложения от компаний в одном месте, экономя ваше время и силы.
            </p>
          </div>
          <div className={styles.assistantDescription}>
            <p className={`${styles.assistantDescriptionHeader}`}>Ваш Al-ассистент для карьеры</p>
            <div className={`${styles.aD} ${styles.part}`}>
              <p className={`${styles.aDHeader}`}>Чат-помощник</p>
              <p className={`${styles.assistantDescriptionDescription}`}>
                - Ответит на вопросы о стажировках
              </p>
              <p className={`${styles.assistantDescriptionDescription}`}>
                - Проведёт тестовое собеседование
              </p>
              <p className={`${styles.assistantDescriptionDescription}`}>
                - Подскажет, как улучшить резюме
              </p>
            </div>
            <div className={`${styles.aD} ${styles.part}`}>
              <p className={`${styles.aDHeader}`}>Умные подборки</p>
              <p className={`${styles.assistantDescriptionDescription}`}>
                - Показывает «Топ стажировок» на основе
                <br />
                популярности среди студентов
              </p>
              <p className={`${styles.assistantDescriptionDescription}`}>
                - Рекомендует вакансии специально для вас
                <br />
                (анализирует ваш профиль и резюме)
              </p>
            </div>
            <div className={`${styles.aD} ${styles.part}`}>
              <p className={`${styles.aDHeader}`}>Персонализированные советы</p>
              <p className={`${styles.assistantDescriptionDescription}`}>
                - Подсказывает, какие навыки добавить
                <br />
                для конкретной компании
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
