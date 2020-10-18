//Zadanie 1
const randomName = () =>{
    console.log("Udało się!");
}
randomName();

//Zadanie 2

//Zadanie 3

//Zadanie 4
const func2 = (str) =>{
    let c = 0;
    let time = setInterval(() => {
        console.log(str);
        if(++c >=5)
        {
            clearInterval(time);
            console.log("Koniec");
        }
    }, 3000);
}
func2('string');