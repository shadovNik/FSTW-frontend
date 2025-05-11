export default function AchievementsFormContent() {
  return (
    <>
      <div className="blockPart CR">
        <p className="partName CR">Достижения</p>
        <div className="partContent CR">
          <textarea
            className="partContentInput textArea"
            id="description"
            name="description"
            placeholder="Напишите ваши достижения"
            wrap="soft"
          />
        </div>
      </div>
    </>
  );
}
