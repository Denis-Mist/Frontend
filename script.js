// Функция для вывода сообщения в консоль
function showMessage(message) {
    console.log(message);
}

// Функция для вывода текущего времени в консоль
function logCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ru-RU', { hour12: false }); // Формат "ЧЧ:ММ:СС"
    console.log(`Текущее время: ${timeString}`);
}

// Функция для изменения цвета фона страницы
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция для сброса цвета фона к исходному значению
function resetBackgroundColor() {
    document.body.style.backgroundColor = "white"; // Исходный цвет фона
}

// Функция для переключения видимости элемента
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
    } else {
        console.warn(`Элемент с селектором "${selector}" не найден.`);
    }
}


function updateH2FromUtmTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h2 = document.querySelector('h2'); 

    if (h2) {
        if (utmTerm) {
            h2.textContent = utmTerm; 
        } else {
            console.log('Параметр utm_term отсутствует, текст H2 оставлен по умолчанию.');
        }
    } else {
        console.warn('Элемент H2 не найден.');
    }
}

// Вызов функции showMessage сразу после определения
showMessage("Скрипт загружен!");

// Вызов функции logCurrentTime сразу после showMessage
logCurrentTime();

// Используем обработчик события DOMContentLoaded для выполнения функций после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    // Сбрасываем цвет фона к исходному
    resetBackgroundColor();

    // Меняем цвет фона
    changeBackgroundColor("#e6d1f4");

    // Переключаем видимость элемента с классом .content
    toggleVisibility(".content");

    // Обновляем текст H2 из параметра utm_term
    updateH2FromUtmTerm(); // Изменено с updateH1FromUtmTerm на updateH2FromUtmTerm
});