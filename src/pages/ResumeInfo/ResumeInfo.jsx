import "./ResumeInfo.css";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import CheckResume from "../../components/CheckResume/CheckResume";


export default function ResumeInfo() {
  const { id } = useParams();

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
      <main className="main resumeInfo">
          <CheckResume
            resumeID={id}
          />
      </main>
    </>
  );
}
