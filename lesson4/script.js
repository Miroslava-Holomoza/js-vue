// for(let i = 1; i <=10; i++){
//     console.log(i);
// }

// for(let i = 1; i <=10; i+=2){
//     console.log(i);
// }

// for (let i = 10; i >= 1; i--){
//     console.log(i);
// }

// let count = 0;
// for(let i = 20; i > 0; i--){
//     count += i;
// }
// console.log("Sum:", count);

// let sum = 0;
// for(let i = 0; i <= 50; i++){
//     if (i % 2 === 0){
//         sum += i;
//     }       
// }
// console.log(sum);

//________________________#1

// for(let i = 1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i);
//     }
// }
//________________________

// for(let i = 1; i <= 100; i++){
//     if(i > 25 && i % 4 === 0 && i % 6 === 0){
//         console.log(i);
//         break;
//     }
// }

// for (let i = 1; i <=30; i++){
//     if (i % 5 === 0){
//         continue;
//     }
//     console.log(i);
// }


// let student = +prompt("Enter the number of students:");
// let sum = 0, goodGreat = 0, badGrade = 0, maxGrade = 12, minGrade = 1;
// for (let i = 1; i <= student; i++){
//     let grade = +prompt(`Enter the grade for student ${i}:`);
//     if (!(grade >=1 && grade <=12)){
//         alert("Invalid grade. Please enter a grade between 1 and 12.");
//         i--;
//         continue;
//     }
//     sum += grade;
//     if (grade >= 7) {
//         goodGreat++;
//     } else {
//         badGrade++;
//     }
//     if (grade > maxGrade) {
//         maxGrade = grade;
//     }
//     if (grade < minGrade) {
//         minGrade = grade;
//     }
// }
// console.log("Sum of grades:", sum);
// console.log("Number of students with grades 7-12:", goodGreat);
// console.log("Number of students with grades 1-6:", badGrade);
// console.log("Maximum grade:", maxGrade);
// console.log("Minimum grade:", minGrade);

//________________________#2

let numberOfParticipants = +prompt("Введіть кількість учасників:");
let sum = 0;
let highResults = 0;
let middleResults = 0;
let lowResults = 0;
let maxResult = 0;
let minResult = 0;
let firstHundred = 0;

for (let i = 1; i <= numberOfParticipants; i++) {
    let result = +prompt("Введіть результат учасника №" + i + ":");
    if (!(result >= 0 && result <= 100)) {
        alert("Invalid result. Please enter a result between 0 and 100.");
        i--;
        continue;
    }
    sum = sum + result;
    if (result >= 90) {
        highResults++;
    } else if (result >= 60) {
        middleResults++;
    } else {
        lowResults++;
    }

    if (i == 1) {
        maxResult = result;
        minResult = result;
    }

    if (result > maxResult) {
        maxResult = result;
    }

    if (result < minResult) {
        minResult = result;
    }

    if (result == 100 && firstHundred == 0) {
        firstHundred = i;
    }
}

console.log("Середній результат: " + sum / numberOfParticipants);
console.log("Кількість результатів 90–100: " + highResults);
console.log("Кількість результатів 60–89: " + middleResults);
console.log("Кількість результатів нижче 60: " + lowResults);
console.log("Найвищий результат: " + maxResult);
console.log("Найнижчий результат: " + minResult);

if (firstHundred == 0) {
    console.log("Учасників зі 100 балами немає");
} else {
    console.log("Номер першого учасника зі 100 балами: " + firstHundred);
}


