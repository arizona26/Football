// Привітальне повідомлення
alert("Ласкаво просимо на сайт Футбольний світ!");

// Введення імені користувача
let name = prompt("Як вас звати?");

// Підтвердження продовження
let agree = confirm(`Привіт, ${name}! Хочете переглянути наш сайт?`);
if (!agree) {
    alert("Шкода. До зустрічі!");
    location.href = "https://www.google.com"; // Перенаправлення
}

// Функція діалогу з користувачем
function userDialog() {
    let attempt = 0;
    while (attempt < 3) {
        let answer = prompt("Яка найпопулярніша гра у світі?");
        if (answer.toLowerCase() === "футбол") {
            alert("Правильно!");
            break;
        } else {
            alert("Невірно! Спробуйте ще раз.");
            attempt++;
        }
    }
}

// Функція інформації про розробника
function developerInfo(surname, name, position = "Студент") {
    alert(`Розробник сайту: ${surname} ${name}, Посада: ${position}`);
}

// Функція порівняння рядків
function compareStrings(str1, str2) {
    if (str1.length > str2.length) {
        alert(`Більший рядок: ${str1}`);
    } else if (str2.length > str1.length) {
        alert(`Більший рядок: ${str2}`);
    } else {
        alert("Рядки однакові за довжиною.");
    }
}

// Виклик функцій
userDialog();
developerInfo("Рублевський", "Максим");
compareStrings("Футбол", "Баскетбол");

// Зміна фону сторінки на 30 секунд
document.body.style.backgroundColor = "#ffeaa7";
setTimeout(() => {
    document.body.style.backgroundColor = "#a8c1b2";
}, 30000);

// Робота з DOM

// getElementById і innerHTML
const mainTitle = document.getElementById("main-title");
mainTitle.innerHTML = "Футбольний світ оновлено!";

// querySelectorAll і textContent
const links = document.querySelectorAll("nav a");
links.forEach(link => {
    console.log(link.textContent);
});

// outerHTML приклад
console.log(mainTitle.outerHTML);

// nodeValue / data приклад
const spanElement = document.querySelector(".highlight");
console.log(spanElement.firstChild.nodeValue);

// document.write приклад
document.write("<p>Сторінка була відкрита успішно! ✅</p>");

// Створення нового елемента
const newBlock = document.createElement("div");
newBlock.className = "new-block"; // Додаємо клас для стилізації
const newText = document.createTextNode("Новий важливий блок новин ⚡");
newBlock.appendChild(newText);

// Вставка елемента в кінець сторінки
document.body.append(newBlock);

// Вставка нового елемента на початок body через prepend
const prependBlock = document.createElement("div");
prependBlock.textContent = "Важлива інформація на початку сторінки! 🚀";
prependBlock.style.backgroundColor = "#74b9ff";
prependBlock.style.padding = "15px";
prependBlock.style.marginBottom = "20px";
prependBlock.style.textAlign = "center";
document.body.prepend(prependBlock);

// Заміна існуючого параграфа через replaceWith
const specialParagraph = document.querySelector(".special-paragraph");
specialParagraph.replaceWith(newBlock);

// Видалення нового блоку через 5 секунд
setTimeout(() => {
    newBlock.remove();
}, 5000);
