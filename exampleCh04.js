const { validateUseBuiltInsOption } = require("@babel/preset-env/lib/normalize-options")


// Advanced functional concepts
// -----------------------------------------------


// Currying and partial application
// -----------------------------------------------

// Partial application
// "useful way to configure more general functions into more specific ones"


// const add = (x, y, z) => x + y + z;

// const addPartial = x => 
//     (y, z) => add(x, y, z);

//     const add5 = addPartial(5);
// const sum = add5(6, 7);

// console.log(sum);

// ------ OR -----

// const add = (x, y, z) => x + y + z;

// const addPartial = (x, y) => 
//     (z) => add(x, y, z);

// const add5and6 = addPartial(5, 6);
// const sum = add5and6(7);

// console.log(sum);


// ------ OR -----

// const add = (x, y, z) => x + y + z;

// const addPartial = x =>
//     y =>
//         z => add(x, y, z);

// const add5 = addPartial(5);
// const add5and6 = add5(6)
// const sum = add5and6(7);

// console.log(sum);

// Defining our function one part at a time is called "Currying"


// ------ OR -----

const add = (x, y, z) => x + y + z;

const addPartial = x =>
    y =>
        z => add(x, y, z);

const sum = addPartial(5)(6)(7);

console.log(sum);






// Recursion
// -----------------------------------------------






// Functions as objects
// -----------------------------------------------