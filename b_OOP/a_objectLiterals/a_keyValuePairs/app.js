let person = {
    name : 'tim',
    age : 7,
    print : function () {
        console.log(`name: ${this.name} \nage: ${this.age}`);
    }
};
person.print();
// name: tim
// age: 7