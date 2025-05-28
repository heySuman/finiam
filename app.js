// Handle Navbar Hide

let prevScrollPosition = window.pageYOffset;
const navbarThreshold = 500;
window.onscroll = function () {
    // check if the mobile menu is open
    const isOpen = document.querySelector(".navbar__navlinks__mobile--open")
    if(isOpen){
        return
    }

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

const circleContainer = document.getElementById("landing-page__animation");

for (let i = 0; i < 16; i++) {
    const circle = document.createElement("div")
    circle.classList.add("circle")
    circleContainer.appendChild(circle)
}

// const landingPage = document.getElementById("landing-page");
// landingPage.onclick = function(){
//     console.log("landing page clicked")
//     const circleList = document.getElementsByClassName("circle");

//     for(let i = 0; i < circleList.length; i++){
//         circleList[i].top = Math.random() * 100 + "px" 
//     }
// }

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
