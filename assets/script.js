// find the start button element and assign it a variable
let startQuizEl = document.querySelector("#start");
// find the timer element and assign it to a variable
let timerEl = document.querySelector("#timer");
// initiate the timer
let quizTime = "";
// create area where questions will display
let questionAreaEl = document.querySelector("#question-area");
let mainArea = document.querySelector("#page-content");

// question object array(format is {questionID, questionText, answer1, answer2, answer3, answer4, correntAnswer})
let questionObjectArr = [
    {questionID: 1,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "JavaScript", 
    correctAnswer: "answer4"},
    {questionID: 2,
    questionText: "How do you spell JavaScript?",
    answer1: "JavaScript",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "Java", 
    correctAnswer: "answer1"},
    {questionID: 3,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JavaScript", 
    answer4: "JabbaScript", 
    correctAnswer: "answer3"},
    {questionID: 4,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "JavaScript", 
    correctAnswer: "answer4"},
    {questionID: 5,
    questionText: "How do you spell JavaScript?",
    answer1: "JavaScript",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "Java", 
    correctAnswer: "answer1"},
    {questionID: 6,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JavaScript", 
    answer4: "JabbaScript", 
    correctAnswer: "answer3"},
    {questionID: 7,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "JavaScript", 
    correctAnswer: "answer4"},
    {questionID: 8,
    questionText: "How do you spell JavaScript?",
    answer1: "JavaScript",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "Java", 
    correctAnswer: "answer1"},
    {questionID: 9,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JavaScript", 
    answer4: "JabbaScript", 
    correctAnswer: "answer3"},
    {questionID: 10,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "JavaScript", 
    correctAnswer: "answer4"},
    {questionID: 11,
    questionText: "How do you spell JavaScript?",
    answer1: "JavaScript",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "Java", 
    correctAnswer: "answer1"},
    {questionID: 12,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JavaScript", 
    answer4: "JabbaScript", 
    correctAnswer: "answer3"},
    {questionID: 13,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "JavaScript", 
    correctAnswer: "answer4"},
    {questionID: 14,
    questionText: "How do you spell JavaScript?",
    answer1: "JavaScript",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "Java", 
    correctAnswer: "answer1"},
    {questionID: 15,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JavaScript", 
    answer4: "JabbaScript", 
    correctAnswer: "answer3"},
    {questionID: 16,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "JavaScript", 
    correctAnswer: "answer4"},
    {questionID: 17,
    questionText: "How do you spell JavaScript?",
    answer1: "JavaScript",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "Java", 
    correctAnswer: "answer1"},
    {questionID: 18,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JavaScript", 
    answer4: "JabbaScript", 
    correctAnswer: "answer3"},
    {questionID: 19,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "JavaScript", 
    correctAnswer: "answer4"},
    {questionID: 20,
    questionText: "How do you spell JavaScript?",
    answer1: "JavaScript",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "Java", 
    correctAnswer: "answer1"},
    {questionID: 21,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JavaScript", 
    answer4: "JabbaScript", 
    correctAnswer: "answer3"},
    {questionID: 22,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "JavaScript", 
    correctAnswer: "answer4"},
    {questionID: 23,
    questionText: "How do you spell JavaScript?",
    answer1: "JavaScript",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "Java", 
    correctAnswer: "answer1"},
    {questionID: 24,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JavaScript", 
    answer4: "JabbaScript", 
    correctAnswer: "answer3"},
    {questionID: 24,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "JavaScript", 
    correctAnswer: "answer4"},
    {questionID: 26,
    questionText: "How do you spell JavaScript?",
    answer1: "JavaScript",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "Java", 
    correctAnswer: "answer1"},
    {questionID: 27,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JavaScript", 
    answer4: "JabbaScript", 
    correctAnswer: "answer3"},
    {questionID: 28,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "JavaScript", 
    correctAnswer: "answer4"},
    {questionID: 29,
    questionText: "How do you spell JavaScript?",
    answer1: "JavaScript",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "Java", 
    correctAnswer: "answer1"},
    {questionID: 30,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JavaScript", 
    answer4: "JabbaScript", 
    correctAnswer: "answer3"},
    {questionID: 31,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "JavaScript", 
    correctAnswer: "answer4"},
    {questionID: 32,
    questionText: "How do you spell JavaScript?",
    answer1: "JavaScript",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "Java", 
    correctAnswer: "answer1"},
    {questionID: 33,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JavaScript", 
    answer4: "JabbaScript", 
    correctAnswer: "answer3"},
    {questionID: 34,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "JavaScript", 
    correctAnswer: "answer4"},
    {questionID: 35,
    questionText: "How do you spell JavaScript?",
    answer1: "JavaScript",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "Java", 
    correctAnswer: "answer1"},
    {questionID: 36,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JavaScript", 
    answer4: "JabbaScript", 
    correctAnswer: "answer3"},
    {questionID: 37,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "JavaScript", 
    correctAnswer: "answer4"},
    {questionID: 36,
    questionText: "How do you spell JavaScript?",
    answer1: "JavaScript",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "Java", 
    correctAnswer: "answer1"},
    {questionID: 39,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JavaScript", 
    answer4: "JabbaScript", 
    correctAnswer: "answer3"},
    {questionID: 40,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "JavaScript", 
    correctAnswer: "answer4"},
    {questionID: 41,
    questionText: "How do you spell JavaScript?",
    answer1: "JavaScript",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "Java", 
    correctAnswer: "answer1"},
    {questionID: 42,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JavaScript", 
    answer4: "JabbaScript", 
    correctAnswer: "answer3"},
    {questionID: 43,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "JavaScript", 
    correctAnswer: "answer4"},
    {questionID: 44,
    questionText: "How do you spell JavaScript?",
    answer1: "JavaScript",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "Java", 
    correctAnswer: "answer1"},
    {questionID: 45,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JavaScript", 
    answer4: "JabbaScript", 
    correctAnswer: "answer3"},
    {questionID: 46,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "JavaScript", 
    correctAnswer: "answer4"},
    {questionID: 47,
    questionText: "How do you spell JavaScript?",
    answer1: "JavaScript",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "Java", 
    correctAnswer: "answer1"},
    {questionID: 48,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JavaScript", 
    answer4: "JabbaScript", 
    correctAnswer: "answer3"},
    {questionID: 49,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JavaScript", 
    answer4: "JabbaScript", 
    correctAnswer: "answer3"},
    {questionID: 50,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "JavaScript", 
    correctAnswer: "answer4"},
    {questionID: 51,
    questionText: "How do you spell JavaScript?",
    answer1: "JavaScript",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "Java", 
    correctAnswer: "answer1"},
    {questionID: 52,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JavaScript", 
    answer4: "JabbaScript", 
    correctAnswer: "answer3"},
    {questionID: 53,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JavaScript", 
    answer4: "JabbaScript", 
    correctAnswer: "answer3"},
    {questionID: 54,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "JavaScript", 
    correctAnswer: "answer4"},
    {questionID: 55,
    questionText: "How do you spell JavaScript?",
    answer1: "JavaScript",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "Java", 
    correctAnswer: "answer1"},
    {questionID: 56,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JavaScript", 
    answer4: "JabbaScript", 
    correctAnswer: "answer3"},
    {questionID: 57,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "JavaScript", 
    correctAnswer: "answer4"},
    {questionID: 58,
    questionText: "How do you spell JavaScript?",
    answer1: "JavaScript",
    answer2: "TypeScript",
    answer3: "JabbaScript", 
    answer4: "Java", 
    correctAnswer: "answer1"},
    {questionID: 59,
    questionText: "How do you spell JavaScript?",
    answer1: "Java",
    answer2: "TypeScript",
    answer3: "JavaScript", 
    answer4: "JabbaScript", 
    correctAnswer: "answer3"}
];

// function to decrease time
let decrementTimer = function() {
    quizTime--;
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
            decrementTimer();
        }
    }, 1 * 1000 )
};

let gameHandler = function() {
    var newQuestionCard = generateQuestionCard(questionObjectArr[1]);
    var readyInfoEl1 = document.querySelector("#ready-info1");
    var readyInfoEl2 = document.querySelector("#ready-info2");
    console.log(readyInfoEl1);
    console.log(readyInfoEl2);
    questionAreaEl.appendChild(newQuestionCard);
    // once timer has started, remove "ready?" text
    if (quizTime <= 59) {
            readyInfoEl1.style.opacity = "0";
            readyInfoEl2.style.opacity = "0";
    }
}

let generateQuestionCard = function(questionObject) {
    // create elements in a question card
    var questionCardEl = document.createElement("div");
    var questionTextEl = document.createElement("h1");
    var answerA = document.createElement("button");
    var answerB = document.createElement("button");
    var answerC = document.createElement("button");
    var answerD = document.createElement("button");

    // assign classes to each element
    questionCardEl.className = "question-card"
    questionTextEl.className = "question-text";
    answerA.className = "question-A";
    answerB.className = "question-B";
    answerC.className = "question-C";
    answerD.className = "question-D";

    // assign information to each element
    questionTextEl.textContent = questionObject.questionText;
    answerA.textContent = questionObject.answer1;
    answerB.textContent = questionObject.answer2;
    answerC.textContent = questionObject.answer3;
    answerD.textContent = questionObject.answer4;

    // add elements to card
    questionCardEl.appendChild(questionTextEl);
    questionCardEl.appendChild(answerA);
    questionCardEl.appendChild(answerB);
    questionCardEl.appendChild(answerC);
    questionCardEl.appendChild(answerD);

    return questionCardEl;
}

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
    // functions that control timer
        // button element that updates time after start DONE
        // function that reduces the timer when wrong 
    // functions for presenting questions
        // array of question objects DONE
        // function that generates a new question card
        // listen for click on answer buttons
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