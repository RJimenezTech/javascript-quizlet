// find the start button element and assign it a variable
let startQuizEl = document.querySelector("#start");
// find the timer element and assign it to a variable
let timerEl = document.querySelector("#timer");
// initiate the timer
let quizTime = "";
// create area where questions will display
let questionAreaEl = document.querySelector("#question-area");
let mainArea = document.querySelector("#page-content");
// let questionAnswerEl = document.querySelector("#question-answer-container")
let submitButton = document.querySelectorAll("#answer");
// current question number
let questionNumber = 0;
// high score handling variables
let score = 0;
let highScoreArr = [];
// question object array(format is {questionID, questionText, answer1, answer2, answer3, answer4, correntAnswer})
let questionObjectArr = [
    {questionID: "0",
    questionText: "How do you spell JavaScript?",
    answerA: "Java",
    answerB: "TypeScript",
    answerC: "JabbaScript", 
    answerD: "JavaScript", 
    correctAnswer: "answerD"},
    {questionID: "1",
    questionText: "How do you spell JavaScript?",
    answerA: "JavaScript",
    answerB: "TypeScript",
    answerC: "JabbaScript", 
    answerD: "Java", 
    correctAnswer: "answerA"},
    {questionID: "2",
    questionText: "How do you spell JavaScript?",
    answerA: "Java",
    answerB: "TypeScript",
    answerC: "JavaScript", 
    answerD: "JabbaScript", 
    correctAnswer: "answerC"}
];
// function to decrease time
let decrementTimer = function(num) {
    quizTime = quizTime - num;
};
// function to set a timer output to current value of quiztime to the timer element every second
let startButtonHandler = function() {  
    // set quizTime to 59 to eliminate time delay
    quizTime = 59;
    var timerOutput = setInterval(function() {
        // check if timer is negative
        if (quizTime === 0) {
            // if yes, remove timer
            timerEl.textContent = "Time : 00 s";
            clearInterval(timerOutput);
        } else {
            // otherwise update content in timerEl with the current quizTime
            timerEl.textContent = "Time : " + quizTime + " s";


            // call function to decrement quizTime
            decrementTimer(1);
        }
    }, 1 * 1000 )
};
let gameHandler = function() {
    // once timer has started, remove "ready?" text
    var readyInfoEl1 = document.querySelector("#ready-info1");
    var readyInfoEl2 = document.querySelector("#ready-info2");  
    if (quizTime <= 59) {
            readyInfoEl1.textContent = "";
            readyInfoEl2.textContent = "";
    }
    
    var newQuestionCard = generateQuestionCard(questionObjectArr[questionNumber]);
    questionAreaEl.appendChild(newQuestionCard);  

}
let generateQuestionCard = function(questionObject) {
    // create elements in a question card
    var questionCardEl = document.createElement("div");
    var questionTextEl = document.createElement("h1");
    var answerContainerEl = document.createElement("div");
    var answerA = document.createElement("button");
    answerA.addEventListener("click", checkAnswer);
    var answerB = document.createElement("button");
    answerB.addEventListener("click", checkAnswer);
    var answerC = document.createElement("button");
    answerC.addEventListener("click", checkAnswer);
    var answerD = document.createElement("button");
    answerD.addEventListener("click", checkAnswer);

    // assign classes and question IDs to each element
    questionCardEl.className = "question-card";
    questionCardEl.setAttribute("data-id", questionObject.questionID)
    questionTextEl.className = "question-text";
    questionTextEl.setAttribute("data-id", questionObject.questionID)
    answerContainerEl.className = "question-answer-container";
    answerContainerEl.setAttribute("data-id", questionObject.questionID)
    answerA.className = "question-A";
    answerA.setAttribute("id", "answer");
    answerA.setAttribute("data-id", questionObject.questionID);
    answerA.setAttribute("data-whichAnswer", "answerA")
    answerB.className = "question-B";
    answerB.setAttribute("id", "answer");
    answerB.setAttribute("data-id", questionObject.questionID);
    answerB.setAttribute("data-whichAnswer", "answerB")
    answerC.className = "question-C"
    answerC.setAttribute("id", "answer");
    answerC.setAttribute("data-id", questionObject.questionID);
    answerC.setAttribute("data-whichAnswer", "answerC")
    answerD.className = "question-D"
    answerD.setAttribute("id", "answer");
    answerD.setAttribute("data-id", questionObject.questionID);
    answerD.setAttribute("data-whichAnswer", "answerD")
    

    // assign information to each element
    questionTextEl.textContent = questionObject.questionText + " " + questionObject.questionID;
    answerA.textContent = questionObject.answerA;
    answerB.textContent = questionObject.answerB;
    answerC.textContent = questionObject.answerC;
    answerD.textContent = questionObject.answerD;

    // add elements to card
    questionCardEl.appendChild(questionTextEl);
    answerContainerEl.appendChild(answerA);
    answerContainerEl.appendChild(answerB);
    answerContainerEl.appendChild(answerC);
    answerContainerEl.appendChild(answerD);
    questionCardEl.appendChild(answerContainerEl);

    return questionCardEl;
}
// check if the answer was correct
let checkAnswer = function (event) {
    let answerClicked = event.target;
    workingID = answerClicked.getAttribute("data-id");
    let currentQuestionObj = {};
    // find the question object in in the array for comparison
    for (let i = 0; i < questionObjectArr.length; i++) {
        if (questionObjectArr[i].questionID === workingID) {
            currentQuestionObj = questionObjectArr[i];
        }
    }
    // if the current question's answer was clicked,
    // the user got this question correct
    if (currentQuestionObj.correctAnswer === answerClicked.getAttribute("data-whichAnswer")) {
        // if correct remove current question card
        score++;
        console.log("score is " + score);
        var removeEl = document.querySelector(".question-card[data-id='" + workingID +"']");
        console.log(removeEl)
        removeEl.remove();
        // move to next question
        questionNumber++;
        // as long as there are questions left in the array
        if (questionNumber < questionObjectArr.length) {
            // create a new question card with the next question object
            newQuestionCard = generateQuestionCard(questionObjectArr[questionNumber]);
            questionAreaEl.appendChild(newQuestionCard);
        } else { // timer goes to zero (dummy action)
            quizTime = 0;
        }
    }
    else {
        // console.log("you chose the wrong answer")
        decrementTimer(4);
    }
    // this.parentNode.parentNode.remove();
}

let saveScore = function() {
    highScoreArr.push(score);
    localStorage.setItem("highScore", JSON.stringify(highScoreArr));
}

let endGame = function() {
    saveScore();
}
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
    // functions that control timer
        // button element that updates time after start DONE
        // function that reduces the timer when wrong 
    // functions for presenting questions
        // array of question objects DONE
        // function that generates a new question card DONE
        // listen for click on answer buttons DONE
        // check if answer was correct
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


// wait for click on start button to start timer
startQuizEl.addEventListener("click", startButtonHandler);
// wait for click on start button to start game
startQuizEl.addEventListener("click", gameHandler);
