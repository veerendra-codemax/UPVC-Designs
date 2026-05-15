window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar');

    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

let burger = document.querySelector('.burger');
let navbarItems = document.querySelector('.navbar-items');
let navLinks = document.querySelectorAll('.navbar-items a');

// Open / Close menu
burger.addEventListener('click', () => {
    navbarItems.classList.toggle('active');
});

// Close menu after clicking any link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarItems.classList.remove('active');
    });
});