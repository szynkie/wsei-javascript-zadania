//Zadanie 1
function returnTagsFromMoreDivs(list) {
    var tags = [];
    for (var i = 0; i < list.length; i++)
        tags.push(list[i].tagName);

    return tags;
}

var moreDivs = document.getElementsByClassName("more-divs");
console.log(returnTagsFromMoreDivs(moreDivs));


//Zadnie 2
var shortList = document.getElementsByClassName("short-list")[0];
function showData(shortList) {
    console.log(shortList.innerHTML);
    console.log(shortList.outerHTML);
    console.log(shortList.className);
    console.log(shortList.classList);
    console.log(shortList.dataset);
}

showData(shortList);

//Zadanie 3
var element = document.getElementById("datasetCheck");
var firstNumber = element.getAttribute("data-numberOne");
var secondNumber = element.getAttribute("data-numberTwo");
var thirdNumber = element.getAttribute("data-number-three");

function sum(one, two, three) {
    return +one + +two + +three;
}

function subtract(one, two, three) {
    return three - two - one;
}

console.log(sum(firstNumber, secondNumber, thirdNumber), subtract(firstNumber, secondNumber, thirdNumber));

//Zadanie 4
document.getElementById("spanText").innerHTML = "Zmieniam tekst";

//Zadanie 5
document.getElementById("spanText").classList.add("any-class");

//Zadanie 6

var classes = document.getElementById("classes");

function manageClasses(classes) {
    classes.classList.forEach(e => console.log(e));
    var divClass = "";
    classes.classList.forEach(e => divClass = divClass + (divClass != "" ? ' + ' : '') + e);
    console.log(divClass);

    classes.classList.remove(...classes.classList);
    console.log("Usunięto wszystkie klasy");
}

manageClasses(classes);

//Zadanie 7
var longList = document.getElementById("longList").getElementsByTagName("li");
function addMissingDataTextAttribute(element) {
    for(var i = 0; i < element.length; i++) {
        var attribute = element[i].getAttribute("data-text");
        if(!attribute) element[i].setAttribute("data-text", "text");
    }
}

addMissingDataTextAttribute(longList);


//Zadanie 8
function makeObject(someString) {
    var string = { newClass: someString };
    setToDivId(string);

}

function setToDivId(objectWithSomeString) {
    document.getElementById("myDiv").classList.add(objectWithSomeString.newClass);
}

makeObject("sample");

// Zadanie 9
const addFunc = (num) => {
    const newClass = num % 2 === 0 ? "even" : "odd";
    console.log(num, newClass);
    document.getElementById("numbers").classList.add(newClass);
  };
  addFunc(Math.floor(Math.random() * 11));
  
  // Zadanie 10
  const getValues = (elem) => [...elem.children].map((e) => e.innerText);
  console.log(getValues(document.getElementById("longList")));
  
  // Zadanie 11
  const changeValues = (elem) => {
    [...elem.children].forEach((e) => {
      e.setAttribute("old-value", e.innerText);
      e.innerText = Math.floor(Math.random() * 11);
    });
  };
  changeValues(document.getElementById("longList"));