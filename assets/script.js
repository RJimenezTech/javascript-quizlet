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
let randomNumber = function() {
    return Math.floor(Math.random() * questionObjectArr.length + 1);
}
// function to decrease time
let decrementTimer = function(num) {
    quizTime = quizTime - num;
};
// function to set a timer output to current value of quiztime to the timer element every second
let timerHandler = function() {  
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
    // remove "Press START QUIZ to begin" text
    var removeTextEl = document.querySelector(".question-text");
    removeTextEl.textContent = "";
    
    // first question at start of game
    generateQuestionCard();
    if (checkAnswer) {
        generateQuestionCard();
        outcomeEl.textContent = "correct!";
    } else {
        outcomeEl.textContent = "wrong!";
    }
    

}

// function that dynamically updates the text for each question
let generateQuestionCard = function() {
    // find a random question in the question array
    var currentQuestionObj = questionObjectArr[randomNumber()];
    // create elements in a question card and update the text of each element 
    // to reflect the currect random question
    var questionTextEl = document.querySelector(".question-text")
    questionTextEl.textContent = currentQuestionObj.questionText;
    var answerAEl = document.querySelector(".question-A");
    answerAEl.textContent = currentQuestionObj.answerA;
    var answerBEl = document.querySelector(".question-B");
    answerBEl.textContent = currentQuestionObj.answerB;
    var answerCEl = document.querySelector(".question-C");
    answerCEl.textContent = currentQuestionObj.answerC;
    var answerDEl = document.querySelector(".question-D");
    answerDEl.textContent = currentQuestionObj.answerD;

    
 
}
// check if the answer was correct
let checkAnswer = function (event) {
//     let answerClicked = event.target;
//     workingID = answerClicked.getAttribute("data-id");
//     let currentQuestionObj = {};
//     // find the question object in in the array for comparison
//     for (let i = 0; i < questionObjectArr.length; i++) {
//         if (questionObjectArr[i].questionID === workingID) {
//             currentQuestionObj = questionObjectArr[i];
//         }
//     }
//     // if the current question's answer was clicked,
//     // the user got this question correct
//     if (currentQuestionObj.correctAnswer === answerClicked.getAttribute("data-whichAnswer")) {
//         // if correct remove current question card
//         score++;
//         console.log("score is " + score);
//         // var removeEl = document.querySelector(".question-card[data-id='" + workingID +"']");
//         // console.log(removeEl)
//         // removeEl.remove();
//         // move to next question
//         questionNumber++;
//         // as long as there are questions left in the array
//         if (questionNumber < questionObjectArr.length) {
//             // create a new question card with the next question object
//             newQuestionCard = generateQuestionCard(questionObjectArr[questionNumber]);
//             questionAreaEl.appendChild(newQuestionCard);
//         } else { // timer goes to zero (dummy action)
//             quizTime = 0;
//         }
//     }
//     else {
//         // console.log("you chose the wrong answer")
//         decrementTimer(4);
//     }
//     // this.parentNode.parentNode.remove();
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
answerButtonElA.addEventListener("click", checkAnswer);
answerButtonElB.addEventListener("click", checkAnswer);
answerButtonElC.addEventListener("click", checkAnswer);
answerButtonElD.addEventListener("click", checkAnswer);
