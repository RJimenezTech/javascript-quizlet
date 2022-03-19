let startQuizEl = document.querySelector("#start");
let timerEl = document.querySelector("#timer");
let quizTime = 59;

let decrementTimer = function() {
    quizTime--;
};

let startButtonHandler = function() {  
    var timerOutput = setInterval(function() {
        if (quizTime < 0) {
            clearInterval(timerOutput);
        } else {
            timerEl.textContent = "Time : " + quizTime;
            decrementTimer();
        }
    }, 1000)
};

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
    // functions that control timer
    // functions for presenting questions

// WHEN I answer a question
// THEN I am presented with another question
    // functions for presenting questions

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
    // functions that control timer

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
    // functions that control flow of game
    
// WHEN the game is over
// THEN I can save my initials and score
    // functions that control flow of game
    // functions that store score
    // functions that allow for input of initials

startQuizEl.addEventListener("click", startButtonHandler);