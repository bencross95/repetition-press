

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
  myCanvas.parent('header');
}

function draw() {

  // background(205, 105, 9);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  ellipsoid(200, 200, 40, 12);


  // let c = color(255, 204, 0);
  // let white = color(255, 255, 255, 0);
  // // fill(c);
  // noFill();
  // stroke(c);
  // rectMode(CENTER);
  // ellipse(windowWidth/2, windowHeight/2, mouseX, mouseY);
  //
  // stroke(200, 80, 0);
  // strokeWeight(2);
  //
  //
  // if (mouseIsPressed) {
  //   stroke(white);
  // } else {
  //   stroke(c);
  // }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
