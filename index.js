// document.querySelector(".img1").setAttribute("src","./images/diceXX.png");

var dice1 = "./images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";
var dice2 = "./images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";

document.querySelector(".img1").setAttribute("src",dice1);
document.querySelector(".img2").setAttribute("src",dice2);

if (dice1 == dice2) {
    document.querySelector("h1").innerHTML = "🚩 It's a tie 🚩";
} else if (dice1 > dice2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}

