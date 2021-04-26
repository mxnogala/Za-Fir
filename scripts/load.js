const target = [...document.querySelectorAll('.appear')];

const options = {
    treshold: 1
}

const observer = new IntersectionObserver((entries, o) => {
    let screenSize = window.matchMedia("(max-width: 762px)");
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear-fade");
            if (screenSize.matches) {
                observer.unobserve(entry.target);
                return;
            }
        }
        else {
            entry.target.classList.remove("appear-fade");
        }

    });
}, options);


target.forEach(section => {
    observer.observe(section);
})
