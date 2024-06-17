// Generate a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Construct the file name of the dice image
var randomDiceImage = 'images/dice' + randomNumber1 + '.png';

// Select the left <img> element with class img1
var leftDiceImage = document.querySelector('.img1');

// Set the src attribute to the new image
leftDiceImage.src = randomDiceImage;

// Generate a random number between 1 and 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Construct the file name of the dice image
var randomDiceImage = 'images/dice' + randomNumber2 + '.png';

// Select the left <img> element with class img1
var rightDiceImage = document.querySelector('.img2');

// Set the src attribute to the new image
rightDiceImage.src = randomDiceImage;

var heading = document.querySelector("h1");

if(randomNumber1 > randomNumber2) {
    heading.textContent = "Player 1 Wins!";
    } else if(randomNumber2 > randomNumber1) {
        heading.textContent = "Player 2 Wins!";
        } else {
            heading.textContent = "It's a Draw!";
            }