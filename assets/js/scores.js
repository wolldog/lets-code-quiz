//variables to reference locations in docmument
var scoreTitle = document.querySelector("#scoreBoardTtl")
var scorePHolder = document.querySelector("#scoreBoardPlHd")
var scoreTable = document.querySelector("#scoreBoardTbl")
var goBackBtn = document.querySelector("#back")
var clearScoreBtn = document.querySelector("#clearScores")


//variables to create list elements in document
var liEl = document.createElement("li");

//Retrieve initials and scores from local storage

var storedScores = JSON.parse(localStorage.getItem("scoreBoard"))

function init(){

    // Hide no stored score placeholder if scores are available

    if (storedScores !== null) {

        scorePHolder.setAttribute("style", "display: none")
    }


    // Create list elements and populate with stored initials and scores

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
    location.reload();
    

});

// Navigate back to quiz landing page

goBackBtn.addEventListener("click", function() {
    window.location.replace("../../index.html")
});

init()



