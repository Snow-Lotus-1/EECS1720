var w;

function setup() {
  createCanvas(640, 360);
  // Make a Walker object
  w = new Walker();
}

function draw() {
  background(100);
  // Update and display object
  w.update();
  w.display();
}

function Walker() {

  // Start Walker in center
  this.pos = createVector(width / 2, height / 2);

  this.update = function() {
    // Move Walker randomly
    var vel = createVector(random(-15, 15), random(-15, 15));
    this.pos.add(vel);
  }
   
  this.display = function() {
    // Draw Walker as circle
    fill(random(0, 255), random(0, 255), random(0, 255));
    rect(this.pos.x, this.pos.y, random(20, 80), random(20, 80));
  }
}
