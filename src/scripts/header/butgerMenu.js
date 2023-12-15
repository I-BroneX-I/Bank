'use strict'

const burgetBtn = document.querySelector('#burgetBtn');
const ul = document.querySelector('#bodyNav');

burgetBtn.addEventListener('click', function(event){
    this.classList.toggle('activeBurger');
    ul.classList.toggle('activeUl');
})