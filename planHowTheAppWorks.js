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

 - ageInEarthYears

 - earthLifeExpectancy

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

*/


export default class AgeCalculator {
  constructor(ageInEarthYears, earthLifeExpectancy) {
    this.ageInEarthYears = 35;         // ageInEarthYears;
    this.earthLifeExpectancy = 100;    // leave this one hard-coded. earthLifeExpectancy;
    this.earthYearsLeft = (earthLifeExpectancy - ageInEarthYears);
    this.earthYearsOver = (ageInEarthYears - earthLifeExpectancy);
    this.planetOrbitsPerEarthYear = {
      'Mercury': 0.24,
      'Venus': 0.62,
      'Mars': 1.88,
      'Jupiter': 11.86
    }
  }
  findAgeInEachPlanetYears(planet) {
    return this.planetOrbitsPerEarthYear[planet];
  }
}

let ageCalculator = new AgeCalculator ;

console.log(`Jupiter's year is ${ageCalculator.planetOrgitsPerEarthYear[Jupiter]} times longer than Earth's.`);

// Move some of the functions below into the class object above as methods.

let ageInEarthYears = 135;
let earthLifeExpectancy = 100;
let earthYearsLeft = (earthLifeExpectancy - ageInEarthYears);
let earthYearsOver = (ageInEarthYears - earthLifeExpectancy);
let ageInEachPlanetYears = [];
let yearsLeftInEachPlanetYears = [];
let yearsOverInEachPlanetYears = [];

function findAgeInEachPlanetYears(ageInEarthYears) {
  ageInEachPlanetYears[0] = Math.round(ageInEarthYears / 0.24);
  ageInEachPlanetYears[1] = Math.round(ageInEarthYears / 0.62);
  ageInEachPlanetYears[2] = Math.round(ageInEarthYears / 1.88);
  ageInEachPlanetYears[3] = Math.round(ageInEarthYears / 11.86);
  return ageInEachPlanetYears;
}

function findYearsLeftInEachPlanetYears(earthLifeExpectancy) {
  yearsLeftInEachPlanetYears[0] = Math.round(earthYearsLeft / 0.24);
  yearsLeftInEachPlanetYears[1] = Math.round(earthYearsLeft / 0.62);
  yearsLeftInEachPlanetYears[2] = Math.round(earthYearsLeft / 1.88);
  yearsLeftInEachPlanetYears[3] = Math.round(earthYearsLeft / 11.86);
  return yearsLeftInEachPlanetYears;
}

function findYearsOverInEachPlanetYears(earthLifeExpectancy) {
  yearsOverInEachPlanetYears[0] = Math.round(earthYearsOver / 0.24);
  yearsOverInEachPlanetYears[1] = Math.round(earthYearsOver / 0.62);
  yearsOverInEachPlanetYears[2] = Math.round(earthYearsOver / 1.88);
  yearsOverInEachPlanetYears[3] = Math.round(earthYearsOver / 11.86);
  return yearsOverInEachPlanetYears;
}

function chooseYearsLeftOrOver() {
  if (earthYearsLeft === Math.abs(earthYearsLeft)) {
    console.log(`You have ${findYearsLeftInEachPlanetYears(earthLifeExpectancy)[3]} of Jupiter's years left to live.`);
  } else if (Math.sign(earthYearsLeft) === -1) {
    console.log(`You have lived ${findYearsOverInEachPlanetYears(earthLifeExpectancy)[3]} of Jupiter's years over your life expectancy.`);
  }
}

console.log(`Your age on Jupiter is ${findAgeInEachPlanetYears(ageInEarthYears)[3]}.`);
chooseYearsLeftOrOver();

