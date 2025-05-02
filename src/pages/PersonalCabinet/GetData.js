let apiData = null;

async function loadData() {
  try {
    const response = await fetch('http://localhost:80/api/api/personal_cabinet/all_info');
    apiData = await response.json();
    renderData();
  } catch (error) {
    console.error('Ошибка загрузки:', error);
  }
}

function renderData() {
  if (!apiData) return;

  document.getElementById('FLname').textContent = apiData.firstName + ' ' + apiData.lastName;
  document.getElementById('middleName').textContent = apiData.middleName;

  document.getElementById('phoneNumber').textContent = apiData.phoneNumber;
  document.getElementById('dateOfBirth').textContent = apiData.dateOfBirth.slice(0, 10);
  document.getElementById('gender').textContent = apiData.gender;

  document.getElementById('vk').textContent = apiData.vk;
  document.getElementById('telegram').textContent = apiData.telegram;
  document.getElementById('gitHub').textContent = apiData.gitHub;
  document.getElementById('linkedin').textContent = apiData.linkedin;

  document.getElementById('skills').textContent = apiData.skills;
}

export { loadData };
