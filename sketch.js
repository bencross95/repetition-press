function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('header');
}

function draw() {
  let c = color(255, 204, 0);
  fill(c);
  noStroke();
  ellipse(mouseX, mouseY, 80, 80);
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
