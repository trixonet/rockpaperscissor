// var win = new WebImage 

function start (){
    println ("1. Earth");
    println ("2. Fire");
    println ("3. Water");
    
    var intro = readInt ("Welcome to Elements! Test your luck by choosing an element, which one shall you chose? " );
    while (intro > 3){
        println("Please pick an number between 1-3");
        break;
    }
    
    var roll = Randomizer.nextInt(1,3);
    println ("You picked: " + intro);
    println ("Computer picks: " + roll ); 
    
    //Tie both numbers for Earth
    if (intro == 1 && roll == 1){
        println ("TIE");
        gameTieDirtPic();

    }
    
    //Tie both numbers for Fire
    if (intro == 2 && roll == 2){
        println("TIE");
        gameTieFirePic();
    }
    
    //Tie both numbers for Water
    if (intro == 3 && roll == 3){
        println("TIE");
        gameTieWaterPic();
      
    }
    
    //Earth to water
    if (intro == 1 && roll == 3){
        println ("YOU WIN");
        earthToWaterPic();
        
    }
    
    //Fire to earth
    if (intro == 2 && roll == 1){
        println ("YOU WIN");
        fireToEarthPic();
    }
    
    //Water to fire
    if (intro == 3 && roll == 2){
       println  ("YOU WIN");
       waterToFirePic();
    }
    
     // Bottom Section are Losing Seqeunces for the player sequences   
     
    //earth to fire
    if (intro == 1 && roll == 2){
       println  ("YOU LOSE");
       loseEarthToFirePic();
    }
    
    //fire to water
    if (intro == 2 && roll == 3){
       println ("YOU LOSE");
       loseFireToWaterPic();
    }
    
    //water to earth
    if (intro == 3 && roll == 1){
       println ("YOU LOSE"); 
       loseWaterToEarth();
    }
}


// tie for dirt pictures

function gameTieDirtPic(){
    var dirt = new WebImage("https://codehs.com/uploads/5c5b03e5830f4a1db397f2503291cfdd");
    dirt.setSize(138, 175);
    dirt.setPosition(20, 35);

    var fire = new WebImage("https://codehs.com/uploads/01b7bc8d1f78f61f0e107d69c68f4760");
    fire.setSize(138, 175);
    fire.setPosition(0, 35);

    var water = new WebImage("https://codehs.com/uploads/5c5b03e5830f4a1db397f2503291cfdd");
    water.setSize(138, 175);
    water.setPosition(250, 35);
     
     add(dirt); 
     remove(fire);
     add(water);
}


//tie for fire pictures
function gameTieFirePic(){
    var dirt = new WebImage("https://codehs.com/uploads/01b7bc8d1f78f61f0e107d69c68f4760");
    dirt.setSize(138, 175);
    dirt.setPosition(20, 35);

    var fire = new WebImage("https://codehs.com/uploads/01b7bc8d1f78f61f0e107d69c68f4760");
    fire.setSize(138, 175);
    fire.setPosition(0, 35);

    var water = new WebImage("https://codehs.com/uploads/01b7bc8d1f78f61f0e107d69c68f4760");
    water.setSize(138, 175);
    water.setPosition(250, 35);
     
     add(dirt); 
     remove(fire);
     add(water);
}

//tie for water pictures
function gameTieWaterPic(){
    var dirt = new WebImage("https://codehs.com/uploads/229bfa3a8677c3aa6e7d165abd870547");
    dirt.setSize(138, 175);
    dirt.setPosition(20, 35);

    var fire = new WebImage("https://codehs.com/uploads/01b7bc8d1f78f61f0e107d69c68f4760");
    fire.setSize(138, 175);
    fire.setPosition(0, 35);

    var water = new WebImage("https://codehs.com/uploads/229bfa3a8677c3aa6e7d165abd870547");
    water.setSize(138, 175);
    water.setPosition(250, 35);
     
     add(dirt); 
     remove(fire);
     add(water);
}

//pictures for earth to water
function earthToWaterPic(){
    var dirt = new WebImage("https://codehs.com/uploads/5c5b03e5830f4a1db397f2503291cfdd");
    dirt.setSize(138, 175);
    dirt.setPosition(20, 35);

    var fire = new WebImage("https://codehs.com/uploads/01b7bc8d1f78f61f0e107d69c68f4760");
    fire.setSize(138, 175);
    fire.setPosition(0, 35);

    var water = new WebImage("https://codehs.com/uploads/229bfa3a8677c3aa6e7d165abd870547");
    water.setSize(138, 175);
    water.setPosition(250, 35);
     
     add(dirt); 
     remove(fire);
     add(water);
}

//pictures for fire to earth
function fireToEarthPic(){
    var dirt = new WebImage("https://codehs.com/uploads/01b7bc8d1f78f61f0e107d69c68f4760");
    dirt.setSize(138, 175);
    dirt.setPosition(20, 35);

    var fire = new WebImage("https://codehs.com/uploads/01b7bc8d1f78f61f0e107d69c68f4760");
    fire.setSize(138, 175);
    fire.setPosition(0, 35);

    var water = new WebImage("https://codehs.com/uploads/5c5b03e5830f4a1db397f2503291cfdd");
    water.setSize(138, 175);
    water.setPosition(250, 35);
     
     add(dirt); 
     remove(fire);
     add(water);
}

//pictures for water to fire
function waterToFirePic(){
    var dirt = new WebImage("https://codehs.com/uploads/229bfa3a8677c3aa6e7d165abd870547");
    dirt.setSize(138, 175);
    dirt.setPosition(20, 35);

    var fire = new WebImage("https://codehs.com/uploads/5c5b03e5830f4a1db397f2503291cfdd");
    fire.setSize(138, 175);
    fire.setPosition(0, 35);

    var water = new WebImage("https://codehs.com/uploads/01b7bc8d1f78f61f0e107d69c68f4760");
    water.setSize(138, 175);
    water.setPosition(250, 35);
     
     add(dirt); 
     remove(fire);
     add(water);
}

//pictures for losing earth to fire
function loseEarthToFirePic(){
    var dirt = new WebImage("https://codehs.com/uploads/5c5b03e5830f4a1db397f2503291cfdd");
    dirt.setSize(138, 175);
    dirt.setPosition(20, 35);

    var fire = new WebImage("https://codehs.com/uploads/229bfa3a8677c3aa6e7d165abd870547");
    fire.setSize(138, 175);
    fire.setPosition(0, 35);

    var water = new WebImage("https://codehs.com/uploads/01b7bc8d1f78f61f0e107d69c68f4760");
    water.setSize(138, 175);
    water.setPosition(250, 35);
     
     add(dirt); 
     remove(fire);
     add(water);
}

//pictures for losing fire to water
function loseFireToWaterPic(){
    var dirt = new WebImage("https://codehs.com/uploads/01b7bc8d1f78f61f0e107d69c68f4760");
    dirt.setSize(138, 175);
    dirt.setPosition(20, 35);

    var fire = new WebImage("https://codehs.com/uploads/5c5b03e5830f4a1db397f2503291cfdd");
    fire.setSize(138, 175);
    fire.setPosition(0, 35);

    var water = new WebImage("https://codehs.com/uploads/229bfa3a8677c3aa6e7d165abd870547");
    water.setSize(138, 175);
    water.setPosition(250, 35);
     
     add(dirt); 
     remove(fire);
     add(water);
}

//pictures for losing water to earth
function loseWaterToEarth(){
    var dirt = new WebImage("https://codehs.com/uploads/229bfa3a8677c3aa6e7d165abd870547");
    dirt.setSize(138, 175);
    dirt.setPosition(20, 35);

    var fire = new WebImage("https://codehs.com/uploads/01b7bc8d1f78f61f0e107d69c68f4760");
    fire.setSize(138, 175);
    fire.setPosition(0, 35);

    var water = new WebImage("https://codehs.com/uploads/5c5b03e5830f4a1db397f2503291cfdd");
    water.setSize(138, 175);
    water.setPosition(250, 35);
     
     add(dirt); 
     remove(fire);
     add(water);
}

// All functions for displaying pictures.

/* function [functionNameHere](){
    dirt.setSize(200, 200);
    dirt.setPosition (getWidth()/2 , getHeight()/2);
    add(dirt);
    
    var rect2 = new Rectangle (getWidth()/2 , getHeight()/2);
    rect2.setPosition(getWidth()/2 , getHeight() - getHeight());
    rect2.setColor(Color.red);
    add(rect2);
    
    var rect3 = new Rectangle (getWidth() , getHeight()/2);
    rect3.setPosition(getWidth() - getWidth() , getHeight()/2);
    rect3.setColor(Color.blue);
    add(rect3);
}
*/
