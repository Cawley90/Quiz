$(document).ready(function(){
	var qField = $('#qField');
	var ansField = $('#ansField');

	// <--- When user clicks Start, it clears the welcome message and loads first question -->
	$(document).on("click", "#startBtn", function(){
		qField.children().fadeOut(500);
		ansField.children().fadeOut(500);
	})

});