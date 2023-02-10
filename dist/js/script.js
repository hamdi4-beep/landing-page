"use strict";
const navItems = document.querySelector('.nav-items');
const body = document.body;
const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
openBtn.addEventListener('pointerdown', (e) => {
    body.classList.add('overlay');
    navItems.classList.remove('hidden');
});
closeBtn.addEventListener('pointerdown', (e) => {
    body.classList.remove('overlay');
    navItems.classList.add('hidden');
});
