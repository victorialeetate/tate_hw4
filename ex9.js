console.log("Victoria Tate's Output from Example 9");

const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guess;

while (guess !== targetNumber) {
    guess = Number(prompt("Guess a number between 1 and 100:"));
    attempts++;

    if (guess < targetNumber) {
        console.log("Too low, guess again");
    } else if (guess > targetNumber) {
        console.log("Too high, guess again");
    } else {
        console.log(`Correct! It took you ${attempts} attempts to guess the correct number.`);
    }
}
