var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fixedRect2= createSprite(400, 200, 60, 40);
  fixedRect.shapeColor="green"
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if (isTouching(movingRect,fixedRect2,fixedRect)){
    movingRect.shapeColor="blue"
    fixedRect.shapeColor="blue"
    fixedRect2.shapeColor="blue"
  }
  else{
    movingRect.shapeColor="green"
    
    fixedRect.shapeColor="blue"
    fixedRect2.shapeColor="green"

  }
  drawSprites();
}
