function factorial(number) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!Number.isInteger(number)) {
                reject(`${number} is not a number`);
                return;
            }
            let result = 1;
            for (let i = 1; i <= number; i++) {
                result = result * i;
                if (result == Infinity) {
                    break;
                }
            }
            if (result == Infinity) {
                reject(`${number}! is Infinity`);
                return;
            }
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    });
    return promise;
}

function double(number) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!Number.isInteger(number)) {
                reject(`${number} is not a number`);
                return;
            }
            let result = 2 * number;
            if (result == Infinity) {
                reject(`${number} is not a number`);
                return;
            }
            resolve(result);
        }, Math.floor(Math.random() * 1000));
    });
    return promise;
}

factorial(5)
    .then((result) => double(result)) // Promise
    .then((result) => {
        console.log('resolved: ', result);
    })
    .catch((error) => {
        console.log('rejected: ', error);
    });