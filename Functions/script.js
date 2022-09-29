'use strict';



///////////////////////////////////////
// Coding Challenge #2

/*
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/


(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  let num = 1;
 const exp = function () {
   header.style.color = 'blue';
   console.log(num++);
   console.dir(exp);
 };
 document.querySelector('body').addEventListener('click', exp );

})();


{
  function danielIIFE() {
    console.log("IIFE running");
  }
  danielIIFE();
}

danielIIFE();









// const secureBooking = function() {
//   let passengerCount = 0;
//
//   return function() {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   }
// }
//
// const booker = secureBooking();
//
// booker();
// booker();
// booker();
//
// console.dir(booker);
//
//
// const num = "18";
// console.log(num.padStart(2, '0'));
//
//









///////////////////////////////////////
// Coding Challenge #1

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(prompt(this.question + '\n' + this.options.join('\n') + '\n(Write option number)'));
//   typeof answer === 'number' && answer < this.answers.length &&  this.answers[answer]++;
//   return this.displayResults();
//   },
//   displayResults(type = 'array') {
//     type === 'array' && console.log(this.answers);
//     type === 'string' && console.log(`Poll results are ${this.answers.join(', ')}`);
//   },
// };
//
//
// const answerPoll = document.querySelector('.poll');
//
// answerPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));
//
//
//
// poll.displayResults.call({answers: [1,2,3]}, 'string');
//
// //IIFE Immediately invoked function expressions
// (function () {
//   console.log("Man's too hot!!");
// })();
//
// {
//   const isPrivate = '1234';
// }











// const addTax = (rate) => value => value + value * rate;
// // const addVAT = addTax.bind(null, 0.23);
// const addNew = addTax(0.2);
//
//
// console.log(addNew(100));






// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(`${name} booked a seat on the ${this.airline} flight ${this.iataCode}${flightNum}`);
//     this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
//   }
// }
//
// lufthansa.book(245, 'Daniel Chibuogwu');
// lufthansa.book(359, 'Emmanuel Chibuogwu');
// console.log(lufthansa);
//
// const eurowings = {
//   name: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
//
//
// }
//
// // const book = lufthansa.book;
//
// book.call(eurowings, 23, "Sam Smith");
//
// //Bind
// const bookEW = book.bind(eurowings);

// bookEW(23, 'Steven Williams');



// const greet = function(greeting) {
//   return function(name) {
//     console.log (`${greeting} ${name}`)
//   }
// }
// const greeterHey = greet('Hey');
//
// greeterHey('Daniel');
// greeterHey('Steven');

// const greet = greeting => name => console.log (`${greeting} ${name}`);
//
//
// const greeterHey = greet('Hello');
//
// greeterHey('Daniel');
// greeterHey('Steven');
//


// const oneWord = function(str) {
//   return str.replace(/ /g, "").toLowerCase();
// }
//
//
// const upperFirstWord = function(str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(),  ...others].join(" ");
// }
//
// const transformer = function(str,  fn) {
//   console.log(`original string: ${str}`)
//   console.log(`Transformed string: ${fn(str)}`);
//
//   console.log(`Transformed by: ${fn.name}`);
// }
//
// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);
