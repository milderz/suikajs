function dropBall() {
  const box = document.querySelector(".box");

  // Create a new ball element
  const ball = document.createElement("div");
  ball.classList.add("ball");

  // Set a random x-coordinate within the box width
  const x = Math.random() * (box.offsetWidth - 20);

  // Set the initial position of the ball
  ball.style.left = `${x}px`;
  ball.style.top = "0px";

  // Append the ball to the box
  box.appendChild(ball);

  // Animate the ball falling
  animateBall(ball);
}

function animateBall(ball) {
  let posY = 0;
  const fallSpeed = 2;

  function fall() {
    posY += fallSpeed;
    ball.style.top = `${posY}px`;

    // Check if the ball reaches the bottom of the box
    if (posY + ball.offsetHeight < 600) {
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
  }
});
