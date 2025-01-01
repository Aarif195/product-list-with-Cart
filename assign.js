// == will allow a string and integer to be true if compared together
// the == returns true if the both operands are of the same data type and have the same value or if both are of diff data type

// === is the strict equality operator, which checks to see if values are ``exactly'' the same.
//  === the value needs to be the same as well as type


// ARRAY METHOD
// indexOf() => to searc element in array
// lastindexOf() => it returns the last index of given element
// Fiter() => for sorting out positive Element in array
// map() => to loop over each eleement of Array, double each element and map it to new array
// copywithin = it copies element to another position in a given array
// fill() => fill specific element in an array wih a value
// Find() => the value of the first element that passess a arrray test
// key() => returns an array with the key of an object
// some() => it checks if array value has some task
// toString() => convert array to string
// join() => join two arrays or more together
// concat() => used to combine arrays together
// flat() => to flat out layers in array
// splice() => to remove element from array
// forEach => it operate on ther functions, it loops over each element in the array and apply a specific callback to each element

// Examples
// indexOf()
// let text = "Hello world, welcome to the universe.";
// text.indexOf("e");
// 1

// lastindexOf()
// const fruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
// let index = fruits.lastIndexOf("Apple");
// 5

// Fiter()
// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);
// function checkAdult(age) {
//   return age >= 18;
// }
// 32, 33, 40;

// map()
// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt);
// 2, 3, 4, 5;

// copywithin
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(2, 0);
// Banana, Orange, Banana, Orange;

// fill()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi");
// Kiwi, Kiwi, Kiwi, Kiw;

// toString()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();
// Banana, Orange, Apple, Mango;

// join()
// let courses = ["HTML", "CSS", "JavaScript", "React"];
// Joining the array elements
// console.log(courses.join("|"));

// concat()
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);
// Cecilie, Lone, Emil, Tobias, Linus;



// key()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const list = fruits.keys();
// let text = "";
// for (let x of list) {
//   text += x + "<br>";
// }
// 0;
// 1;
// 2;
// 3;


// some()
// const ages = [3, 10, 18, 20];
// ages.some(checkAdult);
// function checkAdult(age) {
//   return age > 18;
// }
// true

// flat()
// const myArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// const newArr = myArr.flat();
// 1, 2, 3, 4, 5, 6;


// splice()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// Banana, Orange, Lemon, Kiwi, Apple, Mango;


// forEach
// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction);
// 0: apple
// 1: orange
// 2: cherry

// console.log(obj[1].price * obj[1].quantity);


// console.log("Accessing the arrayusing the forEach loop:");
// obj.forEach(function (item) {
//   console.log(item.price);
// });

// console.log("Accessing the Array using the map method:");
// obj.map((item) => {
//   console.log(item.quantity);
// });

// obj.filter(function (item) {
//   console.log(item);
// });

// console.log("Using the filter method to access a specific value:");
// const search = obj.filter((item) => item.id === 3);
// console.log(search);

// let check = obj.some((item) => item.price >= 2.0);
// console.log(check);

// const john = obj.find((person) => person.category === "Macaron");
// console.log(john);
// 1x <span>@$5.50</span>

// if canacle button is clicked for an order,
// get the element, get the product id
//   remove order from orderList

// if add-to-cart button is clicked,
// the select orderedlist should have effect in the cart box

// After removing order from orderList
// the border on the productimage should be remove also

// if an item is ordered by clicking add-to-cart,
// Get the total price by multiplying with the quantity
// add it up
// show the total of ordered item amount (order total) .

// Assign a var to get the price multiply by the quantity of each items
// After getting the total price of each item
// Add everything up

// let obj = [
//   {
//     id: 1,
//     name: "waffle with Berries",
//     price: 10.99,
//     category: "waffle",
//     image: "image-waffle-tablet.jpg",
//     quantity: 5,
//   },
//   {
//     id: 2,
//     name: "Vanilla Bean Crème Brûlée",
//     price: 4.33,
//     category: "Creme Brulee",
//     image: "image-creme-brulee-tablet.jpg",
//     quantity: 5,
//   },
//   {
//     id: 3,
//     name: "Macaron Mix of Five",
//     price: 5.09,
//     category: "Macaron",
//     image: "image-macaron-desktop.jpg",
//     quantity: 3,
//   },
// ];

// let total = 0;
// for (let i = 0; i < obj.length; i++) {
//   total += obj[i].price * obj[i].quantity;
// }
// console.log(total);

// let tot = 0;
// obj.forEach((item) => {
//   tot += item.price * item.quantity;
// });

// console.log(tot);


// const orderTotalH3 = document.querySelector(".orderTotalH3");
 
//  let total = 0;

//  for (let i = 0; i < confirm.length; i++) {
//    total += confirm[i].price * confirm[i].quantity;
//  }
//  orderTotalH3.innerHTML = total.toFixed(2, 0);
