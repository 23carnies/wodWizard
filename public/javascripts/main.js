function openTabs(e) {
    let tabNav, tabContent
    tabContent = document.getElementsByClassName('tab-content')
    for(let i=0;i<tabContent.length;i++) {
        tabContent[i].style.display = 'none'
    }
    tabNav = document.getElementsByClassName('tab-nav')
    for(let i=0;i<tabNav.length;i++) {
        tabNav[i].className = tabNav[i].className.replace(' active', '')
    }
    
}