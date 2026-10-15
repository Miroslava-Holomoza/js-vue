// let book = { title: 'кобзар', author: 'Шевченко', year: 1840, price: 500, isAvailable: true };
// console.log(book);
// console.log(book.title);

// let books = [{
//     title: 'кобзар',
//     author: 'Шевченко',
//     year: 1840,
//     price: 500,
//     isAvailable: true
// }, {
//     title: 'Катерина',
//     author: 'Шевченко',
//     year: 1842,
//     price: 600,
//     isAvailable: false
// }, {
//     title: 'Гайдамаки',
//     author: 'Шевченко',
//     year: 1840,
//     price: 400,
//     isAvailable: true
// }];

// console.log(books);
// console.log(books[1].title);
// console.log(books.length);

// for (let book of books) {
//     console.log(book.title);
// }
// books.forEach(function (book) {
//     console.log(book.title);
// });

// let isAvailableCont = 0;
// let totalPrice = 0;
// for (let book of books) {
//     if (book.isAvailable) {
//         isAvailableCont++;
//         totalPrice += book.price;
//     }
// }
// console.log(isAvailableCont);
// console.log(totalPrice);

// books[1].price = 700;
// books.push({
//     title: 'Сон',
//     author: 'Шевченко',
//     year: 1840,
//     price: 550,
//     isAvailable: true
// });
// console.log(books);

// let enterID = +prompt('Enter ypur book ID');
// let bookFound = null;

// for (let book of books) {
//     if (book.id === enterID) {
//         bookFound = book;
//         break;
//     };
// }
// if (bookFound !== null) {
//     let status = 'немає у наявності';
//     if (bookFound.isAvailable) {
//         status = 'є у наявності';
//     }
//     alert(`Книга: ${bookFound.title}, ціна: ${bookFound.price}, статус: ${status}`);
// }

// //_________________ПРАКТИЧНА РОБОТА_______________________


let clubs = [
    { id: 1, name: 'Програмування', category: 'IT', price: 800, members: 12, active: true },
    { id: 2, name: 'Футбол', category: 'Спорт', price: 650, members: 18, active: true },
    { id: 3, name: 'Малювання', category: 'Мистецтво', price: 500, members: 10, active: false },
    { id: 4, name: 'Робототехніка', category: 'IT', price: 1000, members: 8, active: true },
    { id: 5, name: 'Танці', category: 'Мистецтво', price: 700, members: 14, active: false }
];

let choice = -1;

while (choice !== 0) {
    choice = +prompt('Каталог гуртків\n1 - Показати всі гуртки\n2 - Знайти гурток за ID\n3 - Записати учасника\n4 - Змінити статус набору\n5 - Додати новий гурток\n6 - Показати статистику\n0 - Вихід');

    if (choice === 1) {
        if (clubs.length === 0) {
            alert('Каталог гуртків порожній');
        }
        else {
            let info = '';
            clubs.forEach(function (club) {
                let status = 'Набір закритий';
                if (club.active) {
                    status = 'Набір відкритий';
                }
                info += `Назва: ${club.name}, напрям: ${club.category}, ціна: ${club.price} грн, учасників: ${club.members}, статус: ${status}\n`;
            });
            alert(info);
        }
    }
    else if (choice === 2) {
        let enterID = +prompt('Введіть ID гуртка');
        let clubFound = null;

        for (let club of clubs) {
            if (club.id === enterID) {
                clubFound = club;
                break;
            }
        }

        if (clubFound !== null) {
            let status = 'Набір закритий';
            if (clubFound.active) {
                status = 'Набір відкритий';
            }
            alert(`ID: ${clubFound.id}\nНазва: ${clubFound.name}\nНапрям: ${clubFound.category}\nЦіна: ${clubFound.price} грн\nУчасників: ${clubFound.members}\nСтатус: ${status}`);
        }
        else {
            alert('Гурток з таким ID не знайдено');
        }
    }
    else if (choice === 3) {
        let enterID = +prompt('Введіть ID гуртка');
        let clubFound = null;

        for (let club of clubs) {
            if (club.id === enterID) {
                clubFound = club;
                break;
            }
        }

        if (clubFound === null) {
            alert('Гурток з таким ID не знайдено');
        }
        else if (clubFound.active === false) {
            alert('Набір у цей гурток закритий');
        }
        else {
            let answer = confirm(`Записати учасника в гурток ${clubFound.name}?`);
            if (answer) {
                clubFound.members++;
                alert(`Учасника записано. Тепер у гуртку ${clubFound.members} учасників`);
            }
            else {
                alert('Запис скасовано');
            }
        }
    }
    else if (choice === 4) {
        let enterID = +prompt('Введіть ID гуртка');
        let clubFound = null;

        for (let club of clubs) {
            if (club.id === enterID) {
                clubFound = club;
                break;
            }
        }

        if (clubFound === null) {
            alert('Гурток з таким ID не знайдено');
        }
        else {
            let answer = confirm(`Змінити статус набору гуртка ${clubFound.name}?`);
            if (answer) {
                clubFound.active = !clubFound.active;
                if (clubFound.active) {
                    alert('Набір відкрито');
                }
                else {
                    alert('Набір закрито');
                }
            }
            else {
                alert('Зміну статусу скасовано');
            }
        }
    }
    else if (choice === 5) {
        let name = prompt('Введіть назву гуртка');
        let category = prompt('Введіть напрям гуртка');
        let price = +prompt('Введіть вартість занять за місяць');
        let members = +prompt('Введіть кількість учасників');

        if (name === null || name.trim().length === 0) {
            alert('Назва гуртка не може бути порожньою');
        }
        else if (category === null || category.trim().length === 0) {
            alert('Напрям гуртка не може бути порожнім');
        }
        else if (Number.isNaN(price) || price < 0) {
            alert('Неправильна ціна');
        }
        else if (Number.isNaN(members) || members < 0 || members % 1 !== 0) {
            alert('Неправильна кількість учасників');
        }
        else {
            let newID = clubs.length + 1;
            clubs.push({
                id: newID,
                name: name,
                category: category,
                price: price,
                members: members,
                active: true
            });
            alert(`Гурток ${name} додано. Його ID: ${newID}`);
        }
    }
    else if (choice === 6) {
        if (clubs.length === 0) {
            alert('Каталог порожній. Гуртків немає');
        }
        else {
            let activeCount = 0;
            let totalMembers = 0;
            let totalPrice = 0;

            for (let club of clubs) {
                if (club.active) {
                    activeCount++;
                }
                totalMembers += club.members;
                totalPrice += club.price;
            }

            let averagePrice = totalPrice / clubs.length;
            alert(`Всього гуртків: ${clubs.length}\nЗ відкритим набором: ${activeCount}\nВсього учасників: ${totalMembers}\nСередня ціна: ${averagePrice} грн`);
        }
    }
    else if (choice === 0) {
        alert('Вихід з програми');
    }
    else {
        alert('Неправильний пункт меню');
    }
}
