$( document ).ready(function() {
   
var targetNumber = Math.floor((Math.random() * 120) + 19);
console.log(targetNumber);

var counter = 0;
var wins = 0;
var losses = 0;
var numberOptions = [];

$("#number-to-guess").text(targetNumber);
$("#total-score-counter").text(counter);
$("#wins-counter").text(wins);
$("#losses-counter").text(losses);

for (var i = 0; i < 4; i++) {
	var randomNumGuess = Math.floor((Math.random()*12) + 1);
	numberOptions.push(randomNumGuess);
	console.log(numberOptions[i]);

	$(".crystal-image").attr("data-crystalvalue", numberOptions[i]);
}

$(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

	// 
	$("#total-score-counter").text(counter);

    if (counter === targetNumber) {
		wins++;
		$("#wins-counter").text(wins);
      }

    else if (counter >= targetNumber) {
		losses++;
		$("#losses-counter").text(losses);
	}
});
/*function gameStart() {
	$(".random-number").html(randomNum);

	$("#red").click(function() {
		//$(this).
	})
}

gameStart();*/
});

