// const add = (x, y) => x + y;

// const double = number => number * 2;
// //as opposed to
// // const double = function(number) {
// //   return number * 2;
// // }

// const sayHello = () => console.log('Hello');

// const getPersonData = () => ({
//     name: 'John Whitten',
//     age: 38,
//     job: 'programmer',
// });

// const myArrowFunction = (arg1, arg2) => arg1 + arg2;

// as opposed to
// const myArrowFunction = (arg1, arg2) => {
//   return arg1 + arg2;
// }

// const sayHello = name => console.log('Hello' + name);

// const sayHello2 = sayHello;
// sayHello2('John');

// const myFunction = true 
//     ? () => console.log('First option')
//     : () => console.log('Second option');

// const DEVELOPMENT = true;

// const fetchDataReal = () => {
//   // time-intensive operations here
// }

// const fetchDataFake = () => ({
//     name: 'John Whitten',
//     age: 38,
// });

// const fetchData = DEVELOPMENT
//     ? fetchDataFake
//     : fetchDataReal;

const double = x => x * 2;
const subtractOne = x => -1;
const triple = x => x * 3;
const add5 = x => x + 5;

const myNumber = 42;

const doubled = double(myNumber);
const minusOne = subtractOne(doubled);
//..

const functionsArray = [
    double, 
    subtractOne,
    triple,
    add5,
    Math.sqrt,
  ];

var number = 42;

functionsArray.forEach(func => number = func(number));

console.log(number);