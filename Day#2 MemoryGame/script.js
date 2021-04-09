document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("deck-display");
  const score = document.getElementById("score");
  const message = document.getElementById("message");
  const guessCount = document.getElementById("guess-count");
  let count = 0;
  // my cards

  const cardArray = [
    {
      name: "img1",
      img: "img/img1.jpg",
    },
    {
      name: "img2",
      img: "img/img2.jpg",
    },
    {
      name: "img3",
      img: "img/img3.jpg",
    },
    {
      name: "img4",
      img: "img/img4.jpg",
    },
    {
      name: "img5",
      img: "img/img5.jpg",
    },
    {
      name: "img6",
      img: "img/img6.jpg",
    },
    {
      name: "img1",
      img: "img/img1.jpg",
    },
    {
      name: "img2",
      img: "img/img2.jpg",
    },
    {
      name: "img3",
      img: "img/img3.jpg",
    },
    {
      name: "img4",
      img: "img/img4.jpg",
    },
    {
      name: "img5",
      img: "img/img5.jpg",
    },
    {
      name: "img6",
      img: "img/img6.jpg",
    },
  ];

  // sort the array randomly

  cardArray.sort(() => 0.5 - Math.random());
  let clickedCards = [];
  let clickedCardsId = [];
  let cardsGuessed = [];
  //   Create Board

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "img/card-cover.jpg");
      card.setAttribute("card-id", i);
      card.addEventListener("click", flipCard);
      display.appendChild(card);
    }
  } // check for match

  function checkMatch() {
    count += 1;
    guessCount.innerHTML = count;
    console.log("Hello");
    //   select all the existing
    const myCards = document.querySelectorAll("img");
    const firstClickedId = clickedCardsId[0];
    const secondClickedId = clickedCardsId[1];
    //   if the names of the clicked cards are the same then
    // replace the cards with blank
    if (clickedCards[0] === clickedCards[1]) {
      message.innerHTML = "You guessed it right";
      myCards[firstClickedId].setAttribute("src", "img/blank.jpg");
      myCards[secondClickedId].setAttribute("src", "img/blank.jpg");
      cardsGuessed.push(clickedCards);
    } else {
      myCards[firstClickedId].setAttribute("src", "img/card-cover.jpg");
      message.innerHTML = "wrong guess!";
      myCards[secondClickedId].setAttribute("src", "img/card-cover.jpg");
    }
    clickedCards = [];
    clickedCardsId = [];

    score.textContent = cardsGuessed.length;

    if (cardsGuessed.length === cardArray.length / 2) {
      if (count > 8 && count < 12) {
        message.innerHTML = "Congrats, You finished the game :|";
      } else if (count < 8) {
        message.innerHTML = "Congrats, You won the game :)";
      } else if (count > 12) {
        // console.log()
        alert("You lost the game please try again!!!");
        location.reload();
      }
      alert(
        `You finished the game by guessing ${count} times. Best guess count is ${
          cardArray.length / 2
        }`
      );
    }
  }

  //flip the card

  function flipCard() {
    let cardID = this.getAttribute("card-id");
    clickedCards.push(cardArray[cardID].name);
    clickedCardsId.push(cardID);
    // check if two cards are clicked then check for match
    // setTimeout adds a buffer of 0.5s before calling the function
    this.setAttribute("src", cardArray[cardID].img);
    if (clickedCards.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }

  createBoard();
});
