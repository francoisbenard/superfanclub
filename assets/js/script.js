// hide and show menu mobil and icon

const linksNavMobil = document.querySelector('#navbarSupportedContent');
const burgerMenu = document.querySelector('.navbar-toggler');

console.log(burgerMenu)

linksNavMobil.addEventListener('click', function () {
   linksNavMobil.classList.toggle("show");
   burgerMenu.style.display = ""
})

burgerMenu.addEventListener('click', () => burgerMenu.style.display = "none")