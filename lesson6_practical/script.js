let eventType = prompt("Введіть тип події: кіно, театр або концерт");

while (eventType !== "кіно" && eventType !== "театр" && eventType !== "концерт") {
    eventType = prompt("Неправильний тип події. Введіть: кіно, театр або концерт");
}

let ticketPrice;

switch (eventType) {
    case "кіно":
        ticketPrice = 150;
        break;
    case "театр":
        ticketPrice = 220;
        break;
    case "концерт":
        ticketPrice = 350;
        break;
}

let dayType = prompt("Введіть тип дня: будній або вихідний");

while (dayType !== "будній" && dayType !== "вихідний") {
    dayType = prompt("Неправильний тип дня. Введіть: будній або вихідний");
}

if (dayType === "вихідний") {
    ticketPrice = ticketPrice + ticketPrice * 15 / 100;
}

let ticketsCount = +prompt("Введіть кількість квитків від 1 до 6:");

while (ticketsCount < 1 || ticketsCount > 6 || Number.isNaN(ticketsCount)) {
    ticketsCount = +prompt("Неправильна кількість квитків. Введіть число від 1 до 6:");
}

let processedTickets = 0;
let freeTickets = 0;
let discountTickets = 0;
let fullPriceTickets = 0;
let totalPrice = 0;

for (let i = 1; i <= ticketsCount; i++) {

    let age = +prompt("Введіть вік для квитка №" + i + ":");

    while ((age < 0 && age !== -1) || Number.isNaN(age)) {
        age = +prompt("Некоректний вік. Введіть вік ще раз:");
    }

    if (age === -1) {
        break;
    }

    processedTickets++;

    let currentPrice = ticketPrice;

    if (age <= 5) {
        freeTickets++;
        continue;
    }

    else if (age <= 12) {
        currentPrice = currentPrice * 0.5;
        discountTickets++;
    }

    else if (age <= 17) {
        currentPrice = currentPrice * 0.8;
        discountTickets++;
    }

    else if (age >= 60) {
        currentPrice = currentPrice * 0.75;
        discountTickets++;
    }

    else if (age >= 18 && age <= 25) {
        let hasStudentCard = confirm("Чи є студентський квиток?");

        if (hasStudentCard) {
            currentPrice = currentPrice * 0.9;
            discountTickets++;
        }

        else {
            fullPriceTickets++;
        }
    }

    else {
        fullPriceTickets++;
    }

    totalPrice = totalPrice + currentPrice;
}

if (totalPrice > 1000) {
    totalPrice = totalPrice - totalPrice * 5 / 100;
}

console.log("Кількість оброблених квитків:", processedTickets);
console.log("Безкоштовних квитків:", freeTickets);
console.log("Квитків зі знижкою:", discountTickets);
console.log("Квитків за повною ціною:", fullPriceTickets);
console.log("Загальна сума:", totalPrice, "грн");