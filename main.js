//  o
// /|\
// / \

const words = ["cool", "chicken", "orange juice", "tricks", "fun"]
const guess = document.querySelector("#guess");
const displayAmountOfLetters = document.querySelector("#amount");
const spaces = document.querySelector("#spaces");
const submit = document.querySelector("#submit");
let letterPos;
let amountOfLetters;
init();

submit.addEventListener("click", function () {
  amountOfLetters.split("").forEach(function (letter, index) {
    // multiple characters check
      if (guess.value[0] === letter) {
        console.log(letterPos, index);
        letterPos[index].innerHTML = letter + " ";
      }
  });
  guess.value = "";
});

window.addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
    submit.click();
  }
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
