let playerScore = 0;
let computerScore = 0;
const status = document.querySelector(".status");

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
  const hands = document.querySelectorAll(".hands img");
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");

  hands.forEach((hand) => {
    hand.addEventListener("animationend", () => {
      hand.style.animation = "";
    });
  });

  const computerOptions = ["Rock", "Paper", "Scissor"];

  options.forEach((option) => {
    option.addEventListener("click", function () {
      const computerRandom = Math.floor(Math.random() * 3);
      const computerChoice = computerOptions[computerRandom];

      playerHand.src = "./img/rock.png";
      computerHand.src = "./img/rock.png";

      playerHand.style.animation = "player-hand-shake 2s ease";
      computerHand.style.animation = "computer-hand-shake 2s ease";

      setTimeout(() => {
        playerHand.src = `./img/${this.textContent}.png`;
        computerHand.src = `./img/${computerChoice}.png`;

        compareHands(this.textContent, computerChoice);
      }, 2000);
    });
  });
};

const compareHands = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    status.textContent = "It's a tie";
    return;
  }

  if (playerChoice === "Rock") {
    if (computerChoice === "Scissor") {
      status.textContent = "Player wins";
      playerScore++;
      updateScore();
      return;
    } else {
      status.textContent = "Computer wins";
      computerScore++;
      updateScore();
      return;
    }
  }

  if (playerChoice === "Paper") {
    if (computerChoice === "Rock") {
      status.textContent = "Player wins";
      playerScore++;
      updateScore();
      return;
    } else {
      status.textContent = "Computer wins";
      computerScore++;
      updateScore();
      return;
    }
  }

  if (playerChoice === "Scissor") {
    if (computerChoice === "Paper") {
      status.textContent = "Player wins";
      playerScore++;
      updateScore();
      return;
    } else {
      status.textContent = "Computer wins";
      computerScore++;
      updateScore();
      return;
    }
  }
};

const updateScore = () => {
  const playScore = document.querySelector(".player-score p");
  const comScore = document.querySelector(".computer-score p");

  playScore.textContent = playerScore;
  comScore.textContent = computerScore;
};

startGame();
playMatch();
