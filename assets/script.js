// find the start button element and assign it a variable
let startQuizEl = document.querySelector("#start");
// find the timer element and assign it to a variable
let timerEl = document.querySelector("#timer");
// initiate the timer value, 1 second delay because it takes one sec to output first time;
let quizTime = 59;
// question object array(format is {questionID, questionText, answer1, answer2, answer3, answer4, correntAnswer})
let questionObjectArr = [
    {},
    {},
    {}
];
console.log(questionObjectArr);
// function to decreas time
let decrementTimer = function() {
    quizTime--;
};

// function to set a timer output to current value of quiztime to the timer element every second
let startButtonHandler = function() {  
    var timerOutput = setInterval(function() {
        // check if timer is negative
        if (quizTime < 0) {
            // if yes, remove timer
            clearInterval(timerOutput);
        } else {
            // otherwise update content in timerEl with the current quizTime
            timerEl.textContent = "Time : " + quizTime;
            // call function to decrement quizTime
            decrementTimer();
        }
    }, 1 * 1000 )
};

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
    // functions that control timer
        // function that reduces the timer when wrong
    // functions for presenting questions
        // array of question objects
        // update DOM element that contains a question       

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