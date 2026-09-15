const generateButton = document.querySelector("#generateButton");
const alloptions = document.querySelectorAll("#challengeList .textPart");

const allButtons = document.querySelectorAll(".optionButton");

let selectedProject;

const projectIdeas = [
  {
    name: "Calculator",
    description:
      "A simple calculator app that can perform basic arithmetic operations.",
    category: "Utility",
    difficulty: "Easy",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "Weather App",
    description:
      "An app that fetches and displays weather information based on user location.",
    category: "Utility",
    difficulty: "Medium",
    tags: ["JavaScript", "API", "HTML", "CSS"],
  },
  "Pomodoro Timer",
  "Roll a Dice",
  "Rock, Paper, Scissors",
  "Simple CLI tool",
];

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

  selectedProject = chooseOption.textContent;
  console.log(selectedProject);
};

allButtons.forEach((button) => {
  button.addEventListener("click", handleOptionClick);
});
