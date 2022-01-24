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

localStorage.setItem("score", score); //refer to in score page
localStorage.setItem("userInitials", userInitials);

// questions 
const questionElement = document.getElementById("question")

// render question content in the html
let questions = [
  {
    question: "question1", // modifies questionElement
    choice1: "choice1", // modifies choiceButton1
    choice2: "choice2", // modifies choiceButton2
    choice3: "choice3", // modifies choiceButton3
    choice4: "choice4", // modifies choiceButton4
    correct: "choice1", // referenced in checkAnswer()
  },
  {
    question: "question2", // modifies questionElement
    choice1: "choice1", // modifies choiceButton1
    choice2: "choice2", // modifies choiceButton2
    choice3: "choice3", // modifies choiceButton3
    choice4: "choice4", // modifies choiceButton4
    correct: "choice2", // referenced in checkAnswer()
  },
  {
    question: "question3", // modifies questionElement
    choice1: "choice1", // modifies choiceButton1
    choice2: "choice2", // modifies choiceButton2
    choice3: "choice3", // modifies choiceButton3
    choice4: "choice4", // modifies choiceButton4
    correct: "choice3", // referenced in checkAnswer()
  },
  {
    question: "question4", // modifies questionElement
    choice1: "choice1", // modifies choiceButton1
    choice2: "choice2", // modifies choiceButton2
    choice3: "choice3", // modifies choiceButton3
    choice4: "choice4", // modifies choiceButton4
    correct: "choice4", // referenced in checkAnswer()
  },
  {
    question: "question5", // modifies questionElement
    choice1: "choice1", // modifies choiceButton1
    choice2: "choice2", // modifies choiceButton2
    choice3: "choice3", // modifies choiceButton3
    choice4: "choice4", // modifies choiceButton4
    correct: "choice1", // referenced in checkAnswer()
  }
];

let questionIndex = 0; //references position of object in the question array starting with the first question
let currentQuestion = questions[questionIndex];
function renderQuestion() {
  let currentQuestion = questions[questionIndex]; // why do I have to redeclare this?
  questionElement.innerHTML = currentQuestion.question;
  choiceButton1.innerHTML = currentQuestion.choice1;
  choiceButton2.innerHTML = currentQuestion.choice2;
  choiceButton3.innerHTML = currentQuestion.choice3;
  choiceButton4.innerHTML = currentQuestion.choice4;
}

// log result of previous question in html 
const result = document.getElementById("result")

// section1 functionality: 
function startQuiz() {
  console.log("clicked");
  renderQuestion();
  document.getElementById("section1").hidden = true;
  document.getElementById("section2").hidden = false;
}
// code to set time limit 

// checks answer -> if (choice == correct)
function checkAnswer(answer) {
  let currentQuestion = questions[questionIndex]; // see line 68 comment. does this have to do with the expression?
  console.log("clicked");
  if (answer === currentQuestion.correct) {
    console.log("Correct");
    result.textContent = "Correct";
  } else {
    console.log("Incorrect");
    result.textContent = "Incorrect"; 
    // code to take 10 secconds off the timer
  }
  
  if (questionIndex < questions.length-1) { //code to render next question in the array
    console.log("next question")
    questionIndex++;
    renderQuestion();
  } else {
    console.log("no more questions")
    return;
  } // code to move to the submit form for scoring
}

// start quiz 
startButton.addEventListener("click", startQuiz);