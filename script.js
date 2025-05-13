// Привітальне повідомлення
alert("Ласкаво просимо на сайт Футбольний світ!");

// Введення імені користувача
let name = prompt("Як вас звати?");

// Підтвердження продовження
let agree = confirm(`Привіт, ${name}! Хочете перейти до футбольного контенту?`);
if (!agree) {
    alert("Шкода. Можливо іншим разом. До зустрічі!");
    location.href = "https://www.google.com";
}

// Футбольна вікторина
function userDialog() {
    let attempt = 0;
    while (attempt < 3) {
        let answer = prompt("Який вид спорту найпопулярніший у світі?");
        if (answer.toLowerCase() === "футбол") {
            alert("Так, це дійсно футбол!");
            break;
        } else {
            alert("Неправильно! Подумайте ще.");
            attempt++;
        }
    }
}

// Інформація про розробника сайту
function developerInfo(surname, name, position = "Футбольний фанат") {
    alert(`Розробник сайту: ${surname} ${name}, Посада: ${position}`);
}

// Порівняння назв футбольних клубів
function compareStringsFromUser() {
    let str1 = prompt("Введіть назву першого футбольного клубу:");
    let str2 = prompt("Введіть назву другого футбольного клубу:");

    if (str1.length > str2.length) {
        alert(`Назва клубу з більшою довжиною: ${str1}`);
    } else if (str2.length > str1.length) {
        alert(`Назва клубу з більшою довжиною: ${str2}`);
    } else {
        alert("Назви однакові за довжиною.");
    }
}

compareStringsFromUser();
userDialog();
developerInfo("Рублевський", "Максим");

// Зміна фону сайту
document.body.style.backgroundColor = "#c8e6c9"; // світло-зелений, як футбольне поле
setTimeout(() => {
    document.body.style.backgroundColor = "#81c784";
}, 60000);

// DOM-маніпуляції
const mainTitle = document.getElementById("main-title");
mainTitle.innerHTML = "Футбольний світ оновлено!";

const links = document.querySelectorAll("nav a");
links.forEach(link => console.log("Посилання на:", link.textContent));

console.log(mainTitle.outerHTML);

const spanElement = document.querySelector(".highlight");
console.log(spanElement.firstChild.nodeValue);

document.write("<h1>⚽ Оновлення футбольної сторінки</h1>");

const startBlock = document.createElement("div");
startBlock.textContent = "🏟️ Вітаємо у світі великого футболу!";
startBlock.style.background = "#e0f7fa";
startBlock.style.padding = "10px";
startBlock.style.margin = "10px 0";
startBlock.style.fontWeight = "bold";
document.body.prepend(startBlock);

const specialParagraph = document.createElement("p");
document.body.append(specialParagraph);

const replacementBlock = document.createElement("div");
replacementBlock.textContent = "📢 Новини футболу: абзац оновлено!";
replacementBlock.style.background = "#dfe6e9";
replacementBlock.style.padding = "10px";
replacementBlock.style.border = "1px solid #2d3436";

setTimeout(() => {
    const targetParagraph = document.querySelector(".special-paragraph");
    if (targetParagraph) {
        targetParagraph.replaceWith(replacementBlock);
    }
}, 2000);

const endBlock = document.createElement("div");
endBlock.textContent = "⏳ Цей блок буде замінено через 10 секунд.";
endBlock.style.background = "#ffccbc";
endBlock.style.padding = "10px";
endBlock.style.marginTop = "10px";
document.body.append(endBlock);

setTimeout(() => {
    endBlock.remove();
    const deletedNote = document.createElement("div");
    deletedNote.textContent = "🗂️ Блок із новинами видалено!";
    deletedNote.style.color = "red";
    deletedNote.style.fontWeight = "bold";
    document.body.append(deletedNote);
}, 10000);

const afterBlock = document.createElement("p");
afterBlock.textContent = "📌 Цей абзац вставлено після блоку привітання.";
startBlock.after(afterBlock);

// --- Мишачі події ---
// 1. Атрибутний обробник
function handleMouseAttribute() {
    alert("Натиснуто на заголовок через атрибут!");
}

// 2. Призначення через властивість
mainTitle.onclick = () => alert("Клік по заголовку (через властивість)!");

// 3. addEventListener — кілька обробників
mainTitle.addEventListener("click", () => {
    alert("⚽ Обробник 1 через addEventListener");
});
mainTitle.addEventListener("click", () => {
    alert("🏆 Обробник 2 через addEventListener");
});

// 4. Об'єкт як обробник
const objectHandler = {
    handleEvent(event) {
        alert("🎯 Об'єкт-обробник активовано");
        console.log("Спрацював на:", event.currentTarget);
    }
};
mainTitle.addEventListener("click", objectHandler);

// Видалення обробника
setTimeout(() => {
    mainTitle.removeEventListener("click", objectHandler);
    console.log("⛔ Об'єкт-обробник видалено");
}, 15000);

// --- Підсвічування елементів списку ---
// При кліку на команду — підсвічуємо
const list = document.getElementById("football-list");
list.onclick = function(event) {
    const target = event.target;
    if (target.tagName === "LI") {
        const items = list.querySelectorAll("li");
        items.forEach(item => item.style.background = "");
        target.style.background = "#ffeb3b"; // жовта підсвітка
    }
};

// --- Меню з data-* атрибутами ---
const menu = document.getElementById("menu");
menu.addEventListener("click", function(event) {
    const action = event.target.dataset.action;
    if (!action) return;

    if (action === "showInfo") {
        alert("🌐 Це портал футбольних фанатів!");
    } else if (action === "compare") {
        compareStringsFromUser();
    } else if (action === "developer") {
        developerInfo("Рублевський", "Максим", "Футбольний фронтенд-розробник");
    }
});
