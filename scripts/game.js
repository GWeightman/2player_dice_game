const button = document.getElementById("roll")
const value = document.getElementById("current")
const image = document.getElementById("image")

let total = 00

let dice = [01, 02, 03, 04, 05, 06]

const rolling = (enter) => {
    score = dice[Math.floor(Math.random()*5)]
    total = total + score
    if (total >= 21){
        document.location.href="winner.html"
    }
    else if(score == 1){
        document.location.href="lose.html"
    } 
    else if (score == 2) {
        image.src = "images/02.png"
        value.innerHTML = total
    }
    else if (score == 3) {
        image.src = "images/03.png"
        value.innerHTML = total
    }
    else if (score == 4) {
        image.src = "images/04.png"
        value.innerHTML = total
    }
    else if (score == 5) {
        image.src = "images/05.png"
        value.innerHTML = total
    }
    else if (score == 6) {
        image.src = "images/06.png"
        value.innerHTML = total
    }
}
document.addEventListener("keypress", rolling)
button.addEventListener("click", () => {
    rolling()
})
