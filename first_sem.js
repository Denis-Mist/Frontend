// script.js
document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('.welcome h1');
    h1.addEventListener('click', function() {
        alert('Вы кликнули на заголовок - так держать!');
    });

    const button = document.getElementById('show-second-semester');
    button.addEventListener('click', function() {
        const secondSemesterTopics = [
            "Базовое бэкенд-приложение",
            "HTTP-запросы",
            "JSON и работа с ним",
            "HTTP-ответы",
            "Проектирование API",
            "Роутинг и его настройка",
            "NoSQL базы данных",
            "Обеспечение авторизации и доступа пользователей",
            "Работа сторонних сервисов уведомления и авторизации",
            "Основы ReactJS",
            "Работа с компонентами динамической DOM",
            "Использование хуков в React",
            "Основы микросервисной архитектуры",
            "Разработка классических модулей веб-приложений",
            "Разработка классических модулей веб-приложений"
        ];

        // Находим таблицу практик
        const practiceTableBody = document.querySelector('table:nth-of-type(2) tbody');
        practiceTableBody.innerHTML = ''; // Очищаем существующие строки

        // Заполняем таблицу новыми данными
        secondSemesterTopics.forEach((topic, index) => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${index + 1}</td>
                <td>${topic}</td>
                <td class="checkbox"><input type="checkbox"></td>
                <td class="checkbox"><input type="checkbox"></td>
            `;
            practiceTableBody.appendChild(newRow);
        });
    });
});