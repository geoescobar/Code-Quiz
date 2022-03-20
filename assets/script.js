// Create variables for HTML elements 
var startBtn = document.getElementById('start-btn');
var answerA = document.getElementById('answer-btn-1');
var answerB = document.getElementById('answer-btn-2');
var answerC = document.getElementById('answer-btn-3');
var answerD = document.getElementById('answer-btn-4');
var container = document.getElementById('quiz-container');
var displayQuestion = document.getElementById('display-questions');
var timerInterval;
var score = 0;
var getReuslt = document.getElementById('display-results');
var scoreTracker = 0
var highScore = document.getElementById('high-score');


// Added display elements to hide question and answer buttons
displayQuestion.style.display = 'none';
answerA.style.display = 'none';
answerB.style.display = 'none';
answerC.style.display = 'none';
answerD.style.display = 'none';


// Invoked function to start the game 
startBtn.addEventListener('click', startGame);

// Created variable holding an array to display questions, answers, and correct answer
var questions = [
    {
        quesiton: 'What is 2+2?',
        answerChoiceA: '8',
        answerChoiceB: '4',
        answerChoiceC: '2',
        answerChoiceD: '0',
        correctAnswer: 'B'
    },
    {
        quesiton: 'Dallas is in what state?',
        answerChoiceA: 'Arizona',
        answerChoiceB: 'California',
        answerChoiceC: 'Florida',
        answerChoiceD: 'Texas',
        correctAnswer: 'D'
    },
    {
        quesiton: 'Which is a programming language?',
        answerChoiceA: 'JavaScript',
        answerChoiceB: 'French',
        answerChoiceC: 'English',
        answerChoiceD: 'Spanish',
        correctAnswer: 'A'
    },
    {
        quesiton: 'Inside which HTML element do we put Javascript?',
        answerChoiceA: '<js>',
        answerChoiceB: '<javascript>',
        answerChoiceC: '<script>',
        answerChoiceD: '<java>',
        correctAnswer: 'C'
    },
]

// Function to end the game 
function endGame() {
    clearInterval(timerInterval);
    displayQuestion.style.display = 'none';
    answerA.style.display = 'none';
    answerB.style.display = 'none';
    answerC.style.display = 'none';
    answerD.style.display = 'none';
    getReuslt.textContent = 'Your score: ' + score;
    if (score > scoreTracker) {
        scoreTracker = score
        highScore.textContent = 'High Score: ' + scoreTracker;
    }
    quesitonIndex = 0;
    timeRemaining = 60;
    startBtn.style.display = 'block';
    getReuslt.style.display = 'block';
}


// Question index to render questinos on the screen 
var quesitonIndex = 0;
function askNextQuestion() {
    console.log(quesitonIndex);
    if (quesitonIndex >= questions.length) {
        endGame();
    } else {
        displayQuestion.textContent = questions[quesitonIndex].quesiton;
        answerA.textContent = questions[quesitonIndex].answerChoiceA;
        answerB.textContent = questions[quesitonIndex].answerChoiceB;
        answerC.textContent = questions[quesitonIndex].answerChoiceC;
        answerD.textContent = questions[quesitonIndex].answerChoiceD;

    }
}

var timeRemaining = 60;


// Created event listeners to render next question and record correct answer for questions 1-4
answerA.addEventListener('click', function (event) {
    console.log('answer a has been clicked');

    if (questions[quesitonIndex].correctAnswer === 'A') {
        score++
    } else {
        timeRemaining -= 10;
    }
    quesitonIndex++;
    askNextQuestion();
});

answerB.addEventListener('click', function (event) {
    console.log('answer b has been clicked');

    if (questions[quesitonIndex].correctAnswer === 'B') {
        score++
    } else {
        timeRemaining -= 10;
    }
    quesitonIndex++;
    askNextQuestion();
});

answerC.addEventListener('click', function (event) {
    console.log('answer c has been clicked');

    if (questions[quesitonIndex].correctAnswer === 'C') {
        score++
    } else {
        timeRemaining -= 10;
    }
    quesitonIndex++;
    askNextQuestion();
});

answerD.addEventListener('click', function (event) {
    console.log('answer d has been clicked');

    if (questions[quesitonIndex].correctAnswer === 'D') {
        score++
    } else {
        timeRemaining -= 10;
    }
    quesitonIndex++;
    
    askNextQuestion();
});


// Timer function that operates the 60 second countdown 
function startTimer() {
    timerInterval = setInterval(function () {
        timeRemaining--;

        if (timeRemaining === 0) {
            endGame();
        }

        document.getElementById('timer').textContent = 'Timer: ' + timeRemaining;
        console.log('interval running', timeRemaining);

    }, 1000);
}


// start of the game function 
function startGame() {
    startBtn.style.display = 'none';
    getReuslt.style.display = 'none';
    displayQuestion.style.display = 'block';
    answerA.style.display = 'block';
    answerB.style.display = 'block';
    answerC.style.display = 'block';
    answerD.style.display = 'block';
    startTimer();
    askNextQuestion();
}


