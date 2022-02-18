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

Calculate years left or over expectancy.

Convert age into each planet's years.

Convert years left or over into each planet's years.

Display the user's age and years left or over in each planet's years
(8 results total).


export default class AgeCalculator {
  constructor(userAge, lifeExpectancy) {
    this.userAge = userAge;
    this.lifeExpectancy = lifeExpectancy;
  }
  
}
// Move some of the functions below into the class object above as methods.

*/

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

function findYearsLeftInEachPlanetYears(lifeExpectancy) {
  yearsLeftInEachPlanetYears[0] = Math.round(lifeExpectancy / 0.24);
  yearsLeftInEachPlanetYears[1] = Math.round(lifeExpectancy / 0.62);
  yearsLeftInEachPlanetYears[2] = Math.round(lifeExpectancy / 1.88);
  yearsLeftInEachPlanetYears[3] = Math.round(lifeExpectancy / 11.86);
  return yearsLeftInEachPlanetYears;
}

function findYearsOverInEachPlanetYears(lifeExpectancy) {
  yearsOverInEachPlanetYears[0] = Math.round(lifeExpectancy / 0.24);
  yearsOverInEachPlanetYears[1] = Math.round(lifeExpectancy / 0.62);
  yearsOverInEachPlanetYears[2] = Math.round(lifeExpectancy / 1.88);
  yearsOverInEachPlanetYears[3] = Math.round(lifeExpectancy / 11.86);
  return yearsLeftInEachPlanetYears;
}

findAgeInEachPlanetYears(userAge);
findYearsLeftInEachPlanetYears(lifeExpectancy);
findYearsOverInEachPlanetYears(lifeExpectancy);

console.log("Age: " + convertUserAgeToEachPlanetYears(userAge));
console.log("Expectancy " + convertLifeExpectancyToEachPlanetYears(lifeExpectancy));

function chooseYearsLeftOrOver(earthYearsLeft, earthYearsOver) {
  if (Math.sign(earthYearsLeft) === -1) && earthYearsOver === Math.abs(earthYearsLeft) {
    earthLifeExpectancyResult = `You have lived ${earthYearsOver} Earth years past your life expectancy.`
  } else {
    lifeExpectancyResult = `You have ${earthYearsLeft} Earth years left to live.`
  }
  return lifeExpectancyResult;
}
