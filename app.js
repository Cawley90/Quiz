$(document).ready(function(){
	var qField = $('#qField');
	var ansField = $('#ansField');

	// <--- q is question, a is answer, ca is correct answer --->
	var question = {
		q: [
		"What's your favorite color?",
		"Why is it your favorite color?",
		"This array though",
		],
	};

	console.log(question.q[2]);



	// <--- When user clicks Start, it clears the welcome message and loads first question -->
	$(document).on("click", "#startBtn", function(){
		qField.children().fadeOut(500);
		ansField.children().fadeOut(500);
		qField.append(question.q[2]);
	})

});