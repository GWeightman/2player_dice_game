const button1 = document.getElementById("button1")
const value1 = document.getElementById("value1")
const image1 = document.getElementById("img1")
const button2 = document.getElementById("button2")
const value2 = document.getElementById("value2")
const image2 = document.getElementById("img2")

let total1 = 00
let total2 = 00

let dice = [01, 02, 03, 04, 05, 06]


const rolling1 = (enter) => {
    score = dice[Math.floor(Math.random()*5)]
    total1 = total1 + score
    if (total1 >= 21){
        document.location.href="player1_winner.html"
    }
    else if(score == 1){
        image1.src = "images/01.png"
        total1 = 0
        value1.innerHTML = total1
    } 
    else if (score == 2) {
        image1.src = "images/02.png"
        value1.innerHTML = total1
    }
    else if (score == 3) {
        image1.src = "images/03.png"
        value1.innerHTML = total1
    }
    else if (score == 4) {
        image1.src = "images/04.png"
        value1.innerHTML = total1
    }
    else if (score == 5) {
        image1.src = "images/05.png"
        value1.innerHTML = total1
    }
    else if (score == 6) {
        image1.src = "images/06.png"
        value1.innerHTML = total1
    }
}
const rolling2 = (enter) => {
    score = dice[Math.floor(Math.random()*5)]
    total2 = total2 + score
    if (total2 >= 21){
        document.location.href="player2_winner.html"
    }
    else if(score == 1){
        image2.src = "images/01.png"
        total2 = 0
        value2.innerHTML = total2
    } 
    else if (score == 2) {
        image2.src = "images/02.png"
        value2.innerHTML = total2
    }
    else if (score == 3) {
        image2.src = "images/03.png"
        value2.innerHTML = total2
    }
    else if (score == 4) {
        image2.src = "images/04.png"
        value2.innerHTML = total2
    }
    else if (score == 5) {
        image2.src = "images/05.png"
        value2.innerHTML = total2
    }
    else if (score == 6) {
        image2.src = "images/06.png"
        value2.innerHTML = total2
    }
}

const turn = (enter) => {
    if(button1.textContent == "Player 1's Turn") {
        rolling1();
        button1.textContent = "Wait";
        button2.textContent = "Player 2's Turn"
    } 
    else {
        rolling2();
        button2.textContent = "Wait";
        button1.textContent = "Player 1's Turn"
    }
}


document.addEventListener("keypress", turn)
button1.addEventListener("click", () => {
    if(button1.textContent == "Player 1's Turn"){
    turn()}
})
button2.addEventListener("click", () => {
    if(button2.textContent == "Player 2's Turn"){
    turn()}
})
