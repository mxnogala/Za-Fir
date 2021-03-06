const menu = document.querySelector(".navbar__collapse");
const navLinks = [...document.querySelectorAll(".mobile-hide-disabled")];
const btn = document.querySelector(".gallery__btn");
const gallery = document.querySelector("#gallery-collapse");
const galleryText = ["Wyświetl galerię ", "Ukryj galerię "];

const hideMenu = () => {
    menu.firstElementChild.classList.toggle('mobile-hide-active')
    navLinks.forEach(link => {
        link.classList.toggle("mobile-hide-disabled");
        link.classList.toggle("mobile-hide");
    })
}

const hideGallery = () => {
    gallery.classList.toggle("mobile-gallery");
    gallery.classList.toggle("mobile-gallery-active");
    if (btn.textContent == galleryText[0]) {
        btn.textContent = galleryText[1];
    }
    else {
        btn.textContent = galleryText[0];
    }

}

menu.addEventListener("click", hideMenu);
btn.addEventListener("click", hideGallery);
