let Rabbit = function (type) {
    this.type = type;
}
Rabbit.prototype.speak = function (line) {
    console.log(`${this.type} says ${line}?`);
};
Rabbit.prototype.toString = function () {
    return `A ${this.type} rabbit`;
};

let weirdRabbit = new Rabbit("weird");
weirdRabbit.speak("huh");
// weird says huh?

console.log(String(weirdRabbit));
// A weird rabbit