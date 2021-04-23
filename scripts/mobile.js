const menu = document.querySelector(".nav__collapse");
const navLinks = [...document.querySelectorAll(".mobile-hide")];

const hideMenu = () => {
    menu.firstElementChild.classList.toggle('mobile-hide-active')
    navLinks.forEach(link => {
        link.classList.toggle("mobile-hide-disabled");
        link.classList.toggle("mobile-hide");
    })
}
menu.addEventListener("click", hideMenu);
