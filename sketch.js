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
  //Indicating the food remaining
  text("Stock of Food is: "+readStock);
  text("Note: Press UP Arrow Key To Feed The Milk",150,20);




}

//reading the value of the food remaining from the database
function readStock(data){
  foodS = data.val();
}

//function is used to write the value of the food remaining
//in database
function writeStock(){
  database.ref('/').update({
    Food:x 
  })
}



