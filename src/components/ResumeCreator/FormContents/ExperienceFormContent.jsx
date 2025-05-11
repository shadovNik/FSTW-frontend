export default function ExperienceFormContent() {
  return (
    <>
      <div className="blockPart CR">
        <p className="partName CR">Опыт</p>
        <div className="partContent CR">
          <textarea
            className="partContentInput textArea"
            id="experience"
            placeholder="Напишите ваш опыт работы"
            name="experience"
            wrap="soft"
          />
        </div>
      </div>
    </>
  );
}
