export default function EducationFormContent() {
  return (
    <>
      <div className="blockPart CR">
        <p className="partName CR">Образование</p>
        <div className="partContent CR">
          <label for="level"></label>
          <select id="level" name="level" className="partContentInput level">
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
            id="place"
            name="place"
            placeholder="Учебное заведение"
          />
          <input
            type="text"
            required
            className="partContentInput"
            id="specialization"
            name="specialization"
            placeholder="Специальность"
          />
        </div>
      </div>
      <div className="blockPart CR">
        <p className="partName CR">Период обучения</p>
        <p className="dateExtra">
          Если ещё учитесь, напишите предполагаемый год окончания
        </p>
        <div className="partContentDate">
          <input
            type="number"
            required
            className="partContentInput date"
            id="startYear"
            name="startYear"
            placeholder="Год начала"
          />
          <input
            type="number"
            required
            className="partContentInput date"
            id="endYear"
            name="endYear"
            placeholder="Год окончания"
          />
        </div>
      </div>
    </>
  );
}
