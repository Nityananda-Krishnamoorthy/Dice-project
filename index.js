
function rollDice() {
    randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
    randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png");
    if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    }   else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
else {
    document.querySelector("h1").innerHTML = "Draw!";
    document.querySelector("h1").style.color = "red"; // Change text color to red
}
}
document.querySelector(".btn").addEventListener("click", rollDice);

