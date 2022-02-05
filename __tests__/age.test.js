
import {PlanetOrbits} from '../src/js/age.js';

describe('PlanetOrbits', () => {

  /*
  beforeEach('', () => {
    x = new Object1(parameter, or 'argument');
  });
  */
  
  test('This constuctor should correctly create a PlanetOrbits object with orbital periods for each planet relative to Earth years.', () => {
    let planetOrbits = new PlanetOrbits(0.24,0.62,1.88,11.86);
    expect(mercury).toEqual(0.24);
    expect(venus).toEqual(0.62);
    expect(mars).toEqual(1.88);
    expect(jupiter).toEqual(11.86);
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
