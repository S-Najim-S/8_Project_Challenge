import { onSnake, expandSnake } from "./snake.js";
import { randomPositionGenerator } from "./positionGenerator.js";
let food = getRandomFoodPosition();
const EXPANTION_RATE = 1;
let score = 0;

export function updateFood() {
  if (onSnake(food)) {
    expandSnake(EXPANTION_RATE);
    food = getRandomFoodPosition();
  }
}

export function drawFood(display) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  display.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;

  // check if new food position is null or in snake if true then generate a randomposition for food in the grid
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomPositionGenerator();
  }
  return newFoodPosition;
}
