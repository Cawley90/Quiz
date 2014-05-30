$(document).ready(function(){
	var qField = $('#qField');
	var ansField = $('#ansField');
	var nQuestion = [q1, q2];
	var resultScreen = $('#resultScreen');

 	


	
function Problem(q, a){
	this.q = q;
	this.a = [];
	//data-value is assigning a number to run through the for loop so
	//i can determine when to stop and return a successful number.
	this.a[0] = '<div data-value = 0 id ="ans">' + a[0] + '</div>';
	this.a[1] = '<div data-value = 1 id ="ans">' + a[1] + '</div>';
	this.a[2] = '<div data-value = 2 id ="ans">' + a[2] + '</div>';
	this.a[3] = '<div data-value = 3 id ="ans">' + a[3] + '</div>';
	

}

// x is the value of i, y is the question selector.
function answerCheck(x, y){
	this.x = x;
	this.y = y;
	//x in this case is the data value of #ans, and y is the data value of whatever #ans is selected.  It works, I don't completely understand why though.
	for (var i = x; i<= y; i++) {
		console.log(y[i]);
		//Evaluates if the user selection is correct.  3 is currently the correct answer for question 1, I need to make a variable for the appropraite value.
		if (y[i] >= 3) {
			alert("You wot m89");
		}

	};
}



var q1 = new Problem("What do you do when you see someone post something inflammitory?",
	["Argue with them until they realize the error in their ways, furthering your domination of the website and getting you closer to realizing your goal of being known as the website hero.",
	"MAN THE BATTLESTATIONS WE'VE GOT FLAMEBAIT!",
	"Post more inflammitory things.",
	"Don't click on it, don't post, just move on with your life.  This isn't the grand arena where good fights evil, it's just a website and you have better things to do."
	]);




var q2 = new Problem ("Color", ["Red", "Blue", "Green"]);




	
	// <--- When user clicks Start, it clears the welcome message and loads first question -->
	$(document).on("click", "#startBtn", function(){
		qField.children().fadeOut(500);
		ansField.children().fadeOut(500);
		qField.append(q1.q);
		ansField.append(q1.a);
		$(document).on("click", '#ans', function(){
			alert($(this).attr('data-value'));
			answerCheck($('#ans').attr('data-value'), $(this).attr('data-value')); 
				
			
			
		}); 
			
		

		//$(document).on("click", "#an0", function(){
		//resultScreen.fadeIn(500).append("<div id = 'text'>Incorrect! <br /> Sorry, but I think you should consider stepping away from your computer every-so-often </div>");

		//})

		
	});

	$(document).on("click", "#nextQ", function(){
		qField.children().fadeOut(500);
		ansField.children().fadeOut(500);
		$('#text').empty();
		$('#resultScreen').fadeOut(100);

	})
	


	
});