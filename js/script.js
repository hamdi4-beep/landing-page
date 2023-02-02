const navContainer = document.querySelector('.nav-container')
const overlay = document.querySelector('.bg-overlay')

const closeBtn = document.querySelector('#close')
const openBtn = document.querySelector('#open')

openBtn.addEventListener('pointerdown', e => {
    navContainer.classList.remove('hidden')
    overlay.style.display = 'block'
})

closeBtn.addEventListener('pointerdown', e => {
    navContainer.classList.add('hidden')
    overlay.style.display = 'none'
})