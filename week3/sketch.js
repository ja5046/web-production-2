var backgroundColor;
var isOverCircle;
var isOverSquare;
let circleColor = 100;
let circleClicked = false;
 
function setup() 
{
  // set canvas size
  createCanvas(400, 400);
  
  // default background color
  backgroundColor = color(255, 255, 255);
}
 
function draw() 
{
  background(backgroundColor);
 
  // get distance between mouse and circle
  var distanceA = dist(mouseX, mouseY, 75, 175); 
  
  // if the distance is less than the circle's radius
  if(distanceA < 50)
  {
    isOverCircle = true;
  } else {
    isOverCircle = false;
  }
  {
  var distanceB = dist(mouseX, mouseY, 180, 125); 
  if(distanceB < 50)
  {
   isOverSquare = true;
  } else
    {
   isOverSquare = false;
  }
    

  if(isOverCircle == true)
  {
    fill(100);
    cursor(HAND);
  } else {
    fill(200); 
    cursor(ARROW); 
  }
  square(175,75,100);
  if(isOverSquare == true)
    {
      fill(100);
      fill(circleColor)
      cursor(HAND);
    }else{
      fill(200);
      cursor(ARROW);
    }
    ellipse(75, 175, 100, 100);

      // draw a circle
    ellipseMode(CENTER);
    stroke(0);
    strokeWeight(5);
    
  }
  if(mouseX < 100) {
    noStroke();
    fill('brown');
    ellipse(150,245,85);
  }
  
  if(mouseX >= 100 && mouseX <= 200) {
    noStroke();
    fill('blue');
    rect(125,265,75,-75);
  }
  
  if(mouseX > 200) {
    noStroke();
    fill('orange');
    triangle(75, 275, 150, 200, 225, 275);
  } 
}

function mousePressed() {
  if (isOverCircle) {
    backgroundColor = color(random(255), random(255), random(255));
  }
  if(isOverSquare == true){
    circleColor = color(random(255), random(255), random(225));
  }
}