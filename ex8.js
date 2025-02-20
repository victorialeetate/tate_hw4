console.log("Victoria Tate's Output from Example 8");
// First function - Compute number of vowels:
function countVowels(word) {
    const vowels = "aeiouy";
    let count = 0;
    word = word.toLowerCase();

    for (let char of word) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
// Second function - Determine if the word is a palindrome:
function isPalindrome(word) {
    word = word.toLowerCase();
    return word === word.split("").reverse().join("");
}

const word = prompt("Enter a word:");
const vowelCount = countVowels(word);
const palindromeCheck = isPalindrome(word) ? "is a palindrome" : "is not a palindrome";
console.log(`${word} contains ${vowelCount} vowels and ${palindromeCheck}`);