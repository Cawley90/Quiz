$(document).ready(function(){
	var qField = $('#qField');
	var ansField = $('#ansField');
	var nQuestion = [q1, q2];
	var resultScreen = $('#resultScreen');
	var currentQ = 0;



function loadNext() {
	var qArray = [q1, q2, q3, q4, q5];
	currentQ = (currentQ+1)%qArray.length;
	qField.children().fadeOut(500);
	qField.empty();
	ansField.children().fadeOut(500);
	qField.append(qArray[currentQ].q);
	ansField.append(qArray[currentQ].a);

}

 //sel = slected answer, ca = correct answer, ln = loadnext, meaning which question comes after the one in question.  Doing this to cut down the code I have to do.
function answerCheck (sel, ca) {
	this.sel = sel;
	this.ca = ca;
	if (sel == ca) {
		alert("Yis");
		loadNext();
		
	}

	else {
		alert("Nah");
	}

}

	
function Problem(q, a, correctAns){
	this.q = q;
	this.a = [];
	this.correctAns = correctAns;
	//data-value is assigning a number to run through the answer check so
	//it can determine when to stop and return a successful number.
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




var q2 = new Problem("You've made a topic trying to influence discussion.  People start commenting.  What do you do?",
	["Reply to it with one word.  Maybe even one letter would suffice.",
	"Ignore all replies.",
	"Change the name of the topic and make everyone look ridiculous.",
	"Provide insightful comments, actually talk with the people in your thread.  Otherwise known as supporting your thread."
	], 3);

var q3 = new Problem("When is it okay to use rage faces?",
	["In a VERY specific circumstance where it is extremely applicable.",
	"In real life as a bumper sticker.",
	"It's not okay, get it off my screen.",
	"I don't know"
	], 0);

var q4 = new Problem("What's the difference between a meme and an image macro?",
	["Nothing!  I took a picture of my friend making a face, I love internet maymays!",
	"A meme is slightly akin to something going viral.  It's a particular image, video, or even text that is highly reguarded as funny and shared until it's almost common knowledge.  An image macro is text pasted onto an image with some sort of humor intended relating to the image.",
	"I don't know and none of these answers seem to make sense.  Google is my favorite web browser, I use it to check my email at AOL.",
	"RAGEFACE LOL"
	], 1);

var q5 = new Problem("What's a common trait between all websites?",
	["They're all on the internet!",
	"They all have a basis for their existence.  They're there to serve a purpose.",
	"Love it or hate it, somewhere on this website, there's a picture or video of a cat. ",
	"www...?"
	], 2);





	
	// <--- When user clicks Start, it clears the welcome message and loads first question -->
	$(document).on("click", "#startBtn", function(){
		//currentQ++
		qField.children().fadeOut(500);
		qField.empty();
		ansField.children().fadeOut(500);
		//loadNext();
		qField.append(q1.q);
		ansField.append(q1.a);
		
		$(document).on("click", '#ans', function(){
			//alert($(this).attr('data-value'));
			if (currentQ == 0) {
				console.log(currentQ);
				answerCheck($(this).attr('data-value'), q1.correctAns);
			}

			else if (currentQ == 1) {
				answerCheck($(this).attr('data-value'), q2.correctAns);
			}

			else if (currentQ == 2) {
				answerCheck($(this).attr('data-value'), q3.correctAns);
			}

			else if (currentQ == 3) {
				answerCheck($(this).attr('data-value'), q4.correctAns);
			}
			
			else if (currentQ == 4) {
				answerCheck($(this).attr('data-value'), q5.correctAns);
			}

			
			


									
		}); 	
		
	});


	
});

