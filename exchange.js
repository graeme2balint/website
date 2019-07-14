var exchange = document.querySelectorAll(".ex-pics");

for (var i = 0; i < exchange.length; i+=2) {
	exchange[i].addEventListener("click", function() {
		if (this.style.backgroundColor === "white"){
			console.log(this.style.backgroundColor);
				this.style.backgroundColor = "red";
		}
		else {
			this.style.backgroundColor = "white"; 
		}
	});
 }

 for (var x = 1; x < exchange.length; x+=2) {
	exchange[x].addEventListener("click", function() {
		console.log(this.style.backgroundColor);
		if (this.style.backgroundColor === "white"){
				this.style.backgroundColor = "yellow";
		}
		else {
			this.style.backgroundColor = "white"; 
		}
	});
 }
