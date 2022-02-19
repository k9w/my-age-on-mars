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
  
}



