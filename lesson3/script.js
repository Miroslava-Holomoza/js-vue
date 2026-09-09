// let age = +prompt("Please enter your age:");
// let register = confirm('Are you registered?');

// if (age >= 18 && register) {
//     alert('E dostup');
// }
// else if (age >= 18 && !register) {
//     alert('You need to register first.');
// }
// else {
//     alert('You are not eligible.');
// }

// let accessLevel = prompt("what is your access level? (admin, teacher)");
// if (accessLevel === 'admin' || accessLevel === 'teacher') {
//     alert('Access granted.');
// }
// else {
//     alert('Access denied.');
// }

// let registration = confirm('Are you registered?');
// if (registration) {
//     let age = +prompt("Please enter your age:");
//     if (age >= 18) {
//         alert('Access granted.');
//     }
//     else {
//         alert('You are not eligible.');
//     }
// }
// else {
//     alert('You need to register first.');
// }

// let grade = +prompt('Please enter your grade:');
// // 90-100 - відмінно, 89-70 - добре, 60-69 - задовільно, 0-59 - незадовільно
// if (grade >= 90 ){
//     alert('відмінно');
// }
// else if (grade >=70){
//     alert('добре');
// }
// else if(grade >= 60){
//     alert('задовільно');
// }
// else{
//     alert('незадовільно');
// }

//ролі доступу teacher, student
// підписка
//заблокований чи ні
//тічер - пофіг на підписку, досуп викладача
//студент - перевірка чи не заблокований

// let role = prompt('Please enter your role (teacher, student):');
// let sub, blocked;
// if (role === 'teacher') {
//     blocked = confirm('Are you blocked?');
//     if (!blocked) {
//         alert('Access granted for teacher.');
//     } else {
//         alert('You are blocked. Access denied.');
//     }
// }
// else if (role === 'student') {
//     blocked = confirm('Are you blocked?');
//     if (!blocked) {
//         alert('Access granted for student.');
//     } else {
//         alert('You are blocked. Access denied.');
//     }
// }
// else {
//     alert('Invalid role. Access denied.');
// }

// назва товару, кількість товару, ціна за штуку, магазин дає знижку, якщо 1)користувач зареєстрований, 2)сума покупки 1000+, у користувача є промокод або віп статус, промокод 'sale'
let productName = prompt('Enter the product name:');
let quantity = +prompt('Enter the quantity of the product:');
let pricePerUnit = +prompt('Enter the price per unit:');
let isRegistered = confirm('Are you registered?');
let hasPromoCode = confirm('Do you have a promo code?');
let isVIP = confirm('Are you a VIP member?');

let totalPrice = quantity * pricePerUnit;

if (isRegistered && (totalPrice >= 1000 || hasPromoCode || isVIP)) {
    alert(`You are eligible for a discount! Total price: ${totalPrice * 0.9}`);
}
else {
    alert(`You are not eligible for a discount. Total price: ${totalPrice}`);
}
