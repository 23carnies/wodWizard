const fanfare = new Audio('../audio/winSquare.wav')
let checkbox = document.getElementsByClassName('complete')
checkbox.addEventListener('click', completeGoal)

function completeGoal() {
    confetti.start(4000)
    fanfare.play()
}