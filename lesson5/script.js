// let num = 1;
// while (num <= 5) {
//     console.log(num);
//     num++;
// }

// let userNumber = +prompt("Enter a number");
// while (userNumber < 1 || userNumber > 10){
//     userNumber = +prompt("Invalid number, please enter a number between 1 and 10");
//     console.log("Invalid number, please enter a number between 1 and 10");
// } 

// console.log(Number("7"));
// console.log("hi");

// let age = +prompt("Enter your age");
// while(Number.isNaN(age) || age < 0 || age > 100){
//     age = +prompt("Invalid age, please enter a valid age between 0 and 100");
//     console.log("Invalid age, please enter a valid age between 0 and 100");
// }
// console.log("Your age is: " + age);

// const correctPin = 1234;

// let userPin = +prompt("Enter your PIN");
// let attempts = 0;
// while (correctPin !== userPin && attempts < 3) {
//     attempts++;
//     userPin = +prompt("Incorrect PIN. Please try again.");
// }
// if (correctPin === userPin) {
//     console.log("Welcome");
// }
// else {
//     console.log("Too many incorrect attempts. Access denied.");
// }

// const correctPin = 6767;
// let attempts = 0;
// while (attempts < 3) {
//     let userPin = +prompt("Enter your PIN");
//     if (correctPin === userPin) {
//         console.log("Welcome");
//         break;
//     }
//     attempts++;
// }
// if (attempts === 3) {
//     console.log("Too many incorrect attempts. Access denied.");
// }

// let menuChoice;
// do{
//     menuChoice = promt(`What is your choise? \n
//         1 = view the profile
//         2 = settings
//         3 = statistics
//         0 - exit`);
//     if (menuCgoice === "1"){
//         console.log("opening profile")
//     }
//     else if (menuChoice === "2"){
//         console.log("opening settings")
//     }
//     else if (menuChoice === "3"){
//         console.log("opening statistics")
//     }
//     else{
//         console.log("wtf")
//     }
// } while(menuChoice !== "0");

//________________________
// let menuChoice;
// do {
//     menuChoice = prompt(`What is your choise?:\n
//         1 = view the profile\n
//         2 = settings\n
//         3 = statistics\n
//         0 = exit`);
//     switch (menuChoice) {
//         case "1":
//             console.log("view the profile");
//             break;
//         case "2":
//             console.log("settings");
//             break;
//         case "3":
//             console.log("statistic");
//             break;
//         case "0":
//             console.log("exit");
//             break;
//         default:
//             console.log("Error. Try again");
//             break;
//     }
// } while (menuChoice !== "0");
//________________________

// let count = 0;
// let sum = 0;
// while (count < 5){
//     let grade = +prompt("enter your grade");
//     if(Number.isNaN(grade) || grade < 0 || grade > 12){
//         alert("incorrect grade, try again")
//         continue
//     }
//     sum += grade;
//     count++
// }
// console.log(sum);
// comsole.log(sum/5);

// let questionsNumber = 1, score = 0;
// while(questionsNumber <=5){
//     let questions = '', correctAnswer = '';
//     switch (questionsNumber){
//         case 1:
//             questions = 'Ключове слово для створення змінної'
//             correctAnswer = 'let';
//             break;
//             case 2:
//                 questions = 'оператор and'
//                 correctAnswer = '&&';
//                 break;
//                 case 3: 
//                     questions = 'оператор or'
//                     correctAnswer = '||'
//                     break
//                     case 4:
//                         questions = 'як зупинити цикл'
//                         correctAnswer = 'break'
//                         break
//                         case 5:
//                             questions = 'строга рівність'
//                             correctAnswer = '==='
//                             break
//     }
//     let answer = promt(questions);
//     if (answer === ''){
//         alert("Write an answer");
//         continue
//     }
//     if (answer === correctAnswer){
//         alert("Correct")
//         score++
//     }
//     else{
//         alert("incorecct")
//     }
//     questionsNumber++;
// }
// if (score === 5){
//     console.log("krasava")
// }
// else if(score >= 3){
//     console.log("norm")
// }
// else{
//     console.log('idi vchis')
// }

// const correctPin = 6767;

// while (true) {
//     let age = +prompt("What is your age:");  
//     if (age >= 12 && age <= 90) {
//         let attempts = 0;
//         let isPinCorrect = false;
//         while (attempts < 3) {
//             let pincode = +prompt("Enter your PIN:");
//             if (pincode === correctPin) {
//                 isPinCorrect = true;
//                 break;
//             } else {
//                 attempts++;
//                 alert("Error. Try again");
//             }
//         }
//         if (isPinCorrect) {
//             let menu;
//             do {
//                 menu = +prompt("Chose the option:\n1 - Особистий кабінет\n2 - Повідомлення\n3 - Налаштування\n0 - Вихід");
//                 switch (menu) {
//                     case 1:
//                         alert("Особистий кабінет");
//                         break;
//                     case 2:
//                         alert("Повідомлення");
//                         break;
//                     case 3:
//                         alert("Налаштування");
//                         break;
//                     case 0:
//                         alert("Вихід");
//                         break;
//                     default:
//                         alert("Error");
//                         break;
//                 }
//             } while (menu !== 0);
//         } else {
//             alert("You're blocked now");
//         }
//         break;
//     } else {
//         alert("Wrong age broo");
//     }
// }