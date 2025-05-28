let isSpread = false
// Handle Navbar Hide

let prevScrollPosition = window.pageYOffset;
const navbarThreshold = 500;
window.onscroll = function () {
    // check if the mobile menu is open
    const isOpen = document.querySelector(".navbar__navlinks__mobile--open")
    if (isOpen) {
        return
    }

    // align the balls when scrolled
    if (isSpread) alignCircles()

    let currentScrollPosition = window.pageYOffset;
    const header = document.getElementById("header");

    if (prevScrollPosition > currentScrollPosition) {
        header.style.top = "0%";
    }
    else {
        header.style.top = "-50%";
    }

    // Add the navbar class name for the white background
    if (navbarThreshold > prevScrollPosition) {
        header.classList.remove("header__sticky");
    }
    else {
        header.classList.add("header__sticky");
    }

    prevScrollPosition = currentScrollPosition;
}

// Landing Page Animation

const circleContainer = document.querySelector(".landing-page__animation__wrapper");

for (let i = 0; i < 16; i++) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("circle-wrapper");

    const circle = document.createElement("div");
    circle.classList.add("circle");

    wrapper.appendChild(circle);
    circleContainer.appendChild(wrapper);
}


const landingPage = document.getElementById("landing-page");
const circles = Array.from(document.getElementsByClassName("circle"));

function spreadCircles() {
    const width = landingPage.clientWidth;
    const height = landingPage.clientHeight;

    circles.forEach((circle) => {
        const x = (Math.random() * width) % width
        const y = (Math.random() * height) % height
        circle.style.transform = `translate(${x}px, ${y}px)`
    });
    isSpread = true;
}

function alignCircles() {
    circles.forEach((circle) => (
        circle.style.transform = "none"
    ));
    isSpread = false;
}

document.addEventListener("click", () => {

    isSpread ? alignCircles() : spreadCircles();

});

// Hamburger Menu

const hamburger = document.getElementById("hamburger-menu")
const mobileMenu = document.getElementById("navbar__navlinks__mobile")

hamburger.onclick = function () {
    hamburger.classList.toggle("hamburger-menu--open");
    mobileMenu.classList.toggle("navbar__navlinks__mobile--open")

    // toggle the logo
    blackLogo = document.querySelector(".logo-black")
    whiteLogo = document.querySelector(".logo-white")

    whiteLogo.classList.toggle("logo-white-active")
    blackLogo.classList.toggle("logo-black--active")
}
