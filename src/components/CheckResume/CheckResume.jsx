import { useNavigate } from "react-router-dom";
import "./CheckResume.css";
import { useEffect, useState } from "react";

export default function CheckResume({ resumeID }) {
  const navigate = useNavigate();
  const [resumeData, setResumeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const onCheckButtonClick = (evt) => {
    evt.preventDefault();
    navigate(`/resumeсhat/${resumeID}`)
  }

  const onBackButtonClick = () => {
    navigate('/pc');
  };

  const onDownloadButtonClick = async (evt) => {
  evt.preventDefault();

  try {
    const response = await fetch(`http://localhost:80/api/api/resume_editor/downland/${resumeID}`);

    if (!response.ok) {
      console.error('Что-то пошло не так');
      return;
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = Object.assign(document.createElement('a'), {
      href: url,
      download: 'resume.pdf',
    });
    document.body.appendChild(link).click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Что-то пошло не так. Попробуйте перезагрузить страницу', error);
    }
  };

  async function loadResumeData() {
    try {
      const response = await fetch(`http://localhost:80/api/api/resume_editor/all_info/${resumeID}`);
      const data = await response.json();
      setResumeData(data);
    } catch (error) {
      console.error('Ошибка загрузки:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadResumeData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resumeID])

  function reformatDateOfBirth(date) {
    return date.slice(8, 10) + '.' + date.slice(5, 7) + '.' + date.slice(0, 4);
  }

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="checkResume">
      <p className="fullName" id="fullName">{resumeData.lastName + ' ' + resumeData.firstName + ' ' + resumeData.middleName}</p>
      <div className="resumeInfoBlock">
        <div className="infoBlockPart">
          <p className="blockPartHeader">Дата рождения:</p>
          <p className="blockPartInfo" id="dateOfBirth">{reformatDateOfBirth(resumeData.dateOfBirth)}</p>
        </div>
        <div className="infoBlockPart">
          <p className="blockPartHeader">Пол:</p>
          <p className="blockPartInfo" id="gender">{resumeData.gender}</p>
        </div>
      </div>

      <div className="resumeInfoBlock">
        <p className="infoBlockHeader">Контактная информация:</p>
        <div className="infoBlockPart">
          <p className="blockPartHeader">Телефон:</p>
          <p className="blockPartInfo" id="phoneNumber">{resumeData.phoneNumber}</p>
        </div>
        <div className="infoBlockPart">
          <p className="blockPartHeader">Email:</p>
          <p className="blockPartInfo" id="email">{resumeData.email}</p>
        </div>
        <div className="infoBlockPart">
          <p className="blockPartHeader">VK:</p>
          <p className="blockPartInfo" id="vk">{resumeData.vk}</p>
        </div>
        <div className="infoBlockPart">
          <p className="blockPartHeader">Telegram:</p>
          <p className="blockPartInfo" id="telegram">{resumeData.telegram}</p>
        </div>
        <div className="infoBlockPart">
          <p className="blockPartHeader">GitHub:</p>
          <p className="blockPartInfo" id="gitHub">{resumeData.gitHub}</p>
        </div>
        <div className="infoBlockPart">
          <p className="blockPartHeader">LinkedIn:</p>
          <p className="blockPartInfo" id="linkedin">{resumeData.linkedin}</p>
        </div>
      </div>

      <div className="resumeInfoBlock">
        <p className="infoBlockHeader">Образование:</p>
        {(
          resumeData.educations.map((education, index) => (
            <div className="educationPart" key={index}>
              <div className="infoBlockPart">
                <p className="blockPartHeader">Степень образования:</p>
                <p className="blockPartInfo">{education.level}</p>
              </div>
              <div className="infoBlockPart">
                <p className="blockPartHeader">Название учебного заведения:</p>
                <p className="blockPartInfo">{education.place}</p>
              </div>
              <div className="infoBlockPart">
                <p className="blockPartHeader">Год начала/окончания:</p>
                <p className="blockPartInfo">{education.startYear + ' - ' + education.endYear}</p>
              </div>
              <div className="infoBlockPart">
                <p className="blockPartHeader">Специальность:</p>
                <p className="blockPartInfo">{education.specialization}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="resumeInfoBlock">
        <p className="infoBlockHeader">Проекты:</p>
        {(
          resumeData.projects.map((project, index) => (
            <div className="educationPart" key={index}>
              <div className="infoBlockPart">
                <p className="blockPartHeader">Название:</p>
                <p className="blockPartInfo">{project.title}</p>
              </div>
              <div className="infoBlockPart">
                <p className="blockPartHeader">Описание:</p>
                <p className="blockPartInfo">{project.description}</p>
              </div>
              <div className="infoBlockPart">
                <p className="blockPartHeader">Ссылка:</p>
                <p className="blockPartInfo">{project.link}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="resumeInfoBlock">
        <p className="infoBlockHeader">Опыт:</p>
        <p className="blockPartInfo" id="experience">{resumeData.experience}</p>
      </div>

      <div className="resumeInfoBlock">
        <p className="infoBlockHeader">Достижения:</p>
        {(
          resumeData.achievements.map((achievement, index) => (
            <p key={index} className="blockPartInfo">
              {achievement.description}
            </p>
          ))
        )}
      </div>

      <div className="resumeInfoBlock">
        <p className="infoBlockHeader">Навыки:</p>
        <p className="blockPartInfo" id="skills">{resumeData.skills}</p>
      </div>

      <div className="resumeInfoBlock">
        <p className="infoBlockHeader">Дополнительная информация:</p>
        <div className="infoBlockPart">
          <p className="blockPartHeader">О себе:</p>
          <p className="blockPartInfo" id="about">{resumeData.about}</p>
        </div>
        <div className="infoBlockPart">
          <p className="blockPartHeader">Хобби:</p>
          <p className="blockPartInfo" id="hobbies">{resumeData.hobbies}</p>
        </div>
      </div>
      <div className="checkResumeButtons">
        <button className="checkResumeButton" onClick={onBackButtonClick}>Назад</button>
        <button className="checkResumeButton" onClick={onDownloadButtonClick}>Скачать в PDF</button>
        <button className="checkResumeButton"
          onClick={(evt) => onCheckButtonClick(evt)}
        >Отправить на проверку</button>
      </div>
    </div>
  );
}
