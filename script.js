// // Привітальне повідомлення
// alert("Ласкаво просимо на сайт Футбольний світ!");

// // Введення імені користувача
// let name = prompt("Як вас звати?");

// // Підтвердження продовження
// let agree = confirm(`Привіт, ${name}! Хочете перейти до футбольного контенту?`);
// if (!agree) {
//     alert("Шкода. Можливо іншим разом. До зустрічі!");
//     location.href = "https://www.google.com";
// }

// // Футбольна вікторина
// function userDialog() {
//     let attempt = 0;
//     while (attempt < 3) {
//         let answer = prompt("Який вид спорту найпопулярніший у світі?");
//         if (answer.toLowerCase() === "футбол") {
//             alert("Так, це дійсно футбол!");
//             break;
//         } else {
//             alert("Неправильно! Подумайте ще.");
//             attempt++;
//         }
//     }
// }

// // Інформація про розробника сайту
// function developerInfo(surname, name, position = "Футбольний фанат") {
//     alert(`Розробник сайту: ${surname} ${name}, Посада: ${position}`);
// }

// // Порівняння назв футбольних клубів
// function compareStringsFromUser() {
//     let str1 = prompt("Введіть назву першого футбольного клубу:");
//     let str2 = prompt("Введіть назву другого футбольного клубу:");

//     if (str1.length > str2.length) {
//         alert(`Назва клубу з більшою довжиною: ${str1}`);
//     } else if (str2.length > str1.length) {
//         alert(`Назва клубу з більшою довжиною: ${str2}`);
//     } else {
//         alert("Назви однакові за довжиною.");
//     }
// }

// compareStringsFromUser();
// userDialog();
// developerInfo("Рублевський", "Максим");

// // Зміна фону сайту
// document.body.style.backgroundColor = "#c8e6c9"; 
// setTimeout(() => {
//     document.body.style.backgroundColor = "#81c784";
// }, 60000);

// // DOM-маніпуляції
// const mainTitle = document.getElementById("main-title");
// mainTitle.innerHTML = "Футбольний світ оновлено!";

// const links = document.querySelectorAll("nav a");
// links.forEach(link => console.log("Посилання на:", link.textContent));

// console.log(mainTitle.outerHTML);

// const spanElement = document.querySelector(".highlight");
// console.log(spanElement.firstChild.nodeValue);

// document.write("<h1>⚽ Оновлення футбольної сторінки</h1>");

// const startBlock = document.createElement("div");
// startBlock.textContent = "🏟️ Вітаємо у світі великого футболу!";
// startBlock.style.background = "#e0f7fa";
// startBlock.style.padding = "10px";
// startBlock.style.margin = "10px 0";
// startBlock.style.fontWeight = "bold";
// document.body.prepend(startBlock);

// const specialParagraph = document.createElement("p");
// document.body.append(specialParagraph);

// const replacementBlock = document.createElement("div");
// replacementBlock.textContent = "📢 Новини футболу: абзац оновлено!";
// replacementBlock.style.background = "#dfe6e9";
// replacementBlock.style.padding = "10px";
// replacementBlock.style.border = "1px solid #2d3436";

// setTimeout(() => {
//     const targetParagraph = document.querySelector(".special-paragraph");
//     if (targetParagraph) {
//         targetParagraph.replaceWith(replacementBlock);
//     }
// }, 2000);

// const endBlock = document.createElement("div");
// endBlock.textContent = "⏳ Цей блок буде замінено через 10 секунд.";
// endBlock.style.background = "#ffccbc";
// endBlock.style.padding = "10px";
// endBlock.style.marginTop = "10px";
// document.body.append(endBlock);

// setTimeout(() => {
//     endBlock.remove();
//     const deletedNote = document.createElement("div");
//     deletedNote.textContent = "🗂️ Блок із новинами видалено!";
//     deletedNote.style.color = "red";
//     deletedNote.style.fontWeight = "bold";
//     document.body.append(deletedNote);
// }, 10000);

// const afterBlock = document.createElement("p");
// afterBlock.textContent = "📌 Цей абзац вставлено після блоку привітання.";
// startBlock.after(afterBlock);

// Обробник події через атрибут
function handleMouseOverTitle() {
    alert("Факт: Найбільше титулів Ліги чемпіонів має 'Реал Мадрид' — 14!");
}

//  Подія через властивість
document.addEventListener('DOMContentLoaded', function () {
    const factButton = document.getElementById("fact");
    if (factButton) {
        factButton.onclick = function () {
            alert("Цікавий факт: Перший чемпіонат світу з футболу відбувся у 1930 році в Уругваї.");
        };
    }
});

//  Подія через addEventListener з окремими функціями
function firstHandler() {
    alert("Перший обробник: Хто твій улюблений футбольний клуб?");
}

function secondHandler() {
    alert("Другий обробник: Пам'ятай — футбол об'єднує світ!");
}

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById("football-btn");
    if (btn) {
        btn.addEventListener("click", firstHandler);
        btn.addEventListener("click", secondHandler);
    }
});

//  Подія через addEventListener з об’єктом з handleEvent
const eventLogger = {
    handleEvent(event) {
        const log = document.getElementById("log");
        if (log) {
            log.textContent = "Обробник-об’єкт спрацював на елементі: " + event.currentTarget.tagName;
        }
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById("football-btn");
    if (btn) {
        btn.addEventListener("click", eventLogger);

        setTimeout(() => {
            btn.removeEventListener("click", eventLogger);
            console.log("Обробник події eventLogger видалено");
        }, 5000);
    }
});

//  Подія з використанням data-* 
document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById("menu");
    const output = document.getElementById("output");

    const menuActions = {
        like() {
            output.textContent = "Ви поставили лайк цьому клубу!";
        },
        share() {
            output.textContent = "Посилання скопійовано!";
        },
        info() {
            output.textContent = "Це футбольний портал з найкращими клубами.";
        }
    };

    if (menu) {
        menu.onclick = function (event) {
            const button = event.target;
            if (button.tagName === "BUTTON") {
                const action = button.dataset.action;
                if (menuActions[action]) {
                    menuActions[action]();
                }
            }
        };
    }
});

//  Делегування подій 
document.addEventListener('DOMContentLoaded', function () {
    const list = document.getElementById("club-list");
    if (list) {
        list.onclick = function (event) {
            const clickedItem = event.target;
            if (clickedItem.tagName === "LI") {
                Array.from(list.children).forEach(li => li.classList.remove("active"));
                clickedItem.classList.add("active");
            }
        };
    }
});

class BehaviorController {
    constructor(rootElementId) {
        this.root = document.getElementById(rootElementId);
        if (this.root) {
            this.root.addEventListener("click", this.handleClick.bind(this));
        }
    }

    handleClick(event) {
        const target = event.target;
        const behavior = target.dataset.behavior;
        if (!behavior) return;

        switch (behavior) {
            case "showAlert":
                alert("Вітаємо Вас на футбольному сайті ");
                break;
            case "highlightCompany":
                const desc = document.getElementById("description");
                if (desc) {
                    desc.style.backgroundColor = "#ed5d15";
                    desc.style.color = "white";
                }
                break;
            default:
                console.warn("Невідома поведінка:", behavior);
        }
    }
}

// Ініціалізація після завантаження сторінки
window.addEventListener("DOMContentLoaded", () => {
    new BehaviorController("behavior-menu");
});
