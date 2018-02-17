var canvas;
var canvasWidth = 500;
var canvasHeight = 400;
var button;
var slider;
var spread;


// declare and initialize global variables

/*
 * setup()
 */
function setup(){
  button=select("#clear-button");
  slider=select("#slider");
  canvas=createCanvas(canvasWidth,canvasHeight);
  background(0,0,0)
  canvas.parent("canvas-area");
  canvas.mousePressed(drawEllipse);
  button.mousePressed(setup);
  slider.input(updateSpread);
  updateSpread();

}

function draw(){

}

/*
 * drawEllipse()
 */
function drawSplatter(){
  fill("#ffeeff");
  ellipse(mouseX, mouseY,spread,spread);
  noStroke();
  random(10,15);
  fill(random(0,255),random(0,255),random(0,255));
  for(i=0;i<kkdkdk,i++){
    var radius = random(0,15);

    ellipse(random(mouseX-spread,mouseX+spread),random(mouseY-spread,mouseY+spread),radius)
  }
  }

}

/*
 * updateSpread()
 * This function simply sets the spread variable to the value of the slider.
 * For example, if the slider is at 75, the spread will be set to 75 as well.
 */
function updateSpread(){
  spread=slider.value();
}

 /*
  * drawSplatter()
  * Creates ellipses on the canvas around where the mouse is clicked.
  * Details:
  * -The function creates between 10 and 14 ellipses (random).
  * -Each ellipse will be a random color and have no outline.
  * -Each ellipse will have a random radius (5 to 14 pixels).
  * -Each ellipse's x and y values are calculated like this:
  *  x = random value between mouseX - spread and mouseX + spread
  *  y = random value between mouseY - spread and mouseY + spread
  */
