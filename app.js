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
    console.log("pressed")
  alloptions.forEach((span, index) => {
    if (projectIdeas[index]) {
      span.textContent = projectIdeas[index];
    }
  });
};
generateButton.addEventListener("click", handleGenerateClick);
