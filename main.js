function start (){
    println ("1. Earth");
    println ("2. Fire");
    println ("3. Water");
    
    var intro = readInt ("Welcome to Elements! Test your luck by choosing an element, which one shall you chose? ");
    
    
    var roll = Randomizer.nextInt(1,3);
    println ("Computer picks: " + roll ); 
    
    //Tie both numbers (player and computer)
    if (intro == roll){
        println ("TIE");
    }
    
    //Earth to water
    if (intro == 1 && roll == 3){
        println ("YOU WIN");
    }
    
    //Fire to earth
    if (intro == 2 && roll == 1){
        println ("YOU WIN");
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
