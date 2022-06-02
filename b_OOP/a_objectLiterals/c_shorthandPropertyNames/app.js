let name = 'tim';
let age = 7;
const print = function () {
    console.log(`name: ${this.name} age: ${this.age}`);
}
let person = {name, age, print};
// komt op hetzelfde neer als de onderstaande regel
// let person = { name : name , age : age, print : print };
person.print();