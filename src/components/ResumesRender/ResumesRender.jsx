import { Link } from "react-router-dom";

export default function ResumesRender({ resumesInfo, resumesQuantity, onDelete }) {
  const handleDelete = async (evt, resumeID) => {
    evt.preventDefault();

    if (!window.confirm('Вы уверены, что хотите удалить резюме?')) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:80/api/api/resume_editor/remove/${resumeID}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (response.ok) {
        onDelete();
        return;
      }

      if (!response.ok) {
        alert(data[0].Error);
        return;
    }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }

  return (
    <>
      {resumesQuantity === 0 && (
        <p className='empty-list'>Нажмите кнопку ниже и создайте своё первое резюме!</p>
      )}
      {resumesQuantity !== 0 && (
        <>
          {resumesInfo.map((resume, i) => (
            <div key={resume.id} className="resume full" id={resume.id}>
              <p className="resume-header">{resume.title + ' №' + (i + 1)}</p>
              <div className="resumeStuff">
                <Link to="/resume" className="resume-href">
                  <p className="resume-more">Посмотреть</p>
                </Link>
                <img
                  src="/img/DeleteIcon.svg"
                  className="deleteIcon"
                  width="20"
                  height="20"
                  alt='Удалить'
                  onClick={(evt) => handleDelete(evt, resume.id)}
                />
              </div>
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
