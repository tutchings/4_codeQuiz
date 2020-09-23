var question = document.querySelector('#question');
var answerList = document.querySelector('#answerList');
var startQuiz = document.querySelector('#startQuizBtn');
var timer = document.querySelector('#timer');
var timeRemaining = 90;

var quizObjectArray = [
    {
        question: 'queston 1',
        answers: [
            'answer0', 
            'answer1', 
            'answer2', 
            'answer3'
        ],
        correctAnswer: 'answer3'
    },
    {
        question: 'queston 2',
        answers: [
            'answer0', 
            'answer1', 
            'answer2', 
            'answer3'
        ],
        correctAnswer: 'answer3'
    },
    {
        question: 'queston 3',
        answers: [
            'answer0', 
            'answer1', 
            'answer2', 
            'answer3'
        ],
        correctAnswer: 'answer3'
    },
    {
        question: 'queston 4',
        answers: [
            'answer0', 
            'answer1', 
            'answer2', 
            'answer3'
        ],
        correctAnswer: 'answer3'
    },
    {
        question: 'queston 5',
        answers: [
            'answer0', 
            'answer1', 
            'answer2', 
            'answer3'
        ],
        correctAnswer: 'answer3'
    },
    {
        question: 'queston 7',
        answers: [
            'answer0', 
            'answer1', 
            'answer2', 
            'answer3'
        ],
        correctAnswer: 'answer3'
    },
    {
        question: 'queston 7',
        answers: [
            'answer0', 
            'answer1', 
            'answer2', 
            'answer3'
        ],
        correctAnswer: 'answer3'
    },
    {
        question: 'queston 8',
        answers: [
            'answer0', 
            'answer1', 
            'answer2', 
            'answer3'
        ],
        correctAnswer: 'answer3'
    },
    {
        question: 'queston 9',
        answers: [
            'answer0', 
            'answer1', 
            'answer2', 
            'answer3'
        ],
        correctAnswer: 'answer3'
    },
    {
        question: 'queston 10',
        answers: [
            'answer0', 
            'answer1', 
            'answer2', 
            'answer3'
        ],
        correctAnswer: 'answer3'
    }
];

function time() {
    var countdownTimer = setInterval(function() {
        timer.textContent = timeRemaining;
        timeRemaining--;

        if (timeRemaining === 0){
            timer.textContent = '';
            clearInterval(countdownTimer);
        }
    }, 1000)
}


startQuiz.addEventListener('click', function(){
    time();
    question.textContent = "Question 1";
});