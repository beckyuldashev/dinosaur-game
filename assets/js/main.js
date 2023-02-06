let time = 0;
const gameField = document.getElementById('game');
const character = document.getElementById('character');
const block = document.getElementById('block');
const restartBtn = document.getElementById('restart-btn');
const startBtn = document.getElementById('start-btn');



startBtn.addEventListener('click', initGame);

function jump() {
  const character = document.getElementById('character');

  if (!character.classList.contains('animate-character')) {
    character.classList.add('animate-character');
  }

  setTimeout(() => {
    character.classList.remove('animate-character');
  }, 700)
}

function restartGame() {
  restartBtn.classList.remove('active');
  block.classList.remove('hide');
  restartBtn.classList.remove('btn-show');
}

function initGame() {
  const checkDad = setInterval(() => {
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    if (blockLeft > 0 && blockLeft < 60 && characterTop >= 60) {
      block.classList.add('hide');
      alert('Вы проиграли!');

      restartBtn.classList.add('btn-show');
    }

  }, 10);

  startBtn.classList.add('hide')

  block.classList.add('animate-block');

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      jump();
    }
  });

  gameField.addEventListener('click', jump);

  restartBtn.addEventListener('click', restartGame);
}