let playeraScore = 0
let inaScore = 0
let h1aScore = document.getElementById("h1a-score")
let h2aScore = document.getElementById("h2a-score")
let h3aScore = document.getElementById("h3a-score")
let h4aScore = document.getElementById("h4a-score")
let h5aScore = document.getElementById("h5a-score")
let h6aScore = document.getElementById("h6a-score")
let h7aScore = document.getElementById("h7a-score")
let h8aScore = document.getElementById("h8a-score")
let h9aScore = document.getElementById("h9a-score")
let outaScoreEl = document.getElementById("out-a-score")
let h10aScore = document.getElementById("h10a-score")
let h11aScore = document.getElementById("h11a-score")
let h12aScore = document.getElementById("h12a-score")
let h13aScore = document.getElementById("h13a-score")
let h14aScore = document.getElementById("h14a-score")
let h15aScore = document.getElementById("h15a-score")
let h16aScore = document.getElementById("h16a-score")
let h17aScore = document.getElementById("h17a-score")
let h18aScore = document.getElementById("h18a-score")
let inaScoreEl = document.getElementById("in-a-score")
let totalaScore = document.getElementById("total-a-score")
let totalbScore = document.getElementById("total-b-score")
let totalcScore = document.getElementById("total-c-score")
let totaldScore = document.getElementById("total-d-score")
let totalmScore = document.getElementById("total-marker-score")
const scoreInputsA = document.querySelectorAll(".a-score-input")
const scoreInputsB = document.querySelectorAll(".b-score-input")
const scoreInputsC = document.querySelectorAll(".c-score-input")
const scoreInputsD = document.querySelectorAll(".d-score-input")
const scoreInputsM = document.querySelectorAll(".marker-score-input")
const handicapInputA = document.getElementById("a-handicap-input")
const handicapInputB = document.getElementById("b-handicap-input")
const handicapInputC = document.getElementById("c-handicap-input")
const handicapInputD = document.getElementById("d-handicap-input")
let handicapAllowance = 0.95
let playingHandicapAEl = document.getElementById("player-a-playing-handicap")
let playingHandicapBEl = document.getElementById("player-b-playing-handicap")
let playingHandicapCEl = document.getElementById("player-c-playing-handicap")
let playingHandicapDEl = document.getElementById("player-d-playing-handicap")
let courseRatingWhite = 70.4
let courseRatingYellow = 69.3
let slopeRatingWhite = 132
let slopeRatingYellow= 125
let slopeRatingRed = 112 //guessed need to change
let courseHandicapAEl = document.getElementById("player-a-course-handicap")
let courseHandicapBEl = document.getElementById("player-b-course-handicap")
let courseHandicapCEl = document.getElementById("player-c-course-handicap")
let courseHandicapDEl = document.getElementById("player-d-course-handicap")
let userDisplay = document.getElementById("user-display")
let bHandicap = document.getElementById("b-handicap")
let cHandicap = document.getElementById("c-handicap") 
let dHandicap = document.getElementById("d-handicap")


let aHandicap = document.getElementById("a-handicap")

handicapInputA.addEventListener("change", function (e) {
        getHandicapA()
    })
function getHandicapA(){
        let result = 0
        if (document.getElementById("white-tee").checked){
            result = Math.round(handicapInputA.value *(slopeRatingWhite/113))
            courseHandicapAEl.textContent = result
            playingHandicapAEl.textContent = Math.round(result * handicapAllowance)
            aHandicap.textContent = Math.round(result * handicapAllowance)
        } else if (document.getElementById("yellow-tee").checked){	
            result = Math.round(handicapInputA.value *(slopeRatingYellow/113))
            courseHandicapAEl.textContent = result
            playingHandicapAEl.textContent = Math.round(result * handicapAllowance)
            aHandicap.textContent = Math.round(result * handicapAllowance)
        } else if (document.getElementById("red-tee").checked){
            result = Math.round(handicapInputA.value *(slopeRatingRed/113))
            courseHandicapAEl.textContent = result
            playingHandicapAEl.textContent = Math.round(result * handicapAllowance)
            aHandicap.textContent = Math.round(result * handicapAllowance)
        } else {
            userDisplay.textContent = "please select tee's"
        }
}

handicapInputB.addEventListener("change", function (e) {
        getHandicapB()
    })

    function getHandicapB(){
        let result = 0
        if (document.getElementById("white-tee").checked){
            result = Math.round(handicapInputB.value *(slopeRatingWhite/113))
            courseHandicapBEl.textContent = result
            playingHandicapBEl.textContent = Math.round(result * handicapAllowance)
            bHandicap.textContent = Math.round(result * handicapAllowance)
        } else if (document.getElementById("yellow-tee").checked){	
            result = Math.round(handicapInputB.value *(slopeRatingYellow/113))
            courseHandicapBEl.textContent = result
            playingHandicapBEl.textContent = Math.round(result * handicapAllowance)
            bHandicap.textContent = Math.round(result * handicapAllowance)
        } else if (document.getElementById("red-tee").checked){
            result = Math.round(handicapInputA.value *(slopeRatingRed/113))
            courseHandicapBEl.textContent = result
            playingHandicapBEl.textContent = Math.round(result * handicapAllowance)
            bHandicap.textContent = Math.round(result * handicapAllowance)
        } else {
            userDisplay.textContent = "please select tee's"
        }
    }

    handicapInputC.addEventListener("change", function (e) {
        getHandicapC()
    })

    function getHandicapC(){
        let result = 0
        if (document.getElementById("white-tee").checked){
            result = Math.round(handicapInputC.value *(slopeRatingWhite/113))
            courseHandicapCEl.textContent = result
            playingHandicapCEl.textContent = Math.round(result * handicapAllowance)
            cHandicap.textContent = Math.round(result * handicapAllowance)
        } else if (document.getElementById("yellow-tee").checked){	
            result = Math.round(handicapInputC.value *(slopeRatingYellow/113))
            courseHandicapCEl.textContent = result
            playingHandicapCEl.textContent = Math.round(result * handicapAllowance)
            cHandicap.textContent = Math.round(result * handicapAllowance)
        } else if (document.getElementById("red-tee").checked){
            result = Math.round(handicapInputA.value *(slopeRatingRed/113))
            courseHandicapCEl.textContent = result
            playingHandicapCEl.textContent = Math.round(result * handicapAllowance)
            cHandicap.textContent = Math.round(result * handicapAllowance)
        } else {
            userDisplay.textContent = "please select tee's"
        }
    }
    handicapInputD.addEventListener("change", function (e) {
        getHandicapD()
    })

    function getHandicapD(){
        let result = 0
        if (document.getElementById("white-tee").checked){
            result = Math.round(handicapInputD.value *(slopeRatingWhite/113))
            courseHandicapDEl.textContent = result
            playingHandicapDEl.textContent = Math.round(result * handicapAllowance)
            dHandicap.textContent = Math.round(result * handicapAllowance)
        } else if (document.getElementById("yellow-tee").checked){	
            result = Math.round(handicapInputD.value *(slopeRatingYellow/113))
            courseHandicapDEl.textContent = result
            playingHandicapDEl.textContent = Math.round(result * handicapAllowance)
            dHandicap.textContent = Math.round(result * handicapAllowance)
        } else if (document.getElementById("red-tee").checked){
            result = Math.round(handicapInputA.value *(slopeRatingRed/113))
            courseHandicapDEl.textContent = result
            playingHandicapDEl.textContent = Math.round(result * handicapAllowance)
            dHandicap.textContent = Math.round(result * handicapAllowance)
        } else {
            userDisplay.textContent = "please select tee's"
        }   
    }

scoreInputsM.forEach(function (inputEl) {
    inputEl.addEventListener("change", function (e) {
        getTotalScoresM()
    })
})
function getTotalScoresM() {
    let result = 0
    for (let i = 0; i < scoreInputsM.length; i++) {
        if (scoreInputsM[i].value) {
            result += parseInt(scoreInputsM[i].value)
        }
    }
    totalmScore.textContent = result
}

scoreInputsD.forEach(function (inputEl) {
    inputEl.addEventListener("change", function (e) {
        getTotalScoresD()
    })
})
function getTotalScoresD() {
    let result = 0
    for (let i = 0; i < scoreInputsD.length; i++) {
        if (scoreInputsD[i].value) {
            result += parseInt(scoreInputsD[i].value)
        }
    }
    totaldScore.textContent = result
}

scoreInputsC.forEach(function (inputEl) {
    inputEl.addEventListener("change", function (e) {
        getTotalScoresC()
    })
})

function getTotalScoresC() {
    let result = 0
    for (let i = 0; i < scoreInputsC.length; i++) {
        if (scoreInputsC[i].value) {
            result += parseInt(scoreInputsC[i].value)
        }
    }
    totalcScore.textContent = result
}

scoreInputsB.forEach(function (inputEl) {
    inputEl.addEventListener("change", function (e) {
        getTotalScoresB()
    })
})

function getTotalScoresB() {
    let result = 0
    for (let i = 0; i < scoreInputsB.length; i++) {
        if (scoreInputsB[i].value) {
            result += parseInt(scoreInputsB[i].value)
        }
    }
    totalbScore.textContent = result
}

scoreInputsA.forEach(function (inputEl) {
    inputEl.addEventListener("change", function (e) {
        getTotalScoresA()
    })
})

function getTotalScoresA() {
    let result = 0
    let outResult = 0
    for (let i = 0; i < scoreInputsA.length; i++) {
        if (scoreInputsA[i].value && scoreInputsA.length < 9) {
            result += parseInt(scoreInputsA[i].value)
        }
    }

    totalaScore.textContent = result
}
//  h1aScore.addEventListener("change", function(){
// 	playeraScore += parseInt(h1aScore.value)
//     totalaScore.textContent = playeraScore
//     outaScoreEl.textContent = playeraScore
//     })
//  h2aScore.addEventListener("change", function(){
// 	playeraScore += parseInt(h2aScore.value)
//     totalaScore.textContent = playeraScore
//     outaScoreEl.textContent = playeraScore
//     })
//  h3aScore.addEventListener("change", function(){
// 	playeraScore += parseInt(h3aScore.value)
//     totalaScore.textContent = playeraScore
//     outaScoreEl.textContent = playeraScore
//     })
// h4aScore.addEventListener("change", function () {
//     playeraScore += parseInt(h4aScore.value)
//     totalaScore.textContent = playeraScore
//     outaScoreEl.textContent = playeraScore
// })
// h5aScore.addEventListener("change", function () {
//     playeraScore += parseInt(h5aScore.value)
//     totalaScore.textContent = playeraScore
//     outaScoreEl.textContent = playeraScore
// })
// h6aScore.addEventListener("change", function () {
//     playeraScore += parseInt(h6aScore.value)
//     totalaScore.textContent = playeraScore
//     outaScoreEl.textContent = playeraScore
// })
// h7aScore.addEventListener("change", function () {
//     playeraScore += parseInt(h7aScore.value)
//     totalaScore.textContent = playeraScore
//     outaScoreEl.textContent = playeraScore
// })
// h8aScore.addEventListener("change", function () {
//     playeraScore += parseInt(h8aScore.value)
//     totalaScore.textContent = playeraScore
//     outaScoreEl.textContent = playeraScore
// })
// h9aScore.addEventListener("change", function () {
//     playeraScore += parseInt(h9aScore.value)
//     totalaScore.textContent = playeraScore
//     outaScoreEl.textContent = playeraScore
// })
// h10aScore.addEventListener("change", function () {
//     playeraScore += parseInt(h10aScore.value)
//     totalaScore.textContent = playeraScore
//     inaScore += parseInt(h10aScore.value)
//     inaScoreEl.textContent = inaScore
// })
// h11aScore.addEventListener("change", function () {
//     playeraScore += parseInt(h11aScore.value)
//     totalaScore.textContent = playeraScore
//     inaScore += parseInt(h11aScore.value)
//     inaScoreEl.textContent = inaScore
// })
// h12aScore.addEventListener("change", function () {
//     playeraScore += parseInt(h12aScore.value)
//     totalaScore.textContent = playeraScore
//     inaScore += parseInt(h12aScore.value)
//     inaScoreEl.textContent = inaScore
// })
// h13aScore.addEventListener("change", function () {
//     playeraScore += parseInt(h13aScore.value)
//     totalaScore.textContent = playeraScore
//     inaScore += parseInt(h13aScore.value)
//     inaScoreEl.textContent = inaScore
// })
// h14aScore.addEventListener("change", function () {
//     playeraScore += parseInt(h14aScore.value)
//     totalaScore.textContent = playeraScore
//     inaScore += parseInt(h14aScore.value)
//     inaScoreEl.textContent = inaScore
// })
// h15aScore.addEventListener("change", function () {
//     playeraScore += parseInt(h15aScore.value)
//     totalaScore.textContent = playeraScore
//     inaScore += parseInt(h15aScore.value)
//     inaScoreEl.textContent = inaScore
// })
// h16aScore.addEventListener("change", function () {
//     playeraScore += parseInt(h16aScore.value)
//     totalaScore.textContent = playeraScore
//     inaScore += parseInt(h16aScore.value)
//     inaScoreEl.textContent = inaScore
// })
// h17aScore.addEventListener("change", function () {
//     playeraScore += parseInt(h17aScore.value)
//     totalaScore.textContent = playeraScore
//     inaScore += parseInt(h17aScore.value)
//     inaScoreEl.textContent = inaScore
// })
// h18aScore.addEventListener("change", function () {
//     playeraScore += parseInt(h18aScore.value)
//     totalaScore.textContent = playeraScore
//     inaScore += parseInt(h18aScore.value)
//     inaScoreEl.textContent = inaScore
// })
