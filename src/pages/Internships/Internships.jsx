import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Intship from "../../components/Intship/Intship"
import "./Internships.css";
import { Link } from "react-router-dom";

export default function Internships() {
  const [isLoading, setIsLoading] = useState(false);
  const [intships, setIntships] = useState([]);
  const [activeFilter, setActiveFilter] = useState('search');
  const [areSelectorsActive, setAreSelectorsActive] = useState(false);
  const [direction, setDirection] = useState("");
  const [workFormat, setWorkFormat] = useState("");
  const [salary, setSalary] = useState("");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const fetchFiltersInternships = async () => {
    const params = {};

    const urlMap = {
      search: "http://localhost:80/api/internship",
      forYou: "http://localhost:80/api/internship/personal",
      favorites: "http://localhost:80/api/internship/favorite",
    }
    const baseUrl = urlMap[activeFilter] || baseUrl;

    if (activeFilter === "search") {
      if (direction && direction !== "") params.Direction = direction;
      if (workFormat && workFormat !== "") params.WorkFormat = workFormat;
      if (salary && salary !== "") params.Salary = salary;
    }

    const queryParams = new URLSearchParams(params);
    const finalURL = `${baseUrl}${queryParams.toString() ? "?" + queryParams.toString() : ""}`;

    try {
      setIsLoading(true);
      const response = await fetch(finalURL);
      const data = await response.json();
      if (response.ok) setIntships(data);
      else throw new Error("Ошибка при загрузке данных");

    } catch (err) {
      console.error("Ошибка:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFiltersInternships();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter]);

  useEffect(() => {
    setAreSelectorsActive(direction !== "" || workFormat !== "" || salary !== "");
  }, [direction, workFormat, salary]);

  const handleFiltersSubmit = async (evt) => {
    evt.preventDefault();
    fetchFiltersInternships();
  };

  const resetFilters = () => {
    setDirection("");
    setWorkFormat("");
    setSalary("");
  };

  const handleFavoriteChange = (intshipID, newIsFavorite) => {
    setIntships((prev) =>
      prev.map((internship) =>
        internship.id === intshipID ? { ...internship, isFavorite: newIsFavorite } : internship
      )
    );
  };

  if (isLoading) {
    return <div>Загрузка...</div>
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
      <main className="main internshipsMain">
        <div className="internshipsFilters">
          <p
            className={`filterTitle ${activeFilter === 'search' ? 'active' : ''}`}
            onClick={() => handleFilterClick('search')}
          >
            Поиск стажировок
          </p>
          <p
            className={`filterTitle ${activeFilter === 'forYou' ? 'active' : ''}`}
            onClick={() => handleFilterClick('forYou')}
          >
            Для вас
          </p>
          <p
            className={`filterTitle ${activeFilter === 'favorites' ? 'active' : ''}`}
            onClick={() => handleFilterClick('favorites')}
          >
            Избранное
          </p>
        </div>
        <div className="internships">
          {activeFilter === "search" && (
            <div className="internshipsSelectors">
              <p className="selectorsTitle">Найди стажировки по фильтрам!</p>
              <form className="selectorsForm" onSubmit={handleFiltersSubmit}>
                <select
                  id="direction"
                  name="direction"
                  className='selectorItem'
                  value={direction}
                  onChange={(e) => setDirection(e.target.value)}
                >
                  <option value="" disabled>Направление</option>
                  <option value="Архитектура">Архитектура</option>
                  <option value="Финансы и банковское дело">Финансы и банковское дело</option>
                  <option value="IT и разработка">IT и разработка</option>
                  <option value="Маркетинг и дизайн">Маркетинг и дизайн</option>
                  <option value="Инженерия и производство">Инженерия и производство</option>
                  <option value="Управление и консалтинг">Управление и консалтинг</option>
                  <option value="Технические и сервисные специальности">Технические и сервисные специальности</option>
                  <option value="Аналитика">Аналитика</option>
                </select>
                <select
                  id="workFormat"
                  name="workFormat"
                  className="selectorItem"
                  value={workFormat}
                  onChange={(e) => setWorkFormat(e.target.value)}
                >
                  <option value="" disabled>Формат</option>
                  <option value="Очно">Очно</option>
                  <option value="Удалённо">Удалённо</option>
                  <option value="Гибрид">Гибрид</option>
                </select>
                <select
                  id="salary"
                  name="salary"
                  className="selectorItem salary"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                >
                  <option value="" disabled>Зарплата указана?</option>
                  <option value="Да">Да</option>
                  <option value="Нет">Нет</option>
                </select>
                <button type="submit" className="selectorsSubmit">Найти</button>
              </form>
              {areSelectorsActive && (
                <button
                  type="button"
                  className="selectorsReset"
                  onClick={resetFilters}
                >
                  Сбросить фильтры
                </button>
              )}
            </div>
          )}
          {activeFilter === "favorites" && (
            <div className="internshipsSelectors">
              <p className="selectorsTitle">Избранные стажировки</p>
            </div>
          )}
          {activeFilter === "forYou" && (
            <div className="internshipsSelectors">
              <p className="selectorsTitle">Индивидуальная подборка по вашим навыкам</p>
            </div>
          )}
          <div className="internshipsList">
            {intships.length === 0 ? (
              <p className="noInternships">Стажировки не найдены</p>
            ) : (
              intships.map((intship) => (
                <Intship
                  key={intship.id}
                  id={intship.id}
                  isFavorite={intship.isFavorite}
                  company={intship.companyName}
                  title={intship.title}
                  format={intship.workFormat}
                  salary={intship.setSalary}
                  info={intship.description}
                  skills={intship.requiredSkills}
                  link={intship.link}
                  onFavoriteChange={handleFavoriteChange}
                />
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
