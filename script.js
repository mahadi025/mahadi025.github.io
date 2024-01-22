let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('header nav a')
let sections = document.querySelectorAll('section')


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let targetLink = document.querySelector('header nav a[href="#' + id + '"]');
                if (targetLink) {
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                    });
                    targetLink.classList.add('active');
                }
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.screenY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed1 = new Typed('.multiple-text1', {
    strings: ['React', 'Angular'],
    typeSpeed: 200,
    backSpeed: 200,
    typeDelay: 1000,
    loop: true
});

const typed2 = new Typed('.multiple-text2', {
    strings: ['Django', 'Flask', 'ASP.NET'],
    typeSpeed: 200,
    backSpeed: 200,
    typeDelay: 1000,
    loop: true
});

const typed3 = new Typed('.multiple-text3', {
    strings: ['FullStack Developer', ''],
    typeSpeed: 100,
    backSpeed: 100,
    typeDelay: 1000,
    loop: true
});

const typed4 = new Typed('.multiple-text4', {
    strings: ['anything', 'and everything.'],
    typeSpeed: 80,
    backSpeed: 80,
    typeDelay: 2000,
    loop: true
});


document.getElementById("theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});