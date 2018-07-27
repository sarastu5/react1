class Person {
    // konstruktorin avulla saadaan arvot uudesta instanssista
    constructor(name = "Anonymous", age = 0) {
        this.name = name; //this viittaa luokan instanssiin
        //tulostaa nimen, jos se on annettu
        this.age = age;
    }

    getGreeting() { //funktio, suoritetaan, kun kutsutaan
        return `Hi, I am ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person { // ottaa ominaisuuksia Person-luokasta, mm. nimen ja iän
    constructor(name, age, major) {
        super(name, age); // kutsutaan parent-classia
        this.major = major;
    }
    
    hasMajor() { // ei näy Person-luokassa, vain Studentissa
        return !!this.major;
    }

    getDescription() { // override parent class method
        let description = super.getDescription(); // sama kuin parentin getDescription
        
        if (this.hasMajor()) { // jos henkilöllä on major, tulostetaan erilainen description
            description = description + ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age); // näiden arvot tulee parent-classista
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.hasHomeLocation()) {
            greeting = greeting + ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const me = new Traveler("Kakka Pää", 30, "Helsinki"); // luodaan uusi instanssi Person-luokasta
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());