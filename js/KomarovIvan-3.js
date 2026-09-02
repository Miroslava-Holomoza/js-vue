let balance = 210000;

let dollarRateMonth1 = 43.7;
let dollarRateMonth2 = dollarRateMonth1 + 1;
let dollarRateMonth3 = dollarRateMonth2 + 1;

let amount_1 = 60000;
let amount_2 = 2600 * dollarRateMonth2;
let amount_3 = 1700 * dollarRateMonth3;

let coworkingRent = 3500;
let equipmentRent = 4000;
let netflixPrice = 9.99;

let singleTax = 4500;
let socialTaxPercent = 5;

let month1Expenses = coworkingRent + equipmentRent + netflixPrice * dollarRateMonth1;
let month2Expenses = coworkingRent + equipmentRent + netflixPrice * dollarRateMonth2;
let month3Expenses = coworkingRent + equipmentRent + netflixPrice * dollarRateMonth3;

let totalExpenses = month1Expenses + month2Expenses + month3Expenses;
let totalIncome = amount_1 + amount_2 + amount_3;
let socialTax = totalIncome * socialTaxPercent / 100;
let totalTaxes = singleTax + socialTax;

balance = balance + totalIncome - totalExpenses - totalTaxes;

console.log(`В цьому кварталі Максим витратив ${totalExpenses} грн`);
console.log(`Загальний дохід Максима за квартал становить ${totalIncome} грн`);
console.log(`Загальна сума податків становить ${totalTaxes} грн`);
console.log(`Отже, наприкінці кварталу залишок на рахунку Максима становить ${balance} грн`);
