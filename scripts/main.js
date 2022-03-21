let burgerButton = document.querySelector('.burger');
navIsActive = false;

burgerButton.onclick = showNav;

function showNav() {
    if (navIsActive) {
        document.querySelector('.burgerNav').classList.remove('show');
    } else {
        document.querySelector('.burgerNav').classList.add('show');
    }
    navIsActive = !navIsActive;
}