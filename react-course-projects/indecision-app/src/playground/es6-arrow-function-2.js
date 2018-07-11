// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b; 
};

console.log(add(55, 1));

// this keyword - no longer bound

const user = {
    name: "Sara",
    cities: ["Helsinki", "Hämeenlinna"],
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city);
    },
};
console.log(user.printPlacesLived());

// challenge:

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,

    multiply(multiplyBy) {
        return this.numbers.map((number) => number * this.multiplyBy);
    },
};

console.log(multiplier.multiply());