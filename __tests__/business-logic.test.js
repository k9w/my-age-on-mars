import {UserAgeAndLifeExpectancy} from '../src/js/business-logic.js';
import {PlanetOrbits} from '../src/js/business-logic.js';


describe('UserAgeAndLifeExpectancy', () => {

  beforeEach(() => {
    let userAge = 35;
    let lifeExpectancy = 100;
    let planetChosen = "Mars";
  });
  

  it('This constructor should correctly create an object with properties for age, life expectancy, and years remaining.', () => {
    let userAgeAndLifeExpectancy = new UserAgeAndLifeExpectancy(userAge,lifeExpectancy)
    expect(userAgeAndLifeExpectancy.userAge).toEqual(35);
    expect(userAgeAndLifeExpectancy.lifeExpectancy).toEqual(100);
    expect(userAgeAndLifeExpectancy.yearsRemaining = userAgeAndLifeExpectancy.lifeExpectancy - userAgeAndLifeExpectancy.userAge).toEqual(65)
    expect(userAgeAndLifeExpectancy.yearsPastExpectancy = userAgeAndLifeExpectancy.userAge - userAgeAndLifeExpectancy.lifeExpectancy).toEqual(-65)
  });

  /*
  test('should correctly *do something else*', () => {
    
  });
  */
  
});

describe('PlanetOrbits', () => {

  test('This constuctor should correctly create a PlanetOrbits object with orbital periods for each planet relative to Earth years.', () => {
    let planetOrbits = new PlanetOrbits();
    expect(planetOrbits.mercury).toEqual(0.24);
    expect(planetOrbits.venus).toEqual(0.62);
    expect(planetOrbits.mars).toEqual(1.88);
    expect(planetOrbits.jupiter).toEqual(11.86);
  });

  /*
  it('should correctly *do something else*', () => {
    
  });
  */
  
});

describe ('checkIfOlderThanLifeExpectancy', () => {
  
  it('This function should check if the user is older than their life expectancy.', () => {
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
  });

});

/*
describe ('convertAgeAndExpectancyToPlanetChosen', () +> {

  test('Convert the age and expectancy given from Earth years to the years of the planet chosen.', () => {
    function convertAgeAndExpectancyToPlanetChosen(userAge, lifeExpectancy, planetChosen) {
      let yearsLeftOrBeyond = checkIfOlderThanLifeExpectancy(userAge, lifeExpectancy)
      g
    }
  });
});
*/
