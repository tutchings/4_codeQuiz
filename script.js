//variable declarations
var question = document.querySelector('#question');
var quizDescription = document.querySelector('#quiz-description');
var answerList = document.querySelector('#answerList');
var startQuiz = document.querySelector('#startQuizBtn');
var timer = document.querySelector('#timer');
var submitNameForm = document.querySelector('#submit-name-form');
var submitScore = document.querySelector('#enterHighScore');
var nameInput = document.querySelector('#name-input');
var errorMessage = document.querySelector('#error-message');
var highScoreOL = document.querySelector('#highScoreOL');
var currentHighScoreSpan = document.querySelector('#current-high-score');
var currentRecordHolderSpan = document.querySelector('#current-record-holder');
var timeRemaining = 90;
var questionNumber = 0;
var highScoreList = [];
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

//if there are high scores in local storage, set high score list equal to local storage data
//if there are no high scores in local storage, leave high score list blank
if ((localStorage.getItem('localStorageHighScoreList')) !== null){
    highScoreList = JSON.parse(localStorage.getItem('localStorageHighScoreList'));
}



function displayCurrentHighScore(){

    // sets current high score to the score at the top of the already sorted high score list
    var currentHighScore = highScoreList[0].score;
    var currentHighScoreRecordHolder = [];

    // for loop to see if there is more than one person that holds the current high score
    for (var i = 0; i < highScoreList.length; i++){
        if (highScoreList[i].score === currentHighScore){
            currentHighScoreRecordHolder.push(highScoreList[i].name); 
        } else {
            break;
        }
    }//end for loop

    // sets text content of highscore and record holder spans to current high score and current record holder(s)
    currentHighScoreSpan.textContent = currentHighScore;
    currentRecordHolderSpan.textContent = currentHighScoreRecordHolder.join(' & ');

} // end displayCurrentHighScore() function



function displayHighScores() {

    // loops through high score list and appends list items with name and score to ordered list
    // appends list items in decending order as high score list is already sorted by score
    for (var i = 0; i < highScoreList.length; i++){
        $('#highScoreOL').append('<li>' + highScoreList[i].name + ': ' + highScoreList[i].score + '</li>');
    }

} //end displayHighScores() function



function displayQuestion() {

    //displays question to page
    question.textContent = quizObjectArray[questionNumber].question;

    // clears the quiz description
    quizDescription.textContent = '';

    //for loop to append answer choices to answer choices unordered list
    for (var i = 0; i < 4; i++){
        document.getElementById(i).textContent = quizObjectArray[questionNumber].answers[i];
    }

    //displays answer list to page
    answerList.style.display = '';

} //end displayQuestion() function



function displayEndQuizPage(){

    //if score is negative, set score to 0
    if (timeRemaining < 0){
        timeRemaining = 0;
    }

    // sets new heading for high score page
    question.textContent = "Enter your name for high score page";

    //hides answer list
    answerList.style.display = 'none';

    //displays score to page
    quizDescription.textContent = "Your Score: " + timeRemaining;

    // displays input field for name and submit score button to page
    submitNameForm.style.display = '';
    submitScore.style.display = '';

    // event listener for submit score button
    submitScore.addEventListener('click', function(event) {
        event.preventDefault();

        // creates object for new high score which includes name and score
        var newHighScore = {
            name: nameInput.value.trim(),
            score: timeRemaining
        };

        //display error message if user tries to submit empty name field
        if (newHighScore.name === ''){
            errorMessage.textContent = "Please Enter Name";
        }

        // runs only if user enters valid name in name field
        if (newHighScore.name !== ''){

            // push newHighScore object to high scores array
            highScoreList.push(newHighScore);

            //sorts high scores array in decending order based on score
            highScoreList.sort((score1, score2) => {
                return score2.score - score1.score;
            });

            // stores highScoreList to local storage
            localStorage.setItem('localStorageHighScoreList', JSON.stringify(highScoreList));

            //redirects user to high score page
            location.href = "highScores.html";
        }
        
    }); //end submit high score button event listener

} //end displayEndQuizPage() function


//event listener for start quiz button
startQuiz.addEventListener('click', function(){

    //when quiz starts, begin timer
    //timer starts at 90 and decrements by 1 each second
    var countdownTimer = setInterval(function() {
        timer.textContent = timeRemaining;
        timeRemaining--;

        if (timeRemaining <= 0 || questionNumber === 10){
            displayEndQuizPage();
            clearInterval(countdownTimer);
            timer.textContent = '';
        };
    }, 1000);

    //runs display question function
    displayQuestion();

    //hides start quiz button
    startQuiz.style.display = 'none';

    // event listener for answers in answer list
    answerList.addEventListener('click', function(event){
        event.preventDefault();

        if (event.target.matches("button")) {

            //user answer equals answer button that they clicked
            var userAnswer = event.target.id;

            // if the user selects incorrect answerList, time remaining decrements by 10
            // if user selects correct answer, increment question number by 1 and display next question
            if (userAnswer !== quizObjectArray[questionNumber].correctAnswer){
                timeRemaining = timeRemaining - 10;
            } else if (userAnswer === quizObjectArray[questionNumber].correctAnswer){
                questionNumber++;
                displayQuestion();
            };//end if else conditional

        };//end if conditional

    });//end answer list event listener


});//end start quiz event listener