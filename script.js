let playerScore = 0;
let computerScore = 0;

const startGame = () => {
  const playBtn = document.querySelector(".introduction button");
  const intro = document.querySelector(".introduction");
  const gameSection = document.querySelector(".match");

  playBtn.addEventListener("click", () => {
    intro.classList.add("fade-out");
    gameSection.classList.add("fade-in");
  });
};

const playMatch = () => {
  const options = document.querySelectorAll(".options button ");
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");

  const computerOptions = ["rock", "paper", "scissor"];

  options.forEach((option) => {
    option.addEventListener("click", function () {
      const computerRandom = Math.floor(Math.random() * 3);
      const computerChoice = computerOptions[computerRandom];
      compareHands(playerChoice, computerChoice);
    });
  });
};

const compareHands = (playerChoice, computerChoice) => {};

startGame();
playMatch();
