// script.js

document.addEventListener("DOMContentLoaded", function() {
    const avatar = document.querySelector('.avatar');

    // Обработчик события mouseover
    avatar.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)'; // Увеличиваем размер на 10%
        this.style.transition = 'transform 1s'; // Плавный переход
    });

    // Обработчик события mouseout (чтобы вернуть обратно)
    avatar.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)'; // Возвращаем размер
    });

    // Обработчик события click
    avatar.addEventListener('click', function() {
        this.src = 'https://www.mirea.ru/upload/medialibrary/373/Kudzh-S.A..jpg'; // Замените на URL фотографии любимого преподавателя
    });

    // Обработчик события dblclick
    avatar.addEventListener('dblclick', function() {
        alert('Не налегай, у меня не так много любимых преподавателей');
    });
});