let apiData;

export async function loadData() {
  try {
    const response = await fetch(
      "http://localhost:80/api/api/personal_cabinet/all_info"
    );
    apiData = await response.json();
    renderData();
  } catch (error) {
    console.error("Ошибка загрузки:", error);
  }
}

function reformatDateOfBirth(date) {
  return date.slice(6, 10) + '-' + date.slice(0, 2) + '-' + date.slice(3, 5)
}

function renderData() {
  if (!apiData) return;

  document.getElementById("firstName").value = apiData["firstName"];
  document.getElementById("lastName").value = apiData["lastName"];
  document.getElementById("middleName").value = apiData["middleName"];

  document.getElementById("phoneNumber").value = apiData["phoneNumber"];

  document.getElementById("dateOfBirth").value = reformatDateOfBirth(apiData["dateOfBirth"]);

  const gender = document.querySelector("#gender").getElementsByTagName("option");

  for (let i = 0; i < gender.length; i++) {
    if (gender[i].value === apiData["gender"]) gender[i].selected = true;
  }

  document.getElementById("vk").value = apiData["vk"];
  document.getElementById("telegram").value = apiData["telegram"];
  document.getElementById("gitHub").value = apiData["gitHub"];
  document.getElementById("linkedin").value = apiData["linkedin"];

  document.getElementById("skills").value = apiData["skills"];
}
