document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.light-dark');
    const screenSwitch = document.querySelector('.switch-mode');
    const body = document.querySelector("body");
    const searchIcon = document.querySelector(".search");
    const nav = document.querySelector("nav");
    const links = document.querySelectorAll("a");
    const profile = document.querySelector(".user-avatar")
    screenSwitch.addEventListener('click', () => {
        if(btn.classList.contains('triggered')){
            btn.classList.remove('triggered');
            body.classList.remove('light');
            screenSwitch.classList.remove('light');
            searchIcon.classList.remove('lightmode');
            nav.classList.remove("light");
            links.forEach(link => link.classList.remove('lightlinks'));
            profile.classList.remove('border');
        }else{
            btn.classList.add('triggered');
            body.classList.add('light');
            screenSwitch.classList.add('light');
            searchIcon.classList.add('lightmode');
            nav.classList.add('light');
            links.forEach(link => link.classList.add('lightlinks'));
            profile.classList.add('border');
        }
    });
});

const navLinks = document.querySelectorAll("a");
const activePage = window.location.pathname;

navLinks.forEach(link => {
    if(link.href.includes(activePage)){
        link.classList.add('active');
    }
});








