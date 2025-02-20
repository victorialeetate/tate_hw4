console.log("Victoria Tate's Output from Example 7");

const words = [];
while (true) {
    const input = prompt("Enter a word (enter 'stop' to end):").trim();
    if (input.toLowerCase() === "stop") break;
    words.push(input);
}

if (words.length === 0) {
    console.log("No words to display, Stop was the first word entered.");
} else {
    console.log("You entered the following words:");
    words.forEach(word => console.log(word));
}