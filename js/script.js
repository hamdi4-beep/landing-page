"use strict";
const navItems = document.querySelector('.nav-items');
const featuresList = document.querySelector('#features');
const companyList = document.querySelector('#company');
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
featuresList.addEventListener('pointerdown', (e) => dropDown(e, 'features'));
companyList.addEventListener('pointerdown', (e) => dropDown(e, 'company'));
function dropDown(e, str) {
    const arrowIcon = document.querySelector(`.arrow-${str}`);
    const dropdown = document.querySelector(`.dropdown-${str}`);
    if (dropdown.classList.contains('hidden')) {
        arrowIcon.src = './assets/icon-arrow-up.svg';
    }
    else {
        arrowIcon.src = './assets/icon-arrow-down.svg';
    }
    dropdown.classList.toggle('hidden');
}
