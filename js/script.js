let audio = document.querySelector('audio');
let mario = document.querySelector('.mario');

// Время анимации в миллисекундах (например, 3000 мс)
const jumpDuration = 3000;

document.addEventListener('click', (event) => {
   if (event.target.closest('.mario-img')) {
      mario.classList.remove('duble_jump');
      mario.classList.add('jump');
      audio.play();
      
      // Переход на другую страницу после завершения прыжка
      setTimeout(() => {
         window.location.href = 'https://azyk.github.io/Game/index.html';
      }, jumpDuration);
   }
   if (event.target.closest('.green__pipe')) {
      mario.classList.remove('jump');
      mario.classList.add('duble_jump');
   }
});
