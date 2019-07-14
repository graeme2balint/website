var exchange = document.querySelectorAll(".ex-pics");

// console.log(exchange[0]);

// exchange[0].addEventListener("click", picLocation);

function picLocation(guess) {
	var guess = prompt("Can you get which European city this picture was taken in?");
	if (guess !== "Berlin") {
		alert("Incorrect")
	}
			else {
				alert("Correct");
			}
}

// exchange[1].addEventListener("click", picLocation2);

function picLocation2(guess) {
	var guess = prompt("Can you get which European city this picture was taken in?");
	if (guess !== "Sweden") {
		alert("Incorrect")
	}
			else {
				alert("Correct");
			}
}

