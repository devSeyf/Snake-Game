import { SNAKE_SPEED, draw as drawSnake, update as updateSnake } from "./snake";
lastRenderTime = 0;
function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSincelasRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSincelasRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;
  update();
  draw();
}
window.requestAnimationFrame(main);


function update() {
    updateSnake()
}
function draw() {
    drawSnake()
}
