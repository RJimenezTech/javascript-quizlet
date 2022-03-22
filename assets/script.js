// find the start button element and assign it a variable
let startQuizEl = document.querySelector("#start");
// find the timer element and assign it to a variable
let timerEl = document.querySelector("#timer");
// initiate the timer
let quizTime = "";
// create area where questions will display
let questionAreaEl = document.querySelector("#question-area");
let mainArea = document.querySelector("#page-content");
// find buttons for answer click events
let answerButtonElA = document.querySelector(".question-A");
let answerButtonElB = document.querySelector(".question-B");
let answerButtonElC = document.querySelector(".question-C");
let answerButtonElD = document.querySelector(".question-D");
// find the question outcome section
let outcomeEl = document.querySelector(".outcome");
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
    correctAnswer: "answerC"},
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
    correctAnswer: "answerC"},
    {questionID: "3",
    questionText: "How do you spell JavaScript?",
    answerA: "Java",
    answerB: "TypeScript",
    answerC: "JabbaScript", 
    answerD: "JavaScript", 
    correctAnswer: "answerD"},
    {questionID: "4",
    questionText: "How do you spell JavaScript?",
    answerA: "JavaScript",
    answerB: "TypeScript",
    answerC: "JabbaScript", 
    answerD: "Java", 
    correctAnswer: "answerA"},
    {questionID: "5",
    questionText: "How do you spell JavaScript?",
    answerA: "Java",
    answerB: "TypeScript",
    answerC: "JavaScript", 
    answerD: "JabbaScript", 
    correctAnswer: "answerC"},
    {questionID: "6",
    questionText: "How do you spell JavaScript?",
    answerA: "Java",
    answerB: "TypeScript",
    answerC: "JabbaScript", 
    answerD: "JavaScript", 
    correctAnswer: "answerD"},
    {questionID: "7",
    questionText: "How do you spell JavaScript?",
    answerA: "JavaScript",
    answerB: "TypeScript",
    answerC: "JabbaScript", 
    answerD: "Java", 
    correctAnswer: "answerA"},
    {questionID: "8",
    questionText: "How do you spell JavaScript?",
    answerA: "Java",
    answerB: "TypeScript",
    answerC: "JavaScript", 
    answerD: "JabbaScript", 
    correctAnswer: "answerC"},
    {questionID: "9",
    questionText: "How do you spell JavaScript?",
    answerA: "Java",
    answerB: "TypeScript",
    answerC: "JabbaScript", 
    answerD: "JavaScript", 
    correctAnswer: "answerD"},
    {questionID: "10",
    questionText: "How do you spell JavaScript?",
    answerA: "JavaScript",
    answerB: "TypeScript",
    answerC: "JabbaScript", 
    answerD: "Java", 
    correctAnswer: "answerA"},
    {questionID: "11",
    questionText: "How do you spell JavaScript?",
    answerA: "Java",
    answerB: "TypeScript",
    answerC: "JavaScript", 
    answerD: "JabbaScript", 
    correctAnswer: "answerC"},
    {questionID: "12",
    questionText: "How do you spell JavaScript?",
    answerA: "Java",
    answerB: "TypeScript",
    answerC: "JabbaScript", 
    answerD: "JavaScript", 
    correctAnswer: "answerD"},
    {questionID: "13",
    questionText: "How do you spell JavaScript?",
    answerA: "JavaScript",
    answerB: "TypeScript",
    answerC: "JabbaScript", 
    answerD: "Java", 
    correctAnswer: "answerA"},
    {questionID: "14",
    questionText: "How do you spell JavaScript?",
    answerA: "Java",
    answerB: "TypeScript",
    answerC: "JavaScript", 
    answerD: "JabbaScript", 
    correctAnswer: "answerC"},
    {questionID: "15",
    questionText: "How do you spell JavaScript?",
    answerA: "Java",
    answerB: "TypeScript",
    answerC: "JabbaScript", 
    answerD: "JavaScript", 
    correctAnswer: "answerD"},
    {questionID: "16",
    questionText: "How do you spell JavaScript?",
    answerA: "JavaScript",
    answerB: "TypeScript",
    answerC: "JabbaScript", 
    answerD: "Java", 
    correctAnswer: "answerA"},
    {questionID: "17",
    questionText: "How do you spell JavaScript?",
    answerA: "Java",
    answerB: "TypeScript",
    answerC: "JavaScript", 
    answerD: "JabbaScript", 
    correctAnswer: "answerC"},
    {questionID: "18",
    questionText: "How do you spell JavaScript?",
    answerA: "Java",
    answerB: "TypeScript",
    answerC: "JabbaScript", 
    answerD: "JavaScript", 
    correctAnswer: "answerD"},
    {questionID: "19",
    questionText: "How do you spell JavaScript?",
    answerA: "JavaScript",
    answerB: "TypeScript",
    answerC: "JabbaScript", 
    answerD: "Java", 
    correctAnswer: "answerA"},
    {questionID: "20",
    questionText: "How do you spell JavaScript?",
    answerA: "Java",
    answerB: "TypeScript",
    answerC: "JavaScript", 
    answerD: "JabbaScript", 
    correctAnswer: "answerC"}
];
// initiate a current question
var currentQuestionObj = {};
let randomNumber = function() {
    return Math.floor(Math.random() * questionObjectArr.length + 1);
}
// function to decrease time
let decrementTimer = function(num) {
    quizTime = quizTime - num;
};
// function to set a timer output to current value of quiztime to the timer element every second
let timerHandler = function() {  
    // remove "Press START QUIZ to begin" text
    var removeTextEl = document.querySelector(".question-text");
    removeTextEl.textContent = "";
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
    // first question at start of game
    // find a random question in the question array
    currentQuestionObj = questionObjectArr[randomNumber()];
    questionNumber++;
    var questionTextEl = document.querySelector(".question-text")
    var answerAEl = document.querySelector(".question-A");
    var answerBEl = document.querySelector(".question-B");
    var answerCEl = document.querySelector(".question-C");
    var answerDEl = document.querySelector(".question-D");
    // reset the text in all elements each time we generate a new card
    answerAEl.textContent = "";
    answerBEl.textContent = "";
    answerCEl.textContent = "";
    answerDEl.textContent = "";
    // find a random question in the question array
    currentQuestionObj = questionObjectArr[randomNumber()];
    questionNumber++;
    // update the text of each element to reflect the new random question
    questionTextEl.textContent = currentQuestionObj.questionText + " " + currentQuestionObj.questionID;
    answerAEl.setAttribute("data-question-id", currentQuestionObj.questionID);
    answerAEl.textContent = currentQuestionObj.answerA;
    answerBEl.setAttribute("data-question-id", currentQuestionObj.questionID);
    answerBEl.textContent = currentQuestionObj.answerB;
    answerCEl.setAttribute("data-question-id", currentQuestionObj.questionID);
    answerCEl.textContent = currentQuestionObj.answerC;
    answerDEl.setAttribute("data-question-id", currentQuestionObj.questionID);
    answerDEl.textContent = currentQuestionObj.answerD;   
}

// function that dynamically updates the text for each question
let generateQuestionCard = function(event) {
       
    // initiate dom elements each time we generate a new card
    var questionTextEl = document.querySelector(".question-text")
    var answerAEl = document.querySelector(".question-A");
    var answerBEl = document.querySelector(".question-B");
    var answerCEl = document.querySelector(".question-C");
    var answerDEl = document.querySelector(".question-D");
    // if we clicked the correct answer
    if (checkAnswer(event)) {
        // reset the text in all elements each time we generate a new card
        answerAEl.textContent = "";
        answerBEl.textContent = "";
        answerCEl.textContent = "";
        answerDEl.textContent = "";
        // find a random question in the question array
        currentQuestionObj = questionObjectArr[randomNumber()];
        questionNumber++;
        // update the text of each element to reflect the new random question
        questionTextEl.textContent = currentQuestionObj.questionText + " " + currentQuestionObj.questionID;
        answerAEl.setAttribute("data-question-id", currentQuestionObj.questionID);
        answerAEl.textContent = currentQuestionObj.answerA;
        answerBEl.setAttribute("data-question-id", currentQuestionObj.questionID);
        answerBEl.textContent = currentQuestionObj.answerB;
        answerCEl.setAttribute("data-question-id", currentQuestionObj.questionID);
        answerCEl.textContent = currentQuestionObj.answerC;
        answerDEl.setAttribute("data-question-id", currentQuestionObj.questionID);
        answerDEl.textContent = currentQuestionObj.answerD;    
    } else {
        decrementTimer(5);
        return;
    }   
}

// check if the answer was correct
let checkAnswer = function (event) {
    let answerClicked = event.target;
    console.log(answerClicked.getAttribute("data-whichAnswer"));
    console.log(currentQuestionObj.correctAnswer);
    // let currentQuestionObj = {};
    if (answerClicked.getAttribute("data-whichAnswer") === currentQuestionObj.correctAnswer) {
        console.log("correct!")
        return true;
    }
    else {
        console.log("wrong!")
        return false;
    }
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
startQuizEl.addEventListener("click", timerHandler);
// wait for click on start button to start game
startQuizEl.addEventListener("click", gameHandler);
// wait for click on answer button
answerButtonElA.addEventListener("click", generateQuestionCard);
answerButtonElB.addEventListener("click", generateQuestionCard);
answerButtonElC.addEventListener("click", generateQuestionCard);
answerButtonElD.addEventListener("click", generateQuestionCard);