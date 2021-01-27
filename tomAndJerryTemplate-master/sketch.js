var tom,tomImage;
var jerry,jerryImage;
var backGround,backGroundImage;

function preload() {
 tomImage = loadImage("tomImage");
 jerryImage = loadImage("jerryImage");
 backGroundImage = loadImage("backGround");

}

function setup(){
    createCanvas(600,400);
    tom = createSprite(450,250,50,50);
    jerry = createSprite(200,250,50,50);

}

function draw() {

    background("green");
    //Write condition here to evalute if tom and jerry collide
     
    keyPressed();

    drawSprites();
    text(mouseX + ',' + mouseY, 10, 45);
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    tom.velocityX = -5
}
}
