//Declaring and initializing global scope variables
let playerScore = 0;
let computerScore = 0;
//Selecting elements from html document
const status = document.querySelector(".status");

//Start game function
const startGame = () => {
  //Selecting elements from html document
  const playBtn = document.querySelector(".introduction button");
  const intro = document.querySelector(".introduction");
  const gameSection = document.querySelector(".match");

  //When play button clicked this will execute
  playBtn.addEventListener("click", () => {
    intro.classList.add("fade-out");
    gameSection.classList.add("fade-in");
  });
};

//Match play function
const playMatch = () => {
  //Selecting elements from html document
  const options = document.querySelectorAll(".options button ");
  const hands = document.querySelectorAll(".hands img");
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");

  //Resetting animation after animation over
  hands.forEach((hand) => {
    hand.addEventListener("animationend", () => {
      hand.style.animation = "";
    });
  });

  //Adding computer options
  const computerOptions = ["Rock", "Paper", "Scissor"];

  //When option clicked this will execute
  options.forEach((option) => {
    option.addEventListener("click", function () {
      const computerRandom = Math.floor(Math.random() * 3);
      const computerChoice = computerOptions[computerRandom];

      //Resetting default hand
      playerHand.src = "./img/rock.png";
      computerHand.src = "./img/rock.png";

      //Adding shake animation to default hand
      playerHand.style.animation = "player-hand-shake 2s ease";
      computerHand.style.animation = "computer-hand-shake 2s ease";

      //Setting time out for change image and call compare function
      //Waiting till animation is over
      setTimeout(() => {
        playerHand.src = `./img/${this.textContent}.png`;
        computerHand.src = `./img/${computerChoice}.png`;

        //Calling compare function
        compareHands(this.textContent, computerChoice);
      }, 2000);
    });
  });
};

//Compare hands function
const compareHands = (playerChoice, computerChoice) => {
  //Comparing hands with computer generated result
  if (playerChoice === computerChoice) {
    status.textContent = "It's a tie";
    return;
  }

  if (playerChoice === "Rock") {
    if (computerChoice === "Scissor") {
      status.textContent = "Player wins"; //Updating status
      playerScore++; //Incrementing score
      updateScore(); //Calling score update function
      return; //When this if statement is true function will be stopped here
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

//Score update function
const updateScore = () => {
  //Selecting elements from html document
  const playScore = document.querySelector(".player-score p");
  const comScore = document.querySelector(".computer-score p");

  //Updating scores
  playScore.textContent = playerScore;
  comScore.textContent = computerScore;
};

//Calling functions
startGame();
playMatch();
