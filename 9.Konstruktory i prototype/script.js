//Zadanie 1
function Person(name, surname, age, country, city, language) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;
    
    this.changeAge = age => this.age = age;
    this.changeCity = city => this.city = city;
}

const user1 = new Person('Mateusz', 'Kapusta', 25, 'Poland', 'Cracov', 'Polish')
const user2 = new Person('Mateusz2', 'Kapusta2', 252, 'Poland2', 'Cracov2', 'Polish')

user1.changeAge(100000)
console.log(user1)
console.log(user2)

// Zadanie 2
function Calculator() {
  this.memory = [];
  this.showMemory = () =>
    this.memory.forEach((e) =>
      console.log(`${e.a} ${e.operation} ${e.b} = ${e.result}`)
    );
  this.clearMemory = () => (this.memory = []);
  this.add = (a, b) => calc(a, b, a + b, "+");
  this.subtract = (a, b) => calculate(a, b, a - b, "-");
  this.multiply = (a, b) => calculate(a, b, a * b, "*");
  this.divide = (a, b) =>
    b == 0 ? "Cannot divide by zero!" : calculate(a, b, a / b, "/");
  this.calc = (a, b, result, operation) =>
    this.memory.push({ a, b, result, operation }).result;
}

const cal1 = new Calculator();
const cal2 = new Calculator();

cal1.sum(4, 1);
cal1.sub(8, 2);
cal2.mul(2, 1);
cal2.div(8, 8);
cal1.print();
cal2.clear();
cal2.print();

// Zadanie 3
class Game {
  constructor() {
    this.number = 0;
  }

  checkNumber(interval) {
    if (this.number > 5) {
      clearInterval(interval);
    }
  }

  randomNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    this.number = randomNumber;

    clearInterval(interval);
    interval = setInterval(this.randomNumber.bind(this), 1000);
    this.checkNumber(interval);
  }
}

let g1 = new Game();
g1.randomNumber();

let g2 = new Game();
g2.checkNumber();
