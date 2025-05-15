export default async function projectsSubmit(evt, onSuccess) {
  evt.preventDefault();

  let object = {};
  let dataArray = [];
  let count = 0;

  new FormData(evt.target).forEach(function (value, key) {
    object[key] = value;
    count += 1;
    if (count === 3) {
      dataArray.push(object);
      object = {}
      count = 0
    }
  });

  try {
    const response = await fetch(
      `http://localhost:80/api/api/resume_editor/projects/${localStorage.getItem("resumeID")}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataArray),
      }
    );

    if (response.ok) {
      onSuccess();
    } else {
      const data = await response.json();
      console.error(data[0].Error);
    }
  } catch {
    console.log("Что-то пошло не так. Попробуйте перезагрузить страницу");
  }
}
