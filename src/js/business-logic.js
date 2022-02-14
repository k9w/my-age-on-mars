
export class UserAgeAndLifeExpectancy {
  constructor(userAge, lifeExpectancy) {
    this.userAge = userAge;
    this.lifeExpectancy = lifeExpectancy;
    this.yearsRemaining = lifeExpectancy - userAge;
    this.yearsPastExpectancy = userAge - lifeExpectancy;
  }
}

export class PlanetOrbits {
  constructor() {
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;
  }
}
