
import {PlanetOrbits} from '../src/js/business-logic.js';

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

describe('UserAgeAndLifeExpectancy', () => {
  
  it('should correctly *do something*', () => {
    let userAgeAndLifeExpectancy = new UserAgeAndLifeExpectancy(36,100)
    expect(userAge).toEqual(36);
    expect(lifeExpectancy).toEqual(100);
    expect(yearsRemaining = lifeExpectancy - userAge).toEqual(64)
  });

  /*
  test('should correctly *do something else*', () => {
    
  });
  */
  
});
