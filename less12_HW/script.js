
let courses = [
    { id: 1, title: 'HTML', category: 'IT', price: 500, duration: 20, rating: 4.5, available: true },
    { id: 2, title: 'CSS', category: 'IT', price: 600, duration: 24, rating: 4.1, available: true },
    { id: 3, title: 'JavaScript', category: 'IT', price: 900, duration: 40, rating: 4.8, available: true },
    { id: 4, title: 'Python', category: 'IT', price: 1000, duration: 36, rating: 4.7, available: false },
    { id: 5, title: 'Photoshop', category: 'Design', price: 900, duration: 28, rating: 4.4, available: true },
    { id: 6, title: 'Figma', category: 'Design', price: 700, duration: 26, rating: 4.6, available: false },
    { id: 7, title: 'SMM', category: 'Marketing', price: 400, duration: 16, rating: 4.0, available: true },
    { id: 8, title: 'Marketing', category: 'Marketing', price: 1200, duration: 50, rating: 4.9, available: true }
];

function showCourses(list) {
    if (list.length === 0) {
        alert('Курсів не знайдено');
    }
    else {
        let info = '';
        for (let course of list) {
            let status = 'Недоступний';
            if (course.available) {
                status = 'Доступний';
            }
            info += `ID: ${course.id}, назва: ${course.title}, категорія: ${course.category}, ціна: ${course.price} грн, тривалість: ${course.duration} год, рейтинг: ${course.rating}, статус: ${status}\n`;
        }
        alert(info);
    }
}

function findCourse() {
    let enterID = +prompt('Введіть ID курсу');
    let course = courses.find(course => course.id === enterID);
    if (course !== undefined) {
        showCourses([course]);
    }
    else {
        alert('Курс з таким ID не знайдено');
    }
}

function findCategory() {
    let category = prompt('Введіть категорію (IT, Design, Marketing)');
    if (category === null || category.trim() === '') {
        alert('Неправильна категорія');
    }
    else {
        let found = courses.filter(course => course.category.toLowerCase() === category.trim().toLowerCase());
        showCourses(found);
    }
}

function findPrice() {
    let maxPrice = +prompt('Введіть максимальну ціну');
    if (maxPrice >= 0) {
        let found = courses.filter(course => course.price <= maxPrice);
        showCourses(found);
    }
    else {
        alert('Неправильна ціна');
    }
}

function findTitle() {
    let part = prompt('Введіть частину назви курсу');
    if (part === null || part.trim() === '') {
        alert('Введіть назву курсу');
    }
    else {
        let found = courses.filter(course => course.title.toLowerCase().includes(part.trim().toLowerCase()));
        showCourses(found);
    }
}

function showTitles() {
    let titles = courses.map(course => course.title);
    let info = '';
    for (let title of titles) {
        info += title + '\n';
    }
    alert(info);
}

function showDiscount() {
    let discountCourses = courses.map(course => {
        return { title: course.title, price: course.price * 0.85 };
    });
    let info = '';
    for (let course of discountCourses) {
        info += `${course.title} - ${course.price} грн\n`;
    }
    alert(info);
}

function sortPrice() {
    let sorted = [...courses].sort((a, b) => a.price - b.price);
    showCourses(sorted);
}

function sortRating() {
    let sorted = [...courses].sort((a, b) => b.rating - a.rating);
    showCourses(sorted);
}

function sortTitle() {
    let sorted = [...courses].sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
    showCourses(sorted);
}

function showStatistics() {
    let availableCourses = courses.filter(course => course.available === true);
    let totalPrice = 0;
    for (let course of availableCourses) {
        totalPrice += course.price;
    }
    if (availableCourses.length === 0) {
        alert('Доступних курсів немає');
    }
    else {
        let averagePrice = totalPrice / availableCourses.length;
        alert(`Загальна вартість: ${totalPrice} грн\nСередня вартість: ${averagePrice} грн`);
    }
}

let again;
do {
    let choice = +prompt('Каталог онлайн-курсів\n1 - Знайти курс за ID\n2 - Курси вибраної категорії\n3 - Курси за ціною\n4 - Пошук за частиною назви\n5 - Назви всіх курсів\n6 - Курси зі знижкою 15%\n7 - Сортування за ціною\n8 - Сортування за рейтингом\n9 - Сортування за назвою\n10 - Статистика доступних курсів\n0 - Вихід');

    if (choice === 1) {
        findCourse();
    }
    else if (choice === 2) {
        findCategory();
    }
    else if (choice === 3) {
        findPrice();
    }
    else if (choice === 4) {
        findTitle();
    }
    else if (choice === 5) {
        showTitles();
    }
    else if (choice === 6) {
        showDiscount();
    }
    else if (choice === 7) {
        sortPrice();
    }
    else if (choice === 8) {
        sortRating();
    }
    else if (choice === 9) {
        sortTitle();
    }
    else if (choice === 10) {
        showStatistics();
    }
    else if (choice === 0) {
        break;
    }
    else {
        alert('Неправильний пункт меню');
    }
    again = confirm('Повернутися до меню?');
} while (again);
