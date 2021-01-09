var dog,dogImage, dogImage2,happyDog, database, foodS, foodStock;

function preload()
{
  dogImage = loadImage("dogImg.png"); 
  dogImage2 = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(100,200,20,20);
  dog.addImage(dogImage);
  dog.scale = 0.25;

  happyDog = createSprite(200,200,20,20);
  happyDog.addImage(dogImage2);
  happyDog.scale = 0.25;

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);
  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dogImage(happyDog);
  }
  drawSprites();

  text("Stock of Food is: "+readStock);


  //add styles here

}

function readStock(){
  foodS = data.val();
}

function writeStock(){
  database.ref('/').update({
    Food:x 
  })
}



