// Toggle Mobile Menu

const hamburgerMenu = document.getElementById("hamburger-menu");
const mobileMenu = document.getElementById("navbar__navlinks__mobile");

function toggleMenu() {
    hamburgerMenu.classList.toggle("hamburger-menu--open");
    mobileMenu.classList.toggle("navbar__navlinks__mobile--open");

    // toggle the logo
    blackLogo = document.querySelector(".logo-black")
    whiteLogo = document.querySelector(".logo-white")

    if (mobileMenu.classList.contains("navbar__navlinks__mobile--open")) {
        if (blackLogo.classList.contains("logo-black--active")) {
            whiteLogo.classList.add("logo-white--active")
            blackLogo.classList.remove("logo-black--active")
        }
    }
}

hamburgerMenu.addEventListener("click", toggleMenu);

// Hide the Mobile Menu and Hamburger if the screen width is larger than 991

function hideMobileMenu() {
    let width = window.innerWidth;

    if (width > 990) {
        hamburgerMenu.style.display = "none";
        mobileMenu.style.display = "none";
    } else {
        hamburgerMenu.style.display = "block";
        mobileMenu.style.display = "flex";
    }
}

window.addEventListener("resize", hideMobileMenu);


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

    blackLogo = document.querySelector(".logo-black")
    whiteLogo = document.querySelector(".logo-white")

    // Add the navbar class name for the white background
    if (navbarThreshold > prevScrollPosition) {
        header.classList.remove("header__sticky");

        whiteLogo.classList.add("logo-white--active")
        blackLogo.classList.remove("logo-black--active")
    }
    else {
        header.classList.add("header__sticky");

        whiteLogo.classList.remove("logo-white--active")
        blackLogo.classList.add("logo-black--active")
    }

    prevScrollPosition = currentScrollPosition;
}

// Landing Page Animation


const circleContainer = document.querySelector(".landing-page__animation__wrapper");

// Create 16 animated circles
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

let movementInterval = null;

function spreadCircles() {
    const width = landingPage.clientWidth;
    const height = landingPage.clientHeight;

    circles.forEach((circle) => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        circle.style.transition = "transform 3s linear";
        circle.style.transform = `translate(${x}px, ${y}px)`;
    });

    if (movementInterval) clearInterval(movementInterval);

    movementInterval = setInterval(() => {
        const width = landingPage.clientWidth;
        const height = landingPage.clientHeight;

        circles.forEach((circle) => {
            const x = Math.random() * width;
            const y = Math.random() * height;
            circle.style.transform = `translate(${x}px, ${y}px)`;
        });
    }, 3000);

    isSpread = true;
}

function alignCircles() {
    if (movementInterval) {
        clearInterval(movementInterval);
        movementInterval = null;
    }

    circles.forEach((circle) => {
        circle.style.transition = "transform 1s ease-in-out";
        circle.style.transform = "none";
    });

    isSpread = false;
}

// Toggle animation on click
document.addEventListener("click", () => {
    isSpread ? alignCircles() : spreadCircles();
});

// Start animation on load
spreadCircles();