const fanfare = new Audio('./audio/winSquare.wav')
document.getElementById('complete').addEventListener('click', completeGoal)

function completeGoal() {
    confetti.start(4000)
    fanfare.play()
}