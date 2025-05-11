export default function AboutAndHobbiesFormContent() {
  return (
    <>
      <div className="blockPart CR">
        <p className="partName CR">Дополнительно</p>
        <div className="partContent CR">
          <textarea
            className="partContentInput textArea"
            id="about"
            name="about"
            placeholder="О себе"
            wrap="soft"
          />
          <textarea
            className="partContentInput textArea"
            id="hobbies"
            name="hobbies"
            placeholder="Хобби"
            wrap="soft"
          />
        </div>
      </div>
    </>
  );
}
