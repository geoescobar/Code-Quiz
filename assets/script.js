var startBtn = document.getElementById('start-btn');
var nextBtn = document.getElementById('next-btn');
var submitBtn = document.getElementById('submit-btn');
var answerA = document.getElementById('answer-btn-1');
var answerB = document.getElementById('answer-btn-2');
var answerC = document.getElementById('answer-btn-3');
var answerD = document.getElementById('answer-btn-4');
var container = document.getElementById('quiz-container');
var displayQuestion = document.getElementById('display-questions');



console.log(container)

displayQuestion.style.display = 'none';
nextBtn.style.display = 'none';
submitBtn.style.display = 'none';
answerA.style.display = 'none';
answerB.style.display = 'none';
answerC.style.display = 'none';
answerD.style.display = 'none';



startBtn.addEventListener('click', startGame);

var questions = [
    {
        quesiton: 'example question 1:',
        answerChoiceA: 'answer 1.1',
        answerChoiceB: 'answer 2.1',
        answerChoiceC: 'answer 3.1',
        answerChoiceD: 'answer 4.1',
        correctAnswer: 'answer 1'
    },
    {
        quesiton: 'example question 2:',
        answerChoiceA: 'answer 1.2',
        answerChoiceB: 'answer 2.2',
        answerChoiceC: 'answer 3.2',
        answerChoiceD: 'answer 4.2',
        correctAnswer: 'answer 2.2'
    },
    {
        quesiton: 'example question 3:',
        answerChoiceA: 'answer 1.3',
        answerChoiceB: 'answer 2.3',
        answerChoiceC: 'answer 3.3',
        answerChoiceD: 'answer 4.3',
        correctAnswer: 'answer 3.3'
    },
    {
        quesiton: 'example question 4:',
        answerChoiceA: 'answer 1.4',
        answerChoiceB: 'answer 2.4',
        answerChoiceC: 'answer 3.4',
        answerChoiceD: 'answer 4.4',
        correctAnswer: 'answer 4.4'
    },
]

function endGame() {
    alert('Game is over');

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
        // questionElement.textContent = questions[quesitonIndex].correctAnswer;

    }
    quesitonIndex++;
}

var timeRemaining = 60;

answerA.addEventListener('click', function (event) {
    // event.preventDefault();
    console.log('answer a has been clicked');

    if (questions[quesitonIndex].correctAnswer === 'B') {
        alert('Correct')
    } else {
        alert('Incorrect')
    }
    askNextQuestion();
});

answerB.addEventListener('click', function (event) {
    // event.preventDefault();
    console.log('answer b has been clicked');

    if (questions[quesitonIndex].correctAnswer === 'B') {
        alert('Correct')
    } else {
        alert('Incorrect')
    }
    askNextQuestion();
});

answerC.addEventListener('click', function (event) {
    // event.preventDefault();
    console.log('answer c has been clicked');

    if (questions[quesitonIndex].correctAnswer === 'B') {
        alert('Correct')
    } else {
        alert('Incorrect')
    }
    askNextQuestion();
});

answerD.addEventListener('click', function (event) {
    // event.preventDefault();
    console.log('answer d has been clicked');

    if (questions[quesitonIndex].correctAnswer === 'B') {
        alert('Correct')
    } else {
        alert('Incorrect')
    }
    timeRemaining -= 10;
    askNextQuestion();
});

function startTimer() {
    var timerInterval = setInterval(function () {
        timeRemaining--;

        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            endGame();
        }

        document.getElementById('timer').textContent = timeRemaining;
        console.log('interval running', timeRemaining);

    }, 1000);
}

function startGame() {
    displayQuestion.style.display = 'block';
    nextBtn.style.display = 'block';
    submitBtn.style.display = 'block';
    answerA.style.display = 'block';
    answerB.style.display = 'block';
    answerC.style.display = 'block';
    answerD.style.display = 'block';
    // container.classList.toggle('hide');
    startTimer();
    askNextQuestion();
}

startBtn.addEventListener('click', startGame);

