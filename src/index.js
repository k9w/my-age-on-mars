import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PlanetOrbits from './js/business-logic.js';
import UserAgeAndLifeExpectancy from './js/business-logic.js';

function clearFields() {
  $('#user-age').val("");
  $('#life-expectancy').val("");
  $('#result').html("");
}
