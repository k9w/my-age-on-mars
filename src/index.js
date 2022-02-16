/*



I've been stuck on tests not passing for two days. So I wrote out a
new plan for how the app works, including some code in:

planHowTheAppWorks.js

My intention is to re-implement it here and in the other files one
test and code snippet at a time, per Test-Driven Development.

I am open to better strategies to incorporate whiteboarding and
brainstorming to better use TDD in the intended sequence and retain
some idea of what I want to write beore it's written.

For now, you can evaluate and run my in-progress code re-write on the
cmmand line with:

$ node planHowTheAppWorks.js



import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { UserAgeAndLifeExpectancy, PlanetOrbits } from './js/business-logic.js';


function clearFields() {
  $('#age-field').val("");
  $('#expectancy-field').val("");
  $('#planet-choice').val("");
  $('#result').html("");
}


function checkIfOlderThanLifeExpectancy(userAge, lifeExpectancy) {
  let yearsRemaining = lifeExpectancy - userAge;
  let yearsPastExpectancy = userAge - lifeExpectancy;
  let yearsLeftOrBeyond;
  if (yearsRemaining > yearsPastExpectancy) {
    yearsLeftOrBeyond = "years left to live";
    return yearsRemaining;
  } else {
    yearsLeftOrBeyond = "years beyond your life expectancy";
    return yearsPastExpectancy;
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

*/

