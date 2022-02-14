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



$(document).ready(function() {
  $('#form').submit(function() {
    let userAge = $('#age-field').val();
    let lifeExpectancy = $('#expectancy-field').val();
    let planetChosen = $('#planet-choice').val();
    let userAgeAndLifeExpectancy = new UserAgeAndLifeExpectancy(userAge, lifeExpectancy);
    let planetOrbits = new PlanetOrbits(planetChosen);
    clearFields();
  });
});
