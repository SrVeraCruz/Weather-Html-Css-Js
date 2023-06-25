let menu = document.querySelector('.nav-bar');
let navbar = document.querySelector('.main-header-2');

menu.addEventListener('click', ()=> { 
    menu.classList.toggle('active');
    navbar.classList.toggle('active');
});