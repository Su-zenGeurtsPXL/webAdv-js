'use strict'

class InputError extends Error {
}

class ArithmeticError extends Error {
}

function invert(number) {
    if (typeof number != 'number') {
        throw new InputError("not a number");
    }
    if (number == 0) {
        throw new ArithmeticError("division by 0");
    }
    return 1 / number;
}

try{
    let result = invert(0);
    console.log(`result = ${result}`);
} catch( error ) {
    if (error instanceof InputError){
        console.log(`InputError: ${error.message}`);
    } else if (error instanceof ArithmeticError){
        console.log(`ArithmeticError: ${error.message}`);
    }
}
