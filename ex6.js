console.log("Victoria Tate's Output from Example 6");

function analyzeArray(arr) {
    return {
        firstElement: arr[0],
        lastElement: arr[arr.length - 1],
        length: arr.length
    };
}
console.log(analyzeArray([4, 8, 12, 5, 20]));
console.log(analyzeArray(["a", 2, "Hello", 6, [4, 5], "bye", { name: "Alice", score: 98 }]));