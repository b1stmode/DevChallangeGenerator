const generateButton = document.querySelector("#generateButton");
const alloptions = document.querySelectorAll("#challengeList .textPart");

const allButtons = document.querySelectorAll(".optionButton");

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

  const usedIndexes = [];

  alloptions.forEach((span) => {
    let randomIndex = Math.floor(Math.random() * 6);
    while (usedIndexes.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * 6);
    }
    const randomProject = projectIdeas[randomIndex];
    span.textContent = randomProject;
    usedIndexes.push(randomIndex)

    
  });
};

generateButton.addEventListener("click", handleGenerateClick);

const handleOptionClick = (event) => {
  const button = event.target;
  const chooseOption = button.parentElement.querySelector(".textPart");

  console.log(chooseOption.textContent);
}

allButtons.forEach((button) => {
  button.addEventListener("click", handleOptionClick);
});
