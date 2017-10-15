//  o
// /|\
// / \

const charValues = [" o ", "/|\\", "/ \\"];
const words = ["cool", "chicken", "orange juice", "tricks", "fun"]
const guess = document.querySelector("#guess");
const displayAmountOfLetters = document.querySelector("#amount");
const spaces = document.querySelector("#spaces");
const submit = document.querySelector("#submit");
const character = document.querySelector("#draw-char");
const gameBoard = document.querySelector("#gameboard");
const restart = document.querySelector("#restart");
const restartButton = document.querySelector("#restartbutton");

// negative one because the value increases by 1 when the guess is wrong
let amountOfGuesses = -1;
let displayHealth = 3;

let finishedWord = "";
let found = false;
let letterPos;
let amountOfLetters;
init();

submit.addEventListener("click", function () {
  amountOfLetters.split("").forEach(function (letter, index) {
    // multiple characters check
      if (guess.value[0] === letter) {
        found = true;
        finishedWord += letter;
        console.log(letterPos, index);
        letterPos[index].innerHTML = letter + " ";
        console.log(amountOfLetters, finishedWord, amountOfLetters.length, finishedWord.length);
        if (amountOfLetters.length === finishedWord.length) {
          restart.querySelector("h2").innerHTML = "you are really good at this game the word was: " + amountOfLetters;
          gameBoard.style.display = "none";
          restart.style.display = "block";
        }
      } else {
        // make sure it the last check then do something
        if (index === amountOfLetters.length - 1 && !found) {
          amountOfGuesses++;
          displayHealth--;
          character.innerHTML += "\n" + charValues[amountOfGuesses];
          gameBoard.querySelector(".health").innerHTML = "amount of health left: " + displayHealth;
          if (amountOfGuesses === 2) {
            restart.querySelector("h2").innerHTML = "gameover the word was: " + amountOfLetters;
            gameBoard.style.display = "none";
            restart.style.display = "block";
          }
        }
      }
  });
  guess.value = "";
  found = false;
});

window.addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
    submit.click();
  }
});

restartButton.addEventListener("click", function() {
  amountOfGuesses = -1;
  displayHealth = 3;
  gameBoard.querySelector(".health").innerHTML = "amount of health left: " + displayHealth;
  gameBoard.style.display = "block";
  restart.style.display = "none";
  spaces.innerHTML = "";
  character.innerHTML = "";
  init();
})

function getWord () {
  amountOfLetters = words[Math.floor(Math.random() * words.length)];
  displayAmountOfLetters.innerHTML = "amount of characters in the word is " + amountOfLetters.length;
  addSpaces(amountOfLetters);
  letterPos = document.querySelectorAll("#spaces > span");
}

function addSpaces(word) {
  word.split("").forEach(function (letter) {
    let createSpan = document.createElement("span");
    if (letter != " ") {
      createSpan.innerHTML = "_ ";
      spaces.appendChild(createSpan);
    } else {
      console.log("called space");
      createSpan.innerHTML = " ";
      spaces.appendChild(createSpan);
    }
  })
}

function init () {
  getWord();
}
