import { useState } from "react";

export default function EducationFormContent() {
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
        <p className="partName CR">Образование</p>
        {blocks.map((block) => (
          <>
          <div className="partContent CR">
            <label for="level"></label>
            <select id={`level-${block.id}`} name="level" className="partContentInput level">
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
              required
              className="partContentInput"
              id={`place-${block.id}`}
              name="place"
              placeholder="Учебное заведение"
            />
            <input
              type="text"
              required
              className="partContentInput"
              id={`specialization-${block.id}`}
              name="specialization"
              placeholder="Специальность"
            />
          </div>
          <div className="partContentDate">
            <input
              type="number"
              required
              className="partContentInput date"
              id={`startYear-${block.id}`}
              name="startYear"
              placeholder="Год начала"
            />
            <input
              type="number"
              required
              className="partContentInput date"
              id={`endYear-${block.id}`}
              name="endYear"
              placeholder="Год окончания"
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
