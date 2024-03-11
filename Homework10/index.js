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

/* 

Рассмотренный пример на уроке:

class Plant{
  constructor (height = 200, age =1){
      this.height = height;
      this.age = age;
  }
  grow(){
      this.height+=10
  }
}

const bamboo = new Plant();
console.log(bamboo);

class Rose extends Plant{
  constructor(height, age, numberOfFlowers){
      super(height, age)
      this.numberOfFlowers = numberOfFlowers;
  }
}

const rose = new Rose (12, 12, 12)
console.log(rose);
rose.grow();
console.log(rose) */