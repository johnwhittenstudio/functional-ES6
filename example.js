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

// const double = x => x * 2;
// const subtractOne = x => -1;
// const triple = x => x * 3;
// const add5 = x => x + 5;

// const myNumber = 42;

// const doubled = double(myNumber);
// const minusOne = subtractOne(doubled);
// //..

// const functionsArray = [
//     double, 
//     subtractOne,
//     triple,
//     add5,
//     Math.sqrt,
//   ];

// var number = 42;

// functionsArray.forEach(func => number = func(number));

// console.log(number);



//--------------------------------------------------------
// Passing functions as arguments

// const add = (x, y) => x + y;
// const subtract = (x, y) => x - y;

// const combine2and3 = func =>
//     func(2, 3);
  
// // combine2and3(add); // -> 2 + 3
// combine2and3((x, y) => x + y);
// // combine2and3(subtract); // -> 2 - 3 

// combine2and3(Math.max) // -> 3



//--------------------------------------------------------
// Returning functions

// const createPrinter = () => () => console.log("Hello");
// // //// which is an arrow syntax way of writing the following:
// const createPrinter = function() {
//   return function() {
//     console.log("Hello");
//   }
// } 

// const createMultiplier = y => x => x * y;

// // const double = x => x * 2;
// // const triple = x => x * 3;
// // const quadruple = x => x * 4;

// const double = createMultiplier(2);
// const triple = createMultiplier(3);
// const quadruple = createMultiplier(4);

// double(3)



//--------------------------------------------------------
// Closure

// const createPrinter = () => {
//   const myFavoriteNumber = 13;

//   return () => console.log(`My favorite number is ${myFavoriteNumber}`);
// }

// const printer = createPrinter();
// printer();

// // $ npx babel-node example.js



//--------------------------------------------------------
// Implement private variable

// const Person = ({ name, age, job }) => {
//     var _name = name;
//     var _age = age;
//     var _job = job;

//     return { 
//         getName: () => _name,
//         getAge: () => _age,
//         getJob: () => _job,

//         setJob: newJob => _job = newJob,
//         setAge: newAge => _age = newAge,
//     };
// }

// const me = Person({ name: 'John', age: 38, job: "artist"});
// console.log(me.getJob());
// // me._name; // -> undefined
// me.setJob('web developer');
// console.log(me.getJob());
// // me._job; // -> undefined
// console.log(me.getAge());
// me.setAge("forever young");
// console.log(me.getAge());



//--------------------------------------------------------
// Higher-Order Functions

// const divide = (x, y) => {
//   if (y === 0) {
//     console.log('Error: dividing by zero');
//     return null;
//   }

//   return x / y;
// }

// Improve the above code using higher-order functions

// const divide = (x, y) => x / y;

// const secondArgumentIsntZero = func =>
// (...args) => {
//   if (args[1] === 0) {
//     console.log('Error: dividing by zero');
//     return null;
//   }

//   return func(...args);
// }

// const divideSafe = secondArgumentIsntZero(divide);

// console.log(divideSafe(7, 0));
// console.log(divideSafe(5, 3));



//--------------------------------------------------------
// JavaScript: function parts

//--------------------------------------------------------
// The spread operator

// const person = {
//   name: "John Whitten",
//   age: 38,
//   hairColor: "red",
//   eyeColor: "brown",
// };

// const careerData = {
//   title: "instructor",
//   company: "Oregon State University",
// };

// const personWithCareerDate = {
//   ...person,
//   ...careerData,
// };

// const updates = {
//   name: "John john"
// }

// const updatedPerson = {
//   ...person,
//   ...updates,
// };

// // // console.log(personWithCareerDate);
// // console.log(updatedPerson);

// const numbers = [1,2,3,4,5];
// // instead of -> numbers.push(6);
// const newNumbers = [
//   ...numbers,
//   6,
// ];

// console.log(newNumbers);



//--------------------------------------------------------
// Mapping









//--------------------------------------------------------
// Filtering

//--------------------------------------------------------
// Every/some

//--------------------------------------------------------
// Slicing

