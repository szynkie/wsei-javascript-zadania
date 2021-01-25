// Zadanie 1
const addElement = () => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = "<h1>New div</h1>";
    document.body.appendChild(newDiv);
  };
  addElement();
  
  // Zadanie 2
  const favFruits = ["apple", "banana", "strawberry"];
  const ul = document.createElement("ul");
  
  favFruits.forEach((e) => {
    const li = document.createElement("li");
    li.innerText = e;
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
  
  // Zadanie 3
  document.body.addEventListener("click", () => {
    const list = document.querySelectorAll(" ul li");
    list.forEach((child, i) => {
      if (i % 2 === 0) child.remove();
    });
  });
  
  // Zadanie 4
  const newButton = document.createElement("button");
  newButton.innerText = "Remove Me";
  
  newButton.addEventListener("onclick", (e) => {
    e.target.remove();
  });
  
  // Zadanie 5
  const randomNumber = Math.floor(Math.random() * 10);
  for (let i = 0; i < randomNumber; i++) {
    const divElem = document.createElement("div");
    divElem.innerText = `To jest div numer ${i}`;
    document.body.appendChild(divElem);
  }
  
  // Zadanie 6
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  
  div1.textContent = "to jest div";
  div3.textContent = "to jest div";
  span1.textContent = " to jest span";
  span2.textContent = "to jest span";
  
  div2.appendChild(div3);
  
  document.body.appendChild(div1);
  document.body.appendChild(span1);
  document.body.appendChild(div2);
  document.body.appendChild(span2);
  
  //Zadanie 7
  const arr = ["a1", "b2", "c3", "d4", "e5", "f6"];
  const list1 = document.createElement("ul");
  const list2 = document.createElement("ul");
  const button1 = document.createElement("button");
  const button2 = document.createElement("button");
  const buttonText = "move";
  
  arr.forEach((e) => {
    const li = document.createElement("li");
    li.innerText = e;
    list1.appendChild(li);
  });
  
  document.body.appendChild(list1);
  document.body.appendChild(button1);
  button1.textContent = buttonText;
  
  button1.addEventListener("click", () => {
    const lastItem1 = list1.lastChild;
    const lastItem2 = list2.lastChild;
  
    list2.insertBefore(lastItem1, lastItem2);
  
    if (list1.children.length === 0) {
      button1.disabled = true;
    } else {
      button2.disabled = false;
    }
  });
  
  document.body.appendChild(list2);
  document.body.appendChild(button2);
  button2.textContent = buttonText;
  
  button2.addEventListener("click", () => {
    const lastItem1 = list1.lastChild;
    const lastItem2 = list2.lastChild;
  
    list1.insertBefore(lastItem2, lastItem1);
  
    if (list2.children.length === 0) {
      button2.disabled = true;
    } else {
      button1.disabled = false;
    }
  });
  
  //Zadanie 8
  const form = document.createElement("form");
  const input = document.createElement("input");
  const br1 = document.createElement("br");
  const span = document.createElement("span");
  const br2 = document.createElement("br");
  const button = document.createElement("button");
  
  const spantext = "Ilocs elementow, teskt, kolor oraz typ elementy";
  const buttonText = "Utworz";
  
  form.appendChild(span);
  form.appendChild(br1);
  form.appendChild(input);
  form.appendChild(br2);
  form.appendChild(button);
  document.body.appendChild(form);
  
  span.textContent = spantext;
  button.textContent = buttonText;
  
  button.addEventListener("click", (e) => {
    e.preventDefault();
  
    const inputValue = input.value;
    const elements = inputValue.split(" ");
    console.log(elements);
    for (let i = 0; i < elements[0]; i++) {
      const element = document.createElement(elements[3]);
      element.textContent = elements[1];
      element.style.color = elements[2];
      document.body.appendChild(element);
    }
  });
  
  // Zadanie 9
  const details = ["imie", "nazwisko", "wiek", "dzieci"];
  const divMore = document.createElement("div");
  const buttonMore = document.createElement("button");
  const buttonCreate = document.createElement("button");
  
  buttonMore.textContent = "wiecej";
  buttonCreate.textContent = "uwtorz";
  buttonMore.id = "more";
  buttonCreate.id = "create";
  
  details.forEach((item) => {
    const wrapper = document.createElement("div");
    const textDiv = document.createElement("div");
    const input = document.createElement("input");
    input.className = item;
    const br = document.createElement("br");
    textDiv.textContent = item;
    wrapper.appendChild(textDiv);
    wrapper.appendChild(input);
    wrapper.appendChild(br);
  
    divMore.appendChild(wrapper);
  });
  
  document.body.appendChild(divMore);
  document.body.appendChild(buttonMore);
  document.body.appendChild(buttonCreate);
  
  buttonMore.addEventListener("click", () => {
    details.forEach((item) => {
      const wrapper = document.createElement("div");
      const textDiv = document.createElement("div");
      const input = document.createElement("input");
      input.className = item;
      const br = document.createElement("br");
      textDiv.textContent = item;
      wrapper.appendChild(textDiv);
      wrapper.appendChild(input);
      wrapper.appendChild(br);
      divMore.appendChild(wrapper);
    });
  });
  
  function createButtonDelate() {
    const button = document.createElement("button");
    button.textContent = "usun";
  
    button.addEventListener("click", (e) => {
      const target = e.target;
      target.parentNode.parentNode.removeChild(target.parentNode);
    });
  
    return button;
  }
  
  function createField(fieldName, text) {
    const buttonDelate = createButtonDelate();
    const wrapper = document.createElement("div");
    const fieldDiv = document.createElement("div");
    const fieldValue = document.createElement("div");
    fieldDiv.textContent = fieldName + ": ";
    fieldValue.textContent = text;
    fieldValue.classList = "fieldValue";
    wrapper.appendChild(fieldDiv);
    wrapper.appendChild(fieldValue);
    wrapper.appendChild(buttonDelate);
  
    return wrapper;
  }
  
  buttonCreate.addEventListener("click", () => {
    const name = document.querySelectorAll(".imie");
    const lastname = document.querySelectorAll(".nazwisko");
    const age = document.querySelectorAll(".wiek");
    const kids = document.querySelectorAll(".dzieci");
  
    const wrapper = document.createElement("div");
  
    for (let index = 0; index < name.length; index++) {
      const fieldName = name[index].value;
  
      const element = createField("imie", fieldName);
      wrapper.appendChild(element);
    }
  
    for (let index = 0; index < lastname.length; index++) {
      const fieldName = lastname[index].value;
  
      const element = createField("nazwisko", fieldName);
      wrapper.appendChild(element);
    }
  
    for (let index = 0; index < age.length; index++) {
      const fieldName = age[index].value;
  
      const element = createField("wiek", fieldName);
      wrapper.appendChild(element);
    }
  
    for (let index = 0; index < kids.length; index++) {
      const fieldName = kids[index].value;
  
      const element = createField("ilosc dzieci", fieldName);
      wrapper.appendChild(element);
    }
  
    document.body.appendChild(wrapper);
  });
  
  // Zadanie 10
  function uppercaseFistLetter(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  
  const buttonUppercaseFirstLetter = document.createElement("button");
  buttonUppercaseFirstLetter.textContent = "powieksz 1 litere";
  document.body.appendChild(buttonUppercaseFirstLetter);
  
  buttonUppercaseFirstLetter.addEventListener("click", () => {
    const inputs = document.querySelectorAll(".fieldValue");
  
    [...inputs].forEach((item) => {
      console.log(item.innerHTML);
      item.innerHTML = uppercaseFistLetter(item.innerHTML);
    });
  });
  
  // Zadanie 11
  function findAndCreate(text) {
    const numbers = text.match(/[0-9]+/g);
  
    if (numbers.length > 0) {
      const convertedNumbers = numbers.map((item) => Number(item));
      const sumNumbers = convertedNumbers.reduce((x, y) => x + y);
      console.log(sumNumbers);
      const multiNumbers = convertedNumbers.reduce((x, y) => x * y);
  
      for (let i = 0; i < multiNumbers; i++) {
        const div = document.createElement("div");
        div.textContent = text;
        document.body.appendChild(div);
      }
    }
  }
  
  findAndCreate("4asd23d12");
  
  // Zadanie 12
  const funcObj = (str) => ({
    pole: str,
  });
  
  const obj = funcObj("test");
  obj.check = function () {
    console.log(this.pole);
    if (this.pole.indexOf("Ola") !== -1)
      this.pole = this.pole.replace("Ola", "Ala");
    else {
      const d = document.createElement("div");
      d.innerText = "Nie znaleziono Oli";
      root.appendChild(d);
    }
  };
  obj.check();
  
  // Zadanie 13
  const exampleArray = ["xDs2Cs", "xDs2Cs"];
  
  function sumInString(value) {
    let numbers = 0;
  
    value.forEach((item) => {
      const textWithoutNumbers = item.replace(/\d+/g, "");
      numbers += textWithoutNumbers.length;
    });
  
    console.log(numbers);
  }
  
  sumInString(exampleArray);
  
  function sumNumbers(value) {
    let sum = 0;
    value.forEach((item) => {
      item.match(/[0-9]+/g).forEach((number) => {
        sum += Number(number);
      });
    });
    console.log(sum);
  }
  
  sumNumbers(exampleArray);
  
  function averageNumbers(value) {
    let sum = 0;
    let letters = 0;
    value.forEach((item) => {
      item.match(/[0-9]+/g).forEach((number) => {
        sum += Number(number);
        letters = number.length;
      });
    });
  
    const average = sum / letters;
    console.log(average);
    return average;
  }
  
  averageNumbers(exampleArray);
  
  // Zadanie 14
  let exampleObject = {
    name: "",
    surname: "",
    age: "",
  };
  
  function changeObject(name, surname, age) {
    exampleObject.name = name;
    exampleObject.surname = surname;
    exampleObject.age = age;
  
    if (name.length > 5 || surname.length > 5 || age.length > 5) {
      const button = document.createElement("button");
      button.textContent = "Reset";
      button.addEventListener("click", () => {
        exampleObject.name = "";
        exampleObject.surname = "";
        exampleObject.age = "";
      });
      document.body.appendChild(button);
    }
  }
  
  changeObject("Dominik", "Suski", "21");