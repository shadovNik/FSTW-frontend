import "./CreateResume.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ResumeCreator from "../../components/ResumeCreator/ResumeCreator";
import EducationFormContent from "../../components/ResumeCreator/FormContents/EducationFormContent";
import EducationSubmit from "../../components/ResumeCreator/FormContents/EducationSubmit"
import ExperienceFormContent from "../../components/ResumeCreator/FormContents/ExperienceFormContent";
import ExperienceSubmit from "../../components/ResumeCreator/FormContents/ExperienceSubmit"
import ProjectsFormContent from "../../components/ResumeCreator/FormContents/ProjectsFormContent";
import ProjectsSubmit from "../../components/ResumeCreator/FormContents/ProjectsSubmit"
import SkillsFormContent from "../../components/ResumeCreator/FormContents/SkillsFormContent";
import SkillsSubmit from "../../components/ResumeCreator/FormContents/SkillsSubmit"
import AchievementsFormContent from "../../components/ResumeCreator/FormContents/AchievementsFormContent";
import AchievementsSubmit from "../../components/ResumeCreator/FormContents/AchievementsSubmit"
import AboutAndHobbiesFormContent from "../../components/ResumeCreator/FormContents/AboutAndHobbiesFormContent";
import AboutAndHobbiesSubmit from "../../components/ResumeCreator/FormContents/AboutAndHobbiesSubmit"
import ProgressBar from "../../components/ProgressBar/ProgressBar";

export default function CreateResume() {
  const navigate = useNavigate();
  const [pageID, setPageID] = useState(0);

  const handleSuccess = () => {
    setPageID((prev) => Math.min(prev + 1, 5));
  }

  const handleLastSuccess = () => {
    navigate("/pc");
  }

  const handleBackButtonClick = () => {
    setPageID((prev) => Math.max(prev - 1, 0));
  }

  let submitHandler;
  let formContent;

  switch (pageID) {
    case 0:
      submitHandler = (evt) => EducationSubmit(evt, handleSuccess);
      formContent = <EducationFormContent />;
      break;
    case 1:
      submitHandler = (evt) => ExperienceSubmit(evt, handleSuccess);
      formContent = <ExperienceFormContent />;
      break;
    case 2:
      submitHandler = (evt) => ProjectsSubmit(evt, handleSuccess);
      formContent = <ProjectsFormContent />;
      break;
    case 3:
      submitHandler = (evt) => SkillsSubmit(evt, handleSuccess);
      formContent = <SkillsFormContent />;
      break;
    case 4:
      submitHandler = (evt) => AchievementsSubmit(evt, handleSuccess);
      formContent = <AchievementsFormContent />;
      break;
    case 5:
      submitHandler = (evt) => AboutAndHobbiesSubmit(evt, handleLastSuccess);
      formContent = <AboutAndHobbiesFormContent />;
      break;
    default:
      submitHandler = (evt) => EducationSubmit(evt, handleSuccess);
      formContent = <EducationFormContent />;
      break;
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
      <ResumeCreator
        onSubmit={submitHandler}
        formContent={formContent}
        pageID={pageID}
        onBack={handleBackButtonClick}/>
      <Footer />
    </>
  );
}
