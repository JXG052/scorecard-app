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
const scoreInputs = document.querySelectorAll(".a-score-input")
scoreInputs.forEach(function (inputEl) {
    inputEl.addEventListener("change", function (e) {
        getTotalScores()
    })
})

function getTotalScores() {
    let result = 0
    for (let i = 0; i < scoreInputs.length; i++) {
    if(scoreInputs[i].value){
        result += parseInt(scoreInputs[i].value)}
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
h4aScore.addEventListener("change", function () {
    playeraScore += parseInt(h4aScore.value)
    totalaScore.textContent = playeraScore
    outaScoreEl.textContent = playeraScore
})
h5aScore.addEventListener("change", function () {
    playeraScore += parseInt(h5aScore.value)
    totalaScore.textContent = playeraScore
    outaScoreEl.textContent = playeraScore
})
h6aScore.addEventListener("change", function () {
    playeraScore += parseInt(h6aScore.value)
    totalaScore.textContent = playeraScore
    outaScoreEl.textContent = playeraScore
})
h7aScore.addEventListener("change", function () {
    playeraScore += parseInt(h7aScore.value)
    totalaScore.textContent = playeraScore
    outaScoreEl.textContent = playeraScore
})
h8aScore.addEventListener("change", function () {
    playeraScore += parseInt(h8aScore.value)
    totalaScore.textContent = playeraScore
    outaScoreEl.textContent = playeraScore
})
h9aScore.addEventListener("change", function () {
    playeraScore += parseInt(h9aScore.value)
    totalaScore.textContent = playeraScore
    outaScoreEl.textContent = playeraScore
})
h10aScore.addEventListener("change", function () {
    playeraScore += parseInt(h10aScore.value)
    totalaScore.textContent = playeraScore
    inaScore += parseInt(h10aScore.value)
    inaScoreEl.textContent = inaScore
})
h11aScore.addEventListener("change", function () {
    playeraScore += parseInt(h11aScore.value)
    totalaScore.textContent = playeraScore
    inaScore += parseInt(h11aScore.value)
    inaScoreEl.textContent = inaScore
})
h12aScore.addEventListener("change", function () {
    playeraScore += parseInt(h12aScore.value)
    totalaScore.textContent = playeraScore
    inaScore += parseInt(h12aScore.value)
    inaScoreEl.textContent = inaScore
})
h13aScore.addEventListener("change", function () {
    playeraScore += parseInt(h13aScore.value)
    totalaScore.textContent = playeraScore
    inaScore += parseInt(h13aScore.value)
    inaScoreEl.textContent = inaScore
})
h14aScore.addEventListener("change", function () {
    playeraScore += parseInt(h14aScore.value)
    totalaScore.textContent = playeraScore
    inaScore += parseInt(h14aScore.value)
    inaScoreEl.textContent = inaScore
})
h15aScore.addEventListener("change", function () {
    playeraScore += parseInt(h15aScore.value)
    totalaScore.textContent = playeraScore
    inaScore += parseInt(h15aScore.value)
    inaScoreEl.textContent = inaScore
})
h16aScore.addEventListener("change", function () {
    playeraScore += parseInt(h16aScore.value)
    totalaScore.textContent = playeraScore
    inaScore += parseInt(h16aScore.value)
    inaScoreEl.textContent = inaScore
})
h17aScore.addEventListener("change", function () {
    playeraScore += parseInt(h17aScore.value)
    totalaScore.textContent = playeraScore
    inaScore += parseInt(h17aScore.value)
    inaScoreEl.textContent = inaScore
})
h18aScore.addEventListener("change", function () {
    playeraScore += parseInt(h18aScore.value)
    totalaScore.textContent = playeraScore
    inaScore += parseInt(h18aScore.value)
    inaScoreEl.textContent = inaScore
})
