//variables to reference locations in docmument
var titleDiv = document.querySelector("#titleDiv")
var contentDiv = document.querySelector("#contentDiv")
var resultDiv = document.querySelector("#resultdiv")

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