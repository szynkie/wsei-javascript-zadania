//Zadanie 1
function Person (name,lastname,age,country,city){
    
    this.name = name;
    this.lastname = lastname;
    this.age=age ;
    this.country=country;
    this.city=city;
    
    this.showDetails = function(){
      console.log(`Person: ${this.name} ${this.lastname} age: ${this.age} country: ${this.country} city: ${this.city}`);  
    }
    
    this.addOneYear = function() {
        ++this.age;
    }
    
}

const person =new Person ('leon','nowak',19,'poland','katowice');
const person2 =new Person ('kamil','kowal',29,'poland', 'krakow');

person.showDetails();
person.addOneYear();
person.addOneYear();
person.addOneYear();
person.showDetails();

person2.showDetails();
person2.addOneYear();
person2.addOneYear();
person2.addOneYear();
person2.showDetails();

//Zadanie 1*
const person = {
    name: "Michał",
    surname: "Seweryn",
    age: 1,
    country: "Poland",
    city: "Kraków",
  };
  
  const secondPerson = {
    name: "Seweyn",
    surname: "Michal",
    age: 12,
    country: "Poland",
    city: "Kraków",
  };
  
  //this odwołuje się do obiektu dla którego est wywołany.
  function showInfo() {
    console.log(
      `Personal info: ${this.name} ${this.surname} ${this.age} ${this.country} ${this.city}`
    );
  }
  
  function changeAge() {
    this.age++;
  }
  
  person.showInfo = showInfo;
  secondPerson.showInfo = showInfo;
  person.changeAge = changeAge;
  secondPerson.changeAge = changeAge;
  
  person.showInfo();
  secondPerson.showInfo();
  
  person.changeAge();
  person.changeAge();
  console.log("person.age: ", person.age);
  
  secondPerson.changeAge();
  secondPerson.changeAge();
  
  console.log("person.age: ", secondPerson.age);
  
  // #### Zadanie 2


  console.log("\nZadanie 2:");
  
  person.favouriteMeal = [];
  secondPerson.favouriteMeal = [];
  
  function showMeal() {
    console.log("Ulubione posiłki: ", this.favouriteMeal.join(", "));
  }
  
  function addMeal(meal) {
    this.favouriteMeal.push(meal);
  }
  
  person.showMeal = showMeal;
  person.addMeal = addMeal;
  secondPerson.showMeal = showMeal;
  secondPerson.addMeal = addMeal;
  
  person.addMeal("schabowy");
  person.addMeal("placek");
  person.addMeal("pierogi");
  person.showMeal();
  
  secondPerson.addMeal("schabowy 2");
  secondPerson.addMeal("placek 2");
  secondPerson.addMeal("pierogi 2");
  secondPerson.showMeal();

  //Zadanie 3
  function Calculator( number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
    
    this.sum = function(){
        let sum;
        sum = this.number1 + this.number2;
        console.log(sum);    
    }
    this.ode = function(){
        let ode;
        ode = this.number1 - this.number2;
        console.log(ode);
    }
    this.mul = function(){
        let mul;
        mul = this.number1 * this.number2;
        console.log(mul);
    }
    this.divi = function(){
        let divi;
        if(this.number2 === 0) {
            console.log("Liczba druga nie może byc równa zero")
        }else{
            divi = this.number1 / this.number2;
            console.log(divi);
        }
    }
}
const cal1 = new Calculator(5, 6);
const cal2 = new Calculator(5, 0);

cal1.sum();

//Zadanie 4
function Ladder (){
    this.steps = 0;
    
    this.up = function(){
        this.steps++;
    }
    
    this.down = function(){
        if(this.steps > 0){
            this.steps--;
        }else {
            console.log('Jesteś na ziemi');
        }
        
    }
    this.showLevel = function(){
        console.log(this.steps);
    }
}

const ladder = new Ladder();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.down();
ladder.showLevel();