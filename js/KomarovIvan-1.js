let amount = 3500; 

let dollarRate = 43.7;
let bankCommissionPercent = 0.5;

let amountInHryvnia = amount * dollarRate;
let bankCommission = amountInHryvnia * bankCommissionPercent / 100;
let finalAmount = amountInHryvnia - bankCommission;

console.log(`Після виконання проєкту, буде нараховано ${finalAmount} грн з урахуванням комісії банку!`);
