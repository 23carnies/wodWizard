// const tabBtns = document.querySelectorAll('.btnContainer button')
// const tabPanels = document.querySelectorAll('tabPanel')

// document.getElementById('tab1').addEventListener('click', () => showPanels(0, '#08819d'))
// document.getElementById('tab2').addEventListener('click', () => showPanels(1, '#6589aa'))
// document.getElementById('tab3').addEventListener('click', () => showPanels(2, '#00bfff'))
// document.getElementById('tab4').addEventListener('click', () => showPanels(3, '#3f79a5'))
// document.getElementById('tab5').addEventListener('click', () => showPanels(4, '#1e4c76'))

// showPanels(0,'#08819d')

// function showPanels(panelIdx, clrCode) {
//     tabBtns.forEach((item) => {
//         item.style.backgroundColor=''
//         item.style.color=''
//     })
//     tabBtns[panelIdx].style.backgroundColor = clrCode
//     tabBtns[panelIdx].style.color = 'white'

//     tabPanels.forEach((item) => {
//         item.style.display='none'
//     })
//     tabPanels[panelIdx].style.display = 'block'
//     tabPanels[panelIdx].style.backgroundColor = clrCode
// }


function setTabs() {
    document.querySelectorAll('.tabs__btn').forEach(button => {
        button.addEventListener('click', () => {
            const btnCtn = button.parentElement
            const container = btnCtn.parentElement
            const tabNumber = button.dataset.forTab
            const tabToActivate = container.querySelector(`.tabs__content[data-for-tab="${tabNumber}]`)

            btnCtn.querySelectorAll('.tabs__btn').forEach(button => {
                button.classList.remove('tabs__btn--active')
            })
            container.querySelectorAll('.tabs__content').forEach(tab => {
                tab.classList.remove('tabs__content--active')
            })

            button.classList.add('tabs__btn--active')
            tabToActivate.classList.add('tabs__content--active')
        })
    })
}

    document.addEventListener('DOMContentLoaded', () => {
        setTabs()

        document.querySelectorAll('.tabs').foreEach(container => {
            container.querySelector('.tabs__btnCtn .tabs__btn').click()
        })
    })