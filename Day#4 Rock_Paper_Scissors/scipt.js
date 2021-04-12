const gameStarter = () => {
  // initialize player and ai scores
  playerScore = document.getElementById("player-score");
  aiScore = document.getElementById("ai-score");
  let pScore = 0;
  let aScore = 0;

  const startGame = () => {
    const startBtn = document.getElementById("start-btn");
    const intro = document.querySelector(".intro");
    const gameDisplay = document.querySelector(".game-display");

    //   add click event to start btn

    startBtn.addEventListener("click", () => {
      console.log("Hello");
      intro.classList.add("hide");
      gameDisplay.classList.remove("hide");
      const hands = document.querySelectorAll(".hands img");
      console.log(hands);
    });
  };
  //   Play the game

  const playGame = () => {
    const choices = document.querySelectorAll(".options button");
    const playerHand = document.getElementById("player-choice");
    const aiHand = document.getElementById("ai-choice");
    const hands = document.querySelectorAll(".choices img");

    // declaring AI-Choices
    const aiChoices = ["rock", "paper", "scissor"];

    // remove animation from hands

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    // add eventListener for each of the user choices
    choices.forEach((button) => {
      // we run call normal function instead of arrow function because we want to bind the this keyword
      // to button not window
      button.addEventListener("click", function () {
        // random index generator for ai choice generates 0,1,2
        const randomIndex = Math.floor(Math.random() * 3);
        const aiChoice = aiChoices[randomIndex];
        aiHand.src = `/img/${aiChoice}.png`;

        setTimeout(() => {
          // call roundWinner
          roundWinner(this.textContent, aiChoice);
          // updateImage
          playerHand.src = `./img/${this.textContent}.png`;
          aiHand.src = `./img/${aiChoice}.png`;
        }, 1000);
        playerHand.src = `./img/rock.png`;
        aiHand.src = `./img/rock.png`;
        playerHand.style.animation = "playerShake 1s ease";
        aiHand.style.animation = "aiShake 1s ease";
      });
    });
  };

  const roundWinner = (pChice, aChoice) => {
    const messageText = document.getElementById("message");

    if (pChice === aChoice) {
      messageText.textContent = "It is a tie!";
    } else if (pChice === "paper" && aChoice === "rock") {
      messageText.textContent = "It is a point for player";
      pScore++;
      updateScore();
      checkWinner();
    } else if (pChice === "paper" && aChoice === "scissor") {
      messageText.textContent = "It is a point for AI";
      aScore++;
      updateScore();
      checkWinner();
    } else if (pChice === "scissor" && aChoice === "rock") {
      messageText.textContent = "It is a point for AI";
      aScore++;
      updateScore();
      checkWinner();
    } else if (pChice === "scissor" && aChoice === "paper") {
      messageText.textContent = "It is a point for player";
      pScore++;
      updateScore();
      checkWinner();
    } else if (pChice === "rock" && aChoice === "scissor") {
      messageText.textContent = "It is a point for player";
      pScore++;
      updateScore();
      checkWinner();
    } else if (pChice === "rock" && aChoice === "paper") {
      messageText.textContent = "It is a point for AI";
      aScore++;
      updateScore();
      checkWinner();
    }
  };

  const updateScore = () => {
    playerScore.textContent = pScore;
    aiScore.textContent = aScore;
  };

  const checkWinner = () => {
    if (pScore === 5) {
      alert("Player Won- Press ok to restart the game");
      location.reload();
    } else if (aScore === 5) {
      alert("AI Won - Press ok to restart the game");
      location.reload();
    }
  };
  //   initial function calls
  startGame();
  playGame();
};

gameStarter();
