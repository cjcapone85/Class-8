function makePlusFunctionOne(x) {
   
        function makePlusFunction(y) {
            
            const sum= x + y;
            return makePlusFunction;
        };
};
 
console.log();




// const sum = 0;

// const plusFive = 5



// **Aim**: Create a function that takes a "base number" as an argument. This function should return another function that takes a new argument and returns the sum of the "base number" and the new argument.

// Please check the examples below for a more precise representation of the behavior expected.

// _Examples_


// Calling makePlusFunction(5) returns a new function that takes an input,
// and returns the result when adding 5 to it.

// const plusFive = makePlusFunction(5)

// plusFive(2)    ➞    7

// plusFive(-8)    ➞    -3

// Calling makePlusFunction(10) returns a new function that takes an input,
// and returns the result when adding 10 to it.

// const plusTen = makePlusFunction(10)

// plusTen(0)    ➞    10

// plusTen(188)    ➞    198

// plusFive(plusTen(0))    ➞    15






// function getSum(a,b){
//     return a+b;
// }

// const testCalculation = getSum(10,4);
//     console.log("testCalculation", testCalculation)