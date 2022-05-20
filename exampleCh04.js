const { validateUseBuiltInsOption } = require("@babel/preset-env/lib/normalize-options")


// Advanced functional concepts
// -----------------------------------------------


// Currying and partial application
// -----------------------------------------------

// Partial application
// "useful way to configure more general functions into more specific ones"


// Solve the following functions in a # of different ways
//-----V----V----V------

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

// const add = (x, y, z) => x + y + z;

// const addPartial = x =>
//     y =>
//         z => add(x, y, z);

// const sum = addPartial(5)(6)(7);

// console.log(sum);





// Recursion
// -----------------------------------------------

// Recursion: a case when a function calls itself

// We always have to tell our function when to stop!!

// A simple example using recursion, creating a function that behaves like a for loop without using a for loop



// const countDown = x => {
//     if (x < 0) return;
//     console.log(x);
//     countDown(x-1);
// };

// countDown(10);

// const countUp = (x, max) => {
//   if (x > max) return;
//   console.log(x);
//   countUp(x + 1, max);
// };

// countUp(0, 10);




// Functions as objects
// -----------------------------------------------

// we mean functions have properties like objects do

// const sayHello = () => console.log('Hello');
// console.log(sayHello.name);

// const add = (x, y, z) => x + y + z;
// console.log(add.length);


// --- call ---
// const add = (x, y, z) => x + y + z;
// console.log(add.call(null, 1, 2, 3));

// --- apply ---
// const add = (x, y, z) => x + y + z;
// console.log(add.apply(null, [1, 2, 3]));

// --- (...) spread operator ---
// const add = (x, y, z) => x + y + z;
// const args = [1, 2, 3];
// console.log(add(...args));

// --- bind ---
// const add = (x, y, z) => x + y + z;
// const args = [1, 2, 3];
// const add1 = add.bind(null, 1)
// console.log(add1(2, 3));





// Challenge: Convert Array
// -----------------------------------------------


const electionVotes = [
  'Harry', 'Rick', 'Ben', 'Ben', 'Fran', 'Katherine', 'Morgan', 'Fran', 'Ashley', 'Connor', 'Katherine', 'Rick', 'Fran', 'Rick', 'Albert', 'Ben', 'Sarah', 'Morgan', 'Fran', 'John', 'Albert', 'Donna', 'John', 'Katherine', 'Mortimer', 'Harry', 'Frank', 'Fran', 'Morgan', 'Katherine', 'John', 'Ben', 'Bill', 'Julie', 'Fran'
];

const tallyVotes = votes => 
  votes.reduce((acc, name) => ({
      ...acc, 
      [name]: acc[name] ? acc[name] + 1 : 1,
  }), {});


console.log(tallyVotes(electionVotes));

/* Expected Output (something like this):
    {
        Fran: <some number>
        John: <some number>
        Katherine: <some number>
    }
*/