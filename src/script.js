"use strict"

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const allImg = document.querySelectorAll('img');
const header = document.querySelector('header');
const menuIcon = document.getElementById('menu-icon');
const navBar = document.querySelector('.navbar');
const btnCard = document.querySelectorAll('.btn-card');
const technologies = document.querySelector('.technologies-container');
const boxFront = document.querySelectorAll('.technologies-box-front');
const boxBack = document.querySelectorAll('.technologies-box-back');
const age = document.getElementById('age')



//Intersection Nav Links

const observeSectionFn = ([entry]) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navLinks.forEach(link => {
        link.classList.remove('active');
        const matchingLink = document.querySelector(`header nav a[href*=${id}]`);
        matchingLink.classList.add('active');
    });
    if (window.innerWidth <= 768) {
        navBar.classList.add('hide-navbar');
        menuIcon.classList.remove('bx-x')
    }
}
const observeObject = {
    root: null,
    rootMargin: `-250px`,
    threshold: 0
}
const observeSection = new IntersectionObserver(observeSectionFn, observeObject);


sections.forEach(section => observeSection.observe(section));
const removeBlur = () => allImg.forEach(img => img.classList.remove('lazy-img'))
const menuIconEvent = () => {

    navBar.classList.toggle('hide-navbar')
    menuIcon.classList.toggle('bx-x')

}




//scroll efect API
ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 150,

});
ScrollReveal().reveal('.home-content,.heading', { origin: 'top' })
ScrollReveal().reveal('.home-img,.technologies-container,.portofolio-box', { origin: 'bottom' })

ScrollReveal().reveal('.home-content h1 ,.about-img', { origin: 'left' })
ScrollReveal().reveal('.home-content p ,.about-content', { origin: 'right' })




//typed efect API
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Javascript Developer', 'React Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

//extends card 
const cardExtends = (e) => {
    e.preventDefault()
    const tech = e.target.parentNode
    const siblings = Array.from(tech.parentNode.children);
    const [front, back] = siblings


    front.classList.toggle('hidden-card');
    back.classList.toggle('hidden-card');
    setTimeout(() => {
        boxBack.forEach(box => {

            if (!box.classList.contains('hidden-card')) {
                box.classList.add('hidden-card')
                boxFront.forEach(box => box.classList.remove('hidden-card'))

            }
        })
    }, 30000)
}

//CalcAge
const today = new Date()
console.log(today.getDate())
const birthDate = new Date('1991-06-27')
let myAge = today.getFullYear() - birthDate.getFullYear()
if (today.getMonth() + 1 < birthDate.getMonth() + 1 || (today.getMonth() + 1 === birthDate.getMonth() + 1 && today.getDate() < birthDate.getDate() + 1)) {
    myAge--;
}
age.textContent = myAge

window.addEventListener('load', removeBlur)
menuIcon.addEventListener('click', menuIconEvent)
btnCard.forEach(btn => btn.addEventListener('click', cardExtends))


