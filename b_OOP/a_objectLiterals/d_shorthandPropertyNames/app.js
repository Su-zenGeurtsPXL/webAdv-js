let person = {
    name: 'tim',
    age: 7,
    print() {
        console.log(`name: ${this.name} age: ${this.age}`);
    }
    // komt op hetzelfde neer als de onderstaande regels
// print : function(){
    // console.log(`name: ${this.name} age: ${this.age}`);
// }
};
person.print();