function setup() {
  createCanvas(800,800);
}

function draw() {
  background(255,255,255);  
  rect(400,400,80,400);
  triangle(350, 400, 530, 400, 440, 225)
  rect(340,500,60,350);
  rect(480,500,60,350);
  drawSprites();
}