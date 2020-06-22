var timerEl = document.getElementById("timer-btn");
var startBtn = document.getElementById('start');
var highScoreBox = document.getElementById("highScore-box")
var enter = document.getElementById("enter")
var timeLeft = 30;
function displayMessage() {
    $("#question").html("Game Over!");
    $("#button").html("");
    $("#highScore").attr("class", "present")
    $("#enter").attr("class", "present")
    timerEl = timeLeft
    
    

}

var questionArray = [
    {
        title: "Who had a famous band named after them?",
        answer: ["Leonard Skinner", "Keith Stone", "Morgan Freeman", "Daniel Tiger"],
        correct: 0
    },

    {
        title: "What is not a guitar Brand?",
        answer: ["Fender", "Gibson", "Martin", "Stanley"],
        correct: 3
    },

    {
        title: "Where is Sun Records Located?",
        answer: ["Nashville", "Memphis", "Alanta", "San Diego"],
        correct: 1
    },

    {
        title: "What band did Dave Grohl play in before The Foo Fighters?",
        answer: ["Pearl Jam", "Weezer", "Nirvana", "Deftones"],
        correct: 2
    },

    { 
        title: "What famous musician married his 13-year-old cousin?",
        answer: ["Willie Nelson", "Elvis", "Buddy Holly", "Jerry Lee Lewis"],
        correct: 3
    },

    
]

function timer(){
    // var timeLeft = 30;
    var timeInterval = setInterval(function() {
        timeLeft = timeLeft - 1
        timerEl.textContent = timeLeft + "seconds remaining."
        if (timeLeft <= 0) {
          clearInterval(timeInterval);
          displayMessage();
        }
      },1000);
    }

var position = 0;

$(".button").on('click', function() {
    // if (position < 4) {
    //     // displayMessage()
    //     console.log("end")
    // } 

    if (questionArray[position].correct == $(this).attr("data-id")) {
        $("#result").html("You are correct!");
    }
   
    else {
        $("#result").html("You are Wrong!");
        timeLeft = timeLeft-5
    }

    position++;
    setTimeout(askQuestion, 1000);
     

});

function askQuestion() {
    $("#result").html("");
    if (position > 4) {
        displayMessage();
    }
    var question = document.getElementById("question")
    question.textContent = questionArray[position].title

    var answerA = document.getElementById('a')
    answerA.textContent = questionArray[position].answer[0]

    var answerB = document.getElementById('b')
    answerB.textContent = questionArray[position].answer[1]

    var answerC = document.getElementById('c')
    answerC.textContent = questionArray[position].answer[2]

    var answerD = document.getElementById('d')
    answerD.textContent = questionArray[position].answer[3]
}


console.log(question.textContent);

askQuestion();
timerEl.onclick = timer;
$("#question").attr("class", "hidden")
$("#button").attr("class", "hidden")
$("#highScore").attr("class", "hidden")
$("#enter").attr("class", "hidden")

$("#timer-btn").on("click", function(event){
 event.preventDefault();
 $("#question").attr("class", "present")
 $("#button").attr("class", "present")
console.log("button push")
}) 

enter.addEventListener("click", function(event) {
    event.preventDefault();
    var highScore = document.getElementById("highScore").value
localStorage.setItem("highScore", highScore + " scored " + timerEl);
console.log(highScore)
});
