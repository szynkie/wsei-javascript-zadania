//Zadanie 1
console.log(document.getElementById("buz").parentElement);
console.log(document.getElementById("buz").nextSibling);
console.log(document.getElementById("foo").children);
console.log(document.getElementById("foo").parentElement);
console.log(document.getElementById("foo").children[0]);
console.log(document.getElementById("foo").children[Math.floor(document.getElementById("foo").children.length / 2)]);

//Zadanie 2
function setEventListenerOnEx2Element(ex2Element) {
    ex2Element.addEventListener("click", function () {
        var divs = ex2Element.getElementsByTagName("div");
        for (var i = 0; i < divs.length; i++)
            if (divs[i].innerText && divs[i].children.length == 0) console.log(divs[i].innerText);
    });
}


var ex2 = document.getElementById("ex2");
setEventListenerOnEx2Element(ex2);

//Zadanie 3
    
        
        function setEventListenerOnEx3Buttons(ex3Element) {
            var divs = ex3.getElementsByTagName("div");
            for (var i = 0; i < divs.length; i++) {
                let div = divs[i];
                div.getElementsByTagName("button")[0].addEventListener("click", function () {
                    var temp = div.getElementsByTagName("span")[0];
                    temp.style.display = (temp.style.display == "none" ? "block" : "none");
                });
            }
        }
        var ex3 = document.getElementById("ex3");
        setEventListenerOnEx3Buttons(ex3);
        

//Zadanie 4
function setEventListenerOnEx3Buttons(ex3Element) {
    var divs = ex3.getElementsByTagName("div");

    for (var i = 0; i < divs.length; i++) {
        let div = divs[i];
        div.getElementsByTagName("button")[0].addEventListener("click", function () {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            div.parentElement.style.backgroundColor = randomColor;
        });
    }
}

var ex3 = document.getElementById("ex3");

setEventListenerOnEx3Buttons(ex3);



//Zadanie 6
var ex6 = document.getElementById("ex6");

var first = ex6.firstChild.firstChild.firstChild;
var second = ex6.firstChild.parentElement.firstChild.firstChild.nextSibling.parentElement;
var thrid = ex6.parentElement.firstChild.parentElement.childNodes[1].firstChild.firstChild.firstChild;