$(document).ready(function() {
  var counter = 0;
  var wins = 0;
  var losses = 0;
  var numberOptions = [];

  function gameStart() {
    counter = 0;
    targetNumber = Math.floor(Math.random() * 120 + 19);
    console.log(targetNumber);
    $("#number-to-guess").text(targetNumber);
    $("#total-score-counter").text(counter);
  }
  gameStart();

  $("#number-to-guess").text(targetNumber);
  $("#total-score-counter").text(counter);
  $("#wins-counter").text(wins);
  $("#losses-counter").text(losses);

  for (var i = 0; i < 4; i++) {
    var randomNumGuess = Math.floor(Math.random() * 12 + 1);
    numberOptions.push(randomNumGuess);
    console.log(numberOptions[i]);

    // This is setting the attribute and last iteration of the numberOptions array to all 4 images, still trying to figure out how to set each image to the different numbers off the array
    $(".crystal-image").attr("data-crystalvalue", numberOptions[i]);
  }

  // tried using .each method to loop through each image and assign it a random value from the numberOptions array, but produces NaN and I'm not sure why.
  /*$.each($(".crystal-image"),function() {
	$(this).attr("data-crystalvalue", numberOptions[i]);

})*/

  $(".crystal-image").on("click", function() {
    var crystalValue = $(this).attr("data-crystalvalue");
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    $("#total-score-counter").text(counter);

    if (counter === targetNumber) {
      wins++;
      $("#wins-counter").text(wins);
      gameStart();
    } else if (counter >= targetNumber) {
      losses++;
      $("#losses-counter").text(losses);
      gameStart();
    }
  });
});
