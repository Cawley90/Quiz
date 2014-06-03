$(document).ready(function(){
	var qField = $('#qField');
	var ansField = $('#ansField');
	var nQuestion = [q1, q2];
	var resultScreen = $('#resultScreen');
	var currentQ = 0;
	var corCount = 0;
	var incorCount = 0;
	//rsresponse means result screen response, or the area in which the text is placed in the result screen.
	var rsresponse = $("#response");




//I used an array with each question here, (Or at least the question names).  When the page loads, the currentQ number is set at 0. 
//Question 1 = 0 because it's the first thing the page loads (technically).  It will incriment whenever the loadnext function is used, 
//each time it inrements, it goes up a question.  I did this to avoid having to load the questions individually, now I can do it in one
//function.  Fabulous!
function loadNext() {
	var qArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, fin];
	currentQ = (currentQ+1)%qArray.length;
	qField.children().fadeOut(100);
	qField.empty();
	ansField.children().fadeOut(100);
	qField.append(qArray[currentQ].q);
	ansField.append(qArray[currentQ].a);

}

 //sel = slected answer, ca = correct answer.  Doing this to cut down the code I have to do.
function answerCheck (sel, ca) {
	this.sel = sel;
	this.ca = ca;
	

	if (sel == ca) {
		corCount++
		resultScreen.fadeIn(500);
		rsresponse.text("Correct!");
		$('#cor').text("Correct: "+corCount);
		loadNext();

		
	}

	else {
		incorCount++
		resultScreen.fadeIn(500);	
		rsresponse.text("Incorrect!");
		$('#incor').text("Incorrect: "+incorCount);
		loadNext();
	}

}

//q = question, a = answer, correctAns = .. well.. correct answer.  a is equal to whatever answer is in the array, nothing specific.
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

var q6 = new Problem("I think I'm having a medical emergency, where do I go?",
	["Yahoo Answers, there's bound to be a doctor somewhere on there.",
	"WebMD",
	"The website I frequent.  I know the members of the community and can trust them to take it seriously.",
	"The hospital, because the internet will tell me my broken toe is most likely cancer."
	], 3);

var q7 = new Problem("Do I, or do I not post an 'Ask me anything' thread?",
	["Did you just do something mundane?  Maybe you just made toast.",
	"Something out of the ordinary just happened that you think could have some fun discussion, you don't want to post a wall of text and want to share the story.",
	"I'm bored.",
	"There's 5 other 'Ask Me Anything' threads on the board right now, might as well make it 6!"
	], 1);

var q8 = new Problem("You just found something funny on Reddit, what do you do?",
	["Steal the joke and post it somewhere else, no one will catch on because Reddit is a secret clubhouse that only I and a few elite members of the internet are granted access to.",
	"Upvote, comment, save the image or page.  Share it with your friends for a good laugh.",
	"Downvote it even though you liked it.",
	"I don't even like Reddit, get out of here with your websites."
	], 1);

var q9 = new Problem("Something is being debated.  You suddenly realized you did a seven page research paper on it in school, what do you do?",
	["Walk into the discussion wearing your best 'I'm the expert hat', and tell people you did a 15 page research paper that went into depths further than the Mariana Trench.  You practically did all the science behind it yourself.",
	"Provide a counter-argument humbly based on what you know from your research, but don't go beyond the bounds of your argument and claim it as fact.  Maybe even expand your knowledge by looking into it a bit more.",
	"Paste your entire paper into the replies section.",
	"I'm still mad you made a reference to Reddit. (Oh get over it already.)"
	], 1);

var q10 = new Problem("Religion and Political discussions are always....",
	["Civil discussions where two groups of opposing views come together for the better of humanity and common-good.",
	"Unproductive.",
	"A way to get everyone to accept your views and realize how wrong they were.",
	"Always a bad idea.  Always."
	], 3);

var q11 = new Problem("You're fired up over something!  What do you do?!",
	["Make a new hashtag on Twitter!  If it becomes popular I made a difference, right?",
	"Like a post on Facebook relating to what you're mad about.  Each like gives the world +1 'for the greater good!' point.",
	"Get out and rally about whatever it is you're fired up over.  Try to talk with your local government or something.  Be proactive.",
	"Enroll in a mass-mailing list to spam your local congressman/woman's inbox.  They'll totally read every single one of them and absolutely don't have an assistant who replies to every single one with an automated response.  That would be crazy!"
	], 2);

var q12 = new Problem("Wikipedia..",
	["Is an untrustworthy source of information.  Anyone can make edits to it, I got docked points on an assignment once because it tricked me into thinking trickle-down economics were a weather system!",
	"The internet is a bad place for information, go to your local library and tack on an extra 17 hours onto whatever you're trying to accomplish by looking through books (Not that there's anything wrong with that..)",
	"Is, like any other website, a place of good and evil.  Yes people can make absurd edits, and it's up to me to look into every detail before believing it.  Any line worth looking at on any article on Wikipedia has an indicator for what source that information came from.  Click it, check the source.",
	"I have no strong feelings one way or the other.  (You know this option isn't correct)."
	], 2);


function fin() {
		qField.children().fadeOut(300);
		qField.empty();
		ansField.children().fadeOut(300);
		ansField.append("Dun");
}

	
	// When user clicks Start, it clears the welcome message and loads first question.  
	$(document).on("click", "#startBtn", function(){
		qField.children().fadeOut(300);
		qField.empty();
		ansField.children().fadeOut(300);
		qField.append(q1.q);
		ansField.append(q1.a);
		
		//BUT WAIT, WHAT IS THIS.  When a user clicks on an answer (Any answer), it will non-violently throw it into my answerChecker.  
		//this.attr.(datavalue) thing is saying "Check the data-value of whatever is selected".  Data value is explained on lines 99-102.
		//q1.correctAns is telling the answer-checker-thing "Hey, the correct answer for Question one is 3", it compares that number with the
		//answer array for question one, and guess what, the answer is totally array item 3 for question one.  No cheating.

		//so what's this currentQ == number nonsense?  currentQ is technically counting what 'page' we're on, or question.  It starts off at 0,
		//so question 1 is currentQ 0, and it goes on.  So if the currentQ = 0, check q1.correctAns to evaluate if the user is correct.  I was 
		//having an issue where the answerCheck was trying to grab the correct answer from question 1 for question 2.  This is a good way to isolate it.
		$(document).on("click", '#ans', function(){
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

			else if (currentQ == 5) {
				answerCheck($(this).attr('data-value'), q6.correctAns);
			}

			else if (currentQ == 6) {
				answerCheck($(this).attr('data-value'), q7.correctAns);
			}

			else if (currentQ == 7) {
				answerCheck($(this).attr('data-value'), q8.correctAns);
			}

			else if (currentQ == 8) {
				answerCheck($(this).attr('data-value'), q9.correctAns);
			}

			else if (currentQ == 9) {
				answerCheck($(this).attr('data-value'), q10.correctAns);
			}

			else if (currentQ == 10) {
				answerCheck($(this).attr('data-value'), q11.correctAns);
			}

			else if (currentQ == 11) {
				answerCheck($(this).attr('data-value'), q12.correctAns);
				qField.append("How did you do?");
				$('#winGraphic').fadeIn(100);
				ansField.append("Horribly, you suck at things, go away and never come back you fucking pleb");
			}
			
			
			

									
		}); 	
		
	});


$(document).on("click", "#nextQ", function(){
	resultScreen.fadeOut(500);

});
	
});

