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

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {title, author} = book;
const {name: publisherName = 'Self-publisched'} = book.publisher;

console.log(publisherName);

