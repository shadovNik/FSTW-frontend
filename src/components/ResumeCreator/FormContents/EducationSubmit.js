export default async function educationSubmit(evt, onSuccess) {
    evt.preventDefault();

  let object = {};
  let dataArray = [];
  let count = 0;

  new FormData(evt.target).forEach(function (value, key) {
    object[key] = value;
    count += 1;
    if (key === 'startYear') {
      object.startYear = Number(object.startYear);
    } else if (key === 'endYear') {
      object.endYear = Number(object.endYear);
    }
    if (count === 5) {
      dataArray.push(object);
      object = {}
      count = 0
    }
  });

  try {
    const response = await fetch(
      `/api/api/resume_editor/education/${localStorage.getItem("resumeID")}`,
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
