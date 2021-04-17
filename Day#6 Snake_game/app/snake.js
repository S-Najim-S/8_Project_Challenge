import { getInputDirection } from "./direction.js";

export let snake_speed = 12;
let score = 0;
// snake body position each time game starts
const snakeBody = [{ x: 10, y: 11 }];
let newPiece = 0;

export function updateSnake() {
  addPiece();

  const inputDirection = getInputDirection();
  // snakeBody.length -2 gives us the second last element of the snake body and we don't need the tail of snake
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    //   copy and shift the snake to its parent location
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  //   snakeBody[0].x is the head of the snake so we adding some kind of movement
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function drawSnake(display) {
  // loop through each piece of snkae body and draw it through screen
  snakeBody.forEach((piece) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = piece.y;
    snakeElement.style.gridColumnStart = piece.x;
    snakeElement.classList.add("snake");
    display.appendChild(snakeElement);
  });
}

export function expandSnake(amount) {
  newPiece += amount;
  score += amount;
  console.log(amount);
  console.log(score);
}
export function onSnake(position, { ignoreHead = false } = {}) {
  // check if the piece is on body
  return snakeBody.some((piece, index) => {
    // ignore the head because head is always touching the head else if head is touching any other piece of body then return true
    if (ignoreHead && index === 0) {
      return false;
    }
    // check the position of piece in the given poistion
    return checkPositions(piece, position);
  });
}

export function getHeadPosition() {
  return snakeBody[0];
}

export function snakeIntersection() {
  // check if head is touching other parts of body
  // ignorehead: true will ignore head as part of body
  return onSnake(snakeBody[0], { ignoreHead: true });
}

function checkPositions(pos1, pos2) {
  // return true if positions are equal else false
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addPiece() {
  for (let i = 0; i < newPiece; i++) {
    // push the new piece to the snakeBody
    snakeBody[snakeBody.length] = { ...snakeBody[snakeBody.length - 1] };
  }
  newPiece = 0;
}
