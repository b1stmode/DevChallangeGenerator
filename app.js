const generateButton = document.querySelector("#generateButton");
const alloptions = document.querySelectorAll("#challengeList .textPart");

const projectIdeas = [
  "Calculator",
  "Weather App",
  "Pomodoro Timer",
  "Roll a Dice",
  "Rock, Paper, Scissors",
  "Simple CLI tool",
];

const handleGenerateClick = () => {
  console.log("pressed");

  alloptions.forEach((span) => {
    const randomIndex = Math.floor(Math.random() * 6);
    const randomProject = projectIdeas[randomIndex];

    span.textContent = randomProject;
  });
};
generateButton.addEventListener("click", handleGenerateClick);
