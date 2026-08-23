const generateButton = document.querySelector('#generateButton');
const challengeHeader = document.querySelector('#challengeHeader');
const firstOption = document.querySelector('#challengeList li'); 

const handleGenerateClick = () => {
    console.log("Button was clicked");
    firstOption.textContent = "Calculator Stack: JS, HTML, CSS";
    
}
generateButton.addEventListener('click', handleGenerateClick);
