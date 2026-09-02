alert("Hello, World!");
const name= "Mirka";
const isStudent = true;

console.log(typeof name);

// + - *  % **
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");
console.log(Number(num1) + Number(num2));
console.log(num1 - 0) + (num2 - 0);

let num3 = 10;
console.log(typeof String(num3));
let productName = prompt("Enter product name:");
let productPrice = + prompt("Enter product price:");
let productCount = + prompt("Enter product count:");
let deliveryPrice = + prompt("Enter delivery price:");
let discount = + prompt("Enter discount:");
let myMoney = + prompt("Enter your money:");

let totalPrice = (productPrice * productCount + deliveryPrice) - (productPrice * productCount * discount / 100);
console.log(`Product name: ${productName}, на суму: ${totalPrice}`);
alert("Product is" + productName +
    "\ntotal price is " + totalPrice);

let Money = myMoney - totalPrice;
alert("Your money after purchase: " + Money);