// let price = [12, 5, 45, 78, 9];
// const price2 = [120, 23, 45, 6767, 9];

// console.log(price[2]);
// price[2] = 100;

// console.log(price.length);

// for (let i = 0; i < price.length; i++) {
//     console.log(price[i]);
// }

// let sum = 0;
// for (let i = 0; i < price.length; i++) {
//     sum += price[i];
//     if(price[i]%2 == 0){
//         console.log(`Число ${price[i]} парне`);
//     }
// }
// console.log(sum);

// function countLimit(prices, limit){
//     let count = 0;
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] > limit) {
//             count++;
//         }
//     }
//     return count;
// }
// let price = [50, 45, 30, 100];
// let limit = 50;
// console.log(`Кількість товарів, що перевищують ${limit} грн: ${countLimit(price, limit)}`);

//________________________
function avaragePrice(prices){
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
        sum += prices[i];
    }
    return sum / prices.length;
}
let price = [50, 45, 30, 100];
console.log(`Середня ціна товарів: ${avaragePrice(price)}`);
//________________________
//________________________
//написать функцію, яка запитує у користувача кількість чисел, потім запитує ці числа, зберігає їх у масив, і вивести суму цих чисел. 
function sumNumbers() {
    let count = +prompt("Введіть кількість чисел:");
    let numbers = [];

    for (let i = 0; i < count; i++) {
        numbers[i] = +prompt(`Введіть число ${i + 1}:`);
    }

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log(`Сума чисел: ${sum}`);
}

sumNumbers();