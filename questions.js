

//Setting up the timer
var timer = 60;
var interval = setInterval (function() {
    document.getElementById('timer').innerHTML = "Time Left: "+timer+" s";
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

//Variables (const (things that cannot change)=var/let (re-assignable), let is better than var
const quiz= document.getElementById('quiz')
const answerEls= document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
//have to do camel case, cant have two submitBtns
const submitInitials = document.getElementById ('submit-initials')
//CORRECT DISPLAY
const displayCorrect = document.getElementById ('display-correct')

let currentQuiz = 0
let score = 0

loadQuiz ()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
//LOOK HOW WE CAN LOOP/CONDENSE THIS
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

var saveInitials = function() {
    localStorage.setItem("tasks", tasks);
}

//GETTING CORRECT ANSWER AND INCORRECT ANSWER
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
            displayCorrect.innerHTML = "Correct"
            //alert ("Correct")
        // - = deducting an amount from a variable    
        } else {
            timer-=10
            displayCorrect.innerHTML = "Incorrect"
        }
    currentQuiz ++

    if(currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        //Replacing below with HTML
        quiz.innerHTML = `
        <br><h1> All Done! </h1></br>
        <h2> You answered ${score}/${quizData.length} questions correctly</h2>
        <h3> Enter your initials:</h3>
        <!--FOR ENTERING YOUR INITIALS AT THE END-->
            <form id = "task-form">
                <div class="form-group">
                <input type="text" name="initials" placeholder="Enter Your Initials" />
                </div>
                <div class="form group">
                <button class="btn" id="submit-initials" type="submit">Submit High Score</button>
                </div>
            </form>
        <button onclick = "location.href='highscores.html';">View Highscores</button>
        <button onclick = "location.reload();">Reload</button>
        `
    }
    }
})

// Label
var createLabel = document.createElement("label");
createLabel.setAttribute("id", "createLabel");
createLabel.textContent = "Enter your initials: ";

questionsDiv.appendChild(createLabel);

// input
var createInput = document.createElement("input");
createInput.setAttribute("type", "text");
createInput.setAttribute("id", "initials");
createInput.textContent = "";

questionsDiv.appendChild(createInput);

// submit
var createSubmit = document.createElement("button");
createSubmit.setAttribute("type", "submit");
createSubmit.setAttribute("id", "Submit");
createSubmit.textContent = "Submit";

questionsDiv.appendChild(createSubmit);

// Event listener to capture initials and local storage for initials and score
createSubmit.addEventListener("click", function () {
    var initials = createInput.value;

    if (initials === null) {

        console.log("No value entered!");

    } else {
        var finalScore = {
            initials: initials,
            score: timeRemaining
        }
        console.log(finalScore);
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
            allScores = [];
        } else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(finalScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
        // Travels to final page
        window.location.replace("./HighScores.html");
    }
});

//save in local storage to send initials to next high score, saving somethinig permanently in browser; 

//maybe event.preventdefault somwhere????