'use strict';  //has to be the very first to activate strict mode. more secure code, avoids bugs. it prevents use to do some things and makes mistakes more visable
//cant use keywords as variables like private, if, audio, ect..

// FUNCTIONS

function logger() {
  console.log('My name is Logan')
}

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0)); 