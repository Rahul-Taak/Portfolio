// Toggle icon navbar --------------------------------------------------------------

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    //Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;

            }
        });

        //burger animation
        burger.classList.toggle('toggle');
    });
}
navSlide();

// Scroll sections active link -----------------------------------------------------

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Sticky navbar ---------------------------------------------------------------

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar link scroll ----------------- 

    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll Reveal ------------------------------------------------------------------- 

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .contact-right', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .social-icons', { origin: 'right' });

// Multiple text -------------------------------------------------------------------

const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Mobile App Developer', 'Video Editor', 'Graphic Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Copyright year ------------------------------------------------------------------

var currentYear = new Date().getFullYear();
document.getElementById("fdate").innerHTML = "Copyright &copy; " + currentYear + " | All Rights Reserved";

// Contact form --------------------------------------------------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbxnDqlEl_PUbHUGXakLHK0wohB4YHa7EpjDlxGj6sLbqbzwmZpSfkUt3Dfb3F9rFXq0UA/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
})
