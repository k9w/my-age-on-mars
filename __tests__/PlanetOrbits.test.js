
import {PlanetOrbits} from '../src/js/PlanetOrbits.js';

describe('PlanetOrbits', () => {

  /*
  beforeEach('', () => {
    x = new Object1(parameter, or 'argument');
  });
  */
  
  test('This constuctor should correctly create a PlanetOrbits object with orbital periods for each planet relative to Earth years.', () => {
    let planetOrbits = new PlanetOrbits();
    expect(planetOrbits.mercury).toEqual(0.24);
    expect(planetOrbits.venus).toEqual(0.62);
    expect(planetOrbits.mars).toEqual(1.88);
    expect(planetOrbits.jupiter).toEqual(11.86);
  });

  /*
  it('should correctly *do something esle*', () => {
    
  });
  */
  
});

/*
describe('', () => {

  beforeEach('', () => {
    x = new Object2(parameter, or 'argument');
  });
  
  it('should correctly *do something*', () => {
    
  });

  test('should correctly *do something esle*', () => {
    
  });
  
});
*/
