import { Link } from "react-router-dom";

export default function ResumesRender({ resumesInfo, resumesQuantity }) {
  return (
    <>
      {resumesQuantity === 0 && (
        <p className='empty-list'>Вы ещё не создали ни одного резюме.
         <br />Нажмите кнопку ниже и создайте своё первое резюме!</p>
      )}
      {resumesQuantity !== 0 && (
        <>
          {resumesInfo.map((resume, i) => (
            <div key={resume.id} className="resume full">
              <p className="resume-header">{resume.title + ' №' + (i + 1)}</p>
              <Link to="/resume" className="resume-href">
                <p className="resume-more">Подробнее</p>
              </Link>
            </div>
          ))}
        </>
      )}
    </>
  )
}

{/* <div className="resume full">
  <p className="resume-header">IT-специалист</p>
  <a className="resume-href">
    <p className="resume-more">Подробнее</p>
  </a>
</div>; */}
