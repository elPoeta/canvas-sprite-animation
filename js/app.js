/** @type {HTMLCanvasElement} */

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const image = document.querySelector('img');
let gameFrame = 0;
const staggerFrames = 5;
const spriteWidth = 575;
const spriteHeight = 523;
const animationSprites = [];
const animationState = [
  {
    name: 'idle',
    frames: 7
  }, {
    name: 'jump',
    frames: 7
  }, {
    name: 'fall',
    frames: 7
  }, {
    name: 'run',
    frames: 9
  }, {
    name: 'dizzy',
    frames: 11
  }, {
    name: 'sit',
    frames: 5
  }, {
    name: 'roll',
    frames: 7
  }, {
    name: 'bite',
    frames: 7
  }, {
    name: 'ko',
    frames: 12
  }, {
    name: 'getHit',
    frames: 4
  }
];

animationState.forEach((state, index) => {
  const frames = {
    loc: []
  }
  for (let i = 0; i < state.frames; i++) {
    frames.loc.push({ x: i * spriteWidth, y: index * spriteHeight })
  }
  animationSprites[state.name] = frames;
});

const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  const position = Math.floor(gameFrame / staggerFrames) % animationSprites['run'].loc.length;
  const frameX = spriteWidth * position;
  const frameY = animationSprites['run'].loc[position].y
  ctx.drawImage(image, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
  gameFrame++;
  requestAnimationFrame(animate);
}
animate();