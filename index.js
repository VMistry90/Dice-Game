var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
setDiceImage(randomNumber1, document.querySelector(".img1"));
setDiceImage(randomNumber2, document.querySelector(".img2"));

var header = document.querySelector("#gameStatus");
showWinner(header);

function setDiceImage(randomNumber, diceImg) {
  for (var i = 1; i <= 6; i++) {
    if (randomNumber === i) {
      diceImg.setAttribute("src", "images/dice" + i + ".png");
    }
  }

  return diceImg;
}

// Show who won
function showWinner(heading) {
  if (randomNumber1 > randomNumber2) {
    header.textContent = "🚩 Player 1 Wins! 🎉";
  } else if (randomNumber2 > randomNumber1) {
    header.textContent = "🚩 Player 2 Wins! 🎉";
  } else {
    header.textContent = "Draw!";
  }
}
