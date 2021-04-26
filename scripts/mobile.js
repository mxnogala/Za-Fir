const menu = document.querySelector(".nav__collapse");
const navLinks = [...document.querySelectorAll(".mobile-hide-disabled")];
const btn = document.querySelector(".gallery__btn");
const gallery = document.querySelector("#gallery-collapse");

const hideMenu = () => {
    menu.firstElementChild.classList.toggle('mobile-hide-active')
    navLinks.forEach(link => {
        link.classList.toggle("mobile-hide-disabled");
        link.classList.toggle("mobile-hide");
    })
}
menu.addEventListener("click", hideMenu);

const hideGallery = () => {
    gallery.classList.toggle("mobile-gallery");
    gallery.classList.toggle("mobile-gallery-active");
}

btn.addEventListener("click", hideGallery);
