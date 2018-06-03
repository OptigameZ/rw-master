/*
Author: Jack Corleone
For: Redwolf Roleplay
*/

//Updates StateLoad text
var x = 0;

function getText() {

    var test = document.getElementById("progress-bar-value").innerHTML;
    if(test > -1 && test < 40)
    {
        document.getElementById("stateLoad").innerHTML = "Loading Core ...";
    }
    if(test > 39 && test < 70)
    {
        document.getElementById("stateLoad").innerHTML = "Loading Map ...";
    }

    if(test > 69 && test < 90)
    {
        document.getElementById("stateLoad").innerHTML = "Loading Session ...";
    }

    if(test > 89 && test < 100)
    {
        document.getElementById("stateLoad").innerHTML = "Connecting ...";
    }
    if (x++ < 2000) {
        setTimeout(getText, 10);
    }
}
getText();
