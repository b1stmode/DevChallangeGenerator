  import { projectIdeas } from "./projects.js";

  const generateButton = document.querySelector("#generateButton");
  const alloptions = document.querySelectorAll("#challengeList .textPart");

  const allButtons = document.querySelectorAll(".optionButton");

  let selectedProject;

  const handleGenerateClick = () => {
    console.log("pressed");

    const usedIndexes = [];

    alloptions.forEach((span) => {
      let randomIndex = Math.floor(Math.random() * 6);
      while (usedIndexes.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * 6);
      }
      const randomProject = projectIdeas[randomIndex];
      span.textContent = randomProject.name;
      usedIndexes.push(randomIndex);
    });
  };

  generateButton.addEventListener("click", handleGenerateClick);

  const handleOptionClick = (event) => {
    const button = event.target;
    const chooseOption = button.parentElement.querySelector(".textPart");

    selectedProject = chooseOption.name;
    console.log(selectedProject);
  };

  allButtons.forEach((button) => {
    button.addEventListener("click", handleOptionClick);
  });
