//Zadanie 1
const lists = document.querySelectorAll('.list');

console.log(lists);

//Zadanie 2
function getElementsByTag(tag){
    return document.querySelectorAll(tag);
}

const elements = getElementsByTag("li");
console.log(elements)

//Zadanie 3
var list = document.getElementById("list"); 

console.log(list);

//Zadanie 4
var allLi = getTags("li");
var allUl = getTags("ul");
var allSpans = getTags("span");
var spanElementsInSpans = document.getElementById("spans").getElementsByTagName("span");

function writeResult(li, ul, spans, classLi,spansInSpans) {
    console.log("All li elements: ", li);
    console.log("All ul elements: ", ul);
    console.log("All span elements", spans);
    console.log("All li with 'li' class: ", classLi);
    console.log("All spans in element with id 'spans': ", spansInSpans);
}
writeResult(allLi, allUl, allSpans, listClassElements, spanElementsInSpans);