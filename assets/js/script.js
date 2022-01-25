// start button
const startButton = document.getElementById("button1");

// timer
const timerEl = document.getElementById("timer");
// track stats 
let score;
let userInitials;

localStorage.setItem("score", score); //refer to in score page
localStorage.setItem("userInitials", userInitials);

// quiz 
const questionEl = document.getElementById("question")
const choiceButton1 = document.getElementById("choice1");
const choiceButton2 = document.getElementById("choice2");
const choiceButton3 = document.getElementById("choice3");
const choiceButton4 = document.getElementById("choice4");
const questions = [
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
const result = document.getElementById("result");

let questionIndex = 0; 
let currentQuestion = questions[questionIndex];
function renderQuestion() {
  let currentQuestion = questions[questionIndex]; // why do I have to redeclare this?
  questionEl.innerHTML = currentQuestion.question;
  choiceButton1.innerHTML = currentQuestion.choice1;
  choiceButton2.innerHTML = currentQuestion.choice2;
  choiceButton3.innerHTML = currentQuestion.choice3;
  choiceButton4.innerHTML = currentQuestion.choice4;
}

// section1 functionality 
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
let timeLeft;
function startQuiz() {
  timeLeft = 60;
  console.log("clicked");
  startTimer();
  section1.hidden = true;
  section2.hidden = false;
}

// code to set time limit 

let quizTimer;
var startTimer = function() {
  quizTimer = setInterval(function(){
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(quizTimer);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(quizTimer);
}

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
    timeLeft -= 10;
  }
  //render next question in the array
  if (questionIndex < questions.length-1) { 
    console.log("next question")
    questionIndex++;
    renderQuestion();
  } else {
    console.log("no more questions")
    stopTimer();
    score = timeLeft;
    localStorage.setItem("score", score);
  } 
}

renderQuestion();
// start quiz 
startButton.addEventListener("click", startQuiz);