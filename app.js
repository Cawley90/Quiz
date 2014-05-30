$(document).ready(function(){
	var qField = $('#qField');
	var ansField = $('#ansField');
	var nQuestion = [q1, q2];
	resultScreen = $('#resultScreen');





	
function Problem(q, a){
	this.q = q;
	this.a = [];
	this.a[0] = '<div id ="an0">' + a[0] + '</div>';
	this.a[1] = '<div id ="an1">' + a[1] + '</div>';
	this.a[2] = '<div id ="an2">' + a[2] + '</div>';
	this.a[3] = '<div id ="an3">' + a[3] + '</div>';
	
	
	

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
		//ansField.append('<div class="anStyle">' + q1.a + '</div>');
		ansField.append(q1.a);
		$(document).on("click", "#an0", function(){
		resultScreen.fadeIn(500).append("<div id = 'text'>Incorrect! <br /> Sorry, but I think you should consider stepping away from your computer every-so-often </div>");

		})

		$(document).on("click", "#an1", function(){
			resultScreen.fadeIn(500).append("<div id = 'text'>Incorrect! <br /> How noble. How wrong.</div>")

		})

		$(document).on("click", "#an2", function(){
			resultScreen.fadeIn(500).append("<div id = 'text'>Incorrect! <br /> I'll admit, sometimes funny things happen when we do this.  However, at some point you are going to start complaining about all the bad threads fully knowing you've been supporting them. Someone WILL call you out on that");
		})

		$(document).on("click", "#an3", function(){
			resultScreen.fadeIn(500).append("<div id='text'>Correct! <br /> Who knew doing the right thing could be so easy?");
		})
		
	});

	$(document).on("click", "#nextQ", function(){
		qField.children().fadeOut(500);
		ansField.children().fadeOut(500);
		$('#text').empty();
		$('#resultScreen').fadeOut(100);

	})
	

	
});