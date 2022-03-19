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


console.log(container)

displayQuestion.style.display = 'none';
answerA.style.display = 'none';
answerB.style.display = 'none';
answerC.style.display = 'none';
answerD.style.display = 'none';



startBtn.addEventListener('click', startGame);

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
    // var scores = JSON.parse(localStorage.getItem('initials'));
    // if (scores === null) {
    //     scores = []
    // }
    // scores.push('GE: ' + score)
    // localStorage.setItem('initials', JSON.stringify(scores))
    // for (var item of JSON.parse(localStorage.getItem('initials'))){
    //     console.log(item)
    // }
    // score = 0
}

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


