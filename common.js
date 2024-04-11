const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click' , linkAction));

function scrollHeader() {
    const header = document.getElementById('header');
    
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}


window.addEventListener('scroll', scrollHeader);

const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
Message = document.getElementById('message'),
contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    if (contactName.value === '' || contactEmail.value === '' || Message.value === '') {
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark')

        contactMessage.textContent = 'Escreva tudo e preencha os campos';
    } else {
        emailjs.sendForm('service_bgris09', 'template_lkujwt9', '#contact-form', '3Xfnx721slD9dIeag')
        .then(() => {
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Mensagem enviada ✅';

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000)
        }, (error) => {
            alert('Alguma coisa esta errada...', error)
        })

        contactName.value = '';
        contactEmail.value = '';
        Message.value = '';
    }
}
contactForm.addEventListener('submit', sendEmail);

const styleSwitcherToggle = document.querySelector('.style__switcher-toggler');
styleSwitcher = document.querySelector('.style__switcher');

styleSwitcherToggle.addEventListener('click', () => {
    styleSwitcher.classList.toggle('open');
});

window.addEventListener('scroll', () => {
    if(styleSwitcher.classList.contains('open')) {
        styleSwitcher.classList.remove('open');
    }
})

const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'truek')
        }   
    })
}