import Hint from '../Hint/Hint';
import ProgressBar from '../ProgressBar/ProgressBar';
import './ResumeCreator.css';

export default function ResumeCreator({ formContent, onSubmit, pageID, onBack }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(evt);
  };

  const hintContents = {
    0: "Подсказка! Просто заполните информацию о вашем текущем/законченном образовании",
    1: "Подсказка! ООО 'Компания', старший менеджер, 20хх - 20хх",
    2: "Подсказка! Выложите все ваши проекты на каком-либо web-сервисе и укажите их здесь.\nВ описании укажите краткий функционал вашего проекта",
    3: "Подсказка! Указывайте то, что Вы и правда умеете, в скобках можете указывать уровень владения.\nПример: HTML5, CSS3, JavaScript(middle), Python(junior)...",
    4: "Подсказка! Указывайте ваши самые значимые успехи коротко и конкретно.\nПример: Победитель хакатона УрФУ-2024 (командный проект по web-разработке)",
    5: "Подсказка! Напишите 3-4 предложения о ваших интересах\nи карьерный устремлениях",
  };
  return (
    <main className="main resumeCreator">
      <form className="resumeCreatorBlock" onSubmit={handleSubmit}>
        { formContent }
        <div className={`creatorButtons ${pageID === 0 ? 'center' : 'space-between'}`}>
          {pageID !== 0 && (
            <button type="button" className="saveResume" id="backButton" onClick={onBack}>
              Назад
            </button>
          )}
          {pageID >= 0 && pageID < 5 && (
            <button type="submit" className="saveResume">
              Сохранить и продолжить
            </button>
          )}
          {pageID === 5 && (
            <button type="submit" className="saveResume final">
              Сохранить резюме
            </button>
          )}
        </div>
      </form>
      <ProgressBar pageID={pageID} maxSteps={5} />
      <Hint hintContent={hintContents[pageID]} />
    </main>
  );
}
