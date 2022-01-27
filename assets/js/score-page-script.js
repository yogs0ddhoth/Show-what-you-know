const scoresEl = document.getElementById("scores")
let lastScore = JSON.parse(localStorage.getItem("loggedScore"));

let scoreLog = [
  {
    score: "55",
    initials: "BL",
  },
]

function clearScores(event) {
  scoresEl.textContent ="";
  scoreLog = [];
  localStorage.clear
}

// append loggedScore to scoreLog and sort in descending order by score
function processScores () {
  scoreLog.push(lastScore);
  scoreLog.sort(function(a, b) {
    return b.score - a.score
  });
  renderScores();
}

// render scores in the html
function renderScores () {
  scoreLog.forEach(function(element) {
    let listEl = document.createElement("li");
    listEl.textContent = element.initials + ": " + element.score;
    scoresEl.appendChild(listEl);
  })
}

processScores();
