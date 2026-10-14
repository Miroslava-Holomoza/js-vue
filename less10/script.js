// // names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve']
// // console.log(names);
// // console.log(names[-1]);
// // console.log(names.length);

// // names2 = [];
// // names2.push('Frank');
// // names2.push('Grace');
// // names2.pop();
// // names2.unshift('Heidi');
// // names2.shift();
// // names.splice(1, 4);
// // console.log(names2);
// // console.log(names);

// // names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
// //  let deleted = names.splice(2, 1);
// //  console.log(deleted);

// //  names.splice(1, 0, 'Ivan');
// //  names.splice(0, 1, 'Judy', 'Karl');

// // console.log(names);

// function register(name){
//     if (name.trim().length === 0) {
//         alert('Name cannot be empty');
//         return;
//     }
//     let dooplicate = false;
//     for (let i = 0; i < names.length; i++) {
//         if (names[i].toLowerCase() === name.toLowerCase()) {
//             dooplicate = true;
//         }
//     }
//     if (dooplicate) {
//             alert('Name already exists');
//             return;
//         }
//     names.push(name);
//     alert('Name registered successfully');
// }
// names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// function deleted(name){
//     let index = -1;
//     for(let i = 0; i < names.length; i++){
//         if(names[i].toLowerCase() === name.toLowerCase()){
//             index = i;
//             break;
//         }
//     }
//     if(index === -1){
//         alert('Name not found');
//         return;
//     }
//     else {
//         names.splice(index, 1);
//         alert('Name deleted successfully');
//     }
// }
// function count(){
//     alert('Total names: ' + names.length);
// }
// register('Nikita');
// register('Eve');
// register('  ');
// deleted('Bob'); 

names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
for (let name of names){
    console.log(name);
}
names.forEach(function(name, index){
    console.log(index + ': ' + name);
});

let names = ["Микита", "Олександра", "Влад", "Іван"];


names.push("Влад");
names.unshift("Аліса");
names.pop();
names[2] = "Мирослава";
for (let i = 0; i < names.length; i++) {
    console.log((i + 1) + ". " + names[i]);
}

for (let name of names) {
    console.log(name);
}

names.forEach(function(name) {
    console.log(name + ": " + name.length);
});

let prices = [120, 250, 180, 300, 150, 400];

let total = 0;

for (let i = 0; i < prices.length; i++) {
    total += prices[i];
}

console.log("Загальний виторг: " + total + " грн");

let count = 0;

for (let price of prices) {
    if (price >= 200) {
        count++;
    }
}

console.log("Квитків від 200 грн: " + count);

let average = total / prices.length;

console.log("Середня ціна: " + average + " грн");

let total2 = 0;
let count2 = 0;

prices.forEach(function(price) {
    total2 += price;

    if (price >= 200) {
        count2++;
    }
});

console.log("Загальний виторг: " + total2 + " грн");
console.log("Квитків від 200 грн: " + count2);