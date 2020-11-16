// Player
var PlayerX = 20;
var PlayerY = 20;
// Enemy 1
var Enemy1X = 60;
var Enemy1Y = 300;
var radius = 55
var xspeed = 5; 
var yspeed = 5; 
var xdirection = 1; // Left or Right
var ydirection = 1; // Top to Bottom
// Enemy 2
var Enemy2X = [];
var Enemy2Y = [];
var diameters = [];
var Enemy2XSpeed = [];
var Enemy2YSpeed = [];
// mouse click
var mousex = 0;
var mousey = 0;

function setup() 
{
    createCanvas(500,600);
    for (var i = 0; i < 7; i++) {
        Enemy2XSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        Enemy2YSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        Enemy2X[i] = RandomNumber(500);
        Enemy2Y[i] = RandomNumber(600);
        diameters[i] = RandomNumber(30);
    }
}

function draw() 
{
    background(0);
    fill(255);
    createExit();
    YouWin();
    createPlayer();
    playerMovements();
    Enemy1();
    Enemy1Movements();
    mouseClick();
  
 // Enemy 2 
    fill(237, 34, 93);
    for (var i = 0; i < Enemy2X.length; i++) 
    {
        square(Enemy2X[i], Enemy2Y[i], diameters[i]);
        Enemy2XSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() *           5)) + 1);
        Enemy2YSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() *            5)) + 1);
      
    // Enemy 2 Movement
        Enemy2X[i] += Enemy2XSpeed [i];
        Enemy2Y[i] += Enemy2YSpeed [i];
        if (Enemy2X[i] > width) {
            Enemy2X[i] = 0;
        }
        if (Enemy2X[i] < 0) {
            Enemy2X[i] = width;
        }
        if (Enemy2Y[i] > height) {
            Enemy2Y[i] = 0;
        }
        if (Enemy2Y[i] < 0) {
            Enemy2Y[i] = height;
        }
    }
}
  
function YouWin()
{
  if(PlayerX > width && PlayerY > width-50)    
  {
    fill(255);
    textSize(26);
    text("You Win!", 195, 200);
  }  
}

function createExit()
{
  // exit message
    textSize(15);
    text("EXIT", width-50,height-85);  
    rect(486,500,15,85);
}

function createPlayer()
{ 
    fill(59,250,47);
    ellipse(PlayerX, PlayerY, 30, 30);
}

function playerMovements()
{
  // W
    if(keyIsDown(87))
  {
      PlayerY-=5;
  }
  // A
    if(keyIsDown(65))
  {
      PlayerX-=5;
  }
  // S
    if(keyIsDown(83))
  {
      PlayerY+=5;
  }
  // D
    if(keyIsDown(68))
  {
      PlayerX+=5;
  }
}

function Enemy1()
{
    fill(132,1,251);
    square(Enemy1X,Enemy1Y,radius);
}

function Enemy1Movements()
{
  Enemy1X = Enemy1X + xspeed * xdirection;
  Enemy1Y = Enemy1Y + yspeed * ydirection;
  if (Enemy1X > width - radius || Enemy1X < 0) 
  {
    xdirection *= -1;
  }
  if (Enemy1Y > height - radius || Enemy1Y < 0) 
  {
    ydirection *= -1;
  } 
}

function Enemy2()
{
    fill(237, 34, 93);
    square (Enemy2X,Enemy2Y,20);
}

function Enemy2Movements()
{
  Enemy2X += Enemy2XSpeed;
  Enemy2Y += Enemy2YSpeed;
  if(Enemy2X  > width)
  {
    Enemy2X  = 0;
  }
  if(Enemy2X  < 0)
  {
    Enemy2X = width;
  }
  if(Enemy2Y > height)
  {
    Enemy2Y = 0;
  }
  if(Enemy2Y < 0)
  {
    sEnemy2Y = height;
  }
}

function mouseClick()
{
    fill (17,249,235);   
    ellipse(mousex, mousey, 7, 50);
}

function mousePressed()
{
    mousex = mouseX;
    mousey = mouseY;
}

function RandomNumber(number) 
  {
    return Math.floor(Math.random() * number) + 5;
  } 