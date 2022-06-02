class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    describe() {
        console.log(`Shape at (${this.x}, ${this.y}) `);
    }

    static describe() {
        console.log('Shape');
    }
}

console.log("Shape1");
let shape1 = new Shape(1, 2);
shape1.describe(); // Shape at (1, 2)
Shape.describe(); // Shape
console.log("\n");

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }

    describe() {
        super.describe();
        console.log('Circle');
        console.log(`My radius is ${this.radius} `);
    }

    static describe() {
        Shape.describe();
        console.log('Circle');
    }
}

console.log("Circle1");
let circle1 = new Circle(4, 5, 6);
circle1.describe();
// Shape at (4, 5)
// Circle
// My radius is 6
Circle.describe();
// Shape
// Circle
console.log("\n");

console.log("Instanceof");
console.log(shape1 instanceof Shape);
// true
console.log(shape1 instanceof Circle);
// false
console.log(circle1 instanceof Shape);
// true
console.log(circle1 instanceof Circle);
// true