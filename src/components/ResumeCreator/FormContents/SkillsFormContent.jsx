export default function SkillsFormContent() {
  return (
    <>
      <div className="blockPart CR">
        <p className="partName CR">Навыки</p>
        <div className="partContent CR">
          <textarea
            className="partContentInput textArea"
            id="skills"
            placeholder="Soft|Hard skills"
            name="skills"
            wrap="soft"
          />
        </div>
      </div>
    </>
  );
}
