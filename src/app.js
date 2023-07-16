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
    let number = randomNumber[Math.floor(Math.random() * cardFace.length)];
    let suit = randomSuit[Math.floor(Math.random() * suitOpt.length)];

    if (suit === "♥" || suit === "♦") {
      document.querySelector(".icon").classList.add("red");
    } else {
      document.querySelector(".icon").classList.add("black");
    }
    document.querySelector(".icon").innerHTML = suit;
    document.querySelector(".number").innerHTML = number;
  };
  deckOfCards();
};
