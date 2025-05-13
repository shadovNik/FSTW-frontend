import { useNavigate } from 'react-router-dom';
import './PersonalCabinet.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { loadData } from './GetData';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import EditProfile from '../../components/EditProfile/EditProfile';
import ResumesRender from '../../components/ResumesRender/ResumesRender';

export default function PersonalCabinet() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [resumesQuantity, setResumesQuantity] = useState(0);
  const [resumes, setResumes] = useState(Array(0));

  const handleLogoutClick = (evt) => {
    evt.preventDefault();

    logout();
    navigate("/main");
  }

  const handleCreateResumeClick = () => {
    navigate("/create");

    async function fetchResumeId() {
      try {
        const response = await fetch('http://localhost:80/api/api/resume_editor/init', {
          method: 'POST',
        });

        const data = await response.json();
        if (response.ok) {
          localStorage.setItem('resumeID', data);
        } else {
          console.error(data[0].Error);
        }
      } catch {
        alert('Что-то пошло не так. Попробуйте перезагрузить страницу');
      }
    }

    fetchResumeId();
  }

  const toggleEdit = () => {
    setIsEditOpen((prev) => !prev);
  };

  const handleDeleteSuccess = (resumeID) => {
    setResumes((prev) => prev.filter((resume) => resume.id !== resumeID));
    setResumesQuantity((prev) => prev - 1);
  };

  useEffect(() => {
    async function getResumesInfo() {
      try {
        const response = await fetch("http://localhost:80/api/api/resume_editor/all_user_resumes", {
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        if (response.ok) {
          setResumesQuantity(data.length);
          setResumes(data || []);
        } else {
          console.error("Что-то пошло не так. Попробуйте перезагрузить страницу");
        }
      } catch (err) {
        console.error(err);
      }
    }

    getResumesInfo();
  }, []);

  return (
    <>
      <Header
        linksContent={
          <>
            <button
              type="button"
              className="logoutButton"
              onClick={handleLogoutClick}
            >
              Выход
            </button>
          </>
        }
      />
      <main className="main pers-cabinet">
        <div className="main-content pers-cabinet">
          {isEditOpen && <EditProfile onClose={toggleEdit} />}
          {!isEditOpen && loadData() && (
            <div className="pers-info">
              <button type="button" className="editProfileButton" onClick={toggleEdit}>
                Редактировать профиль
              </button>
              <div className="person">
                <div className="person-info">
                  <p className="person-name" id="FLname"></p>
                  <p className="person-name" id="middleName"></p>
                </div>
              </div>
              <div className="person-about">
                <div className="person-about item">
                  <p className="item-name">Email</p>
                  <p className="item-description"></p>
                </div>
                <div className="person-about item">
                  <p className="item-name">Телефон</p>
                  <p className="item-description" id="phoneNumber"></p>
                </div>
                <div className="person-about item">
                  <p className="item-name">Дата рождения</p>
                  <p className="item-description" id="dateOfBirth"></p>
                </div>
                <div className="person-about item">
                  <p className="item-name">Пол</p>
                  <p className="item-description" id="gender"></p>
                </div>
              </div>
              <div className="person-about">
                <div className="person-about item">
                  <p className="item-name">VK</p>
                  <p className="item-description" id="vk"></p>
                </div>
                <div className="person-about item">
                  <p className="item-name">Telegram</p>
                  <p className="item-description" id="telegram"></p>
                </div>
                <div className="person-about item">
                  <p className="item-name">GitHub</p>
                  <p className="item-description" id="gitHub"></p>
                </div>
                <div className="person-about item">
                  <p className="item-name">LinkedIn</p>
                  <p className="item-description" id="linkedin"></p>
                </div>
              </div>
              <div className="skills">
                <p className="head skills">Навыки</p>
                <div className="skillsBlock">
                  <p className="skillsInfo" id="skills"></p>
                </div>
              </div>
            </div>
          )}

          <div className="resumes">
            <p className="head resumes">Мои резюме</p>
            <div className="resumes-list">
              <ResumesRender
                resumesInfo = { resumes }
                resumesQuantity = { resumesQuantity }
                onDelete = { handleDeleteSuccess }
              />
            </div>
            <div className="resumes-buttons">
              <button type="button" className="resume-button create" onClick={handleCreateResumeClick}>
                Создать резюме
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
