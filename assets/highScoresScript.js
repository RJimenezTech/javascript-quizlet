let highScoreListEl = document.querySelector(".question-card");
let highScoreArray = JSON.parse(localStorage.getItem("highScoreArray"));
let questionCardEl = document.querySelector(".question-card");
questionCardEl.style.flexDirection = "column";
let addAHighScore = function(num, init, score) {
    // var initialsEl  = document.createElement("p");
    // var highScoreEl = document.createElement("p");
    var highScoreItemEl = document.createElement("p");

    // initialsEl.textContent  = init;
    // highScoreEl.textContent = score;
    highScoreItemEl.textContent = num + ") " + init + "-" + score;

    // initialsEl.className = "high-score-text";
    // highScoreEl.className = "high-score-text";
    // highScoreEl.style.top = "50%";
    highScoreItemEl.className = "high-score-text";

    // highScoreListEl.appendChild(initialsEl);
    // highScoreListEl.appendChild(highScoreEl);
    highScoreListEl.appendChild(highScoreItemEl);
}

// create a for loop if given an array
for (let i = 0; i < highScoreArray.length; i++){
    addAHighScore(i+1,highScoreArray[i].initials, highScoreArray[i].score);
}
   
