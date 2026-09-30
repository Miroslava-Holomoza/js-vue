let age = +prompt("Введіть свій вік:");
let day = prompt("Введіть тип дня(будній або вихідний): ");
let ticketPrice;

if (age < 0) {
    console.log("Помилка: неправильний вік");
}
else if (day !== "будній" && day !== "вихідний") {
    console.log("Помилка: неправильний тип дня");
}
else {
    if (day === "будній") {
        ticketPrice = 200;
    }
    else {
        ticketPrice = 250;
    }

    if (age <= 7) {
        ticketPrice = 0;
    }
    else if (age <= 17) {
        ticketPrice = ticketPrice * 0.5;
    }
    else if (age >= 60) {
        ticketPrice = ticketPrice * 0.6;
    }

    console.log("Вартість квитка: " + ticketPrice + " грн");
}