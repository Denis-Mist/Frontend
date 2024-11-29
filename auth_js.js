// auth.js

// Объект formData
const formData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    comment: '',
    
    // Метод для вывода данных в консоль
    printData: function() {
        console.log(`Имя: ${this.name}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Дата: ${this.date}`);
        console.log(`Комментарий: ${this.comment}`);
    }
};

// Функция для сбора и проверки данных из формы
function submitForm(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Сбор данных из формы
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value.trim();
    const comment = document.getElementById('comment').value.trim();

    // Проверки
    if (!name) {
        alert('Пожалуйста, введите ваше имя.');
        return;
    }
    if (!email) {
        alert('Пожалуйста, введите ваш e-mail.');
        return;
    }
    if (!comment) {
        alert('Пожалуйста, введите комментарий.');
        return;
    }
    if (!/^\d+$/.test(phone.replace(/\D/g, ''))) {
        alert('Пожалуйста, введите корректный телефон (только цифры).');
        return;
    }
    if (!validateEmail(email)) {
        alert('Пожалуйста, введите корректный e-mail.');
        return;
    }

    // Заполнение объекта formData
    formData.name = name;
    formData.email = email;
    formData.phone = phone;
    formData.date = date;
    formData.comment = comment;

    // Вывод данных в консоль
    formData.printData();
}

// Функция для проверки корректности e-mail
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Добавляем обработчик события на кнопку отправки
document.querySelector('.submit-btn').addEventListener('click', submitForm);