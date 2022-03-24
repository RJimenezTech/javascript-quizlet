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
let questionTextEl = document.querySelector(".question-text");
let answerButtonElA = document.querySelector(".question-A");
let answerButtonElB = document.querySelector(".question-B");
let answerButtonElC = document.querySelector(".question-C");
let answerButtonElD = document.querySelector(".question-D");
// find the question outcome section
let outcomeEl = document.querySelector(".outcome");
// high score handling variables
let initials = "";
let score = 0;
let highScore = "";
// store high score and initials in an array of objects
let highScoreArray = [];
// if there are already high scores stored
if (localStorage.getItem("highScoreArray")) {
    // retreive and store those high scores for this game
    highScoreArray = JSON.parse(localStorage.getItem("highScoreArray"));
    console.log(highScoreArray);
    // initiate the highest score value
    highScore = highScoreArray[0].score;
}

// question object array(format is {questionID, questionText, answer1, answer2, answer3, answer4, correntAnswer})
let questionObjectArr = [
    {questionID: "0",
    questionText: "Inside which HTML element do we put the JavaScript?",
    answerA: "<script>",
    answerB: "<javascript>",
    answerC: "<scripting>", 
    answerD: "<js>", 
    correctAnswer: "answerA"},
    {questionID: "1",
    questionText: "What is the correct place to insert a <script> tag?",
    answerA: "The <body> section",
    answerB: "The <head> and <body> sections are correct",
    answerC: "The <head> section", 
    answerD: "The <meta> tag", 
    correctAnswer: "answerB"},
    {questionID: "2",
    questionText: "What is the correct syntax for referring to an external script call 'xxx.js'?",
    answerA: "<script src='xxx.js'>",
    answerB: "<script href='xxx.js'>",
    answerC: "<script name='xxx.js'>", 
    answerD: "<script class='xxx.js'", 
    correctAnswer: "answerA"},
    {questionID: "3",
    questionText: "How do you write 'Hello World' in an alert box?",
    answerA: "msg('Hello World');",
    answerB: "alert('Hello World');",
    answerC: "console.log('Hello World');", 
    answerD: "alertBox('Hello World');", 
    correctAnswer: "answerB"},
    {questionID: "4",
    questionText: "How do you call a function named 'myFunction'?",
    answerA: "myFunction()",
    answerB: "call myFunction()",
    answerC: "var myFunction()", 
    answerD: "call function myFunction()", 
    correctAnswer: "answerA"},
    {questionID: "5",
    questionText: "Which is the correct syntax for IF statements in JavaScript?",
    answerA: "if (i == 5)",
    answerB: "if i == 5 then",
    answerC: "if i = 5 then", 
    answerD: "if i =5", 
    correctAnswer: "answerA"},
    {questionID: "6",
    questionText: "Which is the correct syntax for an IF statement for 'i' is NOT equal to 5 in JavaScript?",
    answerA: "if (i != 5)",
    answerB: "if (i <> 5)",
    answerC: "if (i <> 5)", 
    answerD: "if i =! 5 then", 
    correctAnswer: "answerA"},
    {questionID: "7",
    questionText: "Which is the correct WHILE loop syntax?",
    answerA: "while i = 1 to 10",
    answerB: "while (i <= 10)",
    answerC: "while (i <= 10; i++)", 
    answerD: "while (i fo 5 to 10)", 
    correctAnswer: "answerB"},
    {questionID: "8",
    questionText: "Which is the correct FOR loop syntax?",
    answerA: "for (i = 0; i <= 5; i++)",
    answerB: "for (i <=5; i++)",
    answerC: "for i = 1 to 5", 
    answerD: "for (i = 0; i <=5)", 
    correctAnswer: "answerA"},
    {questionID: "9",
    questionText: "Which is the correct syntax to create an ARRAY",
    answerA: "var colors = (1:red, 2:green, 3:blue)",
    answerB: "var colors = ['red','green','blue']",
    answerC: "var colors = 'red','green','blue'", 
    answerD: "var colors = 1 = ('red'),2 = ('green'), 3 = ('blue')", 
    correctAnswer: "answerB"},
    {questionID: "10",
    questionText: "How do you round the number 8.25 to the nearest integer?",
    answerA: "round(8.25)",
    answerB: "Math.round(8.25)",
    answerC: "Math.rnd(8.25)", 
    answerD: "rnd(8.25)", 
    correctAnswer: "answerB"},
    {questionID: "11",
    questionText: "JavaScript is the same as Java.",
    answerA: "True",
    answerB: "False",
    answerC: "Sometimes", 
    answerD: "None of the above", 
    correctAnswer: "answerB"},
    {questionID: "12",
    questionText: "How do you declare a JavaScript variable?",
    answerA: "variable carName",
    answerB: "v carName;",
    answerC: "var carName;", 
    answerD: "this.carName;", 
    correctAnswer: "answerC"},
    {questionID: "13",
    questionText: "Which operator is used to assign a value to a variable?",
    answerA: "x",
    answerB: "-",
    answerC: "=", 
    answerD: "/", 
    correctAnswer: "answerC"},
    {questionID: "14",
    questionText: "Which is the logical OR operator?",
    answerA: "==",
    answerB: "===",
    answerC: "or", 
    answerD: "||", 
    correctAnswer: "answerD"},
    {questionID: "15",
    questionText: "Which is the strict equality operatior?",
    answerA: "=",
    answerB: "==",
    answerC: "===", 
    answerD: "None of the above", 
    correctAnswer: "answerC"},
    {questionID: "16",
    questionText: "How do you spell JavaScript?",
    answerA: "JavaScript",
    answerB: "TypeScript",
    answerC: "JabbaScript", 
    answerD: "Java", 
    correctAnswer: "answerA"},
    {questionID: "17",
    questionText: "Is JavaScript case-sensitive?",
    answerA: "Yes",
    answerB: "No",
    answerC: "Sometimes", 
    answerD: "None of the above", 
    correctAnswer: "answerA"},
    {questionID: "18",
    questionText: "Which array method returns the length of the array?",
    answerA: ".push()",
    answerB: ".length",
    answerC: ".round()", 
    answerD: ".unshift()", 
    correctAnswer: "answerB"},
    {questionID: "19",
    questionText: "Which best describes the follow: var thisArr = [{key1:value1},key2:value2];?",
    answerA: "creating a function",
    answerB: "an array of objects",
    answerC: "an array is compared to objects", 
    answerD: "a callback function", 
    correctAnswer: "answerB"}
];
// initiate a current question
var currentQuestionObj = {};
let randomNumber = function() {
    return Math.floor(Math.random() * questionObjectArr.length);
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
        if (quizTime <= 0) {
            // if yes, remove timer
            timerEl.textContent = "Time : 00 s";
            clearInterval(timerOutput);
            endGame();
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
    // update the text of each element to reflect the new random question
    questionTextEl.textContent = currentQuestionObj.questionText;
    answerButtonElA.setAttribute("data-question-id", currentQuestionObj.questionID);
    answerButtonElA.textContent = currentQuestionObj.answerA;
    answerButtonElB.setAttribute("data-question-id", currentQuestionObj.questionID);
    answerButtonElB.textContent = currentQuestionObj.answerB;
    answerButtonElC.setAttribute("data-question-id", currentQuestionObj.questionID);
    answerButtonElC.textContent = currentQuestionObj.answerC;
    answerButtonElD.setAttribute("data-question-id", currentQuestionObj.questionID);
    answerButtonElD.textContent = currentQuestionObj.answerD;       
}
// function that dynamically updates the text for each question
let generateQuestionCard = function(event) {
    // if we clicked the correct answer
    if (checkAnswer(event)) {
        // reset the text in all elements each time we generate a new card
        answerButtonElA.textContent = "";
        answerButtonElB.textContent = "";
        answerButtonElC.textContent = "";
        answerButtonElD.textContent = "";
        // find a random question in the question array
        currentQuestionObj = questionObjectArr[randomNumber()];
        console.log("generateCard question: " + currentQuestionObj.questionText);
        // update the text of each element to reflect the new random question
        questionTextEl.textContent = currentQuestionObj.questionText;
        answerButtonElA.setAttribute("data-question-id", currentQuestionObj.questionID);
        answerButtonElA.textContent = currentQuestionObj.answerA;
        answerButtonElB.setAttribute("data-question-id", currentQuestionObj.questionID);
        answerButtonElB.textContent = currentQuestionObj.answerB;
        answerButtonElC.setAttribute("data-question-id", currentQuestionObj.questionID);
        answerButtonElC.textContent = currentQuestionObj.answerC;
        answerButtonElD.setAttribute("data-question-id", currentQuestionObj.questionID);
        answerButtonElD.textContent = currentQuestionObj.answerD;   
        // update score as we get quesitons correct
        score++;
        console.log(score) ;
    } else {
        // decrease timer as we get questions wrong
        decrementTimer(4);
        return;
    }   
}
// check if the answer was correct
let checkAnswer = function (event) {
    let answerClicked = event.target;
    console.log(answerClicked.getAttribute("data-whichAnswer"));
    console.log(currentQuestionObj.correctAnswer);
    if (answerClicked.getAttribute("data-whichAnswer") === currentQuestionObj.correctAnswer) {
        console.log("correct!")
        return true;
    }
    else {
        console.log("wrong!")
        return false;
    }
}
let scoreHandler = function() {
    // find question text and answers
    // var questionTextEl = document.querySelector(".question-text")
    answerButtonElA = document.querySelector(".question-A");
    answerButtonElB = document.querySelector(".question-B");
    answerButtonElC = document.querySelector(".question-C");
    answerButtonElD = document.querySelector(".question-D");
    // add info for user about end game process and remove answers
    questionTextEl.textContent = "All done!";
    questionTextEl.setAttribute("class","score-text");
    answerButtonElA.remove();
    answerButtonElB.remove();
    answerButtonElC.remove(); 
    answerButtonElD.remove(); 
    // if current score high enough to be on the list
    if (highScoreArray.length < 10) {
        initials = window.prompt("enter your initials")
        initials.toUpperCase();
        if (initials.length > 2 || initials.length <= 0) {
            scoreHandler();
        }
        newHighScore = {"initials": initials,"score":score};
        highScoreArray.push(newHighScore);
        highScoreArray.sort(function(b,a) {return a.score - b.score});
        localStorage.setItem("highScoreArray", JSON.stringify(highScoreArray));
        }
    // if the score deserves to be in the top 10
    if (highScoreArray.length === 10) {
        
        console.log(highScoreArray[highScoreArray.length - 1].score);
        if (score > highScoreArray[highScoreArray.length - 1].score) {
            initials = window.prompt("enter your initials")
            initials.toUpperCase();
            if (initials.length > 2 || initials.length <= 0) {
                scoreHandler();
            }        
            // save new high score to localStorage
            highScoreArray.pop();
            newHighScore = {"initials": initials,"score":score};
            highScoreArray.push(newHighScore);
            highScoreArray.sort(function(b,a) {return a.score - b.score});
            localStorage.setItem("highScoreArray", JSON.stringify(highScoreArray));
        } else {
            alert("Your score was not a Top 10 High Score! Click OK to view High Scores.");
            // remove current question;
            currentQuestionObj = {};
            location.reload();
        }                    
    } 
}
// function that removes the information from the current question
let clearQuestionCard = function() {
    // function that removes all text from question card elements 
    // only to be used at end of game
    questionTextEl = document.querySelector(".question-text")
    answerButtonElA = document.querySelector(".question-A");
    answerButtonElB = document.querySelector(".question-B");
    answerButtonElC = document.querySelector(".question-C");
    answerButtonElD = document.querySelector(".question-D");
    answerButtonElA.textContent = ""; 
    answerButtonElB.textContent = ""; 
    answerButtonElC.textContent = ""; 
    answerButtonElD.textContent = ""; 
}
let endGame = function() {
    // clear question
    clearQuestionCard();
    // save info after game is over
    scoreHandler();
    // move to high score page
    location.assign("highScores.html")
}

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
    // functions that control timer DONE
        // button element that updates time after start DONE
        // function that reduces the timer when wrong DONE
    // functions for presenting questions
        // array of question objects DONE
        // function that generates a new question card DONE
        // listen for click on answer buttons DONE
        // check if answer was correct DONE
        // update DOM element that contains a question DONE

// WHEN I answer a question
// THEN I am presented with another question
    // functions for presenting questions DONE

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
    // functions that control timer DONE

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
    // functions that control flow of game
    
// WHEN the game is over
// THEN I can save my initials and score
    // functions that control flow of game
    // functions that store score DONE
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