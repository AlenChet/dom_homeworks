import PlayingArea from './area';

document.addEventListener('DOMContentLoaded', () => {
  const area = document.querySelector('.area');
  const playingArea = new PlayingArea();

  for (let i = 1; i <= 16; i++) {
    const item = document.createElement('li');
    item.id = `cell-${i}`;
    item.classList.add('area__item');
    area.appendChild(item);
  }

  setInterval(() => {
    playingArea.randomMovingGoblin();
  }, 1000);
});