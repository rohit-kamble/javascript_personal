const snake = document.getElementById("snake");
let left1 = 150,
  top1 = 150;
var topset = null;
var downSet = null;
var leftSet = null;
var rightSet = null;
const direction = (ch) => {
  switch (ch) {
    case "ArrowUp": {
      topset = setInterval(() => {
        console.log("set topSet call");
        top1--;
        snake.style.top = `${top1}px`;
      }, 50);
      clearInterval(downSet);
      clearInterval(leftSet);
      clearInterval(rightSet);
      return;
    }
    case "ArrowDown": {
      downSet = setInterval(() => {
        top1++;
        snake.style.top = `${top1}px`;
      }, 50);
      clearInterval(topset);
      clearInterval(leftSet);
      clearInterval(rightSet);
      return;
    }
    case "ArrowLeft": {
      leftSet = setInterval(() => {
        left1--;
        snake.style.left = `${left1}px`;
      }, 50);
      clearInterval(topset);
      clearInterval(rightSet);
      clearInterval(downSet);
      return;
    }
    case "ArrowRight": {
      rightSet = setInterval(() => {
        left1++;
        snake.style.left = `${left1}px`;
      }, 50);
      clearInterval(topset);
      clearInterval(leftSet);
      clearInterval(downSet);
      return;
    }
    default:
      return null;
  }
};
document.addEventListener("keydown", (event) => {
  direction(event.key);
});
