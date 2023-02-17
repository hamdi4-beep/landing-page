const navItems = document.querySelector('.nav-items') as HTMLDivElement
const featuresList = document.querySelector('#features') as HTMLSpanElement
const companyList = document.querySelector('#company') as HTMLSpanElement

const body = document.body
const openBtn = document.querySelector('#open') as HTMLImageElement
const closeBtn = document.querySelector('#close') as HTMLImageElement

openBtn.addEventListener('pointerdown', (e: Event) => {
    body.classList.add('overlay')
    navItems.classList.remove('hidden')
})

closeBtn.addEventListener('pointerdown', (e: Event) => {
    body.classList.remove('overlay')
    navItems.classList.add('hidden')
})

featuresList.addEventListener('pointerdown', (e: Event) => dropDown(e, 'features'))
companyList.addEventListener('pointerdown', (e: Event) => dropDown(e, 'company'))

function dropDown(e: Event, str: string) {
    const arrowIcon =  document.querySelector(`.arrow-${str}`) as HTMLImageElement
    const dropdown = document.querySelector(`.dropdown-${str}`) as HTMLUListElement

    if (dropdown.classList.contains('hidden')) {
        arrowIcon.src = './assets/icon-arrow-up.svg'
    } else {
        arrowIcon.src = './assets/icon-arrow-down.svg'
    }

    dropdown.classList.toggle('hidden')
}