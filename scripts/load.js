const target = [...document.querySelectorAll('.appear')];

const options = {
    treshold: 1
}

const observer = new IntersectionObserver((entries, o) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear-fade");
        } else {
            entry.target.classList.remove("appear-fade");
        }
    });
}, options);


target.forEach(section => {
    observer.observe(section);
})
