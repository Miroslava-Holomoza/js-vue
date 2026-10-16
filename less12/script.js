// function isHighScore(score){
//     return score >= 10;
// }
// scores = [12, 5, 11, 10, 8]
// let highScore = scores.filter(isHighScore);
// console.log(highScore);

// scores = [12, 5, 11, 10, 8]
// let highScore = scores.filter(score => score >= 10);
// console.log(highScore);

// let courses = [{id: 1, title: "HTML", description: "HTML", price: 100, active: false}, 
//     {id: 2, title: "CSS", description: "CSS", price: 150, active: true}, 
//     {id: 3, title: "JS", description: "JS", price: 200, active: true},
//     {id: 4, title: "Vue", description: "Vue+JS", price: 250, active: false}];

// let idCourses = +prompt("Enter course id: ");
// let course = courses.find(course => course.id === idCourses);
// if (course !== undefined) {
//     console.log(course.title);
// } 
// else{
//     console.log("Course not found");
// }
// let activeCourse = courses.filter(course => course.active === true);
// console.log(activeCourse);
// let titleCourse = courses.map(course => course.title);
// let priceCourse = courses.map(course => course.price * 0.9);
// console.log(priceCourse);

// let jsSearch = courses.filter(course => course.description.includes("JS"));
// console.log(jsSearch);

let books = [
    {id: 1, title: "Курс по HTML", author: "Олександра Серйозна",year: 2026, avaible: true},
    {id: 2, title: "Курс по CSS", author: "Олександра Весела",year: 2025, avaible: true},
    {id: 3, title: "Курс по JS", author: "Олександра Зла",year: 2024, avaible: false},
    {id: 4, title: "Курс по JS+Vue", author: "Олександра Відповідальна",year: 2023, avaible: true}
 ]
// let years = +prompt("Enter year: ");
// let yearBooks = books.filter(book => book.year === years);
// console.log(yearBooks);

// let titleBooks = books.map(book => book.title);
// console.log(titleBooks);
// let searchBooks = books.filter(book => book.title.includes("JS"));
// console.log(searchBooks);

//let price = [400, 2000, 700]
//console.log(price.sort((a, b) => a - b ));

let lowerUpper = [...books].sort((a, b) => a.year - b.year );
console.log(lowerUpper);

let existingBooks = books
.filter(book => book.avaible === true)
.sort((a, b) => a.year - b.year)
.map(book => `${book.title} - ${book.author}`);
console.log(existingBooks);
