// export default - add that to the line below when using separate business and UI files.

class AgeCalculator {
  constructor(ageInEarthYears, earthLifeExpectancy) {
    this.ageInEarthYears = 35;         // ageInEarthYears;
    this.earthLifeExpectancy = 100;    // leave this one hard-coded.
earthLifeExpectancy;
    this.earthYearsLeft = (earthLifeExpectancy - ageInEarthYears);
    this.earthYearsOver = (ageInEarthYears - earthLifeExpectancy);
    this.planetOrbitsPerEarthYear = {
      'Mercury': 0.24,
      'Venus': 0.62,
      'Mars': 1.88,
      'Jupiter': 11.86
    }
  }
  findAgeInEachPlanetYears(this.planet) {
    return this.planetOrbitsPerEarthYear[planet];
  }
}



// UI logic

import $ from 'jquery';
// import AgeCalculator from './js/business-logic.js';

function clearFields() {
  $('#result').text('');
}

function showResult(ageCalculator.ageInEarthYears) {
  let ageCalculator = new AgeCalculator(age-input);
  clearFields();
  console.log(`Jupiter's year is ${ageCalculator.findAgeInEachPlanetYears(planet)} times longer than Earth's.`);

$(#age-input).on('click', () => {
  showResult(ageInEarthYears)
});
}

