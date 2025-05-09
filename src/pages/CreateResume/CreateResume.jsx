import "./CreateResume.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function CreateResume() {
  const [isLoading, setIsLoading] = useState(true);
  const [resumeID, setResumeID] = useState();

  useEffect(() => {
    async function fetchResumeId() {
      try {
        const response = await fetch('http://localhost:80/api/api/resume_editor/init', {
          method: 'POST',
        });

        const data = await response.json();
        if (response.ok) {
          setResumeID(data);
        } else {
          console.error(data[0].Error);
        }
      } catch {
        alert('Что-то пошло не так. Попробуйте перезагрузить страницу');
      } finally {
        setIsLoading(false);
      }
    }

    fetchResumeId();
  }, [])

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    var object = {};

    const formData = new FormData(evt.target);
    formData.forEach(function(value, key) {
      object[key] = value;
    });

    object.startYear = Number(object.startYear);
    object.endYear = Number(object.endYear);

    var dataArray = []
    dataArray.push(object);

    try {
      const response = await fetch(`http://localhost:80/api/api/resume_editor/education/${resumeID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataArray),
      });

      if (response.ok) {
        console.log('Ура, победа');
      } else {
        const data = await response.json();
        console.error(data[0].Error);
      }
    } catch {
      console.log('Что-то пошло не так. Попробуйте перезагрузить страницу');
    }

  }

  return (
    <>
      <Header
        linksContent={
          <>
            <Link to="/pc" className="logregHref">
              <div className="logregButton persCab">
                <p className="loginRegister text">Личный кабинет</p>
              </div>
            </Link>
          </>
        }
      />
      <main className="main resumeCreator">
        <form className="resumeCreatorBlock" onSubmit={handleSubmit}>
          <div className="blockPart CR">
            <p className="partName CR">Образование</p>
            <div className="partContent CR">
              <label for="level"></label>
              <select id="level" name="level" className='partContentInput level'>
                <option disabled selected value>
                  Уровень образования
                </option>
                <option value="Среднее общее (10-11 класс)">Среднее общее (10-11 класс)</option>
                <option value="Cреднее профессиональное (Колледж)">Cреднее профессиональное (Колледж)</option>
                <option value="Неоконченное высшее">Неоконченное высшее</option>
                <option value="Бакалавриат">Бакалавриат</option>
                <option value="Специалитет/Магистратура">Специалитет/Магистратура</option>
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
            <p className="dateExtra">Если ещё учитесь, напишите предполагаемый год окончания</p>
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
          <button type="submit" className="saveResume">Сохранить и продолжить</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
