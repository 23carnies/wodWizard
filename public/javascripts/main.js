const fanfare = new Audio('./audio/winSquare.wav')
document.getElementsByClassName('checkBtn').addEventListener('click', () => {
    checkbox.textContent = 'X'
    confetti.start(4000)
    fanfare.play()
})

// function completeGoal() {
    
// }