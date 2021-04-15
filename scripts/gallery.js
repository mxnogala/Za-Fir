
const images = [...document.querySelectorAll('.projects__img')];
const modalContainer = document.querySelector('#modal');
const modalImg = document.querySelector(".modal__img");

images.forEach(img => {
    img.addEventListener('click', () => {
        modalImg.src = img.src;
        modalContainer.removeAttribute('class');
        modalContainer.classList.add("in");
        document.body.classList.add('modal-active');
    });
})

modalContainer.addEventListener('click', () => {
    modalContainer.classList.add('out');
    document.body.classList.remove('out');
    document.body.classList.remove('modal-active');
})


