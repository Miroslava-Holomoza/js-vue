let dollarRate = 43.7;

let amount_1 = 68000;
let amount_2 = 2600 * dollarRate;
let amount_3 = 1900 * dollarRate;

let singleTaxPercent = 5;
let socialPayment = 4500;

let totalIncome = amount_1 + amount_2 + amount_3;
let singleTax = totalIncome * singleTaxPercent / 100;
let totalTax = singleTax + socialPayment;

console.log(`Загальна сума доходу Максима складає ${totalIncome} грн.`);
console.log(`В кінці кварталу Максиму необхідно сплатити ${totalTax} грн.`);
