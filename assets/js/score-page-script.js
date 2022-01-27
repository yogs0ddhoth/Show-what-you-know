const scoresEl = document.getElementById("scores")
let lastScore = JSON.parse(localStorage.getItem("loggedScore"));


let userInitials = lastScore.initials;
let score = lastScore.score;
scoresEl.textContent = userInitials + ":" + score;

function clearScores(event) {
  scoresEl.textContent ="";
}