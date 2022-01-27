// quiz sections
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");

// start button
const startButton = document.getElementById("button1");

// timer
const timerEl = document.getElementById("timer");

// answer results
const resultEl = document.getElementById("result");

// final score
const scoreEl = document.getElementById("score");

// track stats 

let userInitials = document.getElementById("initials");

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
    question: "question2",
    choice1: "choice1",
    choice2: "choice2",
    choice3: "choice3",
    choice4: "choice4",
    correct: "choice2",
  },
  {
    question: "question3",
    choice1: "choice1",
    choice2: "choice2",
    choice3: "choice3",
    choice4: "choice4",
    correct: "choice3",
  },
  {
    question: "question4",
    choice1: "choice1",
    choice2: "choice2",
    choice3: "choice3",
    choice4: "choice4",
    correct: "choice4",
  },
  {
    question: "question5",
    choice1: "choice1",
    choice2: "choice2",
    choice3: "choice3",
    choice4: "choice4",
    correct: "choice1",
  }
];

// render quiz in the html
let questionIndex = 0; 
let currentQuestion = questions[questionIndex];
function renderQuestion() {
  let currentQuestion = questions[questionIndex];
  questionEl.innerHTML = currentQuestion.question;
  choiceButton1.innerHTML = currentQuestion.choice1;
  choiceButton2.innerHTML = currentQuestion.choice2;
  choiceButton3.innerHTML = currentQuestion.choice3;
  choiceButton4.innerHTML = currentQuestion.choice4;
}

// section1 functionality 
let timeLeft;
function startQuiz() {
  timeLeft = 60;
  console.log("clicked");
  startTimer();
  section1.hidden = true;
  section2.hidden = false;
}

// timer functionality
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

// checks answer 
let userScore;
function checkAnswer(answer) {
  currentQuestion = questions[questionIndex];
  console.log("clicked");
  if (answer === currentQuestion.correct) {
    console.log("Correct");
    resultEl.textContent = "Correct";
  } else {
    console.log("Incorrect");
    resultEl.textContent = "Incorrect"; 
    timeLeft -= 10;
  }
  //render next question in the array
  if (questionIndex < questions.length-1) { 
    console.log("next question")
    questionIndex++;
    renderQuestion();
  } else { // log score and proceed to score submission
    console.log("no more questions")
    stopTimer();
    userScore = timeLeft;
    scoreEl.textContent = userScore;
    section2.hidden = true;
    section3.hidden = false;
  } 
}

// submit initials and load scorepage
let loggedScore;
function saveScore () {
  loggedScore = {
    score: userScore,
    initials: document.getElementById("initials").value,
  }
  localStorage.setItem("loggedScore", JSON.stringify(loggedScore));
}

function loadScorePage(event) {
  saveScore();
  event.preventDefault();
  // userInitials = document.getElementById("initials");
  // saveScore();
  window.location.href = "score-page.html";
}

function loadMainPage() {
  window.location.href = 'index.html';
}

renderQuestion();
// start quiz 
startButton.addEventListener("click", startQuiz);