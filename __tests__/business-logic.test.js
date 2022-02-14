import {UserAgeAndLifeExpectancy} from '../src/js/business-logic.js';
import {PlanetOrbits} from '../src/js/business-logic.js';

describe('UserAgeAndLifeExpectancy', () => {
  
  it('This constructor should correctly create an object with properties for age, life expectancy, and years remaining.', () => {
    let userAgeAndLifeExpectancy = new UserAgeAndLifeExpectancy(36,100)
    expect(userAgeAndLifeExpectancy.userAge).toEqual(36);
    expect(userAgeAndLifeExpectancy.lifeExpectancy).toEqual(100);
    expect(userAgeAndLifeExpectancy.yearsRemaining = userAgeAndLifeExpectancy.lifeExpectancy - userAgeAndLifeExpectancy.userAge).toEqual(64)
    expect(userAgeAndLifeExpectancy.yearsPastExpectancy = userAgeAndLifeExpectancy.userAge - userAgeAndLifeExpectancy.lifeExpectancy).toEqual(-64)
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
    let userAge = 35;
    let lifeExpectancy = 100;
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



