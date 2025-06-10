import "./EditResume.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import EducationFormContent from "../../components/ResumeCreator/FormContents/EducationFormContent";
import ExperienceFormContent from "../../components/ResumeCreator/FormContents/ExperienceFormContent";
import ProjectsFormContent from "../../components/ResumeCreator/FormContents/ProjectsFormContent";
import AchievementsFormContent from "../../components/ResumeCreator/FormContents/AchievementsFormContent";
import AboutAndHobbiesFormContent from "../../components/ResumeCreator/FormContents/AboutAndHobbiesFormContent";
import SkillsFormContent from "../../components/ResumeCreator/FormContents/SkillsFormContent";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";

export default function EditResume() {
  const { id } = useParams();
  const [editData, setEditData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const onEditResumeSubmit = async (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    const result = {
      hobbies: '',
      about: '',
      experience: '',
      skills: '',
      educations: [],
      projects: [],
      achievements: [],
    };

    const educations = [];
    const projects = [];
    const achievements = [];

    let isAfterSkills = false;

    formData.forEach((value, key) => {
      if (key === 'skills') {
        isAfterSkills = true;
        result.skills = value;
        return;
      }

      if (['hobbies', 'about', 'experience'].includes(key)) {
        result[key] = value;
        return;
      }

      if (['level', 'place', 'specialization', 'startYear', 'endYear'].includes(key)) {
        let currentEducation = educations[educations.length - 1];
        if (!currentEducation || Object.keys(currentEducation).length === 5) {
          currentEducation = {};
          educations.push(currentEducation);
        }
        currentEducation[key] = key === 'startYear' || key === 'endYear' ? Number(value) : value;
      }

      if (!isAfterSkills && ['title', 'description', 'link'].includes(key)) {
        let currentProject = projects[projects.length - 1];
        if (!currentProject || Object.keys(currentProject).length === 3) {
          currentProject = {};
          projects.push(currentProject);
        }
        currentProject[key] = value;
      }

      if (isAfterSkills && key === 'description') {
        achievements.push({ description: value });
      }
    });

    result.educations = educations;
    result.projects = projects;
    result.achievements = achievements;

    try {
      const response = await fetch(`/api/api/resume_editor/change_resume/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result),
      });

      if (response.ok) {
        navigate('/pc');
      } else {
        console.error('Ошибка по данным');
      }
    } catch (error) {
      console.error("Error: ", error)
    }
  };

  useEffect(() => {
    const fetchEdit = async () => {
      try {
        const response = await fetch(`/api/api/resume_editor/only_resume_info/${id}`);

        const data = await response.json();
        if (response.ok) {
          setEditData(data);
        } else {
          console.error("Что-то пошло не так. Попробуйте перезагрузить страницу");
        }
      } catch (error) {
        console.error("error: " + error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEdit();
  }, [id]);

  if (isLoading) {
    return <></>;
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
      <main className="main editResume">
        <form className="editResumeForm" onSubmit={onEditResumeSubmit}>
          <EducationFormContent
            content={editData.educations}
          />
          <ExperienceFormContent
            content={editData.experience}
          />
          <ProjectsFormContent
            content={editData.projects}
          />
          <SkillsFormContent
            content={editData.skills}
          />
          <AchievementsFormContent
            content={editData.achievements}
          />
          <AboutAndHobbiesFormContent
            aboutContent={editData.about}
            hobbiesContent={editData.hobbies}
          />
          <button type="submit" className="saveEditResume">
            Сохранить резюме
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
