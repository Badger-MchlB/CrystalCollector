$(document).ready(function() {
    console.log( "ready!" );
});
var random = Math.floor(Math.random()*102+19);
$("#numberToGet").text(random);

var userTotal= 0;
var wins= 0;
var losses = 0;
var images = ["../images/Ruby.png","../images/Emerald.png","../images/Amethyst.png","../images/Sapphire.png"];

$("#numberWins").text(wins);
$("#numberLosses").text(losses);

function reset(){
    random = Math.floor(Math.random()*102+19);
    $("#numberToGet").text(random);

var crystalValues = {};
crystalValues[1] = Math.floor(Math.random()*12+1);
crystalValues[2] = Math.floor(Math.random()*12+1);
crystalValues[3] = Math.floor(Math.random()*12+1);
crystalValues[4] = Math.floor(Math.random()*12+1);

function getCrystalHandler(crystalKey){
    return function() {
        userTotal = yourScore + crystalValues[crystalKey];
        console.log("New userTotal" + userTotal);
        $("#score#").text(userTotal);

        if (userTotal === random) {
            alert ("Winner, winner chicken dinner!");
            wins++;
            $("#numberWins").text(wins);
            reset();
        } else if (userTotal > targetInt){
            alert ("Big loser!");
            losses++;
            $("#numberLosses").text(losses);
            reset();
        }
    }
}

    
$("#Ruby").on("click", getCrystalHandler(1));
$("#Amethyst").on("click", getCrystalHandler(2));
$("#Emerald").on("click", getCrystalHandler(3));
$("#Sapphire").on("click", getCrystalHandler(4));
}

