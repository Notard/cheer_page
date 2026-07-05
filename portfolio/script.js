const projects = Array.isArray(window.DDANJIT_PROJECTS) ? window.DDANJIT_PROJECTS : [];
const grid = document.querySelector("#projectGrid");
const count = document.querySelector("#projectCount");

function renderProjects() {
  grid.innerHTML = "";

  projects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const number = document.createElement("span");
    number.className = "project-number";
    number.textContent = String(index + 1).padStart(2, "0");

    const title = document.createElement("h2");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const link = document.createElement("a");
    link.href = project.href;
    link.textContent = "열어 보기";
    link.setAttribute("aria-label", `${project.title} 열어 보기`);

    card.append(number, title, description, link);
    grid.append(card);
  });

  count.textContent = `${projects.length}개`;
}

renderProjects();
