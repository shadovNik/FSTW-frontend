import { useState } from "react";

export default function AchievementsFormContent() {
  const [blocks, setBlocks] = useState([{ id: 0 }]);

  const handleAddBlock = () => {
    setBlocks((prevBlocks) => [...prevBlocks, { id: prevBlocks.length }]);
  };

  const handleRemoveBlock = () => {
    setBlocks((prevBlocks) => prevBlocks.slice(0, - 1));
  }

  return (
    <>
      <div className="blockPart CR">
        <p className="partName CR">Достижения</p>
        {blocks.map((block) => (
          <div className="partContent CR">
            <input
              className="partContentInput"
              id={`description-${block.id}`}
              name="description"
              placeholder="Напишите ваши достижения"
              wrap="soft"
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
