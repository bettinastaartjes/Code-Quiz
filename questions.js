
const quizData = [
    {
        question: "Commonly used data types do NOT include:",
        a: "Strings",
        b: "Booleans",
        c: "Alerts",
        d: "Numbers",
        correct: "b",
    },
    {
        question: "The condition in an if/else statement is enclosed with ___",
        a: "Quotes",
        b: "Curly brackets",
        c: "Parenthesis",
        d: "Square brakcets",
        correct: "c",
    },
    {
        question: "The condition in an if/else statement is enclosed with ___",
        a: "Quotes",
        b: "Curly brackets",
        c: "Parenthesis",
        d: "Square brakcets",
        correct: "c",
    },

];

//SETTING UP THE TIMER....??
const startingMinutes = 1;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 60);

function updateCountdown() {
    const minutes = math.floor(time/10);
    let seconds = time % 60;

    countdownEl.innerHTML= `${minutes}: ${seconds}`;
    time--;
}

//Variables
const quiz= document.getElementById('quiz')
const answerEls= document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById ('submit')

let currentQuiz = 0
let score = 0

loadQuiz ()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers () {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
    currentQuiz ++

    if(currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        quiz.innerHTML = `
        <h2> You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick = "location.href="./highscores.html";()">View Highscores</button>
        <button onclick = "location.reload()">Reload</button>
        `
    }
    }
})






/*
// Declared variables
var questionIndex = 0;

Start working Code
Declared variables
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");

Variables for seconds in timer/rules -- what does this mean
var secondsLeft = 76;
Holds interval time -- what does this mean
var holdInterval = 0;

timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textCotent = "Time: " + secondsLeft;

            if (secondsLeft <=0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's Up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

 Renders questions and choices to page: 
function render(questionIndex) {
     Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
     For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
         Appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
     New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

//This makes the button count down but on the home page....
var startTime = 15;
var interval = setInterval(function(){
  document.getElementById('startTime').innerHTML=startTime;
  startTime--;
  if (startTime === 0){
    clearInterval(interval);
    document.getElementById('startTime').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 1000);
*/
