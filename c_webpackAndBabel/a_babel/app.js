// Babel Input: ES2015 arrow function
[1,2,3].map((n) => n + 1);

// Babel Output: ES equivalent
[1,2,3].map(function(n) {
    return n + 1;
})