var trackImage
var trackSprite
var jaxonImage
var jaxonSprite
var leftwall
var rightwall
function preload(){
trackImage = loadImage("path.png")
jaxonImage = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  trackSprite = createSprite(200,200,20,20)
  jaxonSprite = createSprite(200,350,20,20)
  leftwall = createSprite(40,200,20,400)
  rightwall = createSprite(360,200,20,400)
  trackSprite.addImage("track",trackImage)
  jaxonSprite.addAnimation("Run",jaxonImage)
  trackSprite.velocityY = 10
  jaxonSprite.scale = 0.04
  trackSprite.scale = 1.2
  leftwall.visible = false
  rightwall.visible = false
}

function draw() {
background(0); 
if(trackSprite.y > 400){
trackSprite.y = 100
}
jaxonSprite.x = mouseX
if(jaxonSprite.x < 60){
jaxonSprite.x = 60
}
if(jaxonSprite.x > 340){
jaxonSprite.x = 340
}
drawSprites();
}
