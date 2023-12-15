'use strict'

const burgetBtn = document.querySelector('#burgetBtn');
const ul = document.querySelector('#bodyNav');
const topNav = document.querySelector('.topNav');
const topForm = document.querySelector('#topForm');

burgetBtn.addEventListener('click', function (event) {
    this.classList.toggle('activeBurger');
    ul.classList.toggle('activeUl');
    topNav.classList.toggle('openNavBody');
    topForm.classList.toggle('activeForm');

    if (document.body.style.overflow == 'hidden') {
        document.body.style.overflow = 'scroll'
    } else {
        document.body.style.overflow = 'hidden';
    }

})