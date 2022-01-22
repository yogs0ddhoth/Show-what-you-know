// declare buttons:
const startButton = document.getElementById("button1");
const choiceButton1 = document.getElementById("choice1");
const choiceButton2 = document.getElementById("choice2");
const choiceButton3 = document.getElementById("choice3");
const choiceButton4 = document.getElementById("choice4");

// declare timer: 
const timerDisplay = document.getElementById("timer");

// track stats 
var score;
var userInitials;

localStorage.setItem("score", score);//refer to in score page
localStorage.setItem("userInitials", userInitials);

// questions 
const questionElement = document.getElementById("question")
var questions [
  {
    question: "", // modifies questionElement
    choice1: "", // modifies choiceButton1
    choice2: "", // modifies choiceButton2
    choice3: "", // modifies choiceButton3
    choice4: "", // modifies choiceButton4
    correct: "", // referenced for checkAnswer()
  }
  {}
  {}
  {}
  {}
  {}
];
// render question content in the html
var questionIndex = 0; //references position of object in the question array starting with the first question
function renderQuestion() {
  var currentQuestion = questions[questionIndex];
  questionElement.textContent = currentQuestion.question;
  choiceButton1.textContent = currentQuestion.choice1;
  choiceButton2.textContent = currentQuestion.choice2;
  choiceButton3.textContent = currentQuestion.choice3;
  choiceButton4.textContent = currentQuestion.choice4;
}

// for loop to cycle through questions 
// probably won't work. look into other solutions
for (var i=0; i < questions.length; i++){
  // renderQuestion()?
}

// checks answer -> if (choice == correct)
function checkAnswer() {}

// section1 functionality: 
function startQuiz() {
  document.getElementById("#section1").hidden = true;
  document.getElementById("#section2").hidden = false;
}

// start quiz 
startButton.addEventListener("click", startQuiz);
console.log("clicked"); 

// choiceButton functionality:
choiceButton1.addEventListener("click", );
choiceButton2.addEventListener("click", );
choiceButton3.addEventListener("click", );
choiceButton4.addEventListener("click", );
