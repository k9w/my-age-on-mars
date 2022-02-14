import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import UserAgeAndLifeExpectancy from './js/business-logic.js';
import PlanetOrbits from './js/business-logic.js';

function clearFields() {
  $('#age-field').val("");
  $('#expectancy-field').val("");
  $('#planet-choice').val("");
  $('#result').html("");
}

function checkIfOlderThanLifeExpectancy(userAge, lifeExpectancy) {
  let yearsRemaining = lifeExpectancy - userAge;
  let yearsPastExpectancy = userAge - lifeExpectancy;
  let yearsLeftOrBeyond
  if (yearsRemaining > yearsPastExpectancy) {
    yearsLeftOrBeyond = "years left to live"
    return yearsRemaining
  } else {
    yearsLeftOrBeyond = "years beyond your life expectancy"
    return yearsPastExpectancy
  }
}



$(document).ready(function() {
  $('#form').submit(function() {
    let userAge = $('#age-field').val();
    let lifeExpectancy = $('#expectancy-field').val();
    let planetChosen = $('#planet-choice').val();
    let userAgeAndLifeExpectancy = new UserAgeAndLifeExpectancy(userAge, lifeExpectancy);
    let planetOrbits = new PlanetOrbits(planetChosen);
    clearFields();
    let result = convertAgeInEarthYearsToAgeInOtherPlanetYears(userAge, lifeExpectancy, planetChosen);
  });
});
