/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const button = () => {
    let newCard = document.querySelector(".card-changer");
    newCard.addEventListener("click", function() {
      deckOfCards();
    });
  };
  button();

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
    let number = cardFace[Math.floor(Math.random() * cardFace.length)];
    let suit = suitOpt[Math.floor(Math.random() * suitOpt.length)];

    if (suit === "♥" || suit === "♦") {
      document.querySelectorAll(".icon").forEach(element => {
        element.classList.add("red");
        element.classList.remove("black");
      });
    } else {
      document.querySelectorAll(".icon").forEach(element => {
        element.classList.add("black");
        element.classList.remove("red");
      });
    }
    document
      .querySelectorAll(".icon")
      .forEach(element => (element.innerHTML = suit));
    document.querySelector(".number").innerHTML = number;
    document.querySelector(".bottom").innerHTML = suit;
  };
};
