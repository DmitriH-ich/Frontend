class Plant {
  constructor(growth, age) {
    this.growth = growth;
    this.age = age;
  }

  grow() {
    this.growth += 10;
    console.log(`Выростает за один год до ${this.growth} cm`);
  }
}

class Rose extends Plant {
  constructor(growth, age, numberOfFlowers) {
    super(growth, age);
    this.numberOfFlowers = numberOfFlowers;
  }
}
const newRose = new Rose(20, "1 месяц", 5);
console.log(newRose);
newRose.grow();
