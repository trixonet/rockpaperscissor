var dirt = new WebImage("https://codehs.com/uploads/5c5b03e5830f4a1db397f2503291cfdd");
dirt.setSize(138, 175);
dirt.setPosition(20, 35);

var fire = new WebImage("https://codehs.com/uploads/01b7bc8d1f78f61f0e107d69c68f4760");
fire.setSize(138, 175);
fire.setPosition(0, 35);

var water = new WebImage("https://codehs.com/uploads/229bfa3a8677c3aa6e7d165abd870547");
water.setSize(110, 155);
water.setPosition(250, 35);

var vs = new WebImage ("https://codehs.com/uploads/21c7424c0aff710693860c35917a04dd");



function start (){
    println ("1. Earth");
    println ("2. Fire");
    println ("3. Water");
    
    var intro = readInt ("Welcome to Elements! Test your luck by choosing an element, which one shall you chose?");
    while (intro > 3){
        println("Please pick an number between 1-3");
        break;
    }
    
    var roll = Randomizer.nextInt(1,3);
    println ("Computer picks: " + roll ); 
    
    //Tie both numbers (player and computer)
    if (intro == roll){
        println ("TIE");
    }
    
    //Earth to water
    if (intro == 1 && roll == 3){
        println ("YOU WIN");
        add(dirt); 
        remove(fire);
        add(water);
        
    }
    
    //Fire to earth
    if (intro == 2 && roll == 1){
        println ("YOU WIN");
       add(fire);
        remove(dirt);
    }
    
    //Water to fire
    if (intro == 3 && roll == 2){
       println  ("YOU WIN");
    }
    
     // Bottom Section are Losing Seqeunces for the player sequences   
    if (intro == 1 && roll == 2){
       println  ("YOU LOSE"); 
    }
    
    if (intro == 2 && roll == 3){
       println ("YOU LOSE");
    }
    
    if (intro == 3 && roll == 1){
       println ("YOU LOSE"); 
    }
    
    
  
}
