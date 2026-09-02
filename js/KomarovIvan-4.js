let income_1 = 100000;
let income_2 = 200000;
let income_3 = 300000;
let income_4 = 150000;

let singleTaxPercent = 5;
let socialPayment = 18000;
let comebackAlivePercent = 10;
let childrenHeroesPercent = 5;
let businessDevelopment = 100000;
let dollarRate = 43.7;
let euroRate = 51.2;
let dollarsForSaving = 3000;
let eurosForSaving = 2500;

let totalIncome = income_1 + income_2 + income_3 + income_4;
let singleTax = totalIncome * singleTaxPercent / 100;
let incomeAfterTaxes = totalIncome - singleTax - socialPayment;

let comebackAliveDonation = incomeAfterTaxes * comebackAlivePercent / 100;
let childrenHeroesDonation = incomeAfterTaxes * childrenHeroesPercent / 100;

let moneyForCurrencyCard = dollarsForSaving * dollarRate + eurosForSaving * euroRate;
let finalBalance = incomeAfterTaxes - comebackAliveDonation - childrenHeroesDonation - businessDevelopment - moneyForCurrencyCard;

console.log(`За рік Максим заробив — ${totalIncome} грн`);
console.log(`Єдиний податок 5% складає ${singleTax} грн`);
console.log(`Відрахування у фонди «Повернись живим» та «Діти Героїв» складає ${comebackAliveDonation} грн та ${childrenHeroesDonation} грн відповідно`);
console.log(`На валютну карту сумарно відкладено ще ${moneyForCurrencyCard} грн`);
console.log(`Залишок на рахунку Максима складає ${finalBalance} грн`);
