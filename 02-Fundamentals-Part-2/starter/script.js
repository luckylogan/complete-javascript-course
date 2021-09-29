'use strict';  //has to be the very first to activate strict mode. more secure code, avoids bugs. it prevents use to do some things and makes mistakes more visable
//cant use keywords as variables like private, if, audio, ect..

// FUNCTIONS

// function logger() {
//   console.log('My name is Logan')
// }

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0)); 

//function declaration

function calcAge1(birthYear) {
  return 2021 - birthYear;
}

const age1 = calcAge1(1995);

//function expression  (provides more strucure because cant call function before declaring it with this method unlike a normal function declarations)

const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
}

const age2 = calcAge2(1995);

console.log(age1, age2);


// Arrow Function 

const calcAge3 = birthYear => 2021 - birthYear; //whatever is after the arrow will be returned auto. 
const age3 = calcAge3(1995);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years` ; //must use return if multiple lines of code 
}

console.log( yearsUntilRetirement(1995, "logan") );

console.log( yearsUntilRetirement(1884, "lolo") );


// FUNCTIONS CALLING OTHER FUNCTIONS


function cutFruitPieces(fruit) {
  return fruit * 4;
}


function fruitProcessor(apples, oranges) {
  
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
  return juice;
}

console.log( fruitProcessor(2, 3) );


// REVIEWING FUNCTIONS

 //what are the 3 different types of functions and what are they're differences.


 //CODING CHALLENGE #1

 //1. Create an arrow function 'calcAverage' to calculate the average of 3 scores.

 const calcAverage = (a, b, c) => (a + b + c) / 2;

 //2. Use the function to calculate the average for both teams.

 console.log(calcAverage(44, 23, 71));

 //3. Create a function 'checkWinner' that takes the average score of each team as parameters and log the winner to the console, together with the victory paoints, according to the rule above.

 const avgDolphins = calcAverage(44, 23, 71)

 const avgKoalas = calcAverage(65, 54, 49)

 console.log(avgDolphins, avgKoalas)