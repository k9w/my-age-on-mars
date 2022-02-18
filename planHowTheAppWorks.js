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

Expected output:

 - user age in Mercury years

 - user age in Venus years

 - user age in Mars years

 - user age in Jupiter years

 - Mercury years 1) left to live or 2) past life expectancy

 - Venus years 1) left to live or 2) past life expectancy

 - Mars years 1) left to live or 2) past life expectancy

 - Juptier years 1) left to live or 2) past life expectancy


Here's how it would look:


User inputs age and life expectancy.

Calculate years left or over.

Convert age into each planet's years.

Convert years left or over into each planet's years.

For each of those four planets, display the user's age and years left
or over (8 results total).

*/

export default class AgeCalculator {
  constructor(userAge, lifeExpectancy) {
    this.userAge = userAge;
    this.lifeExpectancy = lifeExpectancy;
  }
  
}


// Move some of the functions below into the class object above as methods.

let userAge = 35;
let lifeExpectancy = 100;
let earthYearsLeft = (lifeExpectancy - userAge);
let earthYearsOver = (userAge - lifeExpectancy);
let ageInEachPlanetYears = [];
let yearsLeftInEachPlanetYears = [];
let yearsOverInEachPlanetYears = [];

function findAgeInEachPlanetYears(userAge) {
  ageInEachPlanetYears[0] = Math.round(userAge / 0.24);
  ageInEachPlanetYears[1] = Math.round(userAge / 0.62);
  ageInEachPlanetYears[2] = Math.round(userAge / 1.88);
  ageInEachPlanetYears[3] = Math.round(userAge / 11.86);
  return ageInEachPlanetYears;
}

function findYearsLeftEachPlanetYears(lifeExpectancy) {
  yearsLeftInEachPlanetYears[0] = Math.round(lifeExpectancy / 0.24);
  yearsLeftInEachPlanetYears[1] = Math.round(lifeExpectancy / 0.62);
  yearsLeftInEachPlanetYears[2] = Math.round(lifeExpectancy / 1.88);
  yearsLeftInEachPlanetYears[3] = Math.round(lifeExpectancy / 11.86);
  return yearsLeftInEachPlanetYears;
}

function findYearsOverEachPlanetYears(lifeExpectancy) {
  yearsOverInEachPlanetYears[0] = Math.round(lifeExpectancy / 0.24);
  yearsOverInEachPlanetYears[1] = Math.round(lifeExpectancy / 0.62);
  yearsOverInEachPlanetYears[2] = Math.round(lifeExpectancy / 1.88);
  yearsOverInEachPlanetYears[3] = Math.round(lifeExpectancy / 11.86);
  return yearsLeftInEachPlanetYears;
}

console.log("Age: " + convertUserAgeToEachPlanetYears(userAge));

console.log("Expectancy " + convertLifeExpectancyToEachPlanetYears(lifeExpectancy));




function findYearsLeft(userAge, lifeExpectancy) {
  if (Math.sign(earthYearsLeft) === -1) && earthYearsOver === Math.abs(earthYearsLeft) {
    earthLifeExpectancyResult = `You have lived ${earthYearsOver} Earth years past your life expectancy.`
  } else {
    lifeExpectancyResult = `You have ${earthYearsLeft} Earth years left to live.`
  }
  return lifeExpectancyResult;
}




function reportLifeExpectancy(yearsLeftOrOver) {
  let yearsLeftOrOver = calculateLifeExpectancy(userAge, lifeExpectancy);
  let lifeExpectancyResult;
  if (Math.sign(yearsLeftOrOver) === -1) {
    yearsLeftOrOver = Math.abs(yearsLeftOrOver);
    lifeExpectancyResult = `You have lived ${yearsLeftOrOver} Earth years past your life expectancy.`
  } else {
    lifeExpectancyResult = `You have ${yearsLeftOrOver} Earth years left to live.`
  }
  return lifeExpectancyResult;
  
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







convertLifeExpectancy();

// Show life expectancy in Earth years.
function showLifeExpectancy(yearsLeftOrOver) {
  
}

console.log("You have " + calculateLifeExpectancy(userAge, lifeExpectancy) + " Earth years left to live.");

// Show user's age in planetChosen's years.
console.log("Your age in " + planetChosen + " years is " + Math.floor(userAge / convertYears(planetChosen)) + '.');





/*

Once the above code is working, plan out what part of it to test for
and write in the project first and in what order for one test to pass
at a time.

*/
