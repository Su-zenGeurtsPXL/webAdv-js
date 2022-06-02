/*

   Associatie: heeft
   Overerving: is

*/

let Shape = function(x, y){
    this.x = x;
    this.y = y;
}

Shape.prototype.describe = function(){
    console.log(`Shape at (${this.x}, ${this.y})`);
}

console.log("Shape1");
let shape1 = new Shape(1,2);
shape1.describe();
console.log("\n");

let Circle = function( x, y, radius ){
    Shape.call( this, x, y ); // constructor Shape
    this.radius=radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.describe = function(){
    Shape.prototype.describe.call(this);
    console.log('I am also a Circle');
    console.log(`My radius is ${this.radius} `);
}

console.log("Circle1");
let circle1=new Circle(1,2,3);
circle1.describe();
console.log("\n");

console.log("Instanceof");
console.log(circle1 instanceof Circle); //true
console.log(circle1 instanceof Shape); //true
console.log(circle1 instanceof Object); //true