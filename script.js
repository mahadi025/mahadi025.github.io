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
ScrollReveal().reveal('.home-img, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed1 = new Typed('.multiple-text1', {
    strings: ['React', 'Angular', 'TailWindCSS'],
    typeSpeed: 200,
    backSpeed: 200,
    typeDelay: 1000,
    loop: true
});

const typed2 = new Typed('.multiple-text2', {
    strings: ['Django', 'Flask', 'ASP.NET', 'FoalTs'],
    typeSpeed: 200,
    backSpeed: 200,
    typeDelay: 1000,
    loop: true
});

const typed3 = new Typed('.multiple-text3', {
    strings: ['Software Engineer', ''],
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
    const html = document.documentElement;
    const current = html.getAttribute("data-theme");
    html.setAttribute("data-theme", current === "luxury" ? "light" : "luxury");
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

// ── Scroll-reveal IntersectionObserver ──
(function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
})();

// ── Particles ──
(function () {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];

    function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function getColor() {
        const style = getComputedStyle(document.documentElement);
        return style.getPropertyValue('--color-primary').trim() || '#888';
    }

    function Particle() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.r = Math.random() * 2.5 + 1;
        this.vx = (Math.random() - .5) * .5;
        this.vy = (Math.random() - .5) * .5;
        this.alpha = Math.random() * .5 + .2;
    }

    for (let i = 0; i < 60; i++) particles.push(new Particle());

    function draw() {
        ctx.clearRect(0, 0, W, H);
        const col = getColor();
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = col;
            ctx.globalAlpha = p.alpha;
            ctx.fill();
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > W) p.vx *= -1;
            if (p.y < 0 || p.y > H) p.vy *= -1;
        });

        // draw connecting lines
        ctx.globalAlpha = 1;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = col;
                    ctx.globalAlpha = (1 - dist / 100) * .15;
                    ctx.lineWidth = .8;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(draw);
    }
    draw();
})();