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
var score;
// var initials;

//create elements and content for quiz landing page

titleDiv.setAttribute("style", "text-align: center")
contentDiv.setAttribute("style", "text-align: center")
inputDiv.setAttribute("style", "text-align: center")


h1El.textContent = ("Code Quiz Challenge");
pEl.textContent = ("Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!");
buttonEl.textContent = ("Start Quiz")

titleDiv.appendChild(h1El);
contentDiv.appendChild(pEl);
inputDiv.appendChild(buttonEl);

buttonEl.setAttribute("onclick", "generateQuiz()");
buttonEl.setAttribute("id", "start")


//clear existing content before generating new content

function clearDiv(){

    titleDiv.textContent = " ";
    contentDiv.textContent = " ";
    inputDiv.textContent = " ";
    
}

//render the question and loop through the generation of available answer buttons

function generateQuestion(questionNum) {
    
    clearDiv()

    titleDiv.setAttribute("style", "text-align: left")
    contentDiv.setAttribute("style", "text-align: left")
    inputDiv.setAttribute("style", "text-align: left")

    h1El.textContent = (questions[questionNum].question);

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
            stopQuiz();
        }
        
    }, 1000);
}

// Compare the selected answer with the correct answer


function answer(event){

    var selectedAns = event.target.dataset.value;
    var correctAns = questions[questionNum].correctAnswer

    titleDiv.setAttribute("style", "text-align: left")
    contentDiv.setAttribute("style", "text-align: left")
    inputDiv.setAttribute("style", "text-align: left")
    resultDiv.setAttribute("style", "text-align: left")
    
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
//If there are no more questions or the time is less than or equal to zero, stop the quiz and record current timer as score

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
    score = 0
    clearInterval(timerInterval)
    score += timer
    console.log(score)
    buttonEl.removeEventListener("click", answer);
    allDone();
}

//generates elements for 'All Done', input intials and submit button.

function allDone(){
    
    clearDiv();
    
    titleDiv.setAttribute("style", "text-align: left")
    contentDiv.setAttribute("style", "text-align: left")
    inputDiv.setAttribute("style", "text-align: left")
   
    h1El.textContent = ("All Done!");
    titleDiv.appendChild(h1El);
    
    pEl.textContent = (" Your final score is " + score + ".");
    contentDiv.appendChild(pEl)

    
    labelEl.textContent = ("Enter initials: ");
    buttonEl.textContent = ("Submit");
    buttonEl.removeEventListener("click", answer);

    contentDiv.appendChild(formEl)
    formEl.appendChild(labelEl);
    formEl.appendChild(inputEl)
    formEl.appendChild(buttonEl)
    
    formEl.setAttribute("id", "scoreForm");
        
    labelEl.textContent = ("Enter initials: ");
    labelEl.setAttribute("for", "initials");
    formEl.appendChild(labelEl);

    inputEl.setAttribute("name", "initials")
    inputEl.setAttribute("id", "initials")
    inputEl.setAttribute("type", "text")
    inputEl.setAttribute("required", "")
    formEl.appendChild(inputEl)

    buttonEl.textContent = ("Submit");
    formEl.appendChild(buttonEl)
    buttonEl.setAttribute("id", "submit")
    
    //When 'Submit' button is clicked;


    buttonEl.addEventListener("click", function(event) {
        event.preventDefault();
        
        var finalScore = {
            userInitials: inputEl.value.trim(),
            userScore: score
        };
        
        console.log(finalScore);
        
        var scores = [];
        
        var storedScore = JSON.parse(localStorage.getItem ("scoreBoard"));
        if (storedScore !== null){
            scores = storedScore;
        }

        scores.push(finalScore);
        
        function storeScore(){
        
            localStorage.setItem("scoreBoard", JSON.stringify(scores))
            
        }
    

        storeScore()
    
        window.location.replace("./assets/html/scores.html")
    })
}    
    
    
    

    






