//Zadanie 1
const car = {
    color: "blue",
    marka: "audi",
    VIN: "84816519841"
}

console.log(car.color);
console.log(car.marka);
console.log(car.VIN);

//Zadanie 2
const car = {
    color: "blue",
    marka: "audi",
    VIN: "84816519841",
    changeName: function(newName){
        this.marka = newName;
        console.log("new name in object:", this.marka);
    }
}


car.changeName("Polonez");

//Zadanie 3
let obj = {

    sumNumbers: function (tab) {
        this.sum = tab.reduce((a, b) => a + b);
        console.log(this.sum);
    }
}
obj.sumNumbers([2, 5, 3]);

//Zadanie 4
let car = {
    name: 'BMW',
    age: 12,
    horsePower: 350
}

for (let key in car) {
    console.log(key + ': ' + car[key]);
}

//Zadanie 5
let car = {
    name: 'BMW',
    age: 12,
    horsePower: 350,
    engine: {
        is: true,
        count:5
        
    }
}

for(let property in car.engine){
    console.log(`${property}: ${car.engine[property]}`)
}

//Zadanie 6
const obj = {

}
obj.what = "i'm object"
obj.hello = () => {
    console.log("Hello");
}
console.log(obj.what);
obj.hello;