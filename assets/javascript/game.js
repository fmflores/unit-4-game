var randomNum = Math.floor((Math.random() * 120) + 19);
console.log(randomNum);

function randomNumGuess() {
	var randomNumGuess = Math.floor((Math.random()*12) + 1);
	console.log(randomNumGuess);
}

randomNumGuess();

function gameStart() {
	$(".random-number").text(randomNum);

	$("#red").click(function() {
		//$(this).
	})
}

gameStart();