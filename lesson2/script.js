// > >= < <= == === != !==

//let a, b;
//a = '1';
//b = 1;

//console.log(a == b);
//console.log(a === b);

//if(umova){
//    comand
//}

//let temp = promt('Enter temperature: ');
//let result
//if (temp < 0) {
//    result = 'Cold';
//}
//else if(temp >=10 && temp <= 25) {
//    result = 'Warm';
//}
//else {
//    result = 'Hot';
//}

//alert(result);

//______________________________________________

// let Number = prompt('Enter number: ');
// let result;
// if (Number % 2 == 0) {
//     result = 'Even';
// }
// else {
//     result = 'Odd';
// }

// alert(result);

//______________________________________________

//const login = 'admin';
//const password = '12345';

//let userLogin = prompt('Enter login: ');
//let userPassword = prompt('Enter password: ');

//if (userLogin === login && userPassword === password) {
//    alert('Вхід дозволений');
//}
//else {
//    alert('Невірний пароль або логін');
//}

//courierDelivery 200
//post 100
//pickUp 0

//let cost, deliver = prompt('Enter delivery method: ');
//switch (deliver) {
//    case 'courierDelivery':
//        cost = 200;
//        break;
//    case 'post':
//        cost = 100;
//        break;
//    case 'pickUp':
//        cost = 0;
//        break;
//    default:
//        alert('Invalid delivery method');
//}
//console.log(cost);

//______________________________________________

// let dayNumber = +prompt("Enter a number of day:");

// switch (dayNumber) {
//     case 1:
//         alert("Monday");
//         break;
//     case 2:
//         alert("Tuesday");
//         break;
//     case 3:
//         alert("Wednesday");
//         break;
//     case 4:
//         alert("Thursday");
//         break;
//     case 5:
//         alert("Friday");
//         break;
//     case 6:
//         alert("Saturday");
//         break;
//     case 7:
//         alert("Sunday");
//         break;
//     default:
//         alert("Invalid day number!");
// }

//______________________________________________

let productName = prompt('Enter product name: ');
let productPrice = +prompt('Enter product price: ');
let productCount = +prompt('Enter product count: ');

let hasCard = confirm('Do you have a discount card? (так/ні): ');
let deliveryType = prompt('Enter delivery type (courierDelivery/post/pickUp): ');

let totalPrice, discount = 0;
totalPrice = productPrice * productCount;

if (totalPrice > 2000){
    discount = 0.1;
}
else if (totalPrice > 1000){
    discount = 0.05;
}

if (hasCard){
    totalPrice = (totalPrice - (totalPrice * discount)) - (totalPrice * 0.1);
}
else{
    totalPrice = totalPrice - (totalPrice * discount);
}

let deliveryPrice;

switch (deliveryType) {
    case 'courierDelivery':
        deliveryPrice = 200;
        break;
    case 'post':
        deliveryPrice = 100;
        break;
    case 'pickUp':
        deliveryPrice = 0;
        break;
    default:
        deliveryPrice = 0;
        alert('Немає такої доставки');
}
totalPrice += deliveryPrice;
console.log(`Total price: ${totalPrice}`);
