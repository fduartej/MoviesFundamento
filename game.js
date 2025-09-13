document.addEventListener("DOMContentLoaded", function () {
  const player = document.querySelector(".game-player");
  const gameContainer = document.querySelector(".game-container");
  const gameWidth = gameContainer.clientWidth;
  const gameHeight = gameContainer.clientHeight;

  let playerX = gameWidth / 2 - 25;
  let playerY = Math.random() * (gameHeight - 30);
  player.style.left = `${playerX}px`;
  player.style.top = `${playerY}px`;
  spawnCoin();
  setInterval(spawnCoin, 3000);
});

document.addEventListener("keydown", function (event) {
  const player = document.querySelector(".game-player");
  const gameContainer = document.querySelector(".game-container");
  const gameWidth = gameContainer.clientWidth;
  const gameHeight = gameContainer.clientHeight;
  collectCoins();
  let playerX = parseInt(player.style.left);
  let playerY = parseInt(player.style.top);

  switch (event.key) {
    case "ArrowUp":
      if (playerY > 0) {
        playerY -= 10;
      }
      break;
    case "ArrowDown":
      if (playerY < gameHeight - 10) {
        playerY += 10;
      }
      break;
    case "ArrowLeft":
      if (playerX > 0) {
        playerX -= 10;
      }
      break;
    case "ArrowRight":
      if (playerX < gameWidth - 10) {
        playerX += 10;
      }
      break;
    default:
      return; // Exit this handler for other keys
  }

  player.style.left = `${playerX}px`;
  player.style.top = `${playerY}px`;
});

function spawnCoin() {
  const coin = document.createElement("div");
  coin.classList.add("coin");
  const gameContainer = document.querySelector(".game-container");
  const gameWidth = gameContainer.clientWidth;
  const gameHeight = gameContainer.clientHeight;

  // Set random position for the coin
  const coinX = Math.random() * (gameWidth - 30);
  const coinY = Math.random() * (gameHeight - 30);
  coin.style.left = `${coinX}px`;
  coin.style.top = `${coinY}px`;

  gameContainer.appendChild(coin);

  // Remove the coin after a few seconds
  setTimeout(() => {
    coin.remove();
  }, 5000);
}

function collectCoins() {
  const player = document.querySelector(".game-player");
  const coins = document.querySelectorAll(".coin");

  coins.forEach((coin) => {
    const coinRect = coin.getBoundingClientRect();
    const playerRect = player.getBoundingClientRect();

    // Check for collision
    if (
      playerRect.x < coinRect.x + coinRect.width &&
      playerRect.x + playerRect.width > coinRect.x &&
      playerRect.y < coinRect.y + coinRect.height &&
      playerRect.y + playerRect.height > coinRect.y
    ) {
      coin.remove(); // Remove the coin if collected
    }
  });
}
