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