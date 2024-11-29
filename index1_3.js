document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.querySelector('.avatar');
  
    avatar.addEventListener('mouseenter', function() {
      avatar.classList.add('rotate'); // Добавляем класс при наведении
    });
  
    avatar.addEventListener('mouseleave', function() {
      avatar.classList.remove('rotate'); // Убираем класс при уходе мыши
    });
  });