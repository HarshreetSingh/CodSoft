const hamburger = document.querySelector('.hamburger');
const navmenu = document.querySelector('.main_menu nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navmenu.classList.toggle('active');
});

document.querySelectorAll('.main_menu nav ul li a').forEach(n => n.addEventListener('click', ()=> {
    hamburger.classList.remove('active');
    navmenu.classList.remove('active');
}))