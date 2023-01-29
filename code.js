function blastofftimer(){
    console.log("blastofftimer() started");
    //variable to keep time
    var currenttime = 50;

    //Timer at 50
    setTimeout(function() {
        console.log("currenttime = " + currenttime);
        document.getElementById("blastoffdiv").innerHTML = currenttime + " sec left";
    }, 0);

    //Timer at 45
    setTimeout(function() {
        currenttime = currenttime - 5;
        console.log("currenttime = " + currenttime);
        document.getElementById("blastoffdiv").innerHTML = currenttime + " sec left";
    }, 5000);

    //Timer at 40
    setTimeout(function() {
        currenttime = currenttime - 5;
        console.log("currenttime = " + currenttime);
        document.getElementById("blastoffdiv").innerHTML = currenttime + " sec left";
    }, 10000);

    //Timer at 35
    setTimeout(function() {
        currenttime = currenttime - 5;
        console.log("currenttime = " + currenttime);
        document.getElementById("blastoffdiv").innerHTML = currenttime + " sec left";
    }, 15000);

    //Timer at 30
    setTimeout(function() {
        currenttime = currenttime - 5;
        console.log("currenttime = " + currenttime);
        document.getElementById("blastoffdiv").innerHTML = currenttime + " sec left";
    }, 20000);

    //Timer at 25
    setTimeout(function() {
        currenttime = currenttime - 5;
        console.log("currenttime = " + currenttime);
        document.getElementById("blastoffdiv").innerHTML = currenttime + " sec left";
    }, 25000);

    //Timer at 20
    setTimeout(function() {
        currenttime = currenttime - 5;
        console.log("currenttime = " + currenttime);
        document.getElementById("blastoffdiv").innerHTML = currenttime + " sec left";
    }, 30000);

    //Timer at 15
    setTimeout(function() {
        currenttime = currenttime - 5;
        console.log("currenttime = " + currenttime);
        document.getElementById("blastoffdiv").innerHTML = currenttime + " sec left";
    }, 35000);

    //Timer at 10
    setTimeout(function() {
        currenttime = currenttime - 5;
        console.log("currenttime = " + currenttime);
        document.getElementById("blastoffdiv").innerHTML = currenttime + " sec left";
    }, 40000);

    //Timer at 5
    setTimeout(function() {
        currenttime = currenttime - 5;
        console.log("currenttime = " + currenttime);
        document.getElementById("blastoffdiv").innerHTML = currenttime + " sec left";
    }, 45000);

    //Blastoff
    setTimeout(function() {
        currenttime = currenttime - 5;
        console.log("currenttime = " + currenttime);
        document.getElementById("blastoffdiv").innerHTML = currenttime + " Blastoff!!!";
    }, 50000);
}

function playCraps(){
    console.log("playCraps() started");
    //create variables die 1 for the die 1 roll
    var die1 = 0;
    //create varaibles die 2 for the die 2 roll
    var die2 = 0;
    //create varaible to store die1 + die2
    var sum = 0;
    
    //roll the dice for die 1
    //rolling the die
    die1 = Math.floor(Math.random() * 6) + 1;
    //displaying the result on the console
    console.log(die1);

    //same for die 2
    //rolling the die
    die2 = Math.floor(Math.random() * 6) + 1;
    //displaying the result on the console
    console.log(die2);

    //determine the sum
    sum = die1 + die2; 
    //displaying the result on the console
    console.log("The sum of the two dice is: " + sum);

    //display the die1 on the Webpage
    document.getElementById("die1Res").innerHTML = die1;
    //display the die2 on the Webpage
    document.getElementById("die2Res").innerHTML = die2;
    //display the die2 on the Webpage
    document.getElementById("diceSum").innerHTML = sum;

    //The game Result is loss when this condition is applied 
    if(sum == 11 || sum == 7){
    //The show the results of a loss in the console    
        console.log("Game Result  : loss");
    //Show you lose in the webpage        
        document.getElementById("gameRes").innerHTML = "You lose!!!";
    } 
    //The game Result is win when this condition is applied 
    else if (die1 == die2 && die1 % 2 == 0) {
    //The show the results of a win in the console     
        console.log("Game Result : Wins");
    //Show you You Win in the webpage   
        document.getElementById("gameRes").innerHTML = " You Win!!!";
    } else {
    //The show the results of a push in the console     
        console.log("Game Result : push");
    //Show you Push in the webpage     
        document.getElementById("gameRes").innerHTML = "Push, you did not win";
    }
}