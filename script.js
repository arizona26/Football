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

function compareStringsFromUser() {
    let str1 = prompt("Введіть перший рядок:");
    let str2 = prompt("Введіть другий рядок:");

    if (str1.length > str2.length) {
        alert(`Більший рядок: ${str1}`);
    } else if (str2.length > str1.length) {
        alert(`Більший рядок: ${str2}`);
    } else {
        alert("Рядки однакові за довжиною.");
    }
}

// Виклик функції
compareStringsFromUser();

// Виклик функцій
userDialog();
developerInfo("Рублевський", "Максим");

// Зміна фону сторінки на 60 секунд
document.body.style.backgroundColor = "#ffeaa7";
setTimeout(() => {
    document.body.style.backgroundColor = "#a8c1b2";
}, 60000);

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

// Створюємо і вставляємо блок на початок сторінки
const startBlock = document.createElement("div");
startBlock.textContent = "🚀 Це блок на початку сторінки";
startBlock.style.background = "#ffeaa7";
startBlock.style.padding = "10px";
startBlock.style.margin = "10px 0";
startBlock.style.fontWeight = "bold";
document.body.prepend(startBlock);

// Додаємо текст після блоку
const infoText = document.createElement("p");
infoText.textContent = "⚠️ Це повідомлення після початкового блоку";
document.body.insertBefore(infoText, startBlock.nextSibling);

// Створюємо параграф, який потім замінимо
const paragraph = document.createElement("p");
paragraph.textContent = "Цей параграф буде замінено 🔁";
paragraph.className = "special-paragraph";
document.body.insertBefore(paragraph, infoText.nextSibling); 

// Створюємо блок для заміни
const replacementBlock = document.createElement("div");
replacementBlock.textContent = "🔄 Цей блок замінив параграф!";
replacementBlock.style.background = "#fab1a0";
replacementBlock.style.padding = "10px";
replacementBlock.style.margin = "10px 0";
replacementBlock.style.fontWeight = "bold";

// Замінюємо через 2 секунди
setTimeout(() => {
    const targetParagraph = document.querySelector(".special-paragraph");
    if (targetParagraph) {
        targetParagraph.replaceWith(replacementBlock);
    }
}, 2000);

// Створюємо блок, який потім буде видалено
const endBlock = document.createElement("div");
endBlock.textContent = "📦 Цей блок буде видалено через 10 секунд";
endBlock.style.background = "#dfe6e9";
endBlock.style.padding = "10px";
endBlock.style.margin = "10px 0";
endBlock.style.fontWeight = "bold";
document.body.append(endBlock);

// Видалення блоку через 10 секунд
setTimeout(() => {
    endBlock.remove();
    const deletedNote = document.createElement("div");
    deletedNote.textContent = "📭 Блок був видалений!";
    deletedNote.style.color = "red";
    deletedNote.style.fontWeight = "bold";
    document.body.append(deletedNote);
}, 10000);