//
//Object destrutring
//

// const person = {
//     name: 'Sara',
//     age: 30,
//     location: {
//         city: 'Helsinki',
//         temperature: 30
//     }
// };

// const {name = 'Anonymous', age} = person;
// const name = person.name;
// const age = person.age;

// console.log(`${name} is ${age}.`);

// const {city, temperature} = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} degrees celsius in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {title, author} = book;
// const {name: publisherName = 'Self-publisched'} = book.publisher;

// console.log(publisherName);

//
//Array destructuring
//

// const address = ['Mannerheimintie 12', 'Helsinki', 'Suomi', '00100'];

// const [street, city, country, zip] = address;

// console.log(`You are in ${city} ${country}.`);

const item = ['Coffee (hot)', '2 euros', '2,5 euros', '3 euros'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);