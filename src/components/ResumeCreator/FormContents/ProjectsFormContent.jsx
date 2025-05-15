import { useState } from "react";

export default function ProjectsFormContent() {
  const [blocks, setBlocks] = useState([
    { id: 0 },
  ]);

  const handleAddBlock = () => {
    setBlocks((prevBlocks) => [
      ...prevBlocks, { id: prevBlocks.length },
    ]);
  };

  const handleRemoveBlock = () => {
    setBlocks((prevBlocks) => prevBlocks.slice(0, - 1));
  }

  return (
    <>
      <div className="blockPart CR">
        <p className="partName CR">Проекты</p>
        {blocks.map((block) => (
          <div key={block.id} className="partContent CR">
            <input
              type="text"
              className="partContentInput"
              id={`title-${block.id}`}
              name="title"
              placeholder="Название проекта"
            />
            <input
              type="text"
              className="partContentInput"
              id={`description-${block.id}`}
              name="description"
              placeholder="Краткое описание проекта"
            />
            <input
              type="text"
              className="partContentInput"
              id={`link-${block.id}`}
              name="link"
              placeholder="Ссылка на проект"
            />
          </div>
        ))}
        <div className="buttonsContainer">
          {blocks.length > 1 && (
            <button type="button" className="deleteBlockButton" onClick={handleRemoveBlock}>Удалить</button>
          )}
          <button type="button" className="addBlockButton" onClick={handleAddBlock}>Добавить</button>
        </div>
      </div>
    </>
  );
}
