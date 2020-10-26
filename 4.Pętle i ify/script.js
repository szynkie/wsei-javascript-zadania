//Zadanie 1
let n1 = 15,
n2 = 6;
 if(n1>n2)
 {
     console.log(n1);
 }
 else
{
    console.log(n2);
}
//15

//Zadanie 2
let n1 = 2,
n2 = 4,
n3 = 5;

if(n1>n2 && n1>n3){
    console.log(n1 + ' jest najwieksze');
}else if(n2>n1 && n2>n3){
    console.log(n2 + ' jest najwieksze');
}else{
    console.log(n3 + ' jest najwieksze');
}
//5 jest najwieksze

//Zadanie 3
for (let i=0; i<10; i++){
    console.log("Lubie JavaScript");
}
//10*Lubie JavaScript

//Zadanie 4
let result = 0;
for(let i=1; i<=10; i++){
    result += i;
}
console.log(result);
//55

//Zadanie 5
var n = 5;
for (let i=0; i<n; i++){
    if (i%2 === 0){
    console.log(i + " parzysta");
}else{
    console.log(i + " nieparzysta");
}
}
//0 parzysta...

//Zadanie 6
let n= 5;
for(let i =0; i<n; i++){
    for(let j = 0; j<n; j++){
        console.log("i= " + i +", j= " + j);
    }
}
//i= 0, j= 0...

//Zadanie 7
for(let i=0; i<=100; i++){
    if(i%3===0 && i%5===0){
        console.log(`${i} FizzBuzz`);
    }else if(i%3 === 0){
        console.log(`${i} Fizz`);
    }else if(i%5 === 0){
        console.log(`${i} Buzz`);
    }else{
        console.log(`${i}`);
    }
}
//0 FizzBuzz...