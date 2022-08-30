

//Setting up the timer
var timer = 60;
var interval = setInterval (function() {
    document.getElementById('timer').innerHTML = timer;
    timer --;
    if (timer === 0) {
        clearInterval(interval);
        document.getElementById('timer').innerHTML='Done';
        //or...
        alert("You're out of time!");
    }
    }, 1000);

//These are the questions for the quiz.
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
        question: "The condition in an if/else statement is enclosed with ___.",
        a: "Quotes",
        b: "Curly brackets",
        c: "Parenthesis",
        d: "Square brakcets",
        correct: "c",
    },
    {
        question: "Arrays in JavaScript can be usde to store ___.",
        a: "Numbers and strings",
        b: "Other arrays",
        c: "Booleans",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        a: "Commas",
        b: "Curly brackets",
        c: "Quotes",
        d: "Parenthesis",
        correct: "c",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "JavaScript",
        b: "Termina/bash",
        c: "For loops",
        d: "Console.log",
        correct: "d",
    },
    

];

//Variables...?
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
        <br><h1> All Done! </h1></br>
        <h2> You answered ${score}/${quizData.length} questions correctly</h2>
        <h3> Enter your initials:</h3>
        <br></br>
        <button onclick = "location.href="./highscores.html";()">View Highscores</button>
        <button onclick = "location.reload()">Reload</button>
        `
    }
    }
})