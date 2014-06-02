$(document).ready(function(){
	var qField = $('#qField');
	var ansField = $('#ansField');
	var nQuestion = [q1, q2];
	var resultScreen = $('#resultScreen');
	
		
 //sel = slected answer, ca = correct answer, ln = loadnext, meaning which question comes after the one in question.  Doing this to cut down the code I have to do.
function answerCheck (sel, ca, ln) {
	this.sel = sel;
	this.ca = ca;
	if (sel == ca) {
		alert("Yis");
		loadNext(ln);
	}

	else {
		alert("Nah");
	}
}

function loadNext(nextQ) {
	this.nextQ = nextQ;
	qField.children().fadeOut(500);
	ansField.children().fadeOut(500);
	qField.append(nextQ.q);
	ansField.append(nextQ.a);
}

	
function Problem(q, a, correctAns){
	this.q = q;
	this.a = [];
	this.correctAns = correctAns;
	//data-value is assigning a number to run through the for loop so
	//i can determine when to stop and return a successful number.
	this.a[0] = '<div data-value = 0 id ="ans">' + a[0] + '</div>';
	this.a[1] = '<div data-value = 1 id ="ans">' + a[1] + '</div>';
	this.a[2] = '<div data-value = 2 id ="ans">' + a[2] + '</div>';
	this.a[3] = '<div data-value = 3 id ="ans">' + a[3] + '</div>';
	

}



var q1 = new Problem("What do you do when you see someone post something inflammitory?",
	["Argue with them until they realize the error in their ways, furthering your domination of the website and getting you closer to realizing your goal of being known as the website hero.",
	"MAN THE BATTLESTATIONS WE'VE GOT FLAMEBAIT!",
	"Post more inflammitory things.",
	"Don't click on it, don't post, just move on with your life.  This isn't the grand arena where good fights evil, it's just a website and you have better things to do."
	], 3);



//dummy question for when I figure out how to switch to the next question.  Don't mind it.
var q2 = new Problem ("Color", ["Red", "Blue", "Green"]);





	
	// <--- When user clicks Start, it clears the welcome message and loads first question -->
	$(document).on("click", "#startBtn", function(){
		qField.children().fadeOut(500);
		ansField.children().fadeOut(500);
		qField.append(q1.q);
		ansField.append(q1.a);
		$(document).on("click", '#ans', function(){
			//alert($(this).attr('data-value'));
			answerCheck($(this).attr('data-value'), q1.correctAns, q2);
									
		}); 	
		
	});

	$(document).on("click", "#nextQ", function(){
		qField.children().fadeOut(500);
		ansField.children().fadeOut(500);
		$('#text').empty();
		$('#resultScreen').fadeOut(100);

	})
	


	
});