$(document).ready(function(){
	var qField = $('#qField');
	var ansField = $('#ansField');
	


	// <--- q is question, c i, ca is correct answer --->
function Problem(q, a){
	this.q = q;
	this.a = [];
	this.a[0] = '<div id ="an0">' + a[0] + '</div>';
	this.a[1] = '<div id ="an1">' + a[1] + '</div>';
	this.a[2] = '<div id ="an2">' + a[2] + '</div>';
	this.a[3] = '<div id ="an3">' + a[3] + '</div>';
	//this.a.setAttribute("class", "anStyle");
	

}

var q1 = new Problem("What's your favorite color?",
	["Red", "Blue", "Green", "Yellow"]);


	
	// <--- When user clicks Start, it clears the welcome message and loads first question -->
	$(document).on("click", "#startBtn", function(){
		qField.children().fadeOut(500);
		ansField.children().fadeOut(500);
		qField.append(q1.q);
		//ansField.append('<div class="anStyle">' + q1.a + '</div>');
		ansField.append(q1.a);

		
	})

	$(document).on("click", "#an0", function(){
		alert("It worked bitch");
	})
	
});