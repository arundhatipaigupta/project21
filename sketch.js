var wall, bullet;
var thickness, weight, speed, damage;
function setup() {
  createCanvas(1600,400);

  thickness=random(55,90);
  speed=random(223,321);
  weight=random(30,52);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = rgb(80, 80, 80);;
  
  bullet = createSprite(100,200,20,60);
  bullet.velocityX = speed;
  
}

function draw() {
  background("lightgrey");  
  // if bullet has hit the wall, that means the center of the bullet sprite and the center of the wall, will be
  // either equal or less than the half of the width of the card and wall
  if(wall.x-bullet.x < (wall.width + bullet.width)/2){
    //reduce the velocity of bullet to zero as soon as it hits the wall
    bullet.velocityX = 0;
    // based on damage, color will change
    damage = (0.5 * weight * speed * speed ) / (thickness*thickness*thickness);
    console.log(damage);
    if(damage>10)
    {
      bullet.shapeColor="red";
    }
    else
    {
      bullet.shapeColor="green";
    }
  }


  drawSprites();
}