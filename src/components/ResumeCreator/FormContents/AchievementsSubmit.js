export default async function educationSubmit(evt, onSuccess) {
  evt.preventDefault();

  let object = {};
  let dataArray = [];

  new FormData(evt.target).forEach(function (value, key) {
    object[key] = value;
    dataArray.push(object);
    object = {}
  });

  try {
    const response = await fetch(
      `/api/api/resume_editor/achievements/${localStorage.getItem("resumeID")}`,
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
