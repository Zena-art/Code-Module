 import {InputHandler, Particle, Player, Projectile, Background, UI, Enemy, Game, Layer, LuckyFish, Angler1, Angler2    } from './classes.js';
   

window.addEventListener('load', function(){
// canvas setup
const canvas = this.document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 500;


const game = new Game(canvas.width, canvas.height);
let lastTime = 0;
// anitmation loop
function animate(timeStamp){
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.update(deltaTime);
  game.draw(ctx);
  requestAnimationFrame(animate); 
}
animate(0);
});

export {Game};
