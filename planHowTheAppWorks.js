/*

This document outlines my thought process while designing this
application.

I have struggled with Test-Driven Development (TDD) and knowing what
tests and code to write first. Therefore I use this file to brainstorm
and code out the application ahead of time, likely without the User
Interface, since the independent project assignment did not requie it.

Once the code works well enough, I plan to re-implement it using
TDD. I will sequence out what parts of the code to write a good fail
test for, then insert the code, then pass the test, then move on to
the next test, etc.

I am open to learning better strategies to whiteboard the application
and know what to test for and write in what sequence, so that I don't
have to pre-write the code like this in the future.

At the moment, the code in this file has hard-coded input values and
partially works. You can run it on the command line with NodeJS:

$ node planHowTheAppWorks.js


Expected input:

 - userAge

 - lifeExpectancy

 - planetChosen


Expected output:

For the chosen planet's years, show:

 - convertedAge

 - yearsRemaining or yearsPastExpectancy



Define a class object AgeCalculator with the following properties.

 - Convert userAge in Earth years to number of the chosen planet's
   years.

 - Show in that planet's years how many years the user has left to
   live or has lived past their life expectancy. The number of years
   should be positive.


Here's how it would look:

function AgeCalculator(userAge, lifeExpectancy, planetChosen);

AgeCalculator.prototype methods:

convert the code below into prototype methods of class AgeCalculator
as applicable once it is tested working.

*/



function calculateLifeExpectancy(userAge, lifeExpectancy) {
  let yearsLeftOrOver = (lifeExpectancy - userAge)
  return yearsLeftOrOver;
  // This could be a negative number. We'll deal with that below.
}

function convertYears(planetChosen) {
  let yearConversion;
  switch (planetChosen) {
    case ("Mercury"):
      yearConversion = 0.24;
      break;
    case ("Venus"):
      yearConversion = 0.62;
      break;
    case ("Mars"):
      yearConversion = 1.88;
      break;
    case ("Jupiter"):
      yearConversion = 11.86;
      break;
    default:
      alert("No planet chosen.");
    }
  return yearConversion;
}

function convertAge(userAge, planetChosen) {
  let convertedAge = Math.floor(userAge / convertYears(planetChosen));
  return convertedAge;
}

function convertLifeExpectancy() {
  let convertedLifeExpectancy = (calculateLifeExpectancy(userAge, lifeExpectancy) / convertYears(planetChosen));
  return convertedLifeExpectancy;
  // This could be a negative number. We'll deal with that below.
}

/* Bug:

The value for planetChosen must be capitalized in order to be
capitalized in the output displayed to the user. This only matters if
the planet name is typed in, not for multiple choice radio buttons or
a dropdown menu.

*/

let userAge = 35;
let lifeExpectancy = 100;
let planetChosen = 'Mars';

convertAge(userAge, planetChosen);



// 02-16 - continue working here



convertLifeExpectancy();

// Show life expectancy in Earth years.
function showLifeExpectancy(yearsLeftOrOver) {
  if (Math.sign(yearsLeft) === -1) {
    yearsLeftOrOver = Math.abs(yearsLeftOrOver);
  }
  
}

console.log("You have " + calculateLifeExpectancy(userAge, lifeExpectancy) + " Earth years left to live.");

// Show user's age in planetChosen's years.
console.log("Your age in " + planetChosen + " years is " + Math.floor(userAge / convertYears(planetChosen)) + '.');





/*

Once the above code is working, plan out what part of it to test for
and write in the project first and in what order for one test to pass
at a time.

*/
