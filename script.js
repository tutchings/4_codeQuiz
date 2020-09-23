var question = document.querySelector('#question');
var quizDescription = document.querySelector('#quiz-description');
var answerList = document.querySelector('#answerList');
var startQuiz = document.querySelector('#startQuizBtn');
var timer = document.querySelector('#timer');
var timeRemaining = 90;
var questionNumber = 0;

var quizObjectArray = [
    {
        question: 'This is question 1',
        answers: [
            'answer0', 
            'answer1', 
            'answer2', 
            'answer3'
        ],
        correctAnswer: '0'
    },
    {
        question: 'This is question 2',
        answers: [
            'answer0', 
            'answer1', 
            'answer2', 
            'answer3'
        ],
        correctAnswer: '0'
    },
    {
        question: 'This is question 3',
        answers: [
            'answer0', 
            'answer1', 
            'answer2', 
            'answer3'
        ],
        correctAnswer: '0'
    },
    {
        question: 'This is question 4',
        answers: [
            'answer0', 
            'answer1', 
            'answer2', 
            'answer3'
        ],
        correctAnswer: '0'
    },
    {
        question: 'This is question 5',
        answers: [
            'answer0', 
            'answer1', 
            'answer2', 
            'answer3'
        ],
        correctAnswer: '0'
    },
    {
        question: 'This is question 6',
        answers: [
            'answer0', 
            'answer1', 
            'answer2', 
            'answer3'
        ],
        correctAnswer: '0'
    },
    {
        question: 'This is question 7',
        answers: [
            'answer0', 
            'answer1', 
            'answer2', 
            'answer3'
        ],
        correctAnswer: '0'
    },
    {
        question: 'This is question 8',
        answers: [
            'answer0', 
            'answer1', 
            'answer2', 
            'answer3'
        ],
        correctAnswer: '0'
    },
    {
        question: 'This is question 9',
        answers: [
            'answer0', 
            'answer1', 
            'answer2', 
            'answer3'
        ],
        correctAnswer: '0'
    },
    {
        question: 'This is question 10',
        answers: [
            'answer0', 
            'answer1', 
            'answer2', 
            'answer3'
        ],
        correctAnswer: '0'
    }
];



function displayQuestion() {
    question.textContent = quizObjectArray[questionNumber].question;
    quizDescription.textContent = '';
    for (var i = 0; i < 4; i++){
        document.getElementById(i).textContent = quizObjectArray[questionNumber].answers[i];
    }
    answerList.style.display = '';
}

function displayEndQuizPage(){
    if (timeRemaining < 0){
        timeRemaining = 0;
    }
    question.textContent = "Enter your name for high score page";
    answerList.style.display = 'none';
    quizDescription.textContent = "Your Score: " + timeRemaining;
    startQuiz.textContent = "Submit Your Score";
}


startQuiz.addEventListener('click', function(){

    var countdownTimer = setInterval(function() {
        timer.textContent = timeRemaining;
        timeRemaining--;

        if (timeRemaining <= 0 || questionNumber === 10){
            displayEndQuizPage();
            clearInterval(countdownTimer);
            timer.textContent = '';
        };
    }, 1000);

    displayQuestion();


    answerList.addEventListener('click', function(event){
        event.preventDefault();
        if (event.target.matches("button")) {
            var userAnswer = event.target.id;

            if (userAnswer !== quizObjectArray[questionNumber].correctAnswer){
                timeRemaining = timeRemaining - 10;
            } else if (userAnswer === quizObjectArray[questionNumber].correctAnswer){
                questionNumber++;
                displayQuestion();
            };
        };
    });


});