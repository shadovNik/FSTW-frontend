import "./Admin.css";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";

export default function Admin() {
  const [isAddVacancyOpen, setIsAddVacancyOpen] = useState(false);
  const [vacancies, setVacancies] = useState([]);
  const [selectedVacancyId, setSelectedVacancyId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedVacancy, setEditedVacancy] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hhLoading, setHHLoading] = useState(false);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState(null);

  const fetchVacancies = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:80/api/admin/all_internships?filterParam=${filter}`);
      const data = await response.json();
      if (response.ok) {
        setVacancies(data);
      } else {
        throw new Error("Ошибка при загрузке данных");
      }
    } catch (error) {
      console.error("Ошибка при загрузке вакансий:", error);
      setError("Не удалось загрузить вакансии");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVacancies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const onAddButtonClick = () => {
    setIsAddVacancyOpen((prev) => !prev);
  };

  const onViewButtonClick = (id) => {
    setSelectedVacancyId((prev) => (prev === id ? null : id));
    setIsEditing(false);
    setEditedVacancy(null);
  };

  const onEditButtonClick = (vacancy) => {
    setSelectedVacancyId(vacancy.id);
    setIsEditing(true);
    setEditedVacancy({ ...vacancy });
  };

  const onAddFormSubmit = async (evt) => {
    evt.preventDefault();

    let object = {};
    new FormData(evt.target).forEach(function (value, key) {
      object[key] = value;
    });

    try {
      const response = await fetch("http://localhost:80/api/admin/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(object),
      });

      if (response.ok) {
        onAddButtonClick();
        fetchVacancies();
      } else {
        throw new Error("Ошибка при создании вакансии");
      }
    } catch (err) {
      console.error("Ошибка при добавлении вакансии:", err);
      setError("Не удалось добавить вакансию");
    }
  };

  const onDeleteButtonClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:80/api/admin/internship/${id}/remove`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchVacancies();
        setSelectedVacancyId(null);
        setIsEditing(false);
        setEditedVacancy(null);
      } else {
        throw new Error("Что-то пошло не так. Попробуйте перезагрузить страницу");
      }
    } catch (err) {
      console.error("Ошибка при удалении:", err);
      setError("Не удалось удалить вакансию");
    }
  };

  const onSaveEdit = async (id) => {
    console.log(editedVacancy);
    try {
      const response = await fetch(`http://localhost:80/api/admin/edit_internship/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedVacancy),
      });

      if (response.ok) {
        fetchVacancies();
        setIsEditing(false);
        setEditedVacancy(null);
      } else {
        throw new Error("Ошибка при сохранении изменений");
      }
    } catch (err) {
      console.error("Ошибка при сохранении:", err);
      setError("Не удалось сохранить изменения");
    }
  };

  const onArchiveButtonClick = async (id, isArchive) => {
    const url = isArchive
      ? `http://localhost:80/api/admin/internship/${id}/unarchive`
      : `http://localhost:80/api/admin/internship/${id}/archive`;

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        fetchVacancies();
        setSelectedVacancyId(null);
      } else {
        throw new Error("Ошибка при изменении статуса архивирования");
      }
    } catch (err) {
      console.error("Ошибка при архивировании:", err);
      setError("Не удалось изменить статус архивирования");
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setSelectedVacancyId(null);
    setIsEditing(false);
    setEditedVacancy(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedVacancy((prev) => ({ ...prev, [name]: value }));
  };

  const onAddHHButtonClick = async () => {
    setHHLoading(true);
    const response = await fetch("http://localhost:80/api/admin/hh", {
      method: "POST",
    });
    if (response.ok) {
      setHHLoading(false);
      fetchVacancies();
    }
  }

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header linksContent={null} />
      <main className="main admin">
        <div className="adminAddButton--container">
          <button type="button" className="adminAddButton" onClick={onAddButtonClick}>
            Добавить вакансию
          </button>
          <button type="button" className="addFromHH" onClick={onAddHHButtonClick} disabled={hhLoading}>
            {hhLoading ? "Загружается..." : "Выгрузить с HH.ru"}
          </button>
          {isAddVacancyOpen && (
            <form className="addVacancyForm" onSubmit={onAddFormSubmit}>
              <input
                required
                type="text"
                className="addVacancyForm-input"
                name="companyName"
                placeholder="Название компании"
              />
              <input
                required
                type="text"
                className="addVacancyForm-input"
                name="title"
                placeholder="Название стажировки"
              />
              <input
                required
                type="text"
                className="addVacancyForm-input"
                name="description"
                placeholder="Описание стажировки"
              />
              <input
                required
                type="text"
                className="addVacancyForm-input"
                name="requiredSkills"
                placeholder="Требуемые навыки"
              />
              <input
                required
                type="text"
                className="addVacancyForm-input"
                name="workFormat"
                placeholder="Формат работы"
              />
              <input
                type="text"
                className="addVacancyForm-input"
                name="salaryFrom"
                placeholder="Ниж. граница зарплаты"
              />
              <input
                type="text"
                className="addVacancyForm-input"
                name="salaryTo"
                placeholder="Верх. граница зарплаты"
              />
              <input
                required
                type="text"
                className="addVacancyForm-input"
                name="direction"
                placeholder="Направление стажировки"
              />
              <input
                required
                type="text"
                className="addVacancyForm-input"
                name="link"
                placeholder="Ссылка на стажировку"
              />
              <div className="addVacancyForm-buttons">
                <button type="button" className="addVacancyForm-button close" onClick={onAddButtonClick}>
                  Закрыть
                </button>
                <button type="submit" className="addVacancyForm-button add">
                  Добавить
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="adminFilters--container">
          <p className="adminFilters--header">Фильтры</p>
          <select className="adminFilters--select" value={filter} onChange={handleFilterChange}>
            <option value="all">Все</option>
            <option value="active">Активные</option>
            <option value="archive">Архивные</option>
          </select>
        </div>
        <div className="adminVacancies--container">
          <p className="adminVacancies--title">Список вакансий:</p>
          <ul className="adminVacList">
            {vacancies.length > 0 ? (
              vacancies.map((vacancy) => (
                <li className={`vacItem ${vacancy.isArchive ? "archived" : ""}`} key={vacancy.id}>
                  <div className="vacItemHeader">
                    <p className="vacItemTitle">{vacancy.title}</p>
                    <div className="vacItemButtons">
                      <button
                        type="button"
                        className="btn btn-view"
                        onClick={() => onViewButtonClick(vacancy.id)}
                      >
                        Посмотреть
                      </button>
                      <button
                        type="button"
                        className="btn btn-edit"
                        onClick={() => onEditButtonClick(vacancy)}
                      >
                        Редактировать
                      </button>
                      <button
                        type="button"
                        className="btn btn-archive"
                        onClick={() => onArchiveButtonClick(vacancy.id, vacancy.isArchive)}
                      >
                        {vacancy.isArchive ? "Разархивировать" : "Архивировать"}
                      </button>
                      <button
                        type="button"
                        className="btn btn-delete"
                        onClick={() => onDeleteButtonClick(vacancy.id)}
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                  {selectedVacancyId === vacancy.id && (
                    <form className="vacItemView open">
                      <div className="vacItemViewElement">
                        <p className="vacItemViewElement--text">Компания:</p>
                        {isEditing ? (
                          <input
                            type="text"
                            className="vacItemViewElement--text"
                            name="companyName"
                            value={editedVacancy?.companyName || ""}
                            onChange={handleInputChange}
                          />
                        ) : (
                          <p className="vacItemViewElement--text">{vacancy.companyName}</p>
                        )}
                      </div>
                      <div className="vacItemViewElement">
                        <p className="vacItemViewElement--text">Название стажировки:</p>
                        {isEditing ? (
                          <input
                            type="text"
                            className="vacItemViewElement--text"
                            name="title"
                            value={editedVacancy?.title || ""}
                            onChange={handleInputChange}
                          />
                        ) : (
                          <p className="vacItemViewElement--text">{vacancy.title}</p>
                        )}
                      </div>
                      <div className="vacItemViewElement">
                        <p className="vacItemViewElement--text">Описание стажировки:</p>
                        {isEditing ? (
                          <input
                            type="text"
                            className="vacItemViewElement--text"
                            name="description"
                            value={editedVacancy?.description || ""}
                            onChange={handleInputChange}
                          />
                        ) : (
                          <p className="vacItemViewElement--text">{vacancy.description}</p>
                        )}
                      </div>
                      <div className="vacItemViewElement">
                        <p className="vacItemViewElement--text">Необходимые навыки:</p>
                        {isEditing ? (
                          <input
                            type="text"
                            className="vacItemViewElement--text"
                            name="requiredSkills"
                            value={editedVacancy?.requiredSkills || ""}
                            onChange={handleInputChange}
                          />
                        ) : (
                          <p className="vacItemViewElement--text">{vacancy.requiredSkills}</p>
                        )}
                      </div>
                      <div className="vacItemViewElement">
                        <p className="vacItemViewElement--text">Формат работы:</p>
                        {isEditing ? (
                          <input
                            type="text"
                            className="vacItemViewElement--text"
                            name="workFormat"
                            value={editedVacancy?.workFormat || ""}
                            onChange={handleInputChange}
                          />
                        ) : (
                          <p className="vacItemViewElement--text">{vacancy.workFormat}</p>
                        )}
                      </div>
                      <div className="vacItemViewElement">
                        <p className="vacItemViewElement--text">Окно зарплаты:</p>
                        {isEditing ? (
                          <>
                            <input
                              type="text"
                              className="vacItemViewElement--text"
                              name="salaryFrom"
                              value={editedVacancy?.salaryFrom || ""}
                              onChange={handleInputChange}
                              placeholder="Ниж. граница"
                            />
                            <input
                              type="text"
                              className="vacItemViewElement--text"
                              name="salaryTo"
                              value={editedVacancy?.salaryTo || ""}
                              onChange={handleInputChange}
                              placeholder="Верх. граница"
                            />
                          </>
                        ) : (
                          <p className="vacItemViewElement--text">
                            от {vacancy.salaryFrom || "не указано"} до {vacancy.salaryTo || "не указано"}
                          </p>
                        )}
                      </div>
                      <div className="vacItemViewElement">
                        <p className="vacItemViewElement--text">Направление стажировки:</p>
                        {isEditing ? (
                          <input
                            type="text"
                            className="vacItemViewElement--text"
                            name="direction"
                            value={editedVacancy?.direction || ""}
                            onChange={handleInputChange}
                          />
                        ) : (
                          <p className="vacItemViewElement--text">{vacancy.direction}</p>
                        )}
                      </div>
                      <div className="vacItemViewElement">
                        <p className="vacItemViewElement--text">Ссылка на стажировку:</p>
                        {isEditing ? (
                          <input
                            type="text"
                            className="vacItemViewElement--text"
                            name="link"
                            value={editedVacancy?.link || ""}
                            onChange={handleInputChange}
                          />
                        ) : (
                          <p className="vacItemViewElement--text">{vacancy.link}</p>
                        )}
                      </div>
                      {isEditing && (
                        <div className="vacItemViewElement">
                          <button
                            type="button"
                            className="btn btn-save"
                            onClick={() => onSaveEdit(vacancy.id)}
                          >
                            Сохранить
                          </button>
                          <button
                            type="button"
                            className="btn btn-delete"
                            onClick={() => {
                              setIsEditing(false);
                              setEditedVacancy(null);
                            }}
                          >
                            Отмена
                          </button>
                        </div>
                      )}
                    </form>
                  )}
                </li>
              ))
            ) : (
              <p>Нет доступных вакансий</p>
            )}
          </ul>
        </div>
      </main>
    </>
  );
}
