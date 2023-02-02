const navContainer = document.querySelector('.nav-container')
const closeBtn = document.querySelector('#close')
const openBtn = document.querySelector('#open')

closeBtn.addEventListener('pointerdown', e => navContainer.classList.add('hidden'))
openBtn.addEventListener('pointerdown', e => navContainer.classList.remove('hidden'))