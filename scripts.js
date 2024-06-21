document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});


