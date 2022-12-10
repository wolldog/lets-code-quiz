//variables to reference locations in docmument
var titleDiv = document.querySelector("#titleDiv")
var contentDiv = document.querySelector("#contentDiv")
var inputDiv = document.querySelector("#inputDiv")
var resultDiv = document.querySelector("#resultDiv")

//variables to create elements in document
var h1El = document.createElement("h1");
var pEl = document.createElement("p");
var labelEl = document.createElement("label")
var inputEl = document.createElement("input")
var formEl = document.createElement("form")
var buttonEl = document.createElement("button")

//create questions object

var questions = [
    {
    question : "Arrays in JavaScript can be used to store ______ .",
    choices : ["numbers and strings", 'other arrays', 'booleans', 'all of the above'],
    correctAnswer : "all of the above"
    },

    {
    question : "String values must be enclosed within ______ when being assigned to variables.",
    choices : ["commas", 'curly brackets', 'quotes', 'parentheses'],
    correctAnswer : "quotes"
    },

    {
    question : "The condition in an if/else statement is enclosed within ______. ",
    choices : ["quotes", 'curly brackets', 'parentheses', 'square brackets'],
    correctAnswer : "parentheses"
    },

    {
    question : "Javascript is an __________ language.",
    choices : ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
    correctAnswer : "Object-Oriented"
    },

    {
    question : "What keyword is used to check whether a given property is valid or not?",
    choices : ["in", 'is in', 'exists', 'lies'],
    correctAnswer : "in"
    }
]

//other variables

var questionNum; 
var timer; 

//create elements and content for quiz landing page

h1El.textContent = ("Code Quiz Challenge");
pEl.textContent = ("Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!");
buttonEl.textContent = ("Start Quiz")

titleDiv.appendChild(h1El);
contentDiv.appendChild(pEl);
inputDiv.appendChild(buttonEl);

buttonEl.setAttribute("onclick", "generateQuiz()");
buttonEl.setAttribute("id", "start")
h1El.setAttribute("class", "center-text");
pEl.setAttribute("class", "center-text")

//clear existing content before generating new content
function clearDiv(){

    titleDiv.textContent = " ";
    contentDiv.textContent = " ";
    inputDiv.textContent = " ";
    
}

//render the question and answer buttons
function generateQuestion(questionNum) {
    
    clearDiv()
    h1El.textContent = (questions[questionNum].question);
    h1El.setAttribute("class", "left-justify")
    titleDiv.appendChild(h1El);

    for (let i = 0; i < questions[questionNum].choices.length; i++) {
        
        buttonEl = document.createElement("button")
        buttonEl.textContent = ((i+1) + ". " + questions[questionNum].choices[i]);
        inputDiv.appendChild(buttonEl);
        buttonEl.setAttribute("class", "choices");
        buttonEl.setAttribute("data-value", questions[questionNum].choices[i]);
        buttonEl.addEventListener("click", answer);
    }
}

//start timer and call the function generateQuestion
function generateQuiz(){

    questionNum = 0;
    timer = 75;  
    generateQuestion (questionNum)  
    timerInterval = setInterval(function() {
        // reduce the timer value
        timer--;
        // display new timer value
        document.getElementById("timer-value").textContent = timer;
        if (timer <=0) {
            clearInterval(timerInterval)
        }
        
    }, 1000);
}

function answer(event){

    var selectedAns = event.target.dataset.value;
    var correctAns = questions[questionNum].correctAnswer
    
        if(selectedAns === correctAns) {
            console.log("Correct")
            resultDiv.setAttribute("class", "correct")
            checkAllDone ();
        }
    
        else {
            console.log("Wrong");
            resultDiv.setAttribute("class", "wrong")
            timer = (timer - 10);
            checkAllDone ();
            }
}

//Check if there are any more questions
//If there are more question, generate the next question
//If there are no more questions, stop the quiz and record current timer as score

function checkAllDone (){  
    if(questionNum == (questions.length - 1)) {
    stopQuiz()
    } 

    else {
        questionNum++;
        generateQuestion (questionNum)
        }
    }

//stops timer and records score
//called when there are no more questions or timer reaches zero
function stopQuiz(){
    clearInterval(timerInterval)
    score += timer
    console.log(score)
    allDone();
}