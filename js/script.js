let audio = document.querySelector('audio');
let mario = document.querySelector('.mario');

// Время анимации в миллисекундах (например, 300 мс)
const jumpDuration = 300;

document.addEventListener('click', (event) => {
   if (event.target.closest('.mario-img')) {
      mario.classList.remove('duble_jump');
      mario.classList.add('jump');
      audio.play();
      window.location.href = 'https://azyk.github.io/Game/index.html';

      // Переход на другую страницу после завершения прыжка
      // setTimeout(() => {
      //    window.location.href = 'https://azyk.github.io/Game/';
      // }, jumpDuration);
   }
   if (event.target.closest('.green__pipe')) {
      mario.classList.remove('jump');
      mario.classList.add('duble_jump');
   }
});
