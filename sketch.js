//ADD IMAGES, DO ALL THE RESTART IMAGES, ADD INSTRUCTIN FOR GAMEOVER AND RESET, fade skull

var ground, player;
var dissapear = 0;
var back_img;
var pf1;
var pf1group
var gamestate = 0.5;
var edges; 
var score = 0;
var pf2,pf2group
var restartgroup, skullgroup;
//var gameOver, restart, gameOverimg, restartimg;

function preload(){

day_img1 = loadImage('day_background1.png')
day_img2 = loadImage('game_background_1.png')
day_img3 = loadImage('game_background_3. 2.png')
day_img4 = loadImage('game_background_4.png')
start_bg = loadImage('starting bg.jpeg')
start_text = loadImage('starting text.png')
restart_button = loadImage('restart button.png')
skullImg = loadImage('skull.png')
spikes = loadImage('spikes.png')
wallImg = loadImage('wall.png')
bikerrun = loadAnimation('biker/Biker_run_attack copy 0.png','biker/Biker_run_attack copy 1.png','biker/Biker_run_attack copy 2.png','biker/Biker_run_attack copy 3.png','biker/Biker_run_attack copy 4.png', 'biker/Biker_run_attack copy 5.png');
saw = loadImage ('Saw.png')

}

function setup() {
  createCanvas(800,400);   

  ground = createSprite (400,390,800,20);
  ground.shapeColor = ("green")
  player = createSprite (30,355,25,25);
  player.scale = 1.5
  player.setCollider('rectangle', 0,0,30,45)
  player.addAnimation('playerimg',bikerrun)



   title = createElement('h1') 
   title.html('Algophobia')
   title.position(100000,1000000)
  
   sp1 = createSprite(390,140)
  
  button = createButton('Play')
  button.position( 370,180)




pf1group = new Group();

pf2group = new Group();

wallgroup = new Group();

bladegroup = new Group();

//gameOver = createSprite
//gameOver.addImage(gameOverimg)


}

function draw() {
  background('white');

if(gamestate == 0.5){
    background(start_bg);
    sp1.addImage(start_text)


    ground.visible = false
    player.visible = false

//gameOver.visible = false
//restart.visible = false

    
  
 
button.mousePressed(()=>{
  button.hide()
  title.hide()
  sp1.destroy()
  
  gamestate =0
  

})
  }




  
  if(gamestate ==0){
  player.velocityX=0
   ground.visible = true
   player.visible = true
   //gameOver.visible = false
   
   

    
   


if (player.y > 230 && player.y < 400) {

if (keyDown("UP_ARROW")){
    player.velocityY = -7
  }
  }

  if (keyDown("LEFT_ARROW")){
    player.velocityX = -5
  }
 
  if (keyDown("RIGHT_ARROW")){
    player.velocityX = 5
  }
  player.velocityY = player.velocityY + 1


    

  if(frameCount%100 == 0){
    
   var randHeight = random(250, 300);
   var randWidth = random(80, 200);
   pf1= createSprite (785, randHeight, randWidth, 10 );
   pf1.velocityX = -4;
   pf1.shapeColor = ("black");
   pf1group.add(pf1);
   pf2 = createSprite(785,pf1.y+12,pf1.width,5);
   pf2.addImage(spikes);
   pf2.scale = 0.2;
   pf2.velocityX = -4;
   pf2group.add(pf2);

  }



  if(frameCount%190 == 0){
    
    wall= createSprite (800, 320, 20, 80);
    wall.velocityX = -4
    wall.addImage(wallImg);
    wall.collide(player);
    wallgroup.add(wall);
    wall.scale = 0.5;
 
  }

  
    if(frameCount%70 == 0){
    
    blade= createSprite (785, 350, 40, 40 )
    blade.velocityX = -4
    blade.shapeColor = ("red");
    blade.collide(player)
    bladegroup.add(blade);
   blade.addImage(saw);
   blade.scale = 0.17
  }


 player.collide(pf1group);
 player.collide(wallgroup);
 edges= createEdgeSprites()

if(frameCount%10 == 0){
score = score +1

}
 
 

if(score>=0 && score <=100){
 
    background(day_img1);

}


if(score>100 && score <=200){

  background(day_img2);

}

if(score>200 && score <=300){

  background(day_img4);

}


if(score>300 && score <=400){

  background(day_img3);

}

if(player.isTouching(pf2group)){
gamestate =1


}

if(player.isTouching(bladegroup)){
  gamestate =1
  
  
  }


  if (player.isTouching(edges[0])){
  gamestate = 1

  }
  
  if (player.isTouching(edges[1])){
    gamestate = 1
  
    }


}



if (gamestate == 1){

  //gameOver.visible = true
 player.velocityX = 0
 player.velocityY = 0
 player.visible = false;
 ground.visbile = false;
 pf1group.destroyEach();
 pf2group.destroyEach();
 wallgroup.destroyEach();
 bladegroup.destroyEach();
 background("black");
 skull = createSprite (390, 150, 20,20);
 skull.addImage(skullImg);
 skull.scale = 1

 restart_bt = createSprite(395,270,20,20)
 restart_bt.addImage(restart_button);
 restart_bt.scale = 0.3

 skull.velocityX= 10
 restart_bt.velocityX = -10

if (keyDown('SPACE')){
  gamestate = 0
  score = 0
ground.visible = true
player.visible = true
player.x = 40
player.y = 355




}

}









player.collide(ground);
 
  drawSprites();
  textSize(15)
  fill ("black");
  textFont('Garamound');
  text('Score: '+  score, 720, 20);




  drawSprites();
}