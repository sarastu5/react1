class Person {
    // konstruktorin avulla saadaan arvot uudesta instanssista
    constructor(name = "Anonymous", age = 0) {
        this.name = name; //this viittaa luokan instanssiin
        //tulostaa nimen, jos se on annettu
        this.age = age;
    }

    getGreeting() { //funktio, suoritetaan, kun kutsutaan
        return `Hi, I am test ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

const me = new Person("Kakka Pää", 30); // luodaan uusi instanssi Person-luokasta
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreeting());