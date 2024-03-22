export default class PlayingArea {
  randomMovingGoblin() {
    const goblinImg = document.createElement('img');
    goblinImg.classList.add('area__img');
    goblinImg.src = 'https://raw.githubusercontent.com/netology-code/ahj-homeworks/video/dom/pic/goblin.png';

    const playingItemsCollection = document.querySelectorAll('.area__item');

    for (const playingItem of playingItemsCollection) {
      if (playingItem.firstElementChild) {
        playingItem.firstElementChild.remove();
      }
    }

    const randomPlayingItem = Math.floor(Math.random() * playingItemsCollection.length);
    playingItemsCollection[randomPlayingItem].appendChild(goblinImg);
  }
}


