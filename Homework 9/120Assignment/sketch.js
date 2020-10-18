
function setup()
{
    createCanvas(800, 600);
}

function draw()
{ 
    colorMode(RGB);
    background(0,0,0);
    let from = color(32,178,170);
    let to = color(72, 61, 139);
    colorMode(RGB); // Try changing to HSB.
    let interA = lerpColor(from, to, 0.3);
    let interB = lerpColor(from, to, 0.6);
    fill(from);
    rect(0, 0, 800, 150);
    fill(interA);
    rect(0, 150, 800, 150);
    fill(interB);
    rect(0, 300, 800, 150);
    fill(to);
    rect(0, 450, 800, 150);
  
    // hair  
    fill(0,0,0);
    ellipse(400,240,215,350); 
  
    // neck
    fill(250,235,215);
    rect(370,325,60,65);
  
    // head
    fill(250,235,215);
    ellipse(400, 220, 165, 230);
  
    // hair
    fill(0,0,0);
    rect(330,106,140,65);
  
    // glasses
    fill(255);
    square(325,200,50);
    square(425,200,50);
    line(425,220,375,220)

    // nose
    point(390,270);
    point(410,270);

    // body
    fill(250,235,215);
    ellipse(400, 435, 165, 110);
  
    // arms
    fill(178,34,34)
    rect(250,420,50,190);
    rect(500,420,50,190);
  
    // shirt
    fill(139,0,0);
    triangle(270, 410, 400, 720, 530, 410);
    ellipse(280, 420, 120, 80);
    ellipse(515, 420, 120, 80);
    
    fill(25,25,112);
    textSize(22);
    text("Ashley Gibbons",600,570 );

}