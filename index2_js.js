document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.card-img');
  
    images.forEach(image => {
      image.addEventListener('mouseenter', () => {
        image.style.transform = 'rotate(360deg)';
        image.style.transition = 'transform 4s ease';
      });
  
      image.addEventListener('mouseleave', () => {
        image.style.transform = 'rotate(0deg)';
      });
    });
  });