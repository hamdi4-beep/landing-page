const navMenu = document.querySelector('.nav-menu')
const entryPoint = document.querySelector('.entry-point')

const toMatch = [
    /Android/i,
    /iPhone/i,
    /BlackBerry/i,
    /Windows\sPhone/i,
    /iPad/i,
    /iPod/i,
    /webOS/i
]

toMatch.some(regex => {
    if (navigator.userAgent.match(regex)) {
        for (const elem of [navMenu, entryPoint]) elem.classList.add('hidden')
    }
})