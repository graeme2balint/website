var hobbies = document.getElementsByClassName("hob-list");

for (var i = 0; i < hobbies.length; i++) {
	hobbies[i].addEventListener("click", function() {
		this.style.color = "red";
	});
}
