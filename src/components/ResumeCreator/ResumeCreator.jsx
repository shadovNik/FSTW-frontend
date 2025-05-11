import './ResumeCreator.css';

export default function ResumeCreator({ formContent, onSubmit, pageID, onBack }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(evt);
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
            <button type="submit" className="saveResume">
              Сохранить резюме
            </button>
          )}
        </div>
      </form>
    </main>
  );
}
