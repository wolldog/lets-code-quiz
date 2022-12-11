//variables to reference locations in docmument
var scoreTitle = document.querySelector("#scoreBoardTtl")
var scorePHolder = document.querySelector("#scoreBoardPlHd")
var scoreTable = document.querySelector("#scoreBoardTbl")
var goBackBtn = document.querySelector("#back")
var clearScoreBtn = document.querySelector("#clearScores")

var initials = document.querySelector


//variables to create elements in document
var liEl = document.createElement("li");

var storedScores = JSON.parse(localStorage.getItem("scoreBoard"))

function init(){

    if (storedScores !== null) {

        scorePHolder.setAttribute("style", "display: none")
    }



    for (var i = 0; i < storedScores.length; i++ ){
        var liEl = document.createElement("li");
            liEl.textContent = storedScores[i].userInitials + " - " + storedScores[i].userScore;
            scoreBoardTbl.appendChild(liEl);
            liEl.setAttribute("class", "scoreList")

        }


    console.log(storedScores.length)
        
    console.log(storedScores)


    

}

clearScoreBtn.addEventListener("click", function () {
    localStorage.clear();
    init ();
});

goBackBtn.addEventListener("click", function() {
    window.location.replace("../../index.html")
});

init()



