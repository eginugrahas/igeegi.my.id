//ityped Typing text animation

const typed = new Typed('.animated', {
    strings: ['FrontEnd Developer', 'UI/UX Developer', 'ReactJs Developer', 'Mobile Developer', 'Laravel Developer'],
    typedSpeed: 90,
    backSpeed: 90,
    loop: true,
})


// hamburger menu

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-120%';
}


