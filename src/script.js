// document.addEventListener('DOMContentLoaded', () => {
//     const btn = document.querySelector('.light-dark');
//     const screenSwitch = document.querySelector('.switch-mode');
//     const body = document.querySelector("body");
//     const searchIcon = document.querySelector(".search");
//     const nav = document.querySelector("nav");
//     const links = document.querySelectorAll("a");
//     const recommendedContainer = document.querySelector(".options");
//     const categories = recommendedContainer.getElementsByTagName("i");
//     const profile = document.querySelector(".user-avatar");
//     console.log(categories);
//     screenSwitch.addEventListener('click', lightMode);

// function lightMode() {
//         let theme;
//         if(btn.classList.contains('triggered')){
//             btn.classList.remove('triggered');
//             body.classList.remove('light');
//             screenSwitch.classList.remove('light');
//             searchIcon.classList.remove('lightmode');
//             nav.classList.remove("light");
//             links.forEach(link => link.classList.remove('lightlinks'));
//             profile.classList.remove('border');
//             Array.from(categories).forEach(category => category.classList.remove('light-colour'));
//             theme = 'DARK';
//         }else{
//             btn.classList.add('triggered');
//             body.classList.add('light');
//             screenSwitch.classList.add('light');
//             searchIcon.classList.add('lightmode');
//             nav.classList.add('light');
//             links.forEach(link => link.classList.add('lightlinks'));
//             profile.classList.add('border');
//             Array.from(categories).forEach(category => category.classList.add('light-colour'));
//             theme = 'LIGHT';
//         }
//         localStorage.setItem("PageTheme", JSON.stringify(theme));
// }
//     let getTheme = JSON.parse(localStorage.getItem("PageTheme"));
// console.log(getTheme, "Hello");

// if(getTheme === 'LIGHT'){
//     btn.classList.add('triggered');
//             body.classList.add('light');
//             screenSwitch.classList.add('light');
//             searchIcon.classList.add('lightmode');
//             nav.classList.add('light');
//             links.forEach(link => link.classList.add('lightlinks'));
//             profile.classList.add('border');
//             Array.from(categories).forEach(category => category.classList.add('light-colour'));

// }else if((getTheme === 'DARK')){
//     btn.classList.remove('triggered');
//             body.classList.remove('light');
//             screenSwitch.classList.remove('light');
//             searchIcon.classList.remove('lightmode');
//             nav.classList.remove("light");
//             links.forEach(link => link.classList.remove('lightlinks'));
//             profile.classList.remove('border');
//             Array.from(categories).forEach(category => category.classList.remove('light-colour'));
// }
// });


const navLinks = document.querySelectorAll("a");
const activePage = window.location.pathname;
navLinks.forEach(link => {
    if(link.href.includes(activePage)){
        link.classList.add('active');
    }
});








