export default async function educationSubmit(evt, onSuccess) {
    evt.preventDefault();

  var object = {};

  new FormData(evt.target).forEach(function (value, key) {
    object[key] = value;
  });

  object.startYear = Number(object.startYear);
  object.endYear = Number(object.endYear);

  var dataArray = [];
  dataArray.push(object);

  try {
    const response = await fetch(
      `http://localhost:80/api/api/resume_editor/education/${localStorage.getItem("resumeID")}`,
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
