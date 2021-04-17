import {
  updateSnake,
  drawSnake,
  snake_speed,
  getHeadPosition,
  snakeIntersection,
} from "./snake.js";
import { updateFood, drawFood } from "./food.js";
import { outsideGrid } from "./positionGenerator.js";

let lastRenderTime = 0;
let gameOver = false;
const display = document.querySelector(".display");
// how many times the snake move in a second
// calling main function over and over for looping the game
function main(currentTime) {
  if (gameOver) {
    if (confirm("You lose! press OK to RESTART the game!")) {
      window.location = "/";
    }
    return;
  }
  // requesting next animation frame
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  // check if the last render is less then 0.5 seconds then don't move else move the snake
  if (secondsSinceLastRender < 1 / snake_speed) {
    return;
  }
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}
function draw() {
  display.innerHTML = "";
  drawSnake(display);
  drawFood(display);
}

function checkDeath() {
  gameOver = outsideGrid(getHeadPosition()) || snakeIntersection();
}
