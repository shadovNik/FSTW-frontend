export default async function educationSubmit(evt, onSuccess) {
    evt.preventDefault();

  var object = {};

  new FormData(evt.target).forEach(function (value, key) {
    object[key] = value;
  });


  try {
    const response = await fetch(
      `http://localhost:80/api/api/resume_editor/about_and_hobbies/${localStorage.getItem("resumeID")}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(object),
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
