// Get the cursor element
var cursor = document.createElement("div");
cursor.className = "cursor";
document.body.appendChild(cursor);

// Add event listeners to track cursor movements
document.addEventListener("mousemove", moveCursor);
document.addEventListener("mouseenter", showCursor);
document.addEventListener("mouseleave", hideCursor);
document.addEventListener("click", handleClick);

// Function to move the cursor element
function moveCursor(event) {
  var x = event.clientX;
  var y = event.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
}

// Function to show the cursor element
function showCursor() {
  cursor.style.opacity = "1";
}

// Function to hide the cursor element
function hideCursor() {
  cursor.style.opacity = "0";
}

// Function to handle the click event
function handleClick(event) {
  var x = event.clientX;
  var y = event.clientY;

  let num_particles = Math.floor(Math.random() * 7 + 3);

  // Create multiple particles
  for (var i = 0; i < num_particles; i++) {
    createParticle(x, y);
  }
}

// Function to create a particle element
function createParticle(x, y) {
  var particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = x + "px";
  particle.style.top = y + "px";

  // Set random particle size
  var size = Math.floor(Math.random() * 2 + 5);
  particle.style.width = size + "px";
  particle.style.height = size + "px";

  document.getElementById("particles").appendChild(particle);

  // Set random particle direction and velocity
  var angle = Math.random() * Math.PI * 2;
  var velocity = Math.random() * 5 + 2;
  var vx = Math.cos(angle) * velocity;
  var vy = Math.sin(angle) * velocity;

  var gravity = 0.1;
  var friction = 0.98;

  // Update particle position
  function updatePosition() {
    vx *= friction;
    vy += gravity;

    var posX = parseFloat(particle.style.left) + vx;
    var posY = parseFloat(particle.style.top) + vy;

    particle.style.left = posX + "px";
    particle.style.top = posY + "px";

    if (posY < window.innerHeight) {
      requestAnimationFrame(updatePosition);
    } else {
      particle.remove();
    }
  }

  // Start particle animation
  requestAnimationFrame(updatePosition);
}
