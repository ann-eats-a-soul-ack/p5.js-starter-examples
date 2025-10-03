//in p5.js to leave comments in your code use // at the start of the line. 
//let or var are used to declare variables in your code. a variable is a container for a value. they can be called anything, i could call this unicorn and it would still work as long as it is unicorn everywhere in the code. i'm using y here to refer to the horizontal and vertical position of the shapes on the screen. here we are saying x and y are equal to the edge of the canvas. 
let y = 0; 
let R, G, B, A;
let change;

//preload is where you load text or sound or video files, anything you want to have ready and loaded before the sketch starts. here i'm loading a text file. 
function preload() {
  change = loadStrings('change.txt');
}

//setup is where you set anything you want to apply at the beginning of your sketch. we have created a canvas of 400 x 400 pixels. when creating a website i set it to windowWidth, windowHeight.
function setup() {
  createCanvas(400, 400);
  textFont('times');
  
  //to set the background colour once you write it in the setup function. 
 //background(50, 100, 50);
  
    // sets colour values for the variables we declared above. R = red, G = green, B = blue, A = alpha/transparency
  R = random(100, 255);
  G = random(100, 255);
  B = random(100, 255);
  A = random(0, 150);
}


// draw is a loop. anything you write in the draw function continues to happen forever. by setting the background here we keep the background grey forever. 
function draw() {
  background(204);
  fill(R, G, B, A);
  textSize(20);
  stroke(5);

  //the first two numbers/letters here are x and y positions and they set the location of this shape's centre. the next two numbers are the width and height of the ellipse
  // this ellipse stays in the top left corner
    ellipse(50, 50, 80, 80);
  
  // this ellipse starts in the top left corner and moves to the bottom of the canvas and then dissapears 
  ellipse(50, y, 80, 80);

  //this is making the ellipse move from the top to the bottom of the canvas by saying keep adding 1 pixel to the beginning position of y.
  y = y + 1;
  
// to set text into lines like a stanza/make the text wrap, add two extra numbers. the first two are x and y, the second two create a box for your text to be displayed in.
 text(change, 50, 100, 300, 300);  
  
  //mouseX and mouseY are used when you want an object to follow your mouse on the screen.
  text('hi friends', mouseX, mouseY, 50, 50);
  
  //this is an if statement.if statements are helpful for running a block of code based on a condition. in this case the statement says, if the mouse is pressed colour the ellipse black, if it's not pressed colour it white.
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX,50, 80, 80);
}

