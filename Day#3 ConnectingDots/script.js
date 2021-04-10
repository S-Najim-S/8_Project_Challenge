const squares = document.querySelectorAll(".square");
const moles = document.querySelectorAll(".mole");
const score = document.getElementById("score");
const secondsLeft = document.getElementById("seconds-left");

let finalScore = 0;
let currentTime = secondsLeft.textContent;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  let randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");

  hitPosition = randomPosition.id;
}

squares.forEach((id) => {
  id.addEventListener("mouseup", () => {
    if (id.id === hitPosition) {
      finalScore += 1;
      score.textContent = finalScore;
    }
  });
});

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, 550);
}

function counter() {
  currentTime--;
  secondsLeft.textContent = currentTime;

  if ((currentTime = 0)) {
    clearInterval(timerId);
    alert(`Game Over! you hit the mole ${score} times.`);
  }
}
// initial game start
moveMole();
let timerId = setInterval(counter, 550);
