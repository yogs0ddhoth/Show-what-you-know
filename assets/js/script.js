// declare buttons:
const startButton = document.querySelector(".button1");

// track stats 
var score;
var userInitials;

localStorage.setItem("score", score);//refer to in score page

// section1 functionality: 
function startQuiz() {
  document.getElementById("#section1").hidden = true;
  document.getElementById("#section2").hidden = false;
}

// start quiz 
startButton.addEventListener('click', startQuiz);
console.log("clicked"); 

