class Person {
    constructor(name) {
        this._name=name;
    }
    set name (name) {
        this._name=name;
    }
    get name () {
        return this._name;
    }
};
person = new Person('tim');
person.name = 'sofie'; // setter wordt aangeroepen
console.log(person.name); // getter wordt aangeroepen

/* Underscore belangrijk! => oneindige lus */