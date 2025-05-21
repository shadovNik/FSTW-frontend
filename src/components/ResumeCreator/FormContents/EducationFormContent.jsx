import { useState } from "react";

export default function EducationFormContent({ content }) {
  const [blocks, setBlocks] = useState(content || [{ endYear: "", level: "", place: "", specialization: "", startYear: "" }]);

  const handleAddBlock = () => {
    setBlocks((prevBlocks) => [...prevBlocks, { endYear: "", level: "", place: "", specialization: "", startYear: "" }]);
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
        <p className="partName CR">Образование</p>
        {blocks.map((block, index) => (
          <>
          <div className="partContent CR">
            <label for="level"></label>
            <select
              id={`level-${index}`}
              name="level"
              className="partContentInput level"
              value={block.level}
              onChange={(e) => handleInputChange(index, "level", e.target.value)}
            >
              <option disabled selected value>
                Уровень образования
              </option>
              <option value="Среднее общее (10-11 класс)">
                Среднее общее (10-11 класс)
              </option>
              <option value="Cреднее профессиональное (Колледж)">
                Cреднее профессиональное (Колледж)
              </option>
              <option value="Неоконченное высшее">Неоконченное высшее</option>
              <option value="Бакалавриат">Бакалавриат</option>
              <option value="Специалитет/Магистратура">
                Специалитет/Магистратура
              </option>
              <option value="Аспирантура">Аспирантура</option>
            </select>
            <input
              type="text"
              className="partContentInput"
              id={`place-${index}`}
              name="place"
              placeholder="Учебное заведение"
              value={block.place}
              onChange={(e) => handleInputChange(index, "place", e.target.value)}
            />
            <input
              type="text"
              className="partContentInput"
              id={`specialization-${index}`}
              name="specialization"
              placeholder="Специальность"
              value={block.specialization}
              onChange={(e) => handleInputChange(index, "specialization", e.target.value)}
            />
          </div>
          <div className="partContentDate">
            <input
              type="text"
              className="partContentInput date"
              id={`startYear-${index}`}
              name="startYear"
              placeholder="Год начала"
              pattern="[0-9]+"
              value={block.startYear}
              onChange={(e) => handleInputChange(index, "startYear", e.target.value)}
            />
            <input
              type="text"
              className="partContentInput date"
              id={`endYear-${index}`}
              name="endYear"
              placeholder="Год окончания"
              pattern="[0-9]+"
              value={block.endYear}
              onChange={(e) => handleInputChange(index, "endYear", e.target.value)}
            />
          </div>
          </>
        ))}
        <p className="dateExtra">
          Если ещё учитесь, напишите предполагаемый год окончания
        </p>
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
