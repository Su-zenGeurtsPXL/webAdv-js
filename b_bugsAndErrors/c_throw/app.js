'use strict'

function invert(number) {
    if (typeof number != 'number') {
        throw new Error("not a number");
    }
    if (number == 0) {
        throw new Error("division by 0");
    }
    return 1 / number;
}

try {
    let result = invert(0);
    console.log(`result = ${result}`);
} catch (error) {
    console.log(`Exception: ${error.message}`);
}
//Exception: division by 0