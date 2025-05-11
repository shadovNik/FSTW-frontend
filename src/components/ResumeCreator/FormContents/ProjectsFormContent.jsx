export default function ProjectsFormContent() {
  return (
    <>
      <div className="blockPart CR">
        <p className="partName CR">Проекты</p>
        <div className="partContent CR">
          <input
            type="text"
            className="partContentInput"
            id="title"
            name="title"
            placeholder="Название"
          />
          <input
            type="text"
            className="partContentInput"
            id="description"
            name="description"
            placeholder="Краткое описание проекта"
          />
          <input
            type="text"
            className="partContentInput"
            id="link"
            name="link"
            placeholder="Ссылка на проект"
          />
          <button type="button" className="addProjectButton">Добавить</button>
        </div>
      </div>
    </>
  );
}
