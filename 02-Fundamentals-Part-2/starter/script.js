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







 // CODING CHALLENGE #2

 /*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

const calcTip = function(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}


// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};


//BMI = mass / height ** 2 = mass / (height * height)
