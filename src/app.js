/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const deckOfCards = () => {
    const cardFace = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    const suitOpt = ["♦", "♥", "♠", "♣"];
    const colorOfCard = ["red", "black"];
    const cards = [];

    for (let a = 0; a < cardFace.length; a++) {
      for (let b = 0; b < suitOpt.length; b++) {
        const faces = cardFace[a];
        const suit = suitOpt[b];
        cards.push({ faces, suit });
      }
    }
    return cards;
  };
};
let test = deckOfCards();
console.log(test);
