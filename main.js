var bola;
function setup (){
Sofia = createSprite (200,50,20,20);
Sofia.shapeColor = "blue";
createCanvas (500,500);
var retangulo = createSprite(115,10,20,170);
    //creating the game object
   
    
    var retangulo2 = createSprite(100, 165,110,25);
    
    var retangulo3 = createSprite(5,75,110,20);
    
    var retangulo4 = createSprite(170,20,100,20);
    
    var retangulo5 = createSprite(195,140,25, 120);
    
    
    var retangulo6 = createSprite(-420,265,1000,20);
    
    var retangulo7 = createSprite (75,265,20,100);
    
    var retangulo8 = createSprite (40,395,20, 165);
    
    var retangulo9 = createSprite(125,315,20,110);
    
    var retangulo10 = createSprite(165,225,100,20);
    
    var retangulo11 = createSprite(250,270,20,115);
    
    var retangulo12 = createSprite(205,320,75,15);
    
    var retangulo13 = createSprite(225,450,20,270);
    
    var retangulo14 = createSprite(295,400,70,30);
    
    var retangulo15 = createSprite(350,400,20,150);
    
    var retangulo16 = createSprite(395,270,170,20);
    
    var retangulo17 = createSprite(305,290,20,100);
    
    var retangulo18 = createSprite(450,200,310,20);
    
    var retangulo19 = createSprite(285,150,100,20);
    
    var retangulo19 = createSprite(370,120,20,100);
    
    var retangulo20 = createSprite(335,50,100,20);
    
    var retangulo21 = createSprite(255,50,20,80);
    
    var retangulo22 = createSprite (400,390,25,60);
    
    }
function draw (){

background ("red");
   
    if (keyDown ("left")) {
    Sofia.x = Sofia.x -5 ;
}
    else if (keyDown("right")) {
        Sofia.x = Sofia.x +5 ;
}
     else if (keyDown("up")) {
        Sofia.y = Sofia.y -5 ;
    }   
     else if (keyDown("down")) {
    Sofia.y = Sofia.y +5
}
drawSprites ();
    }
      
      
      
     
      
    

    