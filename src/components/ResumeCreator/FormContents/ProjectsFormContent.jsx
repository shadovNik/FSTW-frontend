import { useState } from "react";

export default function ProjectsFormContent({ content }) {
  const [blocks, setBlocks] = useState(content || [{ description: "", title: "", link: "" }]);

  const handleAddBlock = () => {
    setBlocks((prevBlocks) => [...prevBlocks, { description: "", title: "", link: "" }]);
  };

  const handleRemoveBlock = () => {
    setBlocks((prevBlocks) => prevBlocks.slice(0, - 1));
  }

  const handleInputChange = (index, field, value) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block, i) =>
        i === index ? { ...block, [field]: value } : block
      )
    );
  };

  return (
    <>
      <div className="blockPart CR">
        <p className="partName CR">Проекты</p>
        {blocks.map((block, index) => (
          <div key={index} className="partContent CR">
            <input
              type="text"
              className="partContentInput"
              id={`title-${index}`}
              name="title"
              placeholder="Название проекта"
              value={block.title}
              onChange={(e) => handleInputChange(index, "title", e.target.value)}
            />
            <textarea
              type="text"
              className="partContentInput textArea"
              id={`description-${block.id}`}
              name="description"
              placeholder="Краткое описание проекта"
              value={block.description}
              onChange={(e) => handleInputChange(index, "description", e.target.value)}
            />
            <input
              type="text"
              className="partContentInput"
              id={`link-${block.id}`}
              name="link"
              placeholder="Ссылка на проект"
              value={block.link}
              onChange={(e) => handleInputChange(index, "link", e.target.value)}
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
