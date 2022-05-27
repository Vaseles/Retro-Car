const buttons = document.querySelectorAll('.about__but');
const slides = document.querySelectorAll(".slide");
const body = document.querySelector("body");

for (let i=0; i<buttons.length; i++) {
    console.log(buttons[i]);
    console.log(slides[i]);

    buttons[i].addEventListener('click', function() {
        clear();

        slides[i].style.display = "block";
        slides[i].style.opacity = 1;
        buttons[i].style.backgroundColor = '#202020';
    });
}

function clear() {
    for (slid of slides) {
        slid.style.display = "none";
        slid.style.opacity = 0;
    }
    for (butt of buttons) {
        butt.style.backgroundColor = 'transparent';
    }
}

//header 
const buttonMenu = document.querySelector(".nav__menu");
const nav = document.querySelector(".nav__nav");

buttonMenu.addEventListener('click', function() {
    if (nav.style.display == "none") {
        nav.style.display = "flex";
        body.style.overflowY = "hidden";
    } else {
        nav.style.display = "none";
        body.style.overflowY = "auto";
    }
})