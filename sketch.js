var fixedRect, movingRect


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 100, 80, 30);
  fixedRect.shapeColor = "blue";
  fixedRect.velocityY = 4

  movingRect = createSprite(400,300, 30, 80);
  movingRect.shapeColor = "red"
  movingRect.velocityY = -4
}
 
function draw() {
  background(255,255,255);  

  bounceOff(movingRect, fixedRect)

  drawSprites();
}

