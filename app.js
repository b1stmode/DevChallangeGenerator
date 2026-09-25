  import { projectIdeas } from "./projects.js";

  const generateButton = document.querySelector("#generateButton");
  const alloptions = document.querySelectorAll("#challengeList .textPart");

  const allButtons = document.querySelectorAll(".optionButton");

    const challangeName = document.querySelector("#name");
    const challangeDescription = document.querySelector("#challangeDescription");
    const challangeCategory = document.querySelector("#category");
    const challangeDifficulty = document.querySelector("#difficulty");
    const challangeTags = document.querySelector("#tags");
    const challangeLeaveButton = document.querySelector("#leave");
    const challangeChooseButton = document.querySelector("#choose");

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

    selectedProject = projectIdeas.find((item) => {
      return item.name === chooseOption.textContent;
    });
    console.log(selectedProject);
    challangeName.textContent = selectedProject.name;
    challangeDescription.textContent = selectedProject.description;
    challangeCategory.textContent = selectedProject.category;
  };

  allButtons.forEach((button) => {
    button.addEventListener("click", handleOptionClick);
  });
