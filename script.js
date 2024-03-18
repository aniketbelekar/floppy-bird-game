const bird = document.getElementById('bird');
const pipe = document.getElementById('pipe');

let gravity = 0.5;
let velocity = 0;
let lift = -10;
let position = 200;
let pipePosition = 600;

function flap() {
  velocity += lift;
}

document.addEventListener('keydown', flap);

function gameLoop() {
  velocity += gravity;
  position += velocity;
  pipePosition -= 3;

  if (position > 360) {
    position = 360;
    velocity = 0;
  }

  if (position < 0) {
    position = 0;
    velocity = 0;
  }

  if (pipePosition < -80) {
    pipePosition = 600;
  }

  bird.style.top = position + 'px';
  pipe.style.left = pipePosition + 'px';

  requestAnimationFrame(gameLoop);
}

gameLoop();
