$(document).ready(function(){
	var qField = $('#qField');
	var ansField = $('#ansField');


	// <--- q is question, c i, ca is correct answer --->
function Dog(breed, shade){
	this.breed = breed;
	this.shade = shade;
}

var dog1 = new Dog("Corgi", "Tan");

console.log(dog1);
	
	// <--- When user clicks Start, it clears the welcome message and loads first question -->
	$(document).on("click", "#startBtn", function(){
		qField.children().fadeOut(500);
		ansField.children().fadeOut(500);
		qField.append(dog1.breed);
		ansField.append(dog1.shade);
		
	})

});