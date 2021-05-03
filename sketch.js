var dog,dogImg;
var foodCount;
//create feed and lastFed variable here


function preload(){
  dogImg = loadImage("Dog.png"); 
}

function setup() {
 createCanvas(400,400);
 database=firebase.database();
 dog = createSprite(200,200,30,30);
 dog.addImage(dogImg);
 dog.scale = 0.1;

 var decreaseFood = database.ref("foodCount");
 decreaseFood.on("value",function(data){
 foodCount=data.val();
 console.log(foodCount);
 })
 
}

function draw() {
  background(46,139,87);
  stroke("black");
  text("The Remaining Food is"+" "+foodCount,200,100);
  if(keyDown(UP_ARROW)){
    foodCount-=1;
    updateFoodCount();
  }
 


  drawSprites();
}
function updateFoodCount(){
  database.ref("/").update({
    foodCount:foodCount
  })
}


