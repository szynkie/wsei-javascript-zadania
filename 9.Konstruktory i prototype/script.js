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
