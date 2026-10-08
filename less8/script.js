// function name(аргументи){
//     code
// }

// function hello(){
//     alert.log('Hello world!');
// }

// hello();

// function showinfo(name, price, count){
//     console.log("Магазин у Сані");
//     console.log("коли школа закінчиться");
//     console.log(`Товари: ${name}, Ціна: ${price}`);
//     console.log(`Сума до оплати: ${price * count} грн`);
// }
// showinfo("зелений чай", 100, 5);

// function calculateTotal(price, total){
//     let sum = price * total, discount, totalSum;
//     if (sum > 5000) {
//         discount = 0.1;
//     }
//     else{
//         discount = 0;
//     }
//     totalSum = sum - (sum * discount);
//     return totalSum;
// }
// let total = calculateTotal(100, 5);
// console.log(total);

// function showinfo(name, price, count){
//     console.log("Магазин у Сані");
//     console.log("коли школа закінчиться");

// }

// function getProductTotal(price, count){
//     return price * count;
// }
// function getDiscoundPercent(total){
//     if (total >= 10000) {
//         return 15;
//     }
//     else if (total >= 5000) {
//         return 10;
//     }
//     else{
//         return 0;
//     }
// }
// function getDiscountValue(total, percent){
//     return total * percent / 100;
// }
// function getFinalPrice(total, discount){
//     return total - discount;
// }
// let productName = prompt("Введіть назву товару");
// let productPrice = +prompt("Введіть ціну товару");
// let productCount = +prompt("Введіть кількість товару");

// let ProductTotal = getProductTotal(productPrice, productCount);
// let discountPercent = getDiscoundPercent(ProductTotal);
// let discountValue = getDiscountValue(ProductTotal, discountPercent);
// let finalPrice = getFinalPrice(ProductTotal, discountValue);

// showinfo(productName, productPrice, productCount);
// console.log(`Товари: ${productName}, Ціна: ${productPrice}`);
// console.log(`Сума до оплати: ${ProductTotal} грн`);
// console.log(`Знижка: ${discountValue} грн (${discountPercent}%)`);
// console.log(`До сплати: ${finalPrice} грн`);


//________________________________

// function showinfo(price, count){
//     console.log("Квитки у кіно");
// }

// function calculateTickets(price, count){
//     return price * count;
// }

// function getTicketDiscount(total){
//     if (total >= 1500) {
//         return 15;
//     }
//     else if (total >= 1000) {
//         return 10;
//     }
//     else if (total >= 500) {
//         return 5;
//     }
//     else{
//         return 0;
//     }
// }

// function calculateTicketDiscount(total, percent){
//     return total * percent / 100;
// }

// function calculateTicketFinalPrice(total, discount){
//     return total - discount;
// }

// let ticketPrice = +prompt("Введіть ціну одного квитка");
// let ticketCount = +prompt("Введіть кількість квитків");

// let ticketTotal = calculateTickets(ticketPrice, ticketCount);
// let discountPercent = getTicketDiscount(ticketTotal);
// let discountValue = calculateTicketDiscount(ticketTotal, discountPercent);
// let finalPrice = calculateTicketFinalPrice(ticketTotal, discountValue);

// showinfo(ticketPrice, ticketCount);
// console.log(`Ціна квитка: ${ticketPrice} грн, Кількість: ${ticketCount}`);
// console.log(`Загальна вартість: ${ticketTotal} грн`);
// console.log(`Знижка: ${discountValue} грн (${discountPercent}%)`);
// console.log(`До сплати: ${finalPrice} грн`);

//________________________________

let userLogin = "";
let userPassword = "";

function registration() {
    userLogin = prompt("Створіть логін");
    userPassword = prompt("Створіть пароль");

    alert("Реєстрація успішна");
}

function login() {
    let attempts = 3;

    while (attempts > 0) {
        let login = prompt("Введіть логін");
        let password = prompt("Введіть пароль");

        if (login === userLogin && password === userPassword) {
            alert("Вхід дозволений");
            break;
        }
        else {
            attempts--;
            alert(`Неправильний логін або пароль. Залишилось спроб: ${attempts}`);
        }
    }

    if (attempts === 0) {
        alert("Спроби закінчилися");
    }
}

let menuChoice;

do {
    menuChoice = prompt(`Оберіть дію:
1 - Реєстрація
2 - Вхід
0 - Закрити`);

    switch (menuChoice) {
        case "1":
            registration();
            break;

        case "2":
            login();
            break;

        case "0":
            alert("Програму закрито");
            break;

        default:
            alert("Неправильна команда");
            break;
    }

} while (menuChoice !== "0");