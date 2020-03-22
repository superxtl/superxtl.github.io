let heart=[];
let a=0, angle=0;
let locX,locY;
let ring, myFont, milktea, diffuse,diamond,tennis,tenTex,graphics,myFont2,tianrui,graphics2,pic1,pic2,pic3,pic4;
const fireworks = [];
let gravity;
function preload(){
  ring=loadModel('celticring.obj');
  milktea=loadModel('milktea.obj');
  tennis=loadModel('tenbal.obj');
  diffuse=loadImage('cup_diffuse.png');
  tianrui=loadImage('tianrui.JPG');
  tenTex=loadImage('Tennis_Ball_Texture.jpg');
  diamond=loadImage('diamond.jpg');
  pic1=loadImage('pic1.JPG');
  pic2=loadImage('pic2.JPG');
  pic3=loadImage('pic3.jpg');
  pic3_1=loadImage('pic3_1.jpg');
  pic3_2=loadImage('pic3_2.jpg');
  pic4=loadImage('pic4.JPG');
  myFont = loadFont('LiuJianMaoCao-Regular.ttf');
  myFont2 = loadFont('MrDafoe-Regular.ttf');
}
function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
  graphics=createGraphics(200,200);
  graphics.fill(255);
  graphics.textAlign(CENTER);
  graphics.textSize(80);
  graphics.textFont(myFont2);
  graphics.text('Tianrui',100,100);
  graphics2=createGraphics(200,200);
  graphics2.fill(255);
  graphics2.textAlign(CENTER);
  graphics2.textSize(40);
  graphics2.textFont(myFont2);
  graphics2.text('ForeverLove',100,100);
    gravity = createVector(0, 0.13);
}
function draw() {
  background(0);
  translate(0,0,mouseX);
  //pic1
  push();
  noStroke();
  translate(-120,-20,-500);
  texture(pic1);
  plane();
  pop();
    //pic2
  push();
  noStroke();
  translate(120,20,-650);
  texture(pic2);
  plane();
  pop();
      //pic3
  push();
  noStroke();
  translate(-100,40,-800);
  texture(pic3);
  plane();
  pop();
        //pic3_1
  push();
  noStroke();
  translate(10,100,-850);
  texture(pic3_1);
  plane();
  pop();
        //pic3_2
  push();
  noStroke();
  translate(-10,-100,-900);
  texture(pic3_2);
  plane();
  pop();
      //pic4
  push();
  noStroke();
  translate(100,-10,-950);
  texture(pic4);
  plane();
  pop();
  //oath
  push();
  noStroke();
  translate(0,0,-1100);
  texture(graphics2);
  plane(20,20);
  pop();
  //box
  push();
  noStroke();
  texture(tianrui);
  translate(300,-200);
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);
  box(55,55);
  pop();
  //3d text
  push();
  noStroke();
  translate(-200,200);
  rotateY(angle*3);
  texture(graphics);
  plane(100,100);
  pop();
  //text
  push();
  translate(-100,-250);
  fill(255);
  textFont(myFont);
  textSize(36);
  text('Happy Anniversary', 10, 50);
  pop();
  //light
   ambientLight(100);
  directionalLight(255,255,255,0,0,-20);
  //tennis
  push();
  rotateY(2.9);
  rotateZ(-angle);
  translate(200,0);
  rotateX(-angle);
  noStroke();
  texture(tenTex);
  model(tennis);
  pop();
  //ring
  push();
    rotateY(-angle/2);
  translate(200,0);
  rotateX(-angle);
  scale(400);
  noStroke();
  normalMaterial();
  model(ring);
  pop();
  //milktea
  push();
  scale(5);
   translate(-50,-10);
  rotateX(PI*11/14);
  rotateY(angle*3);
  noStroke();
  texture(diffuse);
  model(milktea);
  pop();
  // heart
  push();
  rotateY(angle);
  strokeWeight(20);
  stroke('#ff0000');
  noFill();
  beginShape();
  for(i=0;i<heart.length;i++){
    vertex(heart[i].x,heart[i].y);
  }
  endShape();

    var r= 7;
    var x= r*16*pow(sin(a),3);
    var y= -r*(13*cos(a)-5*cos(2*a)-2*cos(3*a)-cos(4*a));
  append(heart,createVector(x,y));
    
  a+=0.009;
  while(a>TWO_PI){
    a=TWO_PI
  }
  
  pop();
  //fireworks
  push();
  translate(-windowWidth/2,-windowHeight/2,-1500);
    if (random(1) < 0.08) {
    fireworks.push(new Firework());
  }
  
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
  pop();
  angle+=0.01;
}