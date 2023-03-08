document.addEventListener('DOMContentLoaded', () => {
    const shows = document.getElementsByClassName("movie");
Array.from(shows).forEach(show => {
    const overlay = show.querySelector(".overlay");
    const play = show.querySelector(".play");
    const bookmark = show.querySelector(".bookmark-btn");
    const button = show.querySelector("svg");
    overlay.addEventListener('mouseover', () => {
        overlay.classList.add('dark')
        play.classList.add('show')
    });
    overlay.addEventListener('mouseout', () => {
        overlay.classList.remove('dark')
        play.classList.remove('show')
    });
    play.addEventListener('mouseover', () => {
        overlay.classList.add('dark')
        play.classList.add('show')
    });
    bookmark.addEventListener('mouseover', () => {
        button.classList.add('choice')
    });
    bookmark.addEventListener('mouseout', () => {
        button.classList.remove('choice')
    });
    bookmark.addEventListener('click', ()=>{
        if(button.classList.contains('keep')){
            button.classList.remove('keep')
        }
        else{
            button.classList.add('keep')
        }
    });
})

    const btn = document.querySelector('.light-dark');
    const screenSwitch = document.querySelector('.switch-mode');
    const body = document.querySelector("body");
    const searchIcon = document.querySelector(".search");
    const nav = document.querySelector("nav");
    const links = document.querySelectorAll("a");
    const categories = document.getElementsByTagName("i");
    const profile = document.querySelector(".user-avatar");
    screenSwitch.addEventListener('click', lightMode);

function lightMode() {
        let theme;
        if(btn.classList.contains('triggered')){
            btn.classList.remove('triggered');
            body.classList.remove('light');
            screenSwitch.classList.remove('light');
            searchIcon.classList.remove('lightmode');
            nav.classList.remove("light");
            links.forEach(link => link.classList.remove('lightlinks'));
            profile.classList.remove('border');
            Array.from(categories).forEach(category => category.classList.remove('light-colour'));
            theme = 'DARK';
        }else{
            btn.classList.add('triggered');
            body.classList.add('light');
            screenSwitch.classList.add('light');
            searchIcon.classList.add('lightmode');
            nav.classList.add('light');
            links.forEach(link => link.classList.add('lightlinks'));
            profile.classList.add('border');
            Array.from(categories).forEach(category => category.classList.add('light-colour'));
            theme = 'LIGHT';
        }
        localStorage.setItem("PageTheme", JSON.stringify(theme));
}
    let getTheme = JSON.parse(localStorage.getItem("PageTheme"));
console.log(getTheme, "Hello");

if(getTheme === 'LIGHT'){
    btn.classList.add('triggered');
            body.classList.add('light');
            screenSwitch.classList.add('light');
            searchIcon.classList.add('lightmode');
            nav.classList.add('light');
            links.forEach(link => link.classList.add('lightlinks'));
            profile.classList.add('border');
            Array.from(categories).forEach(category => category.classList.add('light-colour'));

}else if((getTheme === 'DARK')){
    btn.classList.remove('triggered');
            body.classList.remove('light');
            screenSwitch.classList.remove('light');
            searchIcon.classList.remove('lightmode');
            nav.classList.remove("light");
            links.forEach(link => link.classList.remove('lightlinks'));
            profile.classList.remove('border');
            Array.from(categories).forEach(category => category.classList.remove('light-colour'));
}
});
