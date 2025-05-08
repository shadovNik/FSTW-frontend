import { useEffect, useRef } from 'react';
import './EditProfile.css';
import { loadData } from './LoadData';

export default function EditProfile({ onClose }) {
  const editRef = useRef(null);
  var todayDate = new Date().toISOString().split('T')[0];

  loadData();

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose])

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    try {
      const response = await fetch('http://localhost:80/api/api/personal_cabinet/send_info', {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        onClose();
      }
    } catch {
      alert('Что-то пошло не так. Попробуйте снова');
    }
  };


  return (
    <form className="editProfile" onSubmit={handleSubmit} ref={editRef}>
      <div className="editHead">
        <p className="editProfileHeader">Редактирование профиля</p>
        <button type="button" className="closeEdit" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="editProfileBlock">
        <div className="blockPart">
          <p className="partName">Фамилия</p>
          <input type="text" required className="partInput" id="lastName" name="lastName" />
        </div>
        <div className="blockPart">
          <p className="partName">Имя</p>
          <input type="text" required className="partInput" id="firstName" name="firstName" />
        </div>
        <div className="blockPart">
          <p className="partName">Отчество</p>
          <input className="partInput" required id="middleName" name="middleName"></input>
        </div>
      </div>

      <div className="editProfileBlock">
        {/* <div className="blockPart">
          <p className="partName">Email</p>
          <input type="text" className="partInput" id="email" name="Email" />
        </div> */}
        <div className="blockPart">
          <p className="partName">Телефон</p>
          <input type="text" required className="partInput" id="phoneNumber" name="phoneNumber" />
        </div>
        <div className="blockPart">
          <p className="partName">Дата рождения</p>
          <input
            type="date"
            className="partInput"
            id="dateOfBirth"
            name="dateOfBirth"
            max={todayDate} />
        </div>
        <div className="blockPart">
          <p className="partName">Пол</p>
          <label for="gender"></label>
          <select id="gender" name="gender" className='partInput gender'>
            <option disabled value>
              Укажите ваш пол:
            </option>
            <option value="Мужской">Мужской</option>
            <option value="Женский">Женский</option>
          </select>
        </div>
      </div>

      <div className="editProfileBlock">
        <div className="blockPart">
          <p className="partName">VK</p>
          <input type="text" className="partInput" id="vk" name="vk" />
        </div>
        <div className="blockPart">
          <p className="partName">Telegram</p>
          <input type="text" className="partInput" id="telegram" name="telegram" />
        </div>
        <div className="blockPart">
          <p className="partName">GitHub</p>
          <input type="text" className="partInput" id="gitHub" name="gitHub" />
        </div>
        <div className="blockPart">
          <p className="partName">LinkedIn</p>
          <input type="text" className="partInput" id="linkedin" name="linkedin" />
        </div>
      </div>

      <div className="blockPart skills">
        <p className="partName">Навыки</p>
        <textarea
          className="partInput skills"
          required
          id="skills"
          placeholder="Напишите ваши Soft/Hard навыки через запятую (Например: JS, HTML, CSS)"
          name="skills"
          wrap="soft"
        />
      </div>
      <button type="submit" className="editProfileSubmit">
        Сохранить
      </button>
    </form>
  );
}
