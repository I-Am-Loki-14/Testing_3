const menubar =document.getElementById('menubar');
const navlinks = document.getElementById('nav-links');

menubar.addEventListener('click',()=>{
    navlinks.classList.toggle('show');

    if (navlinks.classList.contains('show')) {
        menubar.src="img/cross.svg";
    } else {
        menubar.src="img/menubar.svg";
    }
})