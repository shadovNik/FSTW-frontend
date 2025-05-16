import { useState } from "react";

export default function AchievementsFormContent({ content }) {
  const [blocks, setBlocks] = useState(content || [{ description: "" }]);

  const handleAddBlock = () => {
    setBlocks((prevBlocks) => [...prevBlocks, { description: "" }]);
  };

  const handleRemoveBlock = () => {
    setBlocks((prevBlocks) => prevBlocks.slice(0, - 1));
  }

  const handleInputChange = (index, value) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block, i) =>
        i === index ? { ...block, description: value } : block
      )
    );
  };

  return (
    <>
      <div className="blockPart CR">
        <p className="partName CR">Достижения</p>
        {blocks.map((block, index) => (
          <div className="partContent CR" key={index}>
            <input
              className="partContentInput"
              id={`description-${index}`}
              name="description"
              placeholder="Напишите ваши достижения"
              wrap="soft"
              value={block.description}
              onChange={(e) => handleInputChange(index, e.target.value)}
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
