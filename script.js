const duplicateProjects = () => {
  const TOTAL_PROJECTS = 6;
  const projectsGrid = document.querySelector(".projects-grid");
  const projectElement = document.querySelector(".project");

  let count = 1;
  while (count <= TOTAL_PROJECTS - 1) {
    const clonedProject = projectElement.cloneNode(true);
    projectsGrid.appendChild(clonedProject);
    count++;
  }
};

duplicateProjects();
