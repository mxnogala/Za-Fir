const images = [...document.querySelectorAll('.projects__img')];
const modalContainer = document.querySelector('#modal');
const modalClose = document.querySelector(".modal__close");
const modalImg = document.querySelector(".modal__img");
const previous = document.querySelector("#modal-previous");
const next = document.querySelector("#modal-next");
let currentImgId;

const getImage = (currentImgId, i) => {
    let previousImgId = currentImgId.split("-");
    previousImgId = parseInt(previousImgId[1]) + parseInt(i);
    if (previousImgId > 16 && i == 1) {
        previousImgId = `#photo-${1}`;
    }
    else if (previousImgId < 1 && i == -1) {
        previousImgId = `#photo-${16}`;
    }
    else {
        previousImgId = `#photo-${previousImgId}`;
    }
    let previousImg = document.querySelector(previousImgId);
    modalImg.src = previousImg.src;
    return previousImgId;
}


images.forEach(img => {
    img.addEventListener('click', () => {
        currentImgId = img.id;
        modalImg.src = img.src;
        modalContainer.removeAttribute('class');
        modalContainer.classList.add("in");
        document.body.classList.add('modal-active');

        previous.addEventListener("click", () => {
            currentImgId = getImage(currentImgId, -1);
        });

        next.addEventListener("click", () => {
            currentImgId = getImage(currentImgId, 1);
        });
    });
});


modalClose.addEventListener('click', () => {
    modalContainer.classList.add('out');
    document.body.classList.remove('out');
    document.body.classList.remove('modal-active');
})


