$(document).ready(function() {
  console.log("ready!");
  crystalClick();

var targetScore = Math.floor(Math.random() * 102 + 19);
$("#numberToGet").text(targetScore);

var yourScore = 0;
var wins = 0;
var losses = 0;
var images = [
  "../images/Ruby.png",
  "../images/Emerald.png",
  "../images/Amethyst.png",
  "../images/Sapphire.png"
];

$("#numberWins").text(wins);
$("#numberLosses").text(losses);
function reset() {
  targetScore = Math.floor(Math.random() * 102 + 19);
  $("#targetScore").text(targetScore);
}
  var crystalValues = {
    ruby: Math.floor(Math.random() * 12 + 1),
    emerald: Math.floor(Math.random() * 12 + 1),
    amethyst: Math.floor(Math.random() * 12 + 1),
    sapphire: Math.floor(Math.random() * 12 + 1)
  };

  function getCrystalHandler(key) {
      $("#yourScore").text(yourScore);
      $("#targetScore").text(targetScore);
      if (yourScore === targetScore) {
        alert("Winner, winner chicken dinner!");
        wins++;
        $("#numberWins").text(wins);
        reset();
      } else if (yourScore > targetScore) {
        alert("Big loser!");
        losses++;
        $("#numberLosses").text(losses);
        reset();
      }
  }

  function crystalClick() {
    $("#ruby").click(function() {
      yourScore = yourScore + crystalValues["ruby"];
      getCrystalHandler();
    });
    $("#emerald").click(function() {
      yourScore = yourScore + crystalValues["emerald"];
      getCrystalHandler();
    });
    $("#amethyst").click(function() {
      yourScore = yourScore + crystalValues["amethyst"];
      getCrystalHandler();
    });
    $("#sapphire").click(function() {
      yourScore = yourScore + crystalValues["sapphire"];
      getCrystalHandler();
    });
  }
});
