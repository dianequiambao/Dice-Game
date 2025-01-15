
document.addEventListener("DOMContentLoaded", function () {
if (sessionStorage.getItem("pageRefreshed")) {
// 
//PLAYER 1 
// 

// Generating random number for Player 1
var randomNumberDice1 = Math.floor(Math.random() * 6) + 1;

// Setting the file name of the image by using the generated number on Dice 1
var dice1Image = "dice" + randomNumberDice1 + ".png";

// Setting file path for the image by using the generated number on Dice 1
var dice1ImageSource = "./images/" + dice1Image;

// Selecting the image of the dice of player 1
var dice1 = document.querySelectorAll("img")[0];

// Changing the image source when webpage was refreshed
dice1.setAttribute("src", dice1ImageSource);

// 
// Player 2
// 

// Generating random number for Player 2
var randomNumberDice2 = Math.floor(Math.random() * 6) + 1;

// Setting the file name of the image by using the generated number on Dice 2
var dice2Image = "dice" + randomNumberDice2 + ".png";

// Setting file path for the image by using the generated number on Dice 2
var dice2ImageSource = "./images/" + dice2Image;

// Selecting the image of the dice of player 2
var dice2 = document.querySelectorAll("img")[1];

//// Changing the image source when webpage was refreshed
dice2.setAttribute("src", dice2ImageSource);


// 
// Logic of the Game
// 

if (randomNumberDice1 === randomNumberDice2){
    document.querySelector("h1").innerHTML = "Draw 😬";
} else if (randomNumberDice1 > randomNumberDice2){
    document.querySelector("h1").innerHTML = "Player 1 wins 🎉"
} else {
    document.querySelector("h1").innerHTML = "Player 2 wins 🎊"
}
} else {
    // First-time visit: set the flag in sessionStorage
    sessionStorage.setItem("pageRefreshed", true);
}});