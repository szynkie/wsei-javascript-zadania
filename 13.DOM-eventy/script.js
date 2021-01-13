//Zadanie 1
// var testEvent = document.getElementById("test-event");
// testEvent.addEventListener("click", (e) => console.log(e));
// document.addEventListener("mousemove", (e) => console.log(e));
// testEvent.addEventListener("mouseover", (e) => console.log(e));
// document.addEventListener("keydown", (e) => console.log(e));
// document.addEventListener("scroll", (e) => console.log(e));
// document.getElementById("input-test").addEventListener("input", (e) => console.log(e));

//Zadanie 2
var ex2 = document.getElementById("ex2").addEventListener("click", (e) => getDataTextFromEx2(e))
function getDataTextFromEx2(e) {
    console.log(e.toElement.getAttribute("data-text"))
}

//Zadanie 3

document.getElementById("ex3").addEventListener("mouseover", (e) => changeSquareBackgroundColor(e.toElement, "blue"));
document.getElementById("ex3").addEventListener("mouseleave", (e) => changeSquareBackgroundColor(e.target, "red"));


function changeSquareBackgroundColor(e, color) {
    console.log(e)
    e.style.backgroundColor = color;
}



//Zadanie 4
var err = document.getElementById("ex3-err");
document.getElementById("input-test").addEventListener("input", (e) => { 
    if(checkInput(e)) err.innerHTML = "Nie możesz wpisywać cyfr";
 });

function checkInput(e) {
    return /^\d+$/.test(e.data);
}


//Zadanie 5
// var x = 1;

// document.getElementById("ex5").addEventListener("click", (e) => {
//     if(x >= 10) x = 1;
//     e.target.innerHTML = x;
//     x++;
// })


//Zadanie 6
var body = document.getElementsByTagName("body")[0];
document.addEventListener("scroll", (e) => {
    if(window.scrollY >= 200) 
        body.style.backgroundColor = "red";
    else 
      body.style.backgroundColor = "white";
});



//Zaadnie 7
var numbers = document.getElementsByClassName("numbers");
console.log(numbers);
let x= i;
for(var i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
    numbers[i].addEventListener("click", function(e) {
        makeNumber(e)
    });
}

function makeNumber(i) {

    console.log(i)
}