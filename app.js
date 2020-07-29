function populate(){
	if(quiz.isEnded()){
		showScores();
	}
	else{
		var element=document.getElementById("question");
		element.innerHTML=quiz.getQuestionIndex().text;

		var choices=quiz.getQuestionIndex().choices;
		for(var i=0;i<choices.length;i++)
		{
			var element = document.getElementById("choice"+i);
			element.innerHTML=choices[i];
			guess("btn"+i,choices[i]);
		}
		showProgress();
	}
};

function guess(id,guess){
	var button = document.getElementById(id);
	button.onclick=function(){
		quiz.guess(guess);
		populate();
	}
};

function showProgress(){
	var currentQuestionNumber=quiz.questionIndex+1;
	var element = document.getElementById("progress");
	element.innerHTML="Question "+currentQuestionNumber +" of "+quiz.questions.length;

};

function showScores()
{
	var gameOverHtml="<h1> Result of the quiz..</h1>"
	gameOverHtml+="<h2 id='score'>Your Score is :  "+quiz.score+"</h2>";
	var element=document.getElementById("quiz");
	element.innerHTML=gameOverHtml;


};

var questions=[
	new Question("Hagrid collected the Philosopher's Stone to take to Hogwarts. Where from?",["Hog's head","Ollivanders","Gringotts","The Leaky Cauldron"],"Gringotts"),
	new Question("Who first mentioned the name Nicolas Flamel to Harry, Ron and Hermione?",["Draco Malfoy","Professor Binns","Hagrid","Professor McGonagal"],"Hagrid"),
	new Question("According to Quirrell, why did Snape dislike Harry so much?",["Snape hated Harrys attitude","Snape and Harry's father loathed each other","Snape and Harry's mother loathed each other","Snape hated all Gryffindors"],"Snape and Harry's father loathed each other"),
	new Question("Where did Harry first overhear Snape talking about something with three heads?",["The Potions Classroom","The Forbidden Forest","Hedwig","The staff room"],"The staff room"),
	new Question("How did Hermione manage to stop Quirrell jinxing Harry`s broom, even though she thought it was Snape?",["A","B","C","D"],"A"),
	new Question("Why was the Philosophers Stone valuable to Voldemort?",["A","B","C","D"],"B"),
	new Question("Which of the following things would calm Fluffy?",["A","B","C","D"],"C"),
	new Question("How did Harry know which winged key to catch to open the next door?",["A","B","C","D"],"D"),
	new Question("Which chess piece did Ron take the place of on McGonagall’s giant chess set?",["A","B","C","D"],"D"),
	new Question("Why couldn’t Quirrell, unlike Harry, extract the Philosopher’s Stone from the Mirror of Erised?",["A","B","C","D"],"A")
];
var quiz=new Quiz(questions);
populate();