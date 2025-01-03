// Regular function
function simpleFunction(param1, param2, param3) {
    return param1 + param2 + param3;
}

// Curried function
function curriedFunction(param1) {
    return function(param2) {
        return function(param3) {
            return param1 + param2 + param3;
        };
    };
}

function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        }
    }
}
console.log(calculateVolume(4)(5)(6));
/*Why is Currying useful in JavaScript?
Currying offers several advantages, especially when working with functional programming patterns:

It helps us to create a higher-order function
It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
It is very useful in building modular and reusable code
It helps us to avoid passing the same variable multiple times
It makes the code more readable */
