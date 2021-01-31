var tom , jerry;
var tomImage , jerryImage , tomImageSit , tomImageLie , tomAnimationWalk;
var jerryImageGift , jerryImageLense , jerryAnimation;
var bg , bgImage;

function preload() {
    //load the images here
    bgImage = loadImage("images/garden.png");
    tomImageLie = loadImage("images/cat1.png");
    tomImageSit = loadImage("images/cat4.png");
    tomAnimationWalk = loadAnimation("images/cat2.png ", "images/cat3.png");
    jerryImageGift = loadImage("images/mouse1.png");
    jerryAnimation = loadAnimation("images/cat2.png ","images/cat3.png" );
    jerryImagelense = loadImage("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(500,400,1000,800);
    bg.addImage("background", bgImage);
    bg.scale = 1;

    jerry = createSprite(190,590,5,5);
    jerry.addImage("jerry", jerryImageGift);
    jerry.scale = 0.1;

    tom = createSprite(850,590,10,10);
    tom.addImage("tom", tomImageLie);
    tom.scale = 0.2;
}

function draw() {

    background(255);

    //For moving and changing animation write code here
    keyPressed();
  

    console.log(tom.x - jerry.x);

   
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < tom.width/2 - jerry.width/2){
        tom.velocityX = 0;
        tom.addAnimation("tom", tomImageSit);
        tom.changeAnimation("tom");
        jerry.addAnimation(jerryImageLense);
        jerry.changeAnimation("jerry");
        tom.x = 500;
        
    }

    drawSprites();
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -2;
        tom.addAnimation("tom", tomAnimationWalk);
        tom.changeAniimation("tom");
        jerry.addAnimation("jerry", jerryAnimation);
        jerry.changeAnimation("jerry");
    }
}
 
