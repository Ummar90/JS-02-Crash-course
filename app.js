//Q1 Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.


function addition(num1) {
    num1 = 5;
    return function (num2) {
        num2 = +prompt();
        let result = num1 + num2;
        return result;
    }
}

let retfunction = addition();
console.log(retfunction());


//Q2 Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested


let arr = [1, 2, 3, 4, 5];

function searchArray(arr, val) {
    if (arr.length === 0) {
      return false; // base case: value not found
    } else if (arr[0] === val) {
      return true; // base case: value found
    } else {
      // recursive case: search the rest of the array
      return searchArray(arr.slice(1), val);
    }
  }
console.log(searchArray(arr, 3)); // true
console.log(searchArray(arr, 6)); // false

// Q3 Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.


function addPara(){
  let newpara = document.createElement("p");
  let paraContent = document.createTextNode("I am Ammar Ahmed");
  newpara.appendChild(paraContent);
  document.body.appendChild(newpara);

}
addPara();

// Q4 Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

function addList(text) {
  let li = document.createElement("li");
  let ul = document.createElement("ul");
  ul.appendChild(li);
  let liContent = document.createTextNode(prompt());
  li.appendChild(liContent);
  document.body.appendChild(ul);

}
addList();

// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color

function bg_color (reference, bgcolor){
  
   reference = document.getElementById(reference);
   bgcolor = reference.style.backgroundColor = bgcolor;

}

bg_color("Q5" , " #000");



// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.


function locstorage(){
  let names = {
    fname : "Ammar",
    rollNum : 72,
    nationality : "Pakistani"
  };
  console.log(names);
  let stringify = JSON.stringify(names);
  localStorage.setItem("names", stringify);
};

locstorage();



// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.


function getFromLocalStorage(key) {
  let storedValue = localStorage.getItem(key);
  return JSON.parse(storedValue);
}
let myObject = getFromLocalStorage(prompt(""));

console.log(myObject);



// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.



function saveProperty() {
  const propertyObj = {
    fname: "Ammar",
    lname: "Ahmed",
    Age: 26,
    Nationality: "Pakistani"
  };
  
  const keys = Object.keys(propertyObj);
  const values = Object.values(propertyObj);
  
  const data = {
    keys: keys,
    values: values
  };
  
  const value = JSON.stringify(data);
  localStorage.setItem("key", value);
  
  const retrievedValue = localStorage.getItem("key");
  const retrievedData = JSON.parse(retrievedValue);
  
  const retrievedObj = {};
  for (let i = 0; i < retrievedData.keys.length; i++) {
    retrievedObj[retrievedData.keys[i]] = retrievedData.values[i];
  }
  
  return retrievedObj;
}

const retrievedObj = saveProperty();
console.log(retrievedObj);
