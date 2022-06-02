var prompt = require("prompt");
var colors = require("colors/safe");

prompt.message = colors.rainbow("Question!");

prompt.start();

prompt.get({
    properties: {
        name: {
            description : colors.magenta("What is your name?")
        }
    }
}, function (err, result) {
    console.log(colors.cyan("You said your name is: " + result.name));
});