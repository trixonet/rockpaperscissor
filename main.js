
var win = new WebImage("https://codehs.com/uploads/b610fd1dd2e37a79e1c7e65177ff14b5");
var lose = new WebImage("https://codehs.com/uploads/3a2335cd0a3c0e223728c0c17efb8853");

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
        gameTie();
        println ("TIE");
    }
    
    //Earth to water
    if (intro == 1 && roll == 3){
        println ("YOU WIN");
        add(win);
    }
    
    //Fire to earth
    if (intro == 2 && roll == 1){
        println ("YOU WIN");
        add(win);
    }
    
    //Water to fire
    if (intro == 3 && roll == 2){
       println  ("YOU WIN");
       add(win);
    }
    
     // Bottom Section are Losing Seqeunces for the player sequences   
    if (intro == 1 && roll == 2){
       println  ("YOU LOSE");
       add(lose);
    }
    
    if (intro == 2 && roll == 3){
       println ("YOU LOSE");
       add(lose);
    }
    
    if (intro == 3 && roll == 1){
       println ("YOU LOSE"); 
       add(lose);
    }
}

// All functions for displaying pictures.
// Code is very long, but can probably be simplified.

function gameTie(){
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
