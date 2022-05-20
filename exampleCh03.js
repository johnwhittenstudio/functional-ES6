// const add = (x, y) => x + y;

const { validateUseBuiltInsOption } = require("@babel/preset-env/lib/normalize-options")

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

// // How we used to double numbers in an array
// const doubledNumbers = [];

// for (let i = 0; i < doubledNumbers.length; i++) {
//   const doubled = numbers[i] * 2;
//   doubledNumbers.push(doubled);
// }


// const numbers = [1,2,3,4,5];
// numbers.reverse();
// console.log(numbers);



// non-functional way of using mapping

// const numbers = [1,2,3,4,5];
// const doubledNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   doubledNumbers.push(numbers[i] * 2);
// }
//  console.log(doubledNumbers);

// ***** re-write the above functional in a functional programming way *****
// const numbers = [1,2,3,4,5];
// const double = x => x * 2;
// const doubledNumbers = numbers.map(double);
// console.log(doubledNumbers);



//--------------------------------------------------------
// Filtering

// myArray.filter(element => {
//   ...return true; // (or false)
// });

// the difference between filter and map is the TYPE of function we pass into it
// in map we pass in a function that returns a value for each element in the array
// for filter we pass in a function that returns either true or false


// const numbers = [1,2,3,4,5,6,7,8,9,10];

// var evenNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i]);
//   }
// }

 // **** now we'll simplify the above function using filter ****

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// const isEven = x => x % 2 === 0; 

// const evenNumbers = numbers.filter(isEven);

// console.log(evenNumbers);


// const words = [
//   'hello',
//   'goodbye',
//   'the',
//   'Antarctica',
// ];

// // const isLongerThan5 = word => word.length > 5;
// // const longWords = words.filter(isLongerThan5);
// // console.log(longWords);


// ***** write a higher order function to do this mith minimal code *****

// const createLengthTest = minLength => 
//     word => word.length > minLength;
// const longWords = words.filter(createLengthTest(5));
// console.log(longWords);

// This here is a very nice functional code



//--------------------------------------------------------
// Every/some

// we pass them a function that reurns either true or false, but every/some returns a boolean (only true or false)

// -- every returns true if and only if a given condition is true for all elements in an array
// -- some returns true if the conditions are true any of the elements in an array, false if and only if every condition is false for all elements in the array

// example

// const employees = [{
//   name: 'John Whitten',
//   salary: 90000,
// }, {
//   same: 'Katherine Spinella',
//   salary: 120000,
// }, {
//   name: 'Franny Danza',
//   salary: 1500000,
// }, {
//   name: 'MoonPie Danger',
//   salary: 830000,
// }];

// const makesMoreThanOneMillion = employee =>
//     employee.salary > 1000000;
// const result = employees.some(makesMoreThanOneMillion);

// console.log(result);

// //------next example function-------//

// const formValues = [
//   'Mike',
//   'Stephen',
//   'California',
//   'developer',
// ];

// const isNotEmpty = string => !!string;
// const allFieldsFilled = formValues.every(isNotEmpty);
// console.log(allFieldsFilled);



//--------------------------------------------------------
// Slicing

// not a higher order function, does nat take a function as an argument, has important way to work with arrays

// sort(), reverse(), push(), pop() all mutate an Array, which is prohibited in functional programming

// turn mutating functions into non-mutating function using SLICE()

// slice makes a copy of an array

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numbers.slice().reverse());
// console.log(numbers);




//--------------------------------------------------------
// Sorting

// .sort is a mutating function!

//----!!!----myArray.slice().sort();-----!!!---- 


// const mixedUpNumbers = [10, 5, 7, 4, 1, 9, 2, 6, 3, 8];
// const ascending = (a, b) => {
//     if (a < b) return -1;
//     if (a > b) return 1;
//     return 0;
// }
// const sortedNumbers = mixedUpNumbers.slice().sort(ascending);
// console.log(sortedNumbers);

// **** in order to sort in descending order, we'll just need to change the > and < around *****

// const mixedUpNumbers = [10, 5, 7, 4, 1, 9, 2, 6, 3, 8];
// const descending = (a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
//   return 0;
// }
// const sortedNumbers = mixedUpNumbers.slice().sort(descending);
// console.log(sortedNumbers);



//--------------------------------------------------------
// Reducing

// reduce() takes an array of data and reduce it to a single validateUseBuiltInsOption, like a sum or average

// myArray.reduce((acc, element) => 
//   ...
//   return ...
// );


// const sum = myArray.reduce((acc, element) => {
//   return acc + element, 0);
// }


// Find the sum of an array of numbers

// const numbers = [5, 7, 2, 40, 23, 14, 8, 4, 11];
// const sum = numbers.reduce((acc, x) => {
//     console.log(`acc is ${acc}`);
//     console.log(`x is ${x}`);
//     return acc + x;
// }, 0)
// console.log(sum);


// Find the product of an array of numbers

// const numbers = [5, 7, 2, 40, 23, 14, 8, 4, 11];
// const product = numbers.reduce((acc, x) => {
//     console.log(`acc is ${acc}`);
//     console.log(`x is ${x}`);
//     return acc * x;
// }, 1) // <- make sure starting value is 1, with 0 everything is multiplied by 0 resulting in 0
// console.log(product);



//--------------------------------------------------------
// Combining Functions


/// employee info to be sorted

// const employees = [{
//   name: 'John Whitten',
//   age: 38,
//   jobTitle: 'developer',
//   salary: 90000,
// }, {
//   name: 'Jan Benson',
//   age: 43,
//   jobTitle: 'developer',
//   salary: 130000,
// }, {
//   name: 'Joe Spinella',
//   age: 39,
//   jobTitle: 'boss',
//   salary: 140000,
// }, {
//   name: 'Pickles',
//   age: 3,
//   jobTitle: 'snuggler',
//   salary: 198000,
// }, {
//   name: 'Jessi DiTillio',
//   age: 36,
//   jobTitle: 'boss',
//   salary: 1090000,
// }, {
//   name: 'Ada Lovelace',
//   age: 45,
//   jobTitle: 'developer',
//   salary: 190000,
// }, {
//   same: 'Katherine Spinella',
//   age: 36,
//   jobTitle: 'boss',
//   salary: 120000,
// }, {
//   name: 'Franny Danza',
//   age: 2,
//   jobTitle: 'snuggler',
//   salary: 1500000,
// }, {
//   name: 'MoonPie Danger',
//   age: 6,
//   jobTitle: 'stuntman',
//   salary: 830000,
// }];


//----****--- filter above info by jobTitle ----****--- 

// const developers = employees.filter(employee =>
//     employee.jobTitle === 'developer');
// console.log(developers);

// const snugglers = employees.filter(employee =>
//   employee.jobTitle === 'snuggler');
// console.log(snugglers);

// const bosses = employees.filter(employee =>
//   employee.jobTitle === 'boss');
// console.log(bosses);

// const stuntpeople = employees.filter(employee =>
//   employee.jobTitle === 'stuntman');
// console.log(stuntpeople);


//----****--- filter above info by average salaries ----****--- 

// const developers = employees.filter(employee =>
//     employee.jobTitle === 'developer');
// const developerSalaries = developers.map(developer => developer.salary);
// const totalDeveloperSalaries = developerSalaries.reduce((acc, x) => acc + x, 0);
// const averageDeveloperSalary = totalDeveloperSalaries / developerSalaries.length;
// console.log(averageDeveloperSalary);

// const nonDevelopers = employees.filter(employee =>
//   employee.jobTitle !== 'developer');
// const nonDeveloperSalaries = nonDevelopers.map(nonDev => nonDev.salary);
// const totalNonDeveloperSalaries = nonDeveloperSalaries.reduce((acc, x) => acc + x, 0);
// const averageNonDeveloperSalary = totalNonDeveloperSalaries / nonDeveloperSalaries.length;
// console.log(averageNonDeveloperSalary);




//--------------------------------------------------------
// Challenge: Recreate the map function

//--------------------------------------------------------
// Solution: Recreate the map function




