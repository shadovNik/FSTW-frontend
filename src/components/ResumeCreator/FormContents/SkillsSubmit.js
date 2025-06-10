export default async function skillsSubmit(evt, onSuccess) {
    evt.preventDefault();

  var dataValue = new FormData(evt.target).values().next().value;

  try {
    const response = await fetch(
      `/api/api/resume_editor/skills/${localStorage.getItem("resumeID")}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataValue),
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
