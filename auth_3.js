document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const messageDiv = document.getElementById("message");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Предотвращаем стандартное поведение формы
  
      // Отображаем сообщение
      messageDiv.textContent = "Форма отправлена!";
      messageDiv.classList.remove("hidden");
      messageDiv.classList.add("visible", "success");
  
      // Убираем сообщение через 3 секунды
      setTimeout(() => {
        messageDiv.classList.remove("visible");
        messageDiv.classList.add("hidden");
      }, 3000);
    });
  });