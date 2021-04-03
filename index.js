var randomNumber1 = Math.floor(1 + Math.random() * 6); // 1 - 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randamImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randamImageSource);

var randomNumber2 = Math.floor(1 + Math.random() * 6); // 1 - 6

//var randomDiceImage = "dice" + randomNumber2 + ".png";

//var randamImageSource = "images/" + randomDiceImage;

//var image2 = document.querySelectorAll("img")[1];

var randamImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randamImageSource2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!✌ ";
}
 else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins ! ✌️";
}
else {
  document.querySelector("h1").innerHTML = "Match Drawn!";
}
