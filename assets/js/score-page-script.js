const scoresEl = document.getElementById("scores")
let scoreLog = JSON.parse(localStorage.getItem("loggedScore"));

// clears stored scores and html
function clearScores(event) {
  scoresEl.textContent ="";
  localStorage.clear();
}

// append loggedScore to scoreLog and sort in descending order by score
function processScores () {
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

function loadMainPage(event) {
  window.location.href = 'index.html';
}

processScores();
