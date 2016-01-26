'use strict';

class Person {






  constructor() {
    this.name = 'Jose';
    this.age = 26;
  }
}

//f(x) = x + 1;
//
//10 = 11;
//11 = 12



// Blueprint of an object
class Car {

  // Every time I create a Car, this code is ran
  constructor() {
    this.engine = 'V8';
    this.color = 'Red';
    this.isAutomatic = true;
  }

  // Function
  start(name) {
    console.log(name);
  }

  stop() {

  }

  gasTankFull() {

  }

  // Braces indicate the code is contained in here
}

class Pen {
  constructor() {
    // Defaults
    this.ink = 'Black';
  }


}


//var jose = new Person();
//var tyler = new Person();
//
//var pen = new Pen();
var car = new Car();
car.start("Jose's car");

//console.log(car);
//console.log(pen);
