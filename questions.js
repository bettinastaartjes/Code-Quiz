




//Declared variables
var questionIndex = 0;

//Start working Code
//Declared variables
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");

//Variables for seconds in timer/rules -- what does this mean
var secondsLeft = 76;
// Holds interval time -- what does this mean
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

// Renders questions and choices to page: 
function render(questionIndex) {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // New for each for question choices
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
