var A = [170, 20];
var B = [20, 240];
var C = [320, 240];
var startPoint = [0,0];
var currentPoint = [0,0];
var rand;


function setup() {
  var canvasControl = select('#canvas-control');
  var canvas = createCanvas(340, 260);
  canvas.parent(canvasControl);
  noSmooth();
  ellipseMode();
  background(255);
  fill(0);
  textAlign(CENTER);
  textSize(16);
  ellipse(A[0], A[1], 4, 4);
  text('A', A[0], A[1]-5);
  ellipse(B[0], B[1], 4, 4);
  text('B', B[0]-10, B[1]+10);
  ellipse(C[0], C[1], 4, 4);
  text('C', C[0]+10, C[1]+10);
  textAlign(LEFT);

}

function mousePressed() {
  startPoint[0] = mouseX;
  startPoint[1] = mouseY;
  ellipse(startPoint[0], startPoint[1], 2, 2);
}

function draw() {
    if ((startPoint[0] > 0) && (startPoint[1] > 0)) {
    rand = int(random(3));
    switch (rand) {
      case 0:
        currentPoint[0] = (startPoint[0] + A[0])/2;
        currentPoint[1] = (startPoint[1] + A[1])/2;
        ellipse(currentPoint[0], currentPoint[1], 1, 1);
        startPoint = currentPoint;
        break;
      case 1:
        currentPoint[0] = (startPoint[0] + B[0])/2;
        currentPoint[1] = (startPoint[1] + B[1])/2;
        ellipse(currentPoint[0], currentPoint[1], 1, 1);
        startPoint = currentPoint;
        break;
      case 2:
        currentPoint[0] = (startPoint[0] + C[0])/2;
        currentPoint[1] = (startPoint[1] + C[1])/2;
        ellipse(currentPoint[0], currentPoint[1], 1, 1);
        startPoint = currentPoint;
        break;
      }
    setTimeout(draw, 10000);
  }
}
