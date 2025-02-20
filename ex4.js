console.log("Victoria Tate's Output from Example 4");

const dog = {
    name: "Buddy",
    species: "Labrador",
    size: "60 cm",

    bark: function() {
        return "Woof! Woof!";
    }
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);