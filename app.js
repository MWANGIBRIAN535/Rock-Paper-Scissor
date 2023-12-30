const ComputerchoiceDisplay = document.getElementById("Computer");
const UserchoiceDisplay = document.getElementById("User");
const ResultDisplay = document.getElementById("Result");
const possiblechoices = document.querySelectorAll("button");
let Userchoice;
let Computerchoice;
let result;

possiblechoices.forEach(possiblechoice => possiblechoice.addEventListener("click", (e) => {
    Userchoice = e.target.id;
    UserchoiceDisplay.innerHTML = Userchoice;
    generateComputerChoice();
    getresult();
}));

function generateComputerChoice() {
    const randomnumber = Math.floor(Math.random() * 3) + 1;

    if (randomnumber === 1) {
        Computerchoice = "rock";
    }
    if (randomnumber === 2) {
        Computerchoice = "scissors";
    }
    if (randomnumber === 3) {
        Computerchoice = "paper";
    }
    ComputerchoiceDisplay.innerHTML = Computerchoice;
}

function getresult() {
    if (Computerchoice === Userchoice) {
        result = "'It's a draw!";
    }
    if (Computerchoice === "rock" && Userchoice === "paper") {
        result = "You win!";
    }
    if (Computerchoice === "rock" && Userchoice === "scissors") {
        result = "You lose!";
    }
    if (Computerchoice === "paper" && Userchoice === "scissors") {
        result = "You win!";
    }
    if (Computerchoice === "rock" && Userchoice === "paper") {
        result = "You lose!";
    }
    if (Computerchoice === "rock" && Userchoice === "scissors") {
        result = "You win!";
    }
    if (Computerchoice === "scissors" && Userchoice === "paper") {
        result = "You lose!";
    }

    ResultDisplay.innerHTML = result;
}
