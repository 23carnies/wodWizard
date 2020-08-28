const wodBtn = document.getElementById('wod')
const showWodEl = document.getElementById('showWod')

wodBtn.addEventListener('click', () => {
    fetch('https://wger.de/api/v2/')
    .then((response) => {
        return response.json
    })
    .then((data) => {
        let exercise = data.exercise
        showWodEl.innerText
    })
})