var resultsPage = document.querySelector('.quizClass');
var timerStart = document.querySelector('.StartButton');
var timeEl = document.querySelector('.timer');
var start = document.querySelector('.StartButton');

var currentQuestion = 0;


// Assigning questions with answers
var Questions = [{
    id: 0,
    q: "Commonly used data types do not include:",
    // Gives 4 answers with 1 answer having a boolean value of true
    a: [{ text: "Numbers", isCorrect: false },
        { text: "Boolean", isCorrect: false },
        { text: "Alerts", isCorrect: true},
        { text: "Strings", isCorrect: false},
    ]
},
{
    id: 1,
    q: "The condition in an if / else statement is enclosed with _____.",
    // Gives 4 answers with 1 answer having a boolean value of true
    a: [{ text: "curly brackets", isCorrect: false },
        { text: "parenthesis", isCorrect: true },
        { text: "quotes", isCorrect: false},
        { text: "square brackets", isCorrect: false}, 
    ]
},
{
    id: 2,
    q: "Who invented JavaScript?",
    // Gives 3 answers with 1 answer having a boolean value of true
    a: [{ text: "Sheryl Sandberg", isCorrect: false },
        { text: "Brendan Eich", isCorrect: true},
        { text: "Douglas Crockford", isCorrect: false},
    ]
}
]

//Creating a function timer that is going to start counting down from 75
function countdown() {
    var secondsLeft = 75;
    var timerInterval = setInterval(function() {
        if (secondsLeft > 0) {
        secondsLeft--;
        timeEl.textContent = 'Time Left: ' + secondsLeft;
        } else {
            clearInterval(timerInterval);
            // Create alert to say that time is up
            window.alert("Time is up!");
            window.alert("Select Start Quiz button to try again!")
        }
    }, 1000);
}

// Creating a function to show quiz when "Start Quiz" button is selected
function startQuiz() {
    


}

function renderQuestion(currentQuestion) {
    var questionBox = document.createElement("div");
    var questionTitle = document.createElement("h3");
    var questionData = Questions[currentQuestion];
    questionTitle.textContent = questionData[q];
}

function renderAnswer(currentQuestion) {
    var answerBox = document.createElement("div");
    var answerTitle = document.createElement("h3");
    var answerData = Questions[currentQuestion];
    answerTitle.textContent = answerData[q];
}








timerStart.addEventListener("click", countdown);
timerStart.addEventListener("click", renderQuestion);
timerStart.addEventListener("click", renderAnswer);