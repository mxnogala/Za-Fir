let yOffset = window.pageYOffset;
const navbar = document.querySelector(".navbar");

const hideOnScroll = () => {
    const currentYOffset = window.pageYOffset;
    if (yOffset > currentYOffset) {
        navbar.style.top = "0";
    }
    else {
        navbar.style.top = "-100px";
    }
    yOffset = currentYOffset;
}

window.addEventListener("scroll", hideOnScroll);

