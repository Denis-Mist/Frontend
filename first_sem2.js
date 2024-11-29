document.addEventListener("DOMContentLoaded", function() {
    const showLecturesButton = document.getElementById('show-lectures');
    const lecturesSection = document.getElementById('лекции');

    // Скрыть раздел лекций изначально
    lecturesSection.style.display = 'none';

    showLecturesButton.addEventListener('click', function() {
        if (lecturesSection.style.display === 'none') {
            lecturesSection.style.display = 'block'; // Показать раздел лекций
            lecturesSection.style.opacity = 0; // Установить начальную непрозрачность
            let opacity = 0;

            // Плавная анимация появления
            const fadeIn = setInterval(function() {
                if (opacity >= 1) {
                    clearInterval(fadeIn); // Остановить анимацию, когда непрозрачность достигла 1
                }
                opacity += 0.1; // Увеличиваем непрозрачность
                lecturesSection.style.opacity = opacity; // Применяем непрозрачность
            }, 50); // Интервал обновления
        }
    });
});