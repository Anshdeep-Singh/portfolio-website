// Get the cursor element
var cursor = document.createElement("div");
cursor.className = "cursor";
document.body.appendChild(cursor);

// Set the number of trailing elements
var numTrails = 15;
var trails = [];

// Create trailing elements
for (var i = 0; i < numTrails; i++) {
  var trail = document.createElement("div");
  trail.className = "cursor-trail";
  trails.push(trail);
  document.body.appendChild(trail);
}

// Add event listeners to track cursor movements
document.addEventListener("mousemove", moveCursor);
document.addEventListener("mouseenter", showCursor);
document.addEventListener("mouseleave", hideCursor);

// Flag to track mouse movement
var isMoving = false;

// Function to move the cursor element and trailing elements
function moveCursor(event) {
  var x = event.clientX;
  var y = event.clientY;

  if (!isMoving) {
    // Mouse has started moving
    showCursor();
    isMoving = true;
  }

  cursor.style.left = x + "px";
  cursor.style.top = y + "px";

  for (var i = numTrails - 1; i >= 0; i--) {
    if (i === 0) {
      trails[i].style.left = x + "px";
      trails[i].style.top = y + "px";
    } else {
      var prevTrail = trails[i - 1];
      var prevLeft = parseFloat(prevTrail.style.left);
      var prevTop = parseFloat(prevTrail.style.top);
      trails[i].style.left = prevLeft + "px";
      trails[i].style.top = prevTop + "px";
    }
  }
}

// Function to show the cursor element and trailing elements
function showCursor() {
  cursor.style.opacity = "1";

  for (var i = 0; i < numTrails; i++) {
    trails[i].style.opacity = "1";
  }
}

// Function to hide the cursor element and trailing elements
function hideCursor() {
  cursor.style.opacity = "0";

  for (var i = 0; i < numTrails; i++) {
    trails[i].style.opacity = "0";
  }

  isMoving = false; // Reset the flag when the mouse stops moving
}
