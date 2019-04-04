function start (){
    println ("1. Earth");
    println ("2. Fire");
    println ("3. Water");
    
    var intro = readInt ("Welcome to Elements! Test your luck by choosing an element, which one shall you chose? ");
    
    
    var roll = Randomizer.nextInt(1,3);
    
    println ("Computer picks: " + roll );  
    if (intro == roll){
        println ("TIE");
    }
    if (intro == 3 && roll == 2){
        println ("YOU WIN");
    }
    
    if (intro == 1 && roll == 3){
        println ("YOU WIN");
    }
    
    if (intro == 2 && roll )
}
