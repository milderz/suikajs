// Create a new ball element
const ball = document.createElement("div");
let ballXPosition = 160;

function renderBall() {
  const box = document.querySelector(".box");

  ball.classList.add("ball");

  ball.style.left = `${ballXPosition}px`;
  ball.style.top = "-40px";

  // Append the ball to the box
  box.appendChild(ball);
}

renderBall();

function moveBallLeft() {
  if (ballXPosition + 10 >= 20) {
    ball.style.left = `${(ballXPosition -= 10)}px`;
  }
}

function moveBallRight() {
  if (ballXPosition + 10 <= 330) {
    ballXPosition += 10;
    ball.style.left = `${ballXPosition}px`;
  }
}
function dropBall() {
  const box = document.querySelector(".box");

  // Create a new ball element
  const ball = document.createElement("div");
  ball.classList.add("ball");

  // Set a random x-coordinate within the box width
  const x = Math.random() * (box.offsetWidth - 20);

  // Set the initial position of the ball
  ball.style.left = `${ballXPosition}px`;
  ball.style.top = "0px";

  // Append the ball to the box
  box.appendChild(ball);

  // Animate the ball falling
  animateBall(ball);
}

function animateBall(ball) {
  let posY = 0;
  const fallSpeed = 10;

  function fall() {
    posY += fallSpeed;
    ball.style.top = `${posY}px`;

    // Check if the ball reaches the bottom of the box
    if (posY + ball.offsetHeight < 580) {
      requestAnimationFrame(fall);
    }
  }

  // Start the animation
  fall();
}
// dropBall();

window.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    dropBall();
  } else if (event.code === "ArrowLeft") {
    moveBallLeft();
  } else if (event.code === "ArrowRight") {
    moveBallRight();
  }
});
