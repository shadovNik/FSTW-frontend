import { Link, useNavigate } from "react-router-dom";

export default function ResumesRender({ resumesInfo, resumesQuantity, onDelete }) {
  const navigate = useNavigate();

  const handleEditClick = (evt, ID) => {
    evt.preventDefault();
    navigate(`/resume/edit/${ID}`)
  }

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
    } catch {
      alert('Что-то пошло не так, попробуйте перезагрузить страницу');
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
                <Link to={`/resume/${resume.id}`} className="resume-href">
                  <p className="resume-more">Посмотреть</p>
                </Link>
                <img
                  src="/img/EditIcon.svg"
                  className="editIcon"
                  width="20"
                  height="20"
                  alt='Изменить'
                  onClick={(evt) => handleEditClick(evt, resume.id)}
                />
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
